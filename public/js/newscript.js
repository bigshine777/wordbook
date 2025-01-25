let problems = [
    {question: "我 爱 学习 中文", answer: "我 爱 学习 中文", japanese: "私は中国語を学ぶことが大好きです。", pinyin: ["wǒ", "ài", "xuéxí", "zhōngwén"]},
    {question: "今天 天气 很好", answer: "今天 天气 很好", japanese: "今日は天気がとても良いです。", pinyin: ["jīntiān", "tiānqì", "hěn hǎo"]},
    {question: "你 今天 吃饭 吗", answer: "你 今天 吃饭 吗", japanese: "今日は食事をしましたか？", pinyin: ["nǐ", "jīntiān", "chīfàn", "ma"]},
    {question: "她 唱着 歌 呢", answer: "她 唱着 歌 呢", japanese: "彼女は歌を歌っているんですよ", pinyin: ["tā", "chàngzhe", "gē", "ne"]},
    {question: "她 穿着 红色 的 衣服", answer: "她 穿着 红色 的 衣服", japanese: "彼女は赤い服を着ています", pinyin: ["tā", "chuānzhe", "hóngsè", "de", "yīfu"]},
    {question: "她 平时 不戴 眼镜， 今天 为什么 戴着 眼镜 呢?", answer: "她 平时 不戴 眼镜， 今天 为什么 戴着 眼镜 呢?", japanese: "彼女は普段眼鏡をかけませんが、今日はどうして眼鏡をかけているのですか？", pinyin: ["tā", "píngshí", "bùdài", "yǎnjìng,", "jīntiān", "wèishéme", "dàizhe", "yǎnjìng", "ne?"]},
    {question: "你 不要 站着， 坐下 吧", answer: "你 不要 站着， 坐下 吧", japanese: "立っていないで、座ってくださいね", pinyin: ["nǐ", "bùyào", "zhànzhe,", "zuòxià", "ba"]},
    {question: "他们 听着 音乐 喝 咖啡", answer: "他们 听着 音乐 喝 咖啡", japanese: "彼らは音楽を聞きながらコーヒーを飲んでいます", pinyin: ["tāmen", "tīngzhe", "yīnyuè", "hē", "kāfēi"]},
    {question: "你 听得懂 吗？", answer: "你 听得懂 吗？", japanese: "あなたは聞き取れますか？", pinyin: ["nǐ", "tīngdé", "dǒng", "ma?"]},
    {question: "你 看得见 吗？", answer: "你 看得见 吗？", japanese: "あなたは見えますか？", pinyin: ["nǐ", "kàndé", "jiàn", "ma?"]},
    {question: "作业 太 多 了， 今天 晚上 做不完 了", answer: "作业 太 多 了， 今天 晚上 做不完 了", japanese: "宿題が多すぎて、今晩終わりません", pinyin: ["zuòyè", "tài", "duō", "le,", "jīntiān", "wǎnshàng", "zuò", "bùwán", "le"]},
    {question: "你 给 她 打 电话了 吗?", answer: "你 给 她 打 电话了 吗?", japanese: "あなたは彼女に電話をかけましたか？", pinyin: ["nǐ", "gěi", "tā", "dǎ", "diànhuà", "le", "ma?"]},
    {question: "我 打了， 可是 一直 打不通", answer: "我 打了， 可是 一直 打不通", japanese: "私はかけましたが、ずっと繋がりませんでした", pinyin: ["wǒ", "dǎle,", "kěshì", "yīzhí", "dǎ", "bùtōng"]},
    {question: "菜 太 多了， 我 吃不了", answer: "菜 太 多了， 我 吃不了", japanese: "料理が多すぎて、私は食べられません", pinyin: ["cài", "tài", "duōle,", "wǒ", "chībùliǎo"]},
    {question: "一共 多少 钱？", answer: "一共 多少 钱？", japanese: "合計でいくらですか？", pinyin: ["yīgòng", "duōshǎo", "qián?"]},
    {question: "这件 衣服 多少 钱？", answer: "这件 衣服 多少 钱？", japanese: "この服はいくらですか？", pinyin: ["zhè jiàn", "yīfu", "duōshǎo", "qián?"]},
    {question: "包子 多少 钱 一个？", answer: "包子 多少 钱 一个？", japanese: "包子は1ついくらですか？", pinyin: ["bāozi", "duōshǎo", "qián", "yī", "gè?"]},
    {question: "西瓜 怎么 卖？", answer: "西瓜 怎么 卖？", japanese: "スイカはどうやって売っていますか？", pinyin: ["xīguā", "zěnme", "mài?"]},
    {question: "他 的 腿伤 已经 好了， 能 走 路 了", answer: "他 的 腿伤 已经 好了， 能 走 路 了", japanese: "彼の足の怪我はもう治り、歩けるようになりました", pinyin: ["tā", "de", "tuǐshāng", "yǐjīng", "hǎole,", "néng", "zǒu", "lù", "le"]},
    {question: "明天 你 能 去 看 电影 吗？", answer: "明天 你 能 去 看 电影 吗？", japanese: "明日映画を見に行けますか？", pinyin: ["míngtiān", "nǐ", "néng", "qù", "kàn", "diànyǐng", "ma?"]},
    {question: "明天 我 有 事， 不 能 去", answer: "明天 我 有 事， 不 能 去", japanese: "明日、私は用事があって行けません", pinyin: ["míngtiān", "wǒ", "yǒu", "shì,", "bù", "néng", "qù"]},
    {question: "能 不 能 便宜 一点儿?", answer: "能 不 能 便宜 一点儿?", japanese: "少し安くしてもらえますか？", pinyin: ["néng", "bù", "néng", "piányí", "yīdiǎnr?"]},
    {question: "我们 明天 可以 再 来", answer: "我们 明天 可以 再 来", japanese: "私たちは明日また来ることができます", pinyin: ["wǒmen", "míngtiān", "kěyǐ", "zài", "lái"]},
    {question: "这儿 可以 抽 烟 吗？", answer: "这儿 可以 抽 烟 吗？", japanese: "ここでタバコを吸ってもいいですか？", pinyin: ["zhèr", "kěyǐ", "chōu", "yān", "ma?"]},
    {question: "这种 鱼 能 吃 吗？", answer: "这种 鱼 能 吃 吗？", japanese: "この種類の魚は食べられますか？", pinyin: ["zhè zhǒng", "yú", "néng", "chī", "ma?"]},
    {question: "这么 多 鱼 吃得完 吗？", answer: "这么 多 鱼 吃得完 吗？", japanese: "こんなにたくさんの魚、食べきれますか？", pinyin: ["zhème", "duō", "yú", "chī de wán", "ma?"]},
    {question: "给 你 钥匙", answer: "给 你 钥匙", japanese: "あなたに鍵をあげます", pinyin: ["gěi", "nǐ", "yàoshi"]},
    {question: "我 想 问 你 一个 问题", answer: "我 想 问 你 一个 问题", japanese: "あなたに1つ質問したいです", pinyin: ["wǒ", "xiǎng", "wèn", "nǐ", "yī", "gè", "wèntí"]},
    {question: "王老师 教 我们 汉语", answer: "王老师 教 我们 汉语", japanese: "王先生は私たちに中国語を教えています", pinyin: ["wáng", "lǎoshī", "jiāo", "wǒmen", "hànyǔ"]},
    {question: "请 告诉 我 你 的 名字", answer: "请 告诉 我 你 的 名字", japanese: "あなたの名前を教えてください", pinyin: ["qǐng", "gàosù", "wǒ", "nǐ", "de", "míngzì"]},             
    {question: "我 去过 两 趟 北京", answer: "我 去过 两 趟 北京", japanese: "私は北京に二回行ったことがあります。", pinyin: ["wǒ", "qùguò", "liǎng", "tàng", "běijīng"]},
    {question: "昨天 晚上 我 看了 一个半 小时 电视", answer: "昨天 晚上 我 看了 一个半 小时 电视", japanese: "昨晩、私は1時間半テレビを見ました。", pinyin: ["zuótiān", "wǎnshàng", "wǒ", "kànle", "yī", "gè", "bàn", "xiǎoshí", "diànshì"]},
    {question: "我 等了 她 二十 分钟", answer: "我 等了 她 二十 分钟", japanese: "私は彼女を20分待ちました。", pinyin: ["wǒ", "děngle", "tā", "èrshí", "fēnzhōng"]},
    {question: "你 学了 多 长 时间 汉语 了？", answer: "你 学了 多 长 时间 汉语 了？", japanese: "あなたはどのくらいの間中国語を勉強していますか？", pinyin: ["nǐ", "xuéle", "duō", "cháng", "shíjiān", "hànyǔ", "le?"]},
    {question: "我 学了 半年 汉语 了", answer: "我 学了 半年 汉语 了", japanese: "私は半年間中国語を勉強しています。", pinyin: ["wǒ", "xuéle", "bànnián", "hànyǔ", "le"]},
    {question: "高中 的 时候， 我 学了 半年 汉语", answer: "高中 的 时候， 我 学了 半年 汉语", japanese: "高校の時、私は半年間中国語を勉強しました。", pinyin: ["gāozhōng", "de", "shíhòu,", "wǒ", "xuéle", "bànnián", "hànyǔ"]},
    {question: "你 是 哪 一年 出生 的？", answer: "你 是 哪 一年 出生 的？", japanese: "あなたは何年生まれですか？", pinyin: ["nǐ", "shì", "nǎ", "yī nián", "chūshēng", "de?"]}, 
    {question: "我 是 二零零六 年 出生 的", answer: "我 是 二零零六 年 出生 的", japanese: "私は2006年生まれです", pinyin: ["wǒ", "shì", "èr líng líng liù", "nián", "chūshēng", "de"]}, 
    {question: "他 是 从 哪里 来 的 ?", answer: "他 是 从 哪里 来 的 ?", japanese: "彼はどこから来たのですか", pinyin: ["tā", "shì", "cóng", "nǎlǐ", "lái", "de?"]}, 
    {question: "他 是 从 杭州 来 的", answer: "他 是 从 杭州 来 的", japanese: "彼は杭州から来ました", pinyin: ["tā", "shì", "cóng", "hángzhōu", "lái", "de"]}, 
    {question: "这件 衣服 真 漂亮 , 是 在 哪儿 买 的?", answer: "这件 衣服 真 漂亮 , 是 在 哪儿 买 的?", japanese: "この服は本当にきれいですね、どこで買ったのですか", pinyin: ["zhè jiàn", "yīfu", "zhēn", "piàoliang", "shì", "zài", "nǎr", "mǎi", "de?"]},
    {question: "是 在 巴黎 买 的", answer: "是 在 巴黎 买 的", japanese: "パリで買いました", pinyin: ["shì", "zài", "bālí", "mǎi", "de"]},
    {question: "我 不是 坐 船 来 中国 的 , 是 坐 飞机 来 的", answer: "我 不是 坐 船 来 中国 的 , 是 坐 飞机 来 的", japanese: "私は船で中国に来たのではなく、飛行機で来ました", pinyin: ["wǒ", "bùshì", "zuò", "chuán", "lái", "zhōngguó", "de", "shì", "zuò", "fēijī", "lái", "de"]},
    {question: "我 不是 一个人 来 的 , 是 和 朋友 一起 来 的", answer: "我 不是 一个人 来 的 , 是 和 朋友 一起 来 的", japanese: "私は一人で来たのではなく、友達と一緒に来ました", pinyin: ["wǒ", "bùshì", "yī", "gè", "rén", "lái", "de", "shì", "hé", "péngyǒu", "yīqǐ", "lái", "de"]},
    {question: "我 觉得 今年 夏天 特别 热", answer: "我 觉得 今年 夏天 特别 热", japanese: "今年の夏は特に暑いと感じます", pinyin: ["wǒ", "juéde", "jīnnián", "xiàtiān", "tèbié", "rè"]},
    {question: "我 认为 他 的 话 很 有 道理", answer: "我 认为 他 的 话 很 有 道理", japanese: "私は彼の言うことにとても説得力があると思います", pinyin: ["wǒ", "rènwéi", "tā", "de", "huà", "hěn", "yǒu", "dàolǐ"]},
    {question: "我 想 她 现在 一定 很 难过", answer: "我 想 她 现在 一定 很 难过", japanese: "私は彼女が今きっととても悲しいと思います", pinyin: ["wǒ", "xiǎng", "tā", "xiànzài", "yīdìng", "hěn", "nánguò"]},
    {question: "你 知道 她 的 手机 是 在 哪儿 买 的 吗", answer: "你 知道 她 的 手机 是 在 哪儿 买 的 吗", japanese: "あなたは彼女の携帯電話がどこで買ったのか知っていますか", pinyin: ["nǐ", "zhīdào", "tā", "de", "shǒujī", "shì", "zài", "nǎr", "mǎi", "de", "ma"]},
    {question: "我 希望 我们 明年 能 在 上海 见面", answer: "我 希望 我们 明年 能 在 上海 见面", japanese: "私は来年私たちが上海で会えることを望んでいます", pinyin: ["wǒ", "xīwàng", "wǒmen", "míngnián", "néng", "zài", "shànghǎi", "jiànmiàn"]},
    {question: "我的 手机 跟 你 的 一样", answer: "我的 手机 跟 你 的 一样", japanese: "私の携帯電話はあなたのと同じです", pinyin: ["wǒ", "de", "shǒujī", "gēn", "nǐ", "de", "yīyàng"]},
    {question: "日本 的 习俗 和 中国 的 不 一样", answer: "日本 的 习俗 和 中国 的 不 一样", japanese: "日本の習慣は中国のものとは違います", pinyin: ["rìběn", "de", "xísú", "hé", "zhōngguó", "de", "bù", "yīyàng"]},
    {question: "京都 的 冬天 跟 上海 一样 冷", answer: "京都 的 冬天 跟 上海 一样 冷", japanese: "京都の冬は上海と同じくらい寒いです", pinyin: ["jīngdū", "de", "dōngtiān", "gēn", "shànghǎi", "yīyàng", "lěng"]},
    {question: "我 跟 你 一样 喜欢 音乐", answer: "我 跟 你 一样 喜欢 音乐", japanese: "私はあなたと同じように音楽が好きです", pinyin: ["wǒ", "gēn", "nǐ", "yīyàng", "xǐhuān", "yīnyuè"]},
    {question: "他 和 他 哥哥 一样 高", answer: "他 和 他 哥哥 一样 高", japanese: "彼は彼の兄と同じくらい背が高いです", pinyin: ["tā", "hé", "tā", "gēge", "yīyàng", "gāo"]},
    {question: "她 和 他 哥哥 差不多 高", answer: "她 和 他 哥哥 差不多 高", japanese: "彼女は彼の兄とほとんど同じくらい背が高いです", pinyin: ["tā", "hé", "tā", "gēge", "chàbùduō", "gāo"]},
    {question: "她 一 进 房间 就 开 空调", answer: "她 一 进 房间 就 开 空调", japanese: "彼女は部屋に入るとすぐにエアコンをつけます", pinyin: ["tā", "yī", "jìn", "fángjiān", "jiù", "kāi", "kōngtiáo"]},
    {question: "妈妈 一 出去， 他 就 开始 看 电视", answer: "妈妈 一 出去， 他 就 开始 看 电视", japanese: "お母さんが出かけると、彼はすぐにテレビを見始めます", pinyin: ["māmā", "yī", "chūqù", "tā", "jiù", "kāishǐ", "kàn", "diànshì"]},
    {question: "我 一 看 就 知道 这 篇 文章 是 你 写 的", answer: "我 一 看 就 知道 这 篇 文章 是 你 写 的", japanese: "私は一目でこの記事があなたが書いたものだとわかります", pinyin: ["wǒ", "yī", "kàn", "jiù", "zhīdào", "zhè", "piān", "wénzhāng", "shì", "nǐ", "xiě", "de"]},
    {question: "一 到 春天， 京都 就 成了 樱花 的 世界", answer: "一 到 春天， 京都 就 成了 樱花 的 世界", japanese: "春になると、京都は桜の世界になります", pinyin: ["yī", "dào", "chūntiān", "jīngdū", "jiù", "chéngle", "yīnghuā", "de", "shìjiè"]},
    {question: "王 老师 不 在 家， 他 出去了", answer: "王 老师 不 在 家， 他 出去了", japanese: "王先生は家にいません、彼は出かけました", pinyin: ["wáng", "lǎoshī", "bù", "zài", "jiā", "tā", "chūqùle"]},
    {question: "下雨了， 快 进来 吧", answer: "下雨了， 快 进来 吧", japanese: "雨が降ってきたので、早く入ってきてください", pinyin: ["xià", "yǔ", "le", "kuài", "jìnlái", "ba"]},
    {question: "她 回来了 吗？", answer: "她 回来了 吗？", japanese: "彼女は帰ってきましたか？", pinyin: ["tā", "huíláile", "ma?"]},
    {question: "没有， 他 还 没 回来", answer: "没有， 他 还 没 回来", japanese: "いいえ、彼はまだ帰っていません", pinyin: ["méiyǒu", "tā", "hái", "méi", "huílái"]},
    {question: "小 李 进 公园 去了", answer: "小 李 进 公园 去了", japanese: "李さんは公園に入りました", pinyin: ["xiǎo", "lǐ", "jìn", "gōngyuán", "qù", "le"]},
    {question: "明天 你 带 相机 来， 好不好？", answer: "明天 你 带 相机 来， 好不好？", japanese: "明日カメラを持ってきてくれませんか？", pinyin: ["míngtiān", "nǐ", "dài", "xiàngjī", "lái,", "hǎobùhǎo?"]},
    {question: "明天 你 把 相机 带 来， 好不好？", answer: "明天 你 把 相机 带 来， 好不好？", japanese: "明日カメラを持ってきてくれませんか？", pinyin: ["míngtiān", "nǐ", "bǎ", "xiàngjī", "dài", "lái,", "hǎobùhǎo?"]},
    {question: "他 从 上海 带来了 很多 礼物", answer: "他 从 上海 带来了 很多 礼物", japanese: "彼は上海からたくさんのプレゼントを持ってきました", pinyin: ["tā", "cóng", "shànghǎi", "dàiláile", "hěnduō", "lǐwù"]},
    {question: "他 一口气 跑上了 五楼", answer: "他 一口气 跑上了 五楼", japanese: "彼は一気に5階まで駆け上がりました", pinyin: ["tā", "yīkǒuqì", "pǎoshàngle", "wǔlóu"]},
    {question: "听说 明天 下雨， 是吗？", answer: "听说 明天 下雨， 是吗？", japanese: "明日雨が降ると聞きましたが、本当ですか？", pinyin: ["tīngshuō", "míngtiān", "xiàyǔ,", "shìma?"]},
    {question: "听说 她 去 中国 留学 了", answer: "听说 她 去 中国 留学 了", japanese: "彼女が中国に留学に行ったと聞きました", pinyin: ["tīngshuō", "tā", "qù", "zhōngguó", "liúxué", "le"]},
    {question: "听说 他 下个月 要 跟 小李 结婚", answer: "听说 他 下个月 要 跟 小李 结婚", japanese: "彼が来月李さんと結婚する予定だと聞きました", pinyin: ["tīngshuō", "tā", "xiàgèyuè", "yào", "gēn", "xiǎolǐ", "jiéhūn"]},
    {question: "她 唱 歌 唱得 好 吗？", answer: "她 唱 歌 唱得 好 吗？", japanese: "彼女は歌を上手に歌えますか？", pinyin: ["tā", "chàng", "gē", "chàngde", "hǎo", "ma?"]},
    {question: "他 唱得 很 好", answer: "他 唱得 很 好", japanese: "彼はとても上手に歌えます", pinyin: ["tā", "chàngde", "hěn", "hǎo"]},
    {question: "她 唱得 不 太 好", answer: "她 唱得 不 太 好", japanese: "彼女はあまり上手に歌えません", pinyin: ["tā", "chàngde", "bù", "tài", "hǎo"]},
    {question: "她 唱得 不 好", answer: "她 唱得 不 好", japanese: "彼女は歌が下手です", pinyin: ["tā", "chàngde", "bù", "hǎo"]},
    {question: "你 说得 太 快 了， 我 没 听清楚", answer: "你 说得 太 快 了， 我 没 听清楚", japanese: "あなたは話すのが速すぎて、私ははっきり聞き取れませんでした", pinyin: ["nǐ", "shuōde", "tài", "kuài", "le,", "wǒ", "méi", "tīngqīngchu"]},
    {question: "他 哥哥 长得 很 高", answer: "他 哥哥 长得 很 高", japanese: "彼の兄はとても背が高いです", pinyin: ["tā", "gēge", "zhǎngde", "hěn", "gāo"]},
    {question: "他 汉语 说得 怎么样？", answer: "他 汉语 说得 怎么样？", japanese: "彼の中国語はどうですか？", pinyin: ["tā", "hànyǔ", "shuōde", "zěnmeyàng?"]},
    {question: "他 汉语 说得 真 不错", answer: "他 汉语 说得 真 不错", japanese: "彼の中国語は本当に素晴らしいです", pinyin: ["tā", "hànyǔ", "shuōde", "zhēn", "bùcuò"]},
    {question: "他 跑得 怎么 这么 快？", answer: "他 跑得 怎么 这么 快？", japanese: "彼はなんでそんなに速く走れるのですか？", pinyin: ["tā", "pǎode", "zěnme", "zhème", "kuài?"]},
    {question: "她 写 的 字 非常 漂亮", answer: "她 写 的 字 非常 漂亮", japanese: "彼女の書く字はとてもきれいです", pinyin: ["tā", "xiě", "de", "zì", "fēicháng", "piàoliang"]},
    {question: "你 把 今天 买来 的 书 给 我 看 一看， 好吗？", answer: "你 把 今天 买来 的 书 给 我 看 一看， 好吗？", japanese: "今日買った本を少し見せてもらえませんか？", pinyin: ["nǐ", "bǎ", "jīntiān", "mǎi lái", "de", "shū", "gěi", "wǒ", "kàn", "yī kàn,", "hǎo ma?"]},
    {question: "今天 早上 我 给 她 打电话 的 时候， 她 还 在 睡觉", answer: "今天 早上 我 给 她 打电话 的 时候， 她 还 在 睡觉", japanese: "今朝、彼女に電話をかけたとき、彼女はまだ寝ていました", pinyin: ["jīntiān", "zǎoshang", "wǒ", "gěi", "tā", "dǎ diànhuà", "de", "shíhòu,", "tā", "hái", "zài", "shuìjiào"]},
    {question: "汤川 博士 是 日本 第一个 获 诺贝尔奖 的 科学家", answer: "汤川 博士 是 日本 第一个 获 诺贝尔奖 的 科学家", japanese: "湯川博士は日本で初めてノーベル賞を受賞した科学者です", pinyin: ["tāngkāwā", "bóshì", "shì", "rìběn", "dì yī gè", "huò", "nuòbèi'ěr jiǎng", "de", "kēxuéjiā"]},
    {question: "亚洲 第一个 主板 冬奥会 的 是 哪个 城市？ 你 知道 吗？", answer: "亚洲 第一个 主板 冬奥会 的 是 哪个 城市？ 你 知道 吗？", japanese: "アジアで最初に冬季オリンピックを開催した都市はどこですか？ 知っていますか？", pinyin: ["yàzhōu", "dì yī gè", "zhǔbǎn", "dōng àohuì", "de", "shì", "nǎge", "chéngshì?", "nǐ", "zhīdào", "ma?"]},
    {question: "他 在 认真地 写 作业", answer: "他 在 认真地 写 作业", japanese: "彼は真剣に宿題を書いています", pinyin: ["tā", "zài", "rènzhēn de", "xiě", "zuòyè"]},
    {question: "孩子们 安静地 睡着了", answer: "孩子们 安静地 睡着了", japanese: "子供たちは静かに眠っています", pinyin: ["háizimen", "ānjìng de", "shuìzhele"]},
    {question: "他 悄悄地 走进 姐姐 的 房间", answer: "他 悄悄地 走进 姐姐 的 房间", japanese: "彼はこっそり姉の部屋に入りました", pinyin: ["tā", "qiāoqiāo de", "zǒu jìn", "jiějiě", "de", "fángjiān"]},
    {question: "请 你 大声地 告诉 大家", answer: "请 你 大声地 告诉 大家", japanese: "どうぞみんなに大きな声で伝えてください", pinyin: ["qǐng", "nǐ", "dàshēngde", "gàosù", "dàjiā"]},
    {question: "他 的 钱包 被 小偷 偷了", answer: "他 的 钱包 被 小偷 偷了", japanese: "彼の財布は泥棒に盗まれました", pinyin: ["tā", "de", "qiánbāo", "bèi", "xiǎotōu", "tōu", "le"]},
    {question: "小李 的 相机 被 弟弟 弄坏了", answer: "小李 的 相机 被 弟弟 弄坏了", japanese: "李さんのカメラは弟に壊されました", pinyin: ["xiǎo", "lǐ", "de", "xiàngjī", "bèi", "dìdi", "nònghuàile"]},
    {question: "他 的 词典 被 借走了", answer: "他 的 词典 被 借走了", japanese: "彼の辞書は借りられていきました", pinyin: ["tā", "de", "cídiǎn", "bèi", "jièzǒule"]},
    {question: "杜甫 是 著名 的 唐代 诗人， 被 称为 诗圣", answer: "杜甫 是 著名 的 唐代 诗人， 被 称为 诗圣", japanese: "杜甫は有名な唐代の詩人で、詩聖と称されています", pinyin: ["dùfǔ", "shì", "zhùmíng", "de", "tángdài", "shīrén,", "bèi", "chēngwéi", "shīshèng"]},
    {question: "因为 时间 不 等人， 所以 我们 应该 珍惜 时间", answer: "因为 时间 不 等人， 所以 我们 应该 珍惜 时间", japanese: "時間は待ってくれないので、私たちは時間を大切にすべきです", pinyin: ["yīnwèi", "shíjiān", "bù", "děng", "rén,", "suǒyǐ", "wǒmen", "yīnggāi", "zhēnxī", "shíjiān"]},
    {question: "他 有 很多 中国 朋友， 因为 他 经常 去 中国", answer: "他 有 很多 中国 朋友， 因为 他 经常 去 中国", japanese: "彼には中国人の友達がたくさんいます、なぜなら彼はよく中国に行くからです", pinyin: ["tā", "yǒu", "hěnduō", "zhōngguó", "péngyǒu,", "yīnwèi", "tā", "jīngcháng", "qù", "zhōngguó"]},
    {question: "他 平时 很 努力， 所以 成绩 一直 很 好", answer: "他 平时 很 努力， 所以 成绩 一直 很 好", japanese: "彼は普段とても努力しているので、成績はいつも良いです", pinyin: ["tā", "píngshí", "hěn", "nǔlì,", "suǒyǐ", "chéngjī", "yīzhí", "hěn", "hǎo"]},
    {question: "快 放假 了， 你 想 去 哪儿 旅游？", answer: "快 放假 了， 你 想 去 哪儿 旅游？", japanese: "もうすぐ休暇ですが、どこへ旅行に行きたいですか？", pinyin: ["kuài", "fàngjià", "le,", "nǐ", "xiǎng", "qù", "nǎr", "lǚyóu?"]},
    {question: "我 想 去 加拿大 旅游", answer: "我 想 去 加拿大 旅游", japanese: "私はカナダに旅行に行きたいです", pinyin: ["wǒ", "xiǎng", "qù", "jiānádà", "lǚyóu"]},
    {question: "我 就 要 出门 了， 明天 再 聊 吧", answer: "我 就 要 出门 了， 明天 再 聊 吧", japanese: "もう出かけるところです、明日また話しましょう", pinyin: ["wǒ", "jiù", "yào", "chūmén", "le,", "míngtiān", "zài", "liáo", "ba"]},
    {question: "我 刚刚 回来， 衣服 都 没有 换 呢", answer: "我 刚刚 回来， 衣服 都 没有 换 呢", japanese: "ちょうど戻ってきたばかりで、まだ服も着替えていません", pinyin: ["wǒ", "gānggāng", "huílái,", "yīfú", "dōu", "méiyǒu", "huàn", "ne"]},
    {question: "刚 进来 的 是 从 德国 来 的 留学生", answer: "刚 进来 的 是 从 德国 来 的 留学生", japanese: "ちょうど入ってきたのはドイツから来た留学生です", pinyin: ["gāng", "jìnlái", "de", "shì", "cóng", "déguó", "lái", "de", "liúxuéshēng"]},
    {question: "他 很 像 他 父亲", answer: "他 很 像 他 父亲", japanese: "彼はとても父親に似ています", pinyin: ["tā", "hěn", "xiàng", "tā", "fùqīn"]},
    {question: "孩子们 的 脸 像 苹果 一样 红", answer: "孩子们 的 脸 像 苹果 一样 红", japanese: "子供たちの顔はリンゴのように赤いです", pinyin: ["háizimen", "de", "liǎn", "xiàng", "píngguǒ", "yīyàng", "hóng"]},
    {question: "天上 的 白云， 好像 棉花糖 一样", answer: "天上 的 白云， 好像 棉花糖 一样", japanese: "空の白い雲は、まるで綿菓子のようです", pinyin: ["tiānshàng", "de", "báiyún,", "hǎoxiàng", "miánhuātáng", "yīyàng"]},
    {question: "我 好像 感冒 了， 头 有点儿 疼", answer: "我 好像 感冒 了， 头 有点儿 疼", japanese: "私は風邪をひいたようで、頭が少し痛いです", pinyin: ["wǒ", "hǎoxiàng", "gǎnmào", "le,", "tóu", "yǒudiǎnr", "téng"]},
    {question: "桌子 上 除了 电脑 之外， 什么 都 没有", answer: "桌子 上 除了 电脑 之外， 什么 都 没有", japanese: "机の上にはパソコン以外、何もありません", pinyin: ["zhuōzi", "shàng", "chúle", "diànnǎo", "zhīwài,", "shénme", "dōu", "méiyǒu"]},
    {question: "除了 上海 以外， 我 还 去过 北京", answer: "除了 上海 以外， 我 还 去过 北京", japanese: "上海以外に、私は北京にも行ったことがあります", pinyin: ["chúle", "shànghǎi", "yǐwài,", "wǒ", "hái", "qùguò", "běijīng"]},
    {question: "除了 我 以外， 他们 也 看过 这部 电影", answer: "除了 我 以外， 他们 也 看过 这部 电影", japanese: "私以外に、彼らもこの映画を見たことがあります", pinyin: ["chúle", "wǒ", "yǐwài,", "tāmen", "yě", "kàn guò", "zhè bù", "diànyǐng"]},
    {question: "你 什么时候 来 都 没有 问题", answer: "你 什么时候 来 都 没有 问题", japanese: "あなたがいつ来ても問題ありません", pinyin: ["nǐ", "shénme", "shíhòu", "lái", "dōu", "méiyǒu", "wèntí"]},
    {question: "你 想 吃 点儿 什么?", answer: "你 想 吃 点儿 什么?", japanese: "何か食べたいものはありますか?", pinyin: ["nǐ", "xiǎng", "chī", "diǎnr", "shénme?"]},
    {question: "如果 有 车 的话， 我们 就 什么 地方 都 能 去了", answer: "如果 有 车 的话， 我们 就 什么 地方 都 能 去了", japanese: "もし車があれば、どこへでも行けます", pinyin: ["rúguǒ", "yǒu", "chē", "dehuà,", "wǒmen", "jiù", "shénme", "dìfāng", "dōu", "néng", "qùle"]},
    {question: "请 你 站 起来", answer: "请 你 站 起来", japanese: "立ち上がってください", pinyin: ["qǐng", "nǐ", "zhàn", "qǐlái"]},
    {question: "他们 走进 教室 去了", answer: "他们 走进 教室 去了", japanese: "彼らは教室に入っていきました", pinyin: ["tāmen", "zǒu jìn", "jiàoshì", "qùle"]},
    {question: "我 给 你 这本 小说， 你 可以 拿 回家 去 看看", answer: "我 给 你 这本 小说， 你 可以 拿 回家 去 看看", japanese: "この小説をあなたにあげます。家に持ち帰って読んでみてください", pinyin: ["wǒ", "gěi", "nǐ", "zhè běn", "xiǎoshuō,", "nǐ", "kěyǐ", "ná", "huíjiā", "qù", "kànkan"]},
    {question: "我 父亲 从 北京 买 回来 了 很多 东西", answer: "我 父亲 从 北京 买 回来 了 很多 东西", japanese: "私の父は北京からたくさんのものを買ってきました", pinyin: ["wǒ", "fùqīn", "cóng", "běijīng", "mǎi", "huílái", "le", "hěn duō", "dōngxi"]},
    {question: "请 等 一 等， 我 记 下来", answer: "请 等 一 等， 我 记 下来", japanese: "少し待ってください、メモします", pinyin: ["qǐng", "děng", "yī", "děng,", "wǒ", "jì", "xiàlái"]},
    {question: "这个 工作 看起来 容易， 做起来 难", answer: "这个 工作 看起来 容易， 做起来 难", japanese: "この仕事は簡単そうに見えて、やるのは難しいです", pinyin: ["zhège", "gōngzuò", "kànqǐlái", "róngyì,", "zuòqǐlái", "nán"]},
    {question: "你 有 什么 想法 就 说 出来 吧", answer: "你 有 什么 想法 就 说 出来 吧", japanese: "何か考えがあれば、言ってみてください", pinyin: ["nǐ", "yǒu", "shénme", "xiǎngfǎ", "jiù", "shuō", "chūlái", "ba"]},
    {question: "他 会 说 汉语， 不过 说 得 还 不 太 流利", answer: "他 会 说 汉语， 不过 说 得 还 不 太 流利", japanese: "彼は中国語を話せますが、まだあまり流暢ではありません", pinyin: ["tā", "huì", "shuō", "hànyǔ,", "bùguò", "shuō", "de", "hái", "bù", "tài", "liúlì"]},
    {question: "学了 半年， 终于 会 游泳 了", answer: "学了 半年， 终于 会 游泳 了", japanese: "半年間学んで、ついに泳げるようになりました", pinyin: ["xuéle", "bànnián,", "zhōngyú", "huì", "yóuyǒng", "le"]},
    {question: "今天 下雨， 不能 游泳", answer: "今天 下雨， 不能 游泳", japanese: "今日は雨が降っているので、泳ぐことはできません", pinyin: ["jīntiān", "xià", "yǔ,", "bùnéng", "yóuyǒng"]},
    {question: "她 今天 会 来 吗?", answer: "她 今天 会 来 吗?", japanese: "彼女は今日来ますか？", pinyin: ["tā", "jīntiān", "huì", "lái", "ma?"]},
    {question: "她 今天 会 来", answer: "她 今天 会 来", japanese: "彼女は今日来ます", pinyin: ["tā", "jīntiān", "huì", "lái"]},
    {question: "她 今天 不会 来", answer: "她 今天 不会 来", japanese: "彼女は今日来ません", pinyin: ["tā", "jīntiān", "bùhuì", "lái"]},
    {question: "请 您 放心， 明天 小李 一定 会 来 车站 接 您 的", answer: "请 您 放心， 明天 小李 一定 会 来 车站 接 您 的", japanese: "ご安心ください。明日、小李が必ず駅に迎えに来ます", pinyin: ["qǐng", "nín", "fàngxīn,", "míngtiān", "xiǎo", "lǐ", "yīdìng", "huì", "lái", "chēzhàn", "jiē", "nín", "de"]},
    {question: "今年 冬天 特别 暖和， 不会 下雪", answer: "今年 冬天 特别 暖和， 不会 下雪", japanese: "今年の冬は特に暖かく、雪は降らないでしょう", pinyin: ["jīnnián", "dōngtiān", "tèbié", "nuǎnhuo,", "bùhuì", "xiàxuě"]},
    {question: "这么 简单 的 事情， 你 就 让 他 自己 做 吧", answer: "这么 简单 的 事情， 你 就 让 他 自己 做 吧", japanese: "こんな簡単なことは、彼に自分でやらせてください", pinyin: ["zhème", "jiǎndān", "de", "shìqíng,", "nǐ", "jiù", "ràng", "tā", "zìjǐ", "zuò", "ba"]},
    {question: "快要 高考 了， 爸爸 不 让 我 看 电视", answer: "快要 高考 了， 爸爸 不 让 我 看 电视", japanese: "もうすぐ大学入試なので、父は私にテレビを見せてくれません", pinyin: ["kuàiyào", "gāokǎo", "le,", "bàba", "bù", "ràng", "wǒ", "kàn", "diànshì"]},
    {question: "上个月 去 北京 的 时候， 小张 让 我 住 在 她 家", answer: "上个月 去 北京 的 时候， 小张 让 我 住 在 她 家", japanese: "先月北京に行った時、小張が私を彼女の家に泊めてくれました", pinyin: ["shàng", "gèyuè", "qù", "běijīng", "de", "shíhòu,", "xiǎo", "zhāng", "ràng", "wǒ", "zhù", "zài", "tā", "jiā"]},
    {question: "老师 叫 我们 早点儿 回家", answer: "老师 叫 我们 早点儿 回家", japanese: "先生は私たちに早めに帰るよう言いました", pinyin: ["lǎoshī", "jiào", "wǒmen", "zǎodiǎnr", "huíjiā"]},
    {question: "这部 电影 使 我 非常 感动", answer: "这部 电影 使 我 非常 感动", japanese: "この映画は私をとても感動させました", pinyin: ["zhè", "bù", "diànyǐng", "shǐ", "wǒ", "fēicháng", "gǎndòng"]},
    {question: "这条 街 上 的 小吃 又 便宜 又 好吃", answer: "这条 街 上 的 小吃 又 便宜 又 好吃", japanese: "この通りの軽食は安くて美味しいです", pinyin: ["zhè", "tiáo", "jiē", "shàng", "de", "xiǎochī", "yòu", "piányí", "yòu", "hǎochī"]},
    {question: "这个 包 又 大 又 重， 我 自己 拿 不 动", answer: "这个 包 又 大 又 重， 我 自己 拿 不 动", japanese: "このバッグは大きくて重いので、私一人では持てません", pinyin: ["zhège", "bāo", "yòu", "dà", "yòu", "zhòng,", "wǒ", "zìjǐ", "ná", "bù", "dòng"]},
    {question: "留学 生活 又 紧张 又 充实", answer: "留学 生活 又 紧张 又 充实", japanese: "留学生活は緊張感があり、充実しています", pinyin: ["liúxué", "shēnghuó", "yòu", "jǐnzhāng", "yòu", "chōngshí"]},
    {question: "这部 电影 不但 很 好看， 而且 音乐 也 很 好听", answer: "这部 电影 不但 很 好看， 而且 音乐 也 很 好听", japanese: "この映画は面白いだけでなく、音楽もとても良いです", pinyin: ["zhèbù", "diànyǐng", "bùdàn", "hěn", "hǎokàn,", "érqiě", "yīnyuè", "yě", "hěn", "hǎotīng"]},
    {question: "这场 音乐会 不但 规模 大， 而且 是 免费 的", answer: "这场 音乐会 不但 规模 大， 而且 是 免费 的", japanese: "このコンサートは規模が大きいだけでなく、無料でもあります", pinyin: ["zhè", "chǎng", "yīnyuèhuì", "bùdàn", "guīmó", "dà,", "érqiě", "shì", "miǎnfèi", "de"]},
    {question: "不但 父母 反对， 而且 朋友 也 反对 她 跟 小张 结婚", answer: "不但 父母 反对， 而且 朋友 也 反对 她 跟 小张 结婚", japanese: "両親だけでなく、友人たちも彼女と小張の結婚に反対しています", pinyin: ["bùdàn", "fùmǔ", "fǎnduì,", "érqiě", "péngyǒu", "yě", "fǎnduì", "tā", "gēn", "xiǎo", "zhāng", "jiéhūn"]},
    {question: "下雪 了， 怪不得 这么 冷", answer: "下雪 了， 怪不得 这么 冷", japanese: "雪が降っているので、どうりでこんなに寒いわけです", pinyin: ["xiàxuě", "le,", "guàibùdé", "zhème", "lěng"]},
    {question: "他们 打扫 了 一个 上午， 怪不得 教室 这么 干净", answer: "他们 打扫 了 一个 上午， 怪不得 教室 这么 干净", japanese: "彼らは午前中ずっと掃除していたので、どうりで教室がこんなにきれいなわけです", pinyin: ["tāmen", "dǎsǎo", "le", "yīgè", "shàngwǔ,", "guàibùdé", "jiàoshì", "zhème", "gānjìng"]},
    {question: "难怪 你 不 吃， 这个 菜 太 咸 了", answer: "难怪 你 不 吃， 这个 菜 太 咸 了", japanese: "どうりであなたが食べないわけです。この料理は塩辛すぎます", pinyin: ["nánguài", "nǐ", "bù", "chī,", "zhège", "cài", "tài", "xián", "le"]},
    {question: "他 是 新 来 的， 难怪 大家 都 不 认识 他", answer: "他 是 新 来 的， 难怪 大家 都 不 认识 他", japanese: "彼は新しく来た人なので、どうりで皆が彼を知らないわけです", pinyin: ["tā", "shì", "xīn", "lái", "de,", "nánguài", "dàjiā", "dōu", "bù", "rènshi", "tā"]},
    {question: "我 常常 一个 人 出去 旅行", answer: "我 常常 一个 人 出去 旅行", japanese: "私はよく一人で旅行に出かけます", pinyin: ["wǒ", "chángcháng", "yīgè", "rén", "chūqù", "lǚxíng"]},
    {question: "他 不 常 来, 因为 他 家 离 这儿 很 远", answer: "他 不 常 来, 因为 他 家 离 这儿 很 远", japanese: "彼はあまり来ません。なぜなら、彼の家はここからとても遠いからです", pinyin: ["tā", "bù", "cháng", "lái,", "yīnwèi", "tā", "jiā", "lí", "zhèr", "hěn", "yuǎn"]},
    {question: "他 身体 一直 不 太 好， 所以 经常 去 医院 看病", answer: "他 身体 一直 不 太 好， 所以 经常 去 医院 看病", japanese: "彼は体調がずっとあまり良くないので、よく病院に行って診てもらっています", pinyin: ["tā", "shēntǐ", "yīzhí", "bù", "tài", "hǎo,", "suǒyǐ", "jīngcháng", "qù", "yīyuàn", "kànbìng"]},
    {question: "因为 工作 太 忙 了， 他 有时候 很 晚 才 回家", answer: "因为 工作 太 忙 了， 他 有时候 很 晚 才 回家", japanese: "仕事が忙しいので、彼は時々とても遅く帰宅します", pinyin: ["yīnwèi", "gōngzuò", "tài", "máng", "le,", "tā", "yǒu", "shíhòu", "hěn", "wǎn", "cái", "huíjiā"]},
    {question: "明天 我们 要 去 淮海路 看 电影", answer: "明天 我们 要 去 淮海路 看 电影", japanese: "明日私たちは淮海路で映画を見に行きます", pinyin: ["míngtiān", "wǒmen", "yào", "qù", "huáihǎilù", "kàn", "diànyǐng"]},
    {question: "下个月 她 就 要 去 中国 留学 了", answer: "下个月 她 就 要 去 中国 留学 了", japanese: "来月、彼女は中国に留学に行く予定です", pinyin: ["xiàgèyuè", "tā", "jiù", "yào", "qù", "zhōngguó", "liúxué", "le"]},
    {question: "桌子 上 放着 两 本 书", answer: "桌子 上 放着 两 本 书", japanese: "机の上に2冊の本が置いてあります", pinyin: ["zhuōzi", "shàng", "fàngzhe", "liǎng", "běn", "shū"]},
    {question: "墙 上 挂着 一幅 画儿", answer: "墙 上 挂着 一幅 画儿", japanese: "壁には一枚の絵が掛けられています", pinyin: ["qiáng", "shàng", "guàzhe", "yī", "fú", "huàr"]},
    {question: "前面 开 过来 了 一 辆 蓝色 的 宝马", answer: "前面 开 过来 了 一 辆 蓝色 的 宝马", japanese: "前から青いBMWが来ました", pinyin: ["qiánmiàn", "kāi", "guòlái", "le", "yī", "liàng", "lánsè", "de", "bǎomǎ"]},
    {question: "昨天 这里 发生 了 一 起 交通 事故", answer: "昨天 这里 发生 了 一 起 交通 事故", japanese: "昨日ここで交通事故が起きました", pinyin: ["zuótiān", "zhèlǐ", "fāshēng", "le", "yī", "qǐ", "jiāotōng", "shìgù"]},
    {question: "教室 里 走 出来 了 很 多 学生", answer: "教室 里 走 出来 了 很 多 学生", japanese: "教室からたくさんの学生が出てきました", pinyin: ["jiàoshì", "lǐ", "zǒu", "chūlái", "le", "hěn", "duō", "xuéshēng"]},
    {question: "学生们 从 教室 走 出来 了", answer: "学生们 从 教室 走 出来 了", japanese: "学生たちは教室から出てきました", pinyin: ["xuéshēngmen", "cóng", "jiàoshì", "zǒu", "chūlái", "le"]},
    {question: "明天 有 考试， 他 肯定 会 来 的", answer: "明天 有 考试， 他 肯定 会 来 的", japanese: "明日試験がありますので、彼は必ず来るでしょう", pinyin: ["míngtiān", "yǒu", "kǎoshì,", "tā", "kěndìng", "huì", "lái", "de"]},
    {question: "你们 的 婚礼， 我 当然 要 来 参加 了", answer: "你们 的 婚礼， 我 当然 要 来 参加 了", japanese: "あなたたちの結婚式には、もちろん参加します", pinyin: ["nǐmen", "de", "hūnlǐ,", "wǒ", "dāngrán", "yào", "lái", "cānjiā", "le"]},
    {question: "他 可能 学 过 日语", answer: "他 可能 学 过 日语", japanese: "彼は日本語を学んだことがあるかもしれません", pinyin: ["tā", "kěnéng", "xué", "guò", "rìyǔ"]},
    {question: "你 也许 不知道， 她 已经 离开 上海 去 美国 留学 了", answer: "你 也许 不知道， 她 已经 离开 上海 去 美国 留学 了", japanese: "あなたは知らないかもしれませんが、彼女はすでに上海を離れてアメリカに留学に行きました", pinyin: ["nǐ", "yěxǔ", "bù zhīdào,", "tā", "yǐjīng", "líkāi", "shànghǎi", "qù", "měiguó", "liúxué", "le"]},
    {question: "关于 这个 课题， 我们 还 要 研究 研究", answer: "关于 这个 课题， 我们 还 要 研究 研究", japanese: "この課題については、さらに研究を進める必要があります", pinyin: ["guānyú", "zhège", "kètí,", "wǒmen", "hái", "yào", "yánjiū", "yánjiū"]},
    {question: "老师 让 他 写 一 篇 关于 环保 问题 的 论文", answer: "老师 让 他 写 一 篇 关于 环保 问题 的 论文", japanese: "先生は彼に環境問題に関する論文を書かせました", pinyin: ["lǎoshī", "ràng", "tā", "xiě", "yī", "piān", "guānyú", "huánbǎo", "wèntí", "de", "lùnwén"]},
    {question: "由于 时间 的 关系， 今天 的 会议 到此 结束", answer: "由于 时间 的 关系， 今天 的 会议 到此 结束", japanese: "時間の都合により、今日の会議はこれで終了します", pinyin: ["yóuyú", "shíjiān", "de", "guānxì,", "jīntiān", "de", "huìyì", "dào", "cǐ", "jiéshù"]},
    {question: "吃饭 前 要 洗手", answer: "吃饭 前 要 洗手", japanese: "食事の前に手を洗う必要があります", pinyin: ["chīfàn", "qián", "yào", "xǐshǒu"]},
    {question: "不要 把 自行车 停 在 这儿", answer: "不要 把 自行车 停 在 这儿", japanese: "自転車をここに停めないでください", pinyin: ["bùyào", "bǎ", "zìxíngchē", "tíng", "zài", "zhèr"]},
    {question: "别 把 自行车 停 在 这儿", answer: "别 把 自行车 停 在 这儿", japanese: "自転車をここに停めないでください", pinyin: ["bié", "bǎ", "zìxíngchē", "tíng", "zài", "zhèr"]},
    {question: "天气 越 来 越 暖和 了", answer: "天气 越 来 越 暖和 了", japanese: "天気がますます暖かくなってきました", pinyin: ["tiānqì", "yuè", "lái", "yuè", "nuǎnhuo", "le"]},
    {question: "上海 的 交通 越 来 越 方便 了", answer: "上海 的 交通 越 来 越 方便 了", japanese: "上海の交通はますます便利になっています", pinyin: ["shànghǎi", "de", "jiāotōng", "yuè", "lái", "yuè", "fāngbiàn", "le"]},
    {question: "雨 越 下 越 大 了", answer: "雨 越 下 越 大 了", japanese: "雨がどんどん強く降ってきました", pinyin: ["yǔ", "yuè", "xià", "yuè", "dà", "le"]},
    {question: "这次 拍 的 照片 我 越 看 越 满意", answer: "这次 拍 的 照片 我 越 看 越 满意", japanese: "今回撮った写真は、見るたびにますます満足しています", pinyin: ["zhècì", "pāi", "de", "zhàopiàn", "wǒ", "yuè", "kàn", "yuè", "mǎnyì"]},
    {question: "她 住 在 哪儿?", answer: "她 住 在 哪儿?", japanese: "彼女はどこに住んでいますか？", pinyin: ["tā", "zhù", "zài", "nǎr?"]},
    {question: "她 住 在 神户", answer: "她 住 在 神户", japanese: "彼女は神戸に住んでいます", pinyin: ["tā", "zhù", "zài", "shénhù"]},
    {question: "下次 来 杭州， 我 想 住 在 西湖 旁边 的 宾馆", answer: "下次 来 杭州， 我 想 住 在 西湖 旁边 的 宾馆", japanese: "次回杭州に行く時、私は西湖の近くのホテルに泊まりたいです", pinyin: ["xiàcì", "lái", "hángzhōu,", "wǒ", "xiǎng", "zhù", "zài", "xīhú", "pángbiān", "de", "bīnguǎn"]},
    {question: "他 把 钱包 放 在 桌子 上", answer: "他 把 钱包 放 在 桌子 上", japanese: "彼は財布を机の上に置きました", pinyin: ["tā", "bǎ", "qiánbāo", "fàng", "zài", "zhuōzi", "shàng"]},
    {question: "尽管 他 优点 很 多， 但是 也 有 一些 缺点", answer: "尽管 他 优点 很 多， 但是 也 有 一些 缺点", japanese: "彼には多くの長所がありますが、いくつかの短所もあります", pinyin: ["jǐnguǎn", "tā", "yōudiǎn", "hěn", "duō,", "dànshì", "yě", "yǒu", "yīxiē", "quēdiǎn"]},
    {question: "尽管 妈妈 说 了 好多 次， 他 还是 记 不住", answer: "尽管 妈妈 说 了 好多 次， 他 还是 记 不住", japanese: "母が何度も言ったにも関わらず、彼はまだ覚えられません", pinyin: ["jǐnguǎn", "māmā", "shuō", "le", "hǎoduō", "cì,", "tā", "háishì", "jì", "bù", "zhù"]},
    {question: "尽管 这 台 电脑 价格 很 贵， 但 我 还是 要 买", answer: "尽管 这 台 电脑 价格 很 贵， 但 我 还是 要 买", japanese: "このパソコンはとても高価ですが、私はそれでも買います", pinyin: ["jǐnguǎn", "zhè", "tái", "diànnǎo", "jiàgé", "hěn", "guì,", "dàn", "wǒ", "háishì", "yào", "mǎi"]},
    {question: "为了 孩子， 妈妈 什么 都 愿意 做", answer: "为了 孩子， 妈妈 什么 都 愿意 做", japanese: "子供のために、母は何でも喜んでやります", pinyin: ["wèile", "háizi,", "māmā", "shénme", "dōu", "yuànyì", "zuò"]},
    {question: "为了 唱 好 这 首 歌， 他 每天 都 练习", answer: "为了 唱 好 这 首 歌， 他 每天 都 练习", japanese: "この歌をうまく歌うために、彼は毎日練習しています", pinyin: ["wèile", "chàng", "hǎo", "zhè", "shǒu", "gē,", "tā", "měitiān", "dōu", "liànxí"]},
    {question: "他 每天 都 练习， 是 为了 唱 好 这 首 歌", answer: "他 每天 都 练习， 是 为了 唱 好 这 首 歌", japanese: "彼は毎日練習しているのは、この歌をうまく歌うためです", pinyin: ["tā", "měitiān", "dōu", "liànxí,", "shì", "wèile", "chàng", "hǎo", "zhè", "shǒu", "gē"]},
    {question: "读书 是 为了 学 到 更多 的 知识， 提高 自己 的 修养", answer: "读书 是 为了 学 到 更多 的 知识， 提高 自己 的 修养", japanese: "勉強するのは、もっと多くの知識を学び、自分の教養を高めるためです", pinyin: ["dúshū", "shì", "wèile", "xué", "dào", "gèngduō", "de", "zhīshì,", "tígāo", "zìjǐ", "de", "xiūyǎng"]},
    {question: "他 儿子 十 岁 才 开始 学 英语", answer: "他 儿子 十 岁 才 开始 学 英语", japanese: "彼の息子は10歳になって初めて英語を学び始めました", pinyin: ["tā", "érzi", "shí", "suì", "cái", "kāishǐ", "xué", "yīngyǔ"]},
    {question: "他 儿子 十 岁 就 开始 学 英语 了", answer: "他 儿子 十 岁 就 开始 学 英语 了", japanese: "彼の息子は10歳の時に英語を学び始めました", pinyin: ["tā", "érzi", "shí", "suì", "jiù", "kāishǐ", "xué", "yīngyǔ", "le"]},
    {question: "只有 多 说 多 练， 才 能 学 好 汉语", answer: "只有 多 说 多 练， 才 能 学 好 汉语", japanese: "たくさん話して練習することで、初めて中国語をうまく学べます", pinyin: ["zhǐyǒu", "duō", "shuō", "duō", "liàn,", "cái", "néng", "xué", "hǎo", "hànyǔ"]},
    {question: "俗话 说 “ 不到 长城 非 好汉 ”， 只有 去 过 长城 才 算 是 好汉", answer: "俗话 说 “ 不到 长城 非 好汉 ”， 只有 去 过 长城 才 算 是 好汉", japanese: "言い伝えに「長城に行かなければ、立派な男とは言えない」とあります。長城に行った人こそ立派な男と認められるのです", pinyin: ["súhuà", "shuō", "“", "bùdào", "chángchéng", "fēi", "hǎohàn", "”", "zhǐyǒu", "qù", "guò", "chángchéng", "cái", "suàn", "shì", "hǎohàn"]},
    {question: "既然 喜欢， 就 多 吃 点儿 吧", answer: "既然 喜欢， 就 多 吃 点儿 吧", japanese: "好きなら、もっと食べなさい", pinyin: ["jìrán", "xǐhuān,", "jiù", "duō", "chī", "diǎnr", "ba"]},
    {question: "既然 你 想 去 美国 留学， 就 应该 好好儿 学 英语", answer: "既然 你 想 去 美国 留学， 就 应该 好好儿 学 英语", japanese: "アメリカに留学したいなら、英語をしっかり学ばないといけません", pinyin: ["jìrán", "nǐ", "xiǎng", "qù", "měiguó", "liúxué,", "jiù", "yīnggāi", "hǎohāor", "xué", "yīngyǔ"]},
    {question: "既然 已经 发生 了， 后悔 又 有 什么 用 呢？", answer: "既然 已经 发生 了， 后悔 又 有 什么 用 呢？", japanese: "すでに起こったことなら、後悔しても意味がないでしょう", pinyin: ["jìrán", "yǐjīng", "fāshēng", "le,", "hòuhuǐ", "yòu", "yǒu", "shénme", "yòng", "ne?"]},
    {question: "听说 《赤壁》 这部 电影 非常 好看， 我 非 要 去 看 不可", answer: "听说 《赤壁》 这部 电影 非常 好看， 我 非 要 去 看 不可", japanese: "『赤壁』という映画がとても面白いと聞いたので、どうしても見に行かないといけません", pinyin: ["tīngshuō", "《chìbì》", "zhèbù", "diànyǐng", "fēicháng", "hǎokàn,", "wǒ", "fēi", "yào", "qù", "kàn", "bùkě"]},
    {question: "有 机会 去 四川， 非 要 尝 尝 正宗 的 四川 菜 不可", answer: "有 机会 去 四川， 非 要 尝 尝 正宗 的 四川 菜 不可", japanese: "四川に行く機会があれば、正宗の四川料理をぜひとも食べてみてください", pinyin: ["yǒu", "jīhuì", "qù", "sìchuān,", "fēi", "yào", "cháng", "cháng", "zhèngzōng", "de", "sìchuān", "cài", "bùkě"]},
    {question: "爸爸 不 让 他 去， 他 却 非 去 不可", answer: "爸爸 不 让 他 去， 他 却 非 去 不可", japanese: "父は彼に行かせたくなかったが、彼はどうしても行かなければなりませんでした", pinyin: ["bàba", "bù", "ràng", "tā", "qù,", "tā", "què", "fēi", "qù", "bùkě"]},
    {question: "今天 我 请 客， 你 想 吃 什么， 就 点 什么", answer: "今天 我 请 客， 你 想 吃 什么， 就 点 什么", japanese: "今日は私がご馳走しますので、食べたいものを何でも注文してください", pinyin: ["jīntiān", "wǒ", "qǐng", "kè,", "nǐ", "xiǎng", "chī", "shénme,", "jiù", "diǎn", "shénme"]},
    {question: "你 什么时候 有 空， 我们 就 什么时候 去", answer: "你 什么时候 有 空， 我们 就 什么时候 去", japanese: "あなたの都合のいい時に、私たちはその時に行きます", pinyin: ["nǐ", "shénme", "shíhòu", "yǒu", "kòng,", "wǒmen", "jiù", "shénme", "shíhòu", "qù"]},
    {question: "谁 先 回家， 谁 就 做 饭", answer: "谁 先 回家， 谁 就 做 饭", japanese: "誰が先に帰宅したら、その人がご飯を作ります", pinyin: ["shuí", "xiān", "huíjiā,", "shuí", "jiù", "zuò", "fàn"]},
    {question: "哪壶 不 开 提 哪壶", answer: "哪壶 不 开 提 哪壶", japanese: "触れてはいけない話題に触れる", pinyin: ["nǎhú", "bù", "kāi", "tí", "nǎhú"]},
    {question: "虽然 刚 开始 学， 但是 他 网球 已经 打 得 很 不错 了", answer: "虽然 刚 开始 学， 但是 他 网球 已经 打 得 很 不错 了", japanese: "まだ始めたばかりですが、彼はすでにテニスがとても上手です", pinyin: ["suīrán", "gāng", "kāishǐ", "xué,", "dànshì", "tā", "wǎngqiú", "yǐjīng", "dǎ", "de", "hěn", "bùcuò", "le"]},
    {question: "虽然 白天 很 热， 但是 晚上 很 凉快", answer: "虽然 白天 很 热， 但是 晚上 很 凉快", japanese: "昼はとても暑いですが、夜はとても涼しいです", pinyin: ["suīrán", "báitiān", "hěn", "rè,", "dànshì", "wǎnshàng", "hěn", "liángkuai"]},
    {question: "虽然 不 懂 中文， 但是 我 很 喜欢 看 中国 电影", answer: "虽然 不 懂 中文， 但是 我 很 喜欢 看 中国 电影", japanese: "中国語はわかりませんが、私は中国映画を見るのがとても好きです", pinyin: ["suīrán", "bù", "dǒng", "zhōngwén,", "dànshì", "wǒ", "hěn", "xǐhuān", "kàn", "zhōngguó", "diànyǐng"]},
    {question: "那天 雨 下 得 很 大， 所以 一个 人 也 没 来", answer: "那天 雨 下 得 很 大， 所以 一个 人 也 没 来", japanese: "その日は雨がとても強く降っていたので、誰も来ませんでした", pinyin: ["nàtiān", "yǔ", "xià", "de", "hěn", "dà,", "suǒyǐ", "yī", "gè", "rén", "yě", "méi", "lái"]},
    {question: "他 有 很 多 DVD， 但是 一 张 也 不 借 给 我", answer: "他 有 很 多 DVD， 但是 一 张 也 不 借 给 我", japanese: "彼はたくさんDVDを持っていますが、1枚も私には貸してくれません", pinyin: ["tā", "yǒu", "hěn", "duō", "DVD,", "dànshì", "yī", "zhāng", "yě", "bù", "jiè", "gěi", "wǒ"]},
    {question: "我 一点儿 也 不 知道", answer: "我 一点儿 也 不 知道", japanese: "私は全く知りません", pinyin: ["wǒ", "yīdiǎnr", "yě", "bù", "zhīdào"]},
    {question: "我 刚 吃 过 蛋糕， 现在 一点儿 也 不 饿", answer: "我 刚 吃 过 蛋糕， 现在 一点儿 也 不 饿", japanese: "私はさっきケーキを食べたので、今は全くお腹が空いていません", pinyin: ["wǒ", "gāng", "chī", "guò", "dàngāo,", "xiànzài", "yīdiǎnr", "yě", "bù", "è"]},
    {question: "他 一 边 看 书 一 边 听 音乐", answer: "他 一 边 看 书 一 边 听 音乐", japanese: "彼は本を読みながら音楽を聴いています", pinyin: ["tā", "yībiān", "kàn", "shū", "yībiān", "tīng", "yīnyuè"]},
    {question: "我们 一 边 吃饭 一 边 聊天儿， 很 热闹", answer: "我们 一 边 吃饭 一 边 聊天儿， 很 热闹", japanese: "私たちは食事をしながらおしゃべりをして、とても賑やかです", pinyin: ["wǒmen", "yībiān", "chīfàn", "yībiān", "liáotiānr,", "hěn", "rènào"]},
    {question: "晚会 上， 她 一 边 唱 歌 一 边 跳 舞， 表演 得 很 精彩", answer: "晚会 上， 她 一 边 唱 歌 一 边 跳 舞， 表演 得 很 精彩", japanese: "パーティーで、彼女は歌いながら踊り、とても素晴らしいパフォーマンスをしました", pinyin: ["wǎnhuì", "shàng,", "tā", "yībiān", "chàng", "gē", "yībiān", "tiàowǔ,", "biǎoyǎn", "de", "hěn", "jīngcǎi"]},
    {question: "既然 来 了 苏州， 就 不能 不 去 拙政园 看 看", answer: "既然 来 了 苏州， 就 不能 不 去 拙政园 看 看", japanese: "すでに蘇州に来たのだから、拙政園を見に行かないわけにはいきません", pinyin: ["jìrán", "lái", "le", "sūzhōu,", "jiù", "bùnéng", "bù", "qù", "zhuōzhèngyuán", "kàn", "kàn"]},
    {question: "明天 要 考试， 所以 今天 不 得不 复习", answer: "明天 要 考试， 所以 今天 不 得不 复习", japanese: "明日試験があるので、今日は復習せざるを得ません", pinyin: ["míngtiān", "yào", "kǎoshì,", "suǒyǐ", "jīntiān", "bù", "débù", "fùxí"]},
    {question: "太 晚 了， 没有 车 了， 我们 不 得不 打 的 回家", answer: "太 晚 了， 没有 车 了， 我们 不 得不 打 的 回家", japanese: "とても遅くなって、もう車がないので、タクシーで帰らざるを得ません", pinyin: ["tài", "wǎn", "le,", "méiyǒu", "chē", "le,", "wǒmen", "bù", "débù", "dǎ", "dí", "huíjiā"]},
    {question: "太 难 了， 连 老师 都 不 会", answer: "太 难 了， 连 老师 都 不 会", japanese: "とても難しいので、先生でさえできません", pinyin: ["tài", "nán", "le,", "lián", "lǎoshī", "dōu", "bù", "huì"]},
    {question: "刚 来 中国 的 时候， 我 连 一句 中文 都 不 会 说", answer: "刚 来 中国 的 时候， 我 连 一句 中文 都 不 会 说", japanese: "中国に来たばかりの時、私は一言も中国語を話せませんでした", pinyin: ["gāng", "lái", "zhōngguó", "de", "shíhòu,", "wǒ", "lián", "yī", "jù", "zhōngwén", "dōu", "bù", "huì", "shuō"]},
    {question: "山口 对 历史 很 感兴趣， 别 说 日本 历史， 连 中国 历史 都 非常 了解", answer: "山口 对 历史 很 感兴趣， 别 说 日本 历史， 连 中国 历史 都 非常 了解", japanese: "山口は歴史に非常に興味があり、日本の歴史はもちろん、中国の歴史も非常に詳しいです", pinyin: ["shāngkǒu", "duì", "lìshǐ", "hěn", "gǎn xìngqù,", "bié", "shuō", "rìběn", "lìshǐ,", "lián", "zhōngguó", "lìshǐ", "dōu", "fēicháng", "liǎojiě"]},
    
];

