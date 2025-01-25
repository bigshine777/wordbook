// const mongoose = require('mongoose');
// const fs = require('fs');
// const Vocabulary = require('./models/vocabulary');  // 上記で作成したモデルファイルのパス

// const mongoURI = 'mongodb+srv://bigshine777:LPeucyLj5SMB1bCp@cluster0.5kzge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(mongoURI)
//     .then(() => {
//         console.log('MongoDB Atlasに接続しました');
//     })
//     .catch((error) => {
//         console.error('MongoDB Atlasへの接続に失敗しました', error);
//     });

// // JSONファイルを読み込む
// fs.readFile('vocabulary.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   const vocabularyData = JSON.parse(data);

//   // データを挿入
//   Vocabulary.insertMany(vocabularyData)
//     .then(() => {
//       console.log('Vocabulary data inserted successfully');
//       mongoose.connection.close();  // データ挿入後に接続を閉じる
//     })
//     .catch((err) => {
//       console.error('Error inserting data:', err);
//       mongoose.connection.close();
//     });
// });

const mongoose = require('mongoose');
const fs = require('fs');
const Vocabulary = require('./models/vocabulary'); // モデルファイルのパス

const mongoURI = 'mongodb+srv://bigshine777:LPeucyLj5SMB1bCp@cluster0.5kzge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect("mongodb://127.0.0.1:27017/vocabulary")
  .then(() => {
    console.log('MongoDB Atlasに接続しました');
  })
  .catch((error) => {
    console.error('MongoDB Atlasへの接続に失敗しました', error);
  });

// JSONファイルを読み込む
fs.readFile('vocabulary.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('ファイル読み込みエラー:', err);
    mongoose.connection.close();
    return;
  }

  try {
    const vocabularyData = JSON.parse(data);

    // JSONデータ内の単語のリスト
    const jsonWords = vocabularyData.map(item => item.chinese); // "word" は単語を格納するキー名
    const existingWords = await Vocabulary.find({ chinese: { $in: jsonWords } }).select('chinese').lean();

    // 既存データの単語リスト
    const existingWordSet = new Set(existingWords.map(item => item.chinese));

    // 新しい単語をフィルタリング
    const newVocabularyData = vocabularyData.filter(item => !existingWordSet.has(item.chinese));

    if (newVocabularyData.length > 0) {
      await Vocabulary.insertMany(newVocabularyData);
      console.log('新しい単語データが追加されました:', newVocabularyData.length, '件');
    } else {
      console.log('新しい単語はありません。');
    }
  } catch (err) {
    console.error('エラーが発生しました:', err);
  } finally {
    mongoose.connection.close(); // 処理終了後に接続を閉じる
  }
});

