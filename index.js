const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const flash = require('connect-flash');

// モデルのimport
const Vocabulary = require('./models/vocabulary');
const User = require('./models/user');

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
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'daichi-kido',
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());
app.use((req, res, next) => {
    res.locals.error_msg = req.flash('error_msg');
    res.locals.success_msg = req.flash('success_msg');
    next();
});

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    } else {
        res.status(401).send('ログインしてください');
    }
}

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        req.flash('error_msg', 'ユーザー名は既に使われています');
        return res.render('login');
    }
    const newUser = new User({ username, password });
    await newUser.save();

    req.session.userId = user._id;
    req.flash('success_msg', 'ユーザ登録に成功しました');
    res.render('index');
});

app.get('/login', async (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        req.flash('error_msg', 'ユーザー名が間違っています');
        return res.render('login');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        req.flash('error_msg', 'パスワードが間違っています');
        return res.render('login');
    }

    req.session.userId = user._id;
    req.flash('success_msg', 'ログインに成功しました');
    res.render('index');
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            req.flash('error_msg', 'ログアウトに失敗しました');
            return res.render('login');
        }
        req.flash('success_msg', 'ログアウトに成功しました');
        return res.render('login');
    });
});

app.get('/show', isAuthenticated, async (req, res) => {
    const vocabularies = await Vocabulary.find();

    res.render('show_all', { vocabularies });
});

app.get('/wordbook/:type', isAuthenticated, async (req, res) => {
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

app.get('/wordbook/:type/memorized', isAuthenticated, async (req, res) => {
    const { type } = req.params;
    const vocabularies = await Vocabulary.find({ [`${type}_memorized`]: true });
    const all_vocabularies = await Vocabulary.find();

    // if (req.headers.accept && req.headers.accept.includes('application/json')) {
    //     return res.json({ vocabularies, type, all_vocabularies });
    // }
    res.render('memorized_words', { vocabularies, type, all_vocabularies });
});

app.get('/:type/:id/unmemorized', isAuthenticated, async (req, res) => {
    const { type, id } = req.params;
    const vocabulary = await Vocabulary.findById(id);

    vocabulary[`${type}_memorized`] = false;
    await vocabulary.save();

    res.redirect(`/wordbook/${type}/memorized`);
});

app.post('/:type/:id/memorized/:memorized', isAuthenticated, async (req, res) => {
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