let currentIndex = 0;
let showPinyinOnly = false; // ピンイン表示の切り替え状態
const problemContainer = document.getElementById("problem-container");
const result = document.getElementById("result");
const answerContainer = document.getElementById("answer-container");

// 配列をシャッフルする関数
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 問題をロードする
function loadProblem() {
    if (currentIndex >= problems.length) {
        result.textContent = "すべての問題を解きました！";
        return;
    }

    const currentProblem = problems[currentIndex];

    // 質問とピンインをシャッフル
    const words = currentProblem.question.split(" ");
    const pinyin = currentProblem.pinyin;

    // シャッフルの際にピンインが対応するようにペアで扱う
    const wordPinyinPairs = words.map((word, index) => ({ word, pinyin: pinyin[index] }));
    const shuffledPairs = shuffle(wordPinyinPairs);

    problemContainer.innerHTML = "";

    shuffledPairs.forEach(pair => {
        const wordElement = document.createElement("div");
        wordElement.classList.add("word");

        // シャッフルされたピンインを取得
        const pinyinText = pair.pinyin;

        // 漢字とピンインを交互に表示
        wordElement.innerHTML = `
            <span class="chinese">${pair.word}</span>
            <span class="pinyin hidden">${pinyinText}</span>
        `;
        wordElement.draggable = true;
        problemContainer.appendChild(wordElement);
    });

    addDragAndDrop();
    answerContainer.innerHTML = ""; // 答えをリセット
    togglePinyin(); // ピンイン表示の状態に応じて表示を切り替え
}

