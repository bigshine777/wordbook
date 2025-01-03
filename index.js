const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');
require('dotenv').config();

// モデルのimport
const Vocabulary = require('./models/vocabulary');

// mongoDBのimport
const mongoURI = process.env.DBURI;
const mongoose = require('mongoose');
mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB Atlasに接続しました');
    })
    .catch((error) => {
        console.error('MongoDB Atlasへの接続に失敗しました', error);
    });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/show', async (req, res) => {
    const vocabularies = await Vocabulary.find();

    res.render('show_all', { vocabularies });
});

app.get('/wordbook/:type', async (req, res) => {
    const { type } = req.params;
    const vocabularies = await Vocabulary.aggregate([
        { $match: { [`${type}_memorized`]: false } },
        { $sample: { size: await Vocabulary.countDocuments({ [`${type}_memorized`]: false }) } }
    ]);
    const all_vocabularies = await Vocabulary.find();

    if (req.headers.accept && req.headers.accept.includes('application/json')) {
        // JSON レスポンスとして返す
        return res.json({ vocabularies, type, all_vocabularies });
    }
    res.render('wordbook', { vocabularies, type, all_vocabularies });
});

app.get('/wordbook/:type/memorized', async (req, res) => {
    const { type } = req.params;
    const vocabularies = await Vocabulary.find({ [`${type}_memorized`]: true });
    const all_vocabularies = await Vocabulary.find();

    // if (req.headers.accept && req.headers.accept.includes('application/json')) {
    //     return res.json({ vocabularies, type, all_vocabularies });
    // }
    res.render('memorized_words', { vocabularies, type, all_vocabularies });
});

app.get('/:type/:id/unmemorized', async (req, res) => {
    const { type, id } = req.params;
    const vocabulary = await Vocabulary.findById(id);

    vocabulary[`${type}_memorized`] = false;
    await vocabulary.save();

    res.redirect(`/wordbook/${type}/memorized`);
});

app.post('/:type/:id/memorized/:memorized', async (req, res) => {
    const { type, id, memorized } = req.params;

    try {
        const vocabulary = await Vocabulary.findById(id);
        if (!vocabulary) {
            return res.status(404).json({ success: false, message: 'Vocabulary not found' });
        }
        vocabulary[`${type}_memorized`] = memorized === 'true';
        await vocabulary.save();
        const updatedVocabulary = await Vocabulary.findById(id).lean();

        res.json({
            success: true,
            data: vocabulary,
        });

    } catch (error) {
        res.status(500).json({ success: false, message: 'An error occurred', error: error.message });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
