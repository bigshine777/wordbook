const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
    chinese: {
        type: String,
        required: true,
    },
    pinyin: {
        type: String,
        required: true,
    },
    japanese: {
        type: String,
        required: true,
    },
    chinese_memorized: {
        type: Boolean,
        default: false,
    },
    pinyin_memorized: {
        type: Boolean,
        default: false,
    },
    japanese_memorized: {
        type: Boolean,
        default: false,
    },
});

const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);

module.exports = Vocabulary;