// 答えを確認
function checkAnswer() {
    if (currentIndex >= problems.length) return;

    const userAnswer = Array.from(problemContainer.children)
        .map(word => word.querySelector(".chinese").textContent)
        .join(" ");
    const correctAnswer = problems[currentIndex].answer;
    const correctJapanese = problems[currentIndex].japanese;

    if (userAnswer === correctAnswer) {
        result.textContent = "正解！";
        result.style.color = "green";
    } else {
        result.textContent = "間違いです。もう一度試してください。";
        result.style.color = "red";
    }

    // 正解の文章と日本語訳を表示
    answerContainer.innerHTML = `
        <p><strong>正解:</strong> ${correctAnswer} (${problems[currentIndex].pinyin.join(" ")})</p>
        <p><strong>日本語訳:</strong> ${correctJapanese}</p>
    `;
}

// 次の問題を表示
function nextProblem() {
    currentIndex++;
    if (currentIndex >= problems.length) {
        result.textContent = "これ以上問題がありません！";
        return;
    }
    loadProblem();
}

// ドラッグ＆ドロップ設定
function addDragAndDrop() {
    const words = document.querySelectorAll(".word");

    words.forEach(word => {
        // ドラッグイベント (デスクトップ向け)
        word.addEventListener("dragstart", () => word.classList.add("dragging"));
        word.addEventListener("dragend", () => word.classList.remove("dragging"));

        // タッチイベント (スマホ向け)
        word.addEventListener("touchstart", (e) => {
            e.preventDefault();
            word.classList.add("dragging");
        });

        word.addEventListener("touchend", () => {
            word.classList.remove("dragging");
        });
    });

    problemContainer.addEventListener("dragover", e => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const currentRow = problemContainer; // 現在の行を問題コンテナ自体に変更
        const afterElement = getDragAfterElement(e.clientX, currentRow);
        if (afterElement == null) {
            currentRow.appendChild(dragging);
        } else {
            currentRow.insertBefore(dragging, afterElement);
        }
    });

    problemContainer.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const touch = e.touches[0]; // タッチの座標を取得
        const currentRow = problemContainer; // 現在の行を問題コンテナ自体に変更
        const afterElement = getDragAfterElement(touch.clientX, currentRow);
        if (afterElement == null) {
            currentRow.appendChild(dragging);
        } else {
            currentRow.insertBefore(dragging, afterElement);
        }
    });

    // ドラッグ中の要素が所属する行（親要素）を取得
    function getCurrentRow(dragging) {
        return dragging.closest(".row") || problemContainer; // もし行がない場合、コンテナを使う
    }

    // 同じ行内で、挿入すべき位置を計算
    function getDragAfterElement(x, currentRow) {
        const draggableElements = [...currentRow.querySelectorAll(".word:not(.dragging)")];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
}



// ピンイン表示の切り替え
function togglePinyin() {
    const chineseWords = document.querySelectorAll(".chinese");
    const pinyinWords = document.querySelectorAll(".pinyin");

    chineseWords.forEach(word => {
        word.classList.toggle("hidden", showPinyinOnly);
    });
    pinyinWords.forEach(word => {
        word.classList.toggle("hidden", !showPinyinOnly);
    });
}

// ピンイン表示ボタンの処理
function togglePinyinState() {
    showPinyinOnly = !showPinyinOnly; // ピンイン表示状態を切り替え
    togglePinyin();
}

// 初期化
function initializeProblems() {
    problems = shuffle(problems);
    currentIndex = 0;
    loadProblem();
}

document.getElementById("check-answer").addEventListener("click", checkAnswer);
document.getElementById("next-problem").addEventListener("click", nextProblem);
document.getElementById("toggle-pinyin").addEventListener("click", togglePinyinState);

initializeProblems();
