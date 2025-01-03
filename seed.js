const mongoose = require('mongoose');
const fs = require('fs');
const Vocabulary = require('./models/vocabulary');  // 上記で作成したモデルファイルのパス

const mongoURI = 'mongodb+srv://bigshine777:LPeucyLj5SMB1bCp@cluster0.5kzge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB Atlasに接続しました');
    })
    .catch((error) => {
        console.error('MongoDB Atlasへの接続に失敗しました', error);
    });

// JSONファイルを読み込む
fs.readFile('vocabulary.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  const vocabularyData = JSON.parse(data);

  // データを挿入
  Vocabulary.insertMany(vocabularyData)
    .then(() => {
      console.log('Vocabulary data inserted successfully');
      mongoose.connection.close();  // データ挿入後に接続を閉じる
    })
    .catch((err) => {
      console.error('Error inserting data:', err);
      mongoose.connection.close();
    });
});
