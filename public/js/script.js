// script.js
let problems = [
    { question: "我 爱 学习 中文", answer: "我 爱 学习 中文", japanese: "私は中国語を学ぶことが大好きです。" },
    { question: "今天 天气 很好", answer: "今天 天气 很好", japanese: "今日は天気がとても良いです。" },
    { question: "你 今天 吃饭 吗", answer: "你 今天 吃饭 吗", japanese: "今日は食事をしましたか？" },
    { question: "我 给 他 打了 三 次 电话", answer: "我 给 他 打了 三 次 电话", japanese: "私は彼に三回電話をかけました。" },
    { question: "我 见过 他 两 次", answer: "我 见过 他 两 次", japanese: "私は彼に二回会ったことがあります。" },
    { question: "你 再 念 一遍， 好吗？", answer: "你 再 念 一遍， 好吗？", japanese: "もう一度読んでくれますか？" },
    { question: "我 去过 两 趟 北京", answer: "我 去过 两 趟 北京", japanese: "私は北京に二回行ったことがあります。" },
    { question: "昨天 晚上 我 看了 一个半 小时 电视", answer: "昨天 晚上 我 看了 一个半 小时 电视", japanese: "昨晩、私は1時間半テレビを見ました。" },
    { question: "我 等了 她 二十 分钟", answer: "我 等了 她 二十 分钟", japanese: "私は彼女を20分待ちました。" },
    { question: "你 学了 多 长 时间 汉语 了 ？", answer: "你 学了 多 长 时间 汉语 了 ？", japanese: "あなたはどのくらいの間中国語を勉強していますか？" },
    { question: "我 学了 半年 汉语 了", answer: "我 学了 半年 汉语 了", japanese: "私は半年間中国語を勉強しています。" },
    { question: "高中 的 时候， 我 学了 半年 汉语", answer: "高中 的 时候， 我 学了 半年 汉语", japanese: "高校の時、私は半年間中国語を勉強しました。" },
    { question: "你 是 哪 一年 出生 的 ？", answer: "你 是 哪 一年 出生 的 ？", japanese: "あなたは何年生まれですか？" },
    { question: "我 是 二零零六 年 出生 的", answer: "我 是 二零零六 年 出生 的", japanese: "私は2006年生まれです" },
    { question: "他 是 从 哪里 来 的 ?", answer: "他 是 从 哪里 来 的 ?", japanese: "彼はどこから来たのですか" },
    { question: "他 是 从 杭州 来 的", answer: "他 是 从 杭州 来 的", japanese: "彼は杭州から来ました" },
    { question: "这件 衣服 真 漂亮 , 是 在 哪儿 买 的 ?", answer: "这件 衣服 真 漂亮 , 是 在 哪儿 买 的 ?", japanese: "この服は本当にきれいですね、どこで買ったのですか" },
    { question: "是 在 巴黎 买 的", answer: "是 在 巴黎 买 的", japanese: "パリで買いました" },
    { question: "我 不是 坐 船 来 中国 的 , 是 坐 飞机 来 的", answer: "我 不是 坐 船 来 中国 的 , 是 坐 飞机 来 的", japanese: "私は船で中国に来たのではなく、飛行機で来ました" },
    { question: "我 不是 一个人 来 的 , 是 和 朋友 一起 来 的", answer: "我 不是 一个人 来 的 , 是 和 朋友 一起 来 的", japanese: "私は一人で来たのではなく、友達と一緒に来ました" },
    { question: "我 觉得 今年 夏天 特别 热", answer: "我 觉得 今年 夏天 特别 热", japanese: "今年の夏は特に暑いと感じます" },
    { question: "我 认为 他 的 话 很 有 道理", answer: "我 认为 他 的 话 很 有 道理", japanese: "私は彼の言うことにとても説得力があると思います" },
    { question: "我 想 她 现在 一定 很 难过", answer: "我 想 她 现在 一定 很 难过", japanese: "私は彼女が今きっととても悲しいと思います" },
    { question: "你 知道 她 的 手机 是 在 哪儿 买 的 吗", answer: "你 知道 她 的 手机 是 在 哪儿 买 的 吗", japanese: "あなたは彼女の携帯電話がどこで買ったのか知っていますか" },
    { question: "我 希望 我们 明年 能 在 上海 见面", answer: "我 希望 我们 明年 能 在 上海 见面", japanese: "私は来年私たちが上海で会えることを望んでいます" },
    { question: "我的 手机 跟 你 的 一样", answer: "我的 手机 跟 你 的 一样", japanese: "私の携帯電話はあなたのと同じです" },
    { question: "日本 的 习俗 和 中国 的 不 一样", answer: "日本 的 习俗 和 中国 的 不 一样", japanese: "日本の習慣は中国のものとは違います" },
    { question: "京都 的 冬天 很 上海 一样 冷", answer: "京都 的 冬天 很 上海 一样 冷", japanese: "京都の冬は上海と同じくらい寒いです" },
    { question: "我 跟 你 一样 喜欢 音乐", answer: "我 跟 你 一样 喜欢 音乐", japanese: "私はあなたと同じように音楽が好きです" },
    { question: "他 和 他 哥哥 一样 高", answer: "他 和 他 哥哥 一样 高", japanese: "彼は彼の兄と同じくらい背が高いです" },
    { question: "她 和 他 哥哥 差不多 高", answer: "她 和 他 哥哥 差不多 高", japanese: "彼女は彼の兄とほとんど同じくらい背が高いです" },
    { question: "她 一 进 房间 就 开 空调", answer: "她 一 进 房间 就 开 空调", japanese: "彼女は部屋に入るとすぐにエアコンをつけます" },
    { question: "妈妈 一 出去，他 就 开始 看 电视", answer: "妈妈 一 出去，他 就 开始 看 电视", japanese: "お母さんが出かけると、彼はすぐにテレビを見始めます" },
    { question: "我 一 看 就 知道 这 篇 文章 是 你 写 的", answer: "我 一 看 就 知道 这 篇 文章 是 你 写 的", japanese: "私は一目でこの記事があなたが書いたものだとわかります" },
    { question: "一 到 春天，京都 就 成了 樱花 的 世界", answer: "一 到 春天，京都 就 成了 樱花 的 世界", japanese: "春になると、京都は桜の世界になります" },
    { question: "王 老师 不 在 家， 他 出去了", answer: "王 老师 不 在 家， 他 出去了", japanese: "王先生は家にいません、彼は出かけました" },
    { question: "下雨了， 快 进来 吧", answer: "下雨了， 快 进来 吧", japanese: "雨が降ってきたので、早く入ってきてください" },
    { question: "她 回来 了吗？", answer: "她 回来 了吗？", japanese: "彼女は帰ってきましたか？" },
    { question: "没有， 他 还 没 回来", answer: "没有， 他 还 没 回来", japanese: "いいえ、彼はまだ帰っていません" },
    { question: "小 李 进 公园 去了", answer: "小 李 进 公园 去了", japanese: "李さんは公園に入りました" },
    { question: "明天 你 带 相机 来， 好不好？", answer: "明天 你 带 相机 来， 好不好？", japanese: "明日カメラを持ってきてくれませんか？" },
    { question: "明天 你 把 相机 带 来， 好不好？", answer: "明天 你 把 相机 带 来， 好不好？", japanese: "明日カメラを持ってきてくれませんか？" },
    { question: "他 从 上海 带来了 很多 礼物", answer: "他 从 上海 带来了 很多 礼物", japanese: "彼は上海からたくさんのプレゼントを持ってきました" },
    { question: "他 一口气 跑上了 五楼", answer: "他 一口气 跑上了 五楼", japanese: "彼は一気に5階まで駆け上がりました" },
    { question: "听说 明天 下雨， 是吗？", answer: "听说 明天 下雨， 是吗？", japanese: "明日雨が降ると聞きましたが、本当ですか？" },
    { question: "听说 她 去 中国 留学 了", answer: "听说 她 去 中国 留学 了", japanese: "彼女が中国に留学に行ったと聞きました" },
    { question: "听说 他 下个月 要 跟 小李 结婚", answer: "听说 他 下个月 要 跟 小李 结婚", japanese: "彼が来月李さんと結婚する予定だと聞きました" },
    { question: "她 唱 歌 唱得 好 吗？", answer: "她 唱 歌 唱得 好 吗？", japanese: "彼女は歌を上手に歌えますか？" },
    { question: "他 唱得 很 好", answer: "他 唱得 很 好", japanese: "彼はとても上手に歌えます" },
    { question: "她 唱得 不 太 好", answer: "她 唱得 不 太 好", japanese: "彼女はあまり上手に歌えません" },
    { question: "她 唱得 不 好", answer: "她 唱得 不 好", japanese: "彼女は歌が下手です" },
    { question: "你 说得 太 快 了， 我 没 听清楚", answer: "你 说得 太 快 了， 我 没 听清楚", japanese: "あなたは話すのが速すぎて、私ははっきり聞き取れませんでした" },
    { question: "他 哥哥 长得 很 高", answer: "他 哥哥 长得 很 高", japanese: "彼の兄はとても背が高いです" },
    { question: "他 汉语 说得 怎么样？", answer: "他 汉语 说得 怎么样？", japanese: "彼の中国語はどうですか？" },
    { question: "他 汉语 说得 真 不错", answer: "他 汉语 说得 真 不错", japanese: "彼の中国語は本当に素晴らしいです" },
    { question: "他 跑得 怎么 这么 快？", answer: "他 跑得 怎么 这么 快？", japanese: "彼はなんでそんなに速く走れるのですか？" },
    { question: "如果 明天 下雨 的 话， 我们 就 不 去 了", answer: "如果 明天 下雨 的 话， 我们 就 不 去 了", japanese: "もし明日雨が降ったら、私たちは行きません" },
    { question: "今年 暑假 如果 有 机会 的 话， 我 想 去 张家界 旅游", answer: "今年 暑假 如果 有 机会 的 话， 我 想 去 张家界 旅游", japanese: "今年の夏休みにもし機会があれば、私は張家界に旅行に行きたいです" },
    { question: "如果 有 什么 困难， 可以 来 找 我", answer: "如果 有 什么 困难， 可以 来 找 我", japanese: "もし何か困ったことがあれば、私を訪ねてきてください" },
    { question: "要是 不 努力， 我们 就 很 难 毕业", answer: "要是 不 努力， 我们 就 很 难 毕业", japanese: "もし努力しなければ、私たちは卒業が難しくなります" },
    { question: "给 我 看看， 可以 吗？", answer: "给 我 看看， 可以 吗？", japanese: "私にちょっと見せてもらえますか？" },
    { question: "你 尝 一 尝， 这个 很 好吃", answer: "你 尝 一 尝， 这个 很 好吃", japanese: "ちょっと食べてみて、これ本当に美味しいです" },
    { question: "这 件 事情 可 不 简单， 你 跟 老师 商量 商量 吧", answer: "这 件 事情 可 不 简单， 你 跟 老师 商量 商量 吧", japanese: "この件は簡単ではありません、先生とちょっと相談してみてください" },
    { question: "我们 去 公园 散散步， 好不好？", answer: "我们 去 公园 散散步， 好不好？", japanese: "公園に行って少し散歩しませんか？" },
    { question: "周末 我 喜欢 在 家 听听 音乐， 看看 书", answer: "周末 我 喜欢 在 家 听听 音乐， 看看 书", japanese: "週末は家で音楽を聴いたり、本を読んだりするのが好きです" },
    { question: "两 年 前 我 去过 香港， 今年 秋天 还 想 再 去 一 次", answer: "两 年 前 我 去过 香港， 今年 秋天 还 想 再 去 一 次", japanese: "2年前に香港へ行ったことがありますが、今年の秋にもう一度行きたいです" },
    { question: "两 年 前 我 去过 香港， 今年 春天 又 去了 一 次", answer: "两 年 前 我 去过 香港， 今年 春天 又 去了 一 次", japanese: "2年前に香港へ行きましたが、今年の春にまた行きました" },
    { question: "我们 做完 作业， 再 去 看 电影， 好吗？", answer: "我们 做完 作业， 再 去 看 电影， 好吗？", japanese: "宿題を終わらせてから映画を観に行くのはどうですか？" },
    { question: "时间 还 早， 你 再 坐 一会儿 吧", answer: "时间 还 早， 你 再 坐 一会儿 吧", japanese: "まだ時間が早いので、もう少し座っていってください" },
    { question: "想 学好 汉语， 就 应该 多 听 多 说", answer: "想 学好 汉语， 就 应该 多 听 多 说", japanese: "中国語を上手に学びたいなら、たくさん聞いてたくさん話すべきです" },
    { question: "你 不 应该 把 这 件 事 告诉 他", answer: "你 不 应该 把 这 件 事 告诉 他", japanese: "あなたはこのことを彼に話すべきではありません" },
    { question: "现在 是 上课 时间， 他 应该 在 教室", answer: "现在 是 上课 时间， 他 应该 在 教室", japanese: "今は授業の時間なので、彼は教室にいるはずです" },
    { question: "你 应该 听说过 这个 故事 吧", answer: "你 应该 听说过 这个 故事 吧", japanese: "あなたはこの話を聞いたことがあるはずですよね？" },
    { question: "你 明天 得 早点儿 来", answer: "你 明天 得 早点儿 来", japanese: "あなたは明日早めに来る必要があります" },
    { question: "我 还 得 再 考虑 一下", answer: "我 还 得 再 考虑 一下", japanese: "私はもう少し考える必要があります" },
    { question: "她 写 的 字 非常 漂亮", answer: "她 写 的 字 非常 漂亮", japanese: "彼女の書く字はとてもきれいです" },
    { question: "你 把 今天 买来 的 书 给 我 看 一看， 好吗？", answer: "你 把 今天 买来 的 书 给 我 看 一看， 好吗？", japanese: "今日買った本を少し見せてもらえませんか？" },
    { question: "今天 早上 我 给 她 打电话 的 时候， 她 还 在 睡觉", answer: "今天 早上 我 给 她 打电话 的 时候， 她 还 在 睡觉", japanese: "今朝、彼女に電話をかけたとき、彼女はまだ寝ていました" },
    { question: "汤川 博士 是 日本 第一个 获 诺贝尔奖 的 科学家", answer: "汤川 博士 是 日本 第一个 获 诺贝尔奖 的 科学家", japanese: "湯川博士は日本で初めてノーベル賞を受賞した科学者です" },
    { question: "亚洲 第一个 主板 冬奥会 的 是 哪个 城市？ 你 知道 吗？", answer: "亚洲 第一个 主板 冬奥会 的 是 哪个 城市？ 你 知道 吗？", japanese: "アジアで最初に冬季オリンピックを開催した都市はどこですか？ 知っていますか？" },
    { question: "他 在 认真地 写 作业", answer: "他 在 认真地 写 作业", japanese: "彼は真剣に宿題を書いています" },
    { question: "孩子们 安静地 睡着了", answer: "孩子们 安静地 睡着了", japanese: "子供たちは静かに眠っています" },
    { question: "他 悄悄地 走进 姐姐 的 房间", answer: "他 悄悄地 走进 姐姐 的 房间", japanese: "彼はこっそり姉の部屋に入りました" },
    { question: "请 你 大声地 告诉 大家", answer: "请 你 大声地 告诉 大家", japanese: "どうぞみんなに大きな声で伝えてください" },
    { question: "他 的 钱包 被 小偷 偷了", answer: "他 的 钱包 被 小偷 偷了", japanese: "彼の財布は泥棒に盗まれました" },
    { question: "小李 的 相机 被 弟弟 弄坏了", answer: "小李 的 相机 被 弟弟 弄坏了", japanese: "李さんのカメラは弟に壊されました" },
    { question: "他 的 词典 被 借走了", answer: "他 的 词典 被 借走了", japanese: "彼の辞書は借りられていきました" },
    { question: "杜甫 是 著名 的 唐代 诗人， 被 称为 诗圣", answer: "杜甫 是 著名 的 唐代 诗人， 被 称为 诗圣", japanese: "杜甫は有名な唐代の詩人で、詩聖と称されています" },
    { question: "因为 时间 不 等人， 所以 我们 应该 珍惜 时间", answer: "因为 时间 不 等人， 所以 我们 应该 珍惜 时间", japanese: "時間は待ってくれないので、私たちは時間を大切にすべきです" },
    { question: "他 有 很多 中国 朋友， 因为 他 经常 去 中国", answer: "他 有 很多 中国 朋友， 因为 他 经常 去 中国", japanese: "彼には中国人の友達がたくさんいます、なぜなら彼はよく中国に行くからです" },
    { question: "他 平时 很 努力， 所以 成绩 一直 很 好", answer: "他 平时 很 努力， 所以 成绩 一直 很 好", japanese: "彼は普段とても努力しているので、成績はいつも良いです" },
    { question: "快 放假 了， 你 想 去 哪儿 旅游？", answer: "快 放假 了， 你 想 去 哪儿 旅游？", japanese: "もうすぐ休暇ですが、どこへ旅行に行きたいですか？" },
    { question: "我 想 去 加拿大 旅游", answer: "我 想 去 加拿大 旅游", japanese: "私はカナダに旅行に行きたいです" },
    { question: "我 就 要 出门 了， 明天 再 聊 吧", answer: "我 就 要 出门 了， 明天 再 聊 吧", japanese: "もう出かけるところです、明日また話しましょう" },
    { question: "我 刚刚 回来， 衣服 都 没有 换 呢", answer: "我 刚刚 回来， 衣服 都 没有 换 呢", japanese: "ちょうど戻ってきたばかりで、まだ服も着替えていません" },
    { question: "刚 进来 的 是 从 德国 来 的 留学生", answer: "刚 进来 的 是 从 德国 来 的 留学生", japanese: "ちょうど入ってきたのはドイツから来た留学生です" },
    { question: "他 很 像 他 父亲", answer: "他 很 像 他 父亲", japanese: "彼はとても父親に似ています" },
    { question: "孩子们 的 脸 像 苹果 一样 红", answer: "孩子们 的 脸 像 苹果 一样 红", japanese: "子供たちの顔はリンゴのように赤いです" },
    { question: "天上 的 白云， 好像 棉花糖 一样", answer: "天上 的 白云， 好像 棉花糖 一样", japanese: "空の白い雲は、まるで綿菓子のようです" },
    { question: "我 好像 感冒 了， 头 有点儿 疼", answer: "我 好像 感冒 了， 头 有点儿 疼", japanese: "私は風邪をひいたようで、頭が少し痛いです" },
    { question: "桌子 上 除了 电脑 之外， 什么 都 没有", answer: "桌子 上 除了 电脑 之外， 什么 都 没有", japanese: "机の上にはパソコン以外、何もありません" },
    { question: "除了 上海 以外， 我 还 去过 北京", answer: "除了 上海 以外， 我 还 去过 北京", japanese: "上海以外に、私は北京にも行ったことがあります" },
    { question: "除了 我 以外， 他们 也 看过 这部 电影", answer: "除了 我 以外， 他们 也 看过 这部 电影", japanese: "私以外に、彼らもこの映画を見たことがあります" },
    { question: "你 什么时候 来 都 没有 问题", answer: "你 什么时候 来 都 没有 问题", japanese: "あなたがいつ来ても問題ありません" },
    { question: "你 想 吃 点儿 什么?", answer: "你 想 吃 点儿 什么?", japanese: "何か食べたいものはありますか?" },
    { question: "如果 有 车 的话， 我们 就 什么 地方 都 能 去了", answer: "如果 有 车 的话， 我们 就 什么 地方 都 能 去了", japanese: "もし車があれば、どこへでも行けます" },
    { question: "请 你 站 起来", answer: "请 你 站 起来", japanese: "立ち上がってください" },
    { question: "他们 走进 教室 去了", answer: "他们 走进 教室 去了", japanese: "彼らは教室に入っていきました" },
    { question: "我 给 你 这本 小说， 你 可以 拿 回家 去 看看", answer: "我 给 你 这本 小说， 你 可以 拿 回家 去 看看", japanese: "この小説をあなたにあげます。家に持ち帰って読んでみてください" },
    { question: "我 父亲 从 北京 买 回来 了 很多 东西", answer: "我 父亲 从 北京 买 回来 了 很多 东西", japanese: "私の父は北京からたくさんのものを買ってきました" },
    { question: "请 等 一 等， 我 记 下来", answer: "请 等 一 等， 我 记 下来", japanese: "少し待ってください、メモします" },
    { question: "这个 工作 看起来 容易， 做起来 难", answer: "这个 工作 看起来 容易， 做起来 难", japanese: "この仕事は簡単そうに見えて、やるのは難しいです" },
    { question: "你 有 什么 想法 就 说 出来 吧", answer: "你 有 什么 想法 就 说 出来 吧", japanese: "何か考えがあれば、言ってみてください" },
    { question: "他 会 说 汉语， 不过 说 得 还 不 太 流利", answer: "他 会 说 汉语， 不过 说 得 还 不 太 流利", japanese: "彼は中国語を話せますが、まだあまり流暢ではありません" },
    { question: "学了 半年， 终于 会 游泳 了", answer: "学了 半年， 终于 会 游泳 了", japanese: "半年間学んで、ついに泳げるようになりました" },
    { question: "今天 下雨， 不能 游泳", answer: "今天 下雨， 不能 游泳", japanese: "今日は雨が降っているので、泳ぐことはできません" },
    { question: "她 今天 会 来 吗?", answer: "她 今天 会 来 吗?", japanese: "彼女は今日来ますか？" },
    { question: "她 今天 会 来", answer: "她 今天 会 来", japanese: "彼女は今日来ます" },
    { question: "她 今天 不会 来", answer: "她 今天 不会 来", japanese: "彼女は今日来ません" },
    { question: "请 您 放心， 明天 小李 一定 会 来 车站 接 您 的", answer: "请 您 放心， 明天 小李 一定 会 来 车站 接 您 的", japanese: "ご安心ください。明日、小李が必ず駅に迎えに来ます" },
    { question: "今年 冬天 特别 暖和， 不会 下雪", answer: "今年 冬天 特别 暖和， 不会 下雪", japanese: "今年の冬は特に暖かく、雪は降らないでしょう" },
    { question: "这么 简单 的 事情， 你 就 让 他 自己 做 吧", answer: "这么 简单 的 事情， 你 就 让 他 自己 做 吧", japanese: "こんな簡単なことは、彼に自分でやらせてください" },
    { question: "快要 高考 了， 爸爸 不 让 我 看 电视", answer: "快要 高考 了， 爸爸 不 让 我 看 电视", japanese: "もうすぐ大学入試なので、父は私にテレビを見せてくれません" },
    { question: "上个月 去 北京 的 时候， 小张 让 我 住 在 她 家", answer: "上个月 去 北京 的 时候， 小张 让 我 住 在 她 家", japanese: "先月北京に行った時、小張が私を彼女の家に泊めてくれました" },
    { question: "老师 叫 我们 早点儿 回家", answer: "老师 叫 我们 早点儿 回家", japanese: "先生は私たちに早めに帰るよう言いました" },
    { question: "这部 电影 使 我 非常 感动", answer: "这部 电影 使 我 非常 感动", japanese: "この映画は私をとても感動させました" },
    { question: "这条 街 上 的 小吃 又 便宜 又 好吃", answer: "这条 街 上 的 小吃 又 便宜 又 好吃", japanese: "この通りの軽食は安くて美味しいです" },
    { question: "这个 包 又 大 又 重， 我 自己 拿 不 动", answer: "这个 包 又 大 又 重， 我 自己 拿 不 动", japanese: "このバッグは大きくて重いので、私一人では持てません" },
    { question: "留学 生活 又 紧张 又 充实", answer: "留学 生活 又 紧张 又 充实", japanese: "留学生活は緊張感があり、充実しています" },
    { question: "这部 电影 不但 很 好看， 而且 音乐 也 很 好听", answer: "这部 电影 不但 很 好看， 而且 音乐 也 很 好听", japanese: "この映画は面白いだけでなく、音楽もとても良いです" },
    { question: "这场 音乐会 不但 规模 大， 而且 是 免费 的", answer: "这场 音乐会 不但 规模 大， 而且 是 免费 的", japanese: "このコンサートは規模が大きいだけでなく、無料でもあります" },
    { question: "不但 父母 反对， 而且 朋友 也 反对 她 跟 小张 结婚", answer: "不但 父母 反对， 而且 朋友 也 反对 她 跟 小张 结婚", japanese: "両親だけでなく、友人たちも彼女と小張の結婚に反対しています" },
    { question: "下雪 了， 怪不得 这么 冷", answer: "下雪 了， 怪不得 这么 冷", japanese: "雪が降っているので、どうりでこんなに寒いわけです" },
    { question: "他们 打扫 了 一个 上午， 怪不得 教室 这么 干净", answer: "他们 打扫 了 一个 上午， 怪不得 教室 这么 干净", japanese: "彼らは午前中ずっと掃除していたので、どうりで教室がこんなにきれいなわけです" },
    { question: "难怪 你 不 吃， 这个 菜 太 咸 了", answer: "难怪 你 不 吃， 这个 菜 太 咸 了", japanese: "どうりであなたが食べないわけです。この料理は塩辛すぎます" },
    { question: "他 是 新 来 的， 难怪 大家 都 不 认识 他", answer: "他 是 新 来 的， 难怪 大家 都 不 认识 他", japanese: "彼は新しく来た人なので、どうりで皆が彼を知らないわけです" },
    { question: "我 常常 一个 人 出去 旅行", answer: "我 常常 一个 人 出去 旅行", japanese: "私はよく一人で旅行に出かけます" },
    { question: "他 不 常 来, 因为 他 家 离 这儿 很 远", answer: "他 不 常 来, 因为 他 家 离 这儿 很 远", japanese: "彼はあまり来ません。なぜなら、彼の家はここからとても遠いからです" },
    { question: "他 身体 一直 不 太 好， 所以 经常 去 医院 看病", answer: "他 身体 一直 不 太 好， 所以 经常 去 医院 看病", japanese: "彼は体調がずっとあまり良くないので、よく病院に行って診てもらっています" },
    { question: "因为 工作 太 忙 了， 他 有时候 很 晚 才 回家", answer: "因为 工作 太 忙 了， 他 有时候 很 晚 才 回家", japanese: "仕事が忙しいので、彼は時々とても遅く帰宅します" },
    { question: "明天 我们 要 去 淮海路 看 电影", answer: "明天 我们 要 去 淮海路 看 电影", japanese: "明日私たちは淮海路で映画を見に行きます" },
    { question: "下个月 她 就 要 去 中国 留学 了", answer: "下个月 她 就 要 去 中国 留学 了", japanese: "来月、彼女は中国に留学に行く予定です" },
    { question: "桌子 上 放着 两 本 书", answer: "桌子 上 放着 两 本 书", japanese: "机の上に2冊の本が置いてあります" },
    { question: "墙 上 挂着 一幅 画儿", answer: "墙 上 挂着 一幅 画儿", japanese: "壁には一枚の絵が掛けられています" },
    { question: "前面 开 过来 了 一 辆 蓝色 的 宝马", answer: "前面 开 过来 了 一 辆 蓝色 的 宝马", japanese: "前から青いBMWが来ました" },
    { question: "昨天 这里 发生 了 一 起 交通 事故", answer: "昨天 这里 发生 了 一 起 交通 事故", japanese: "昨日ここで交通事故が起きました" },
    { question: "教室 里 走 出来 了 很 多 学生", answer: "教室 里 走 出来 了 很 多 学生", japanese: "教室からたくさんの学生が出てきました" },
    { question: "学生们 从 教室 走 出来 了", answer: "学生们 从 教室 走 出来 了", japanese: "学生たちは教室から出てきました" },
    { question: "明天 有 考试， 他 肯定 会 来 的", answer: "明天 有 考试， 他 肯定 会 来 的", japanese: "明日試験がありますので、彼は必ず来るでしょう" },
    { question: "你们 的 婚礼， 我 当然 要 来 参加 了", answer: "你们 的 婚礼， 我 当然 要 来 参加 了", japanese: "あなたたちの結婚式には、もちろん参加します" },
    { question: "他 可能 学 过 日语", answer: "他 可能 学 过 日语", japanese: "彼は日本語を学んだことがあるかもしれません" },
    { question: "你 也许 不知道， 她 已经 离开 上海 去 美国 留学 了", answer: "你 也许 不知道， 她 已经 离开 上海 去 美国 留学 了", japanese: "あなたは知らないかもしれませんが、彼女はすでに上海を離れてアメリカに留学に行きました" },
    { question: "关于 这个 课题， 我们 还 要 研究 研究", answer: "关于 这个 课题， 我们 还 要 研究 研究", japanese: "この課題については、さらに研究を進める必要があります" },
    { question: "老师 让 他 写 一 篇 关于 环保 问题 的 论文", answer: "老师 让 他 写 一 篇 关于 环保 问题 的 论文", japanese: "先生は彼に環境問題に関する論文を書かせました" },
    { question: "由于 时间 的 关系， 今天 的 会议 到此 结束", answer: "由于 时间 的 关系， 今天 的 会议 到此 结束", japanese: "時間の都合により、今日の会議はこれで終了します" },
    { question: "吃饭 前 要 洗手", answer: "吃饭 前 要 洗手", japanese: "食事の前に手を洗う必要があります" },
    { question: "不要 把 自行车 停 在 这儿", answer: "不要 把 自行车 停 在 这儿", japanese: "自転車をここに停めないでください" },
    { question: "别 把 自行车 停 在 这儿", answer: "别 把 自行车 停 在 这儿", japanese: "自転車をここに停めないでください" },
    { question: "天气 越 来 越 暖和 了", answer: "天气 越 来 越 暖和 了", japanese: "天気がますます暖かくなってきました" },
    { question: "上海 的 交通 越 来 越 方便 了", answer: "上海 的 交通 越 来 越 方便 了", japanese: "上海の交通はますます便利になっています" },
    { question: "雨 越 下 越 大 了", answer: "雨 越 下 越 大 了", japanese: "雨がどんどん強く降ってきました" },
    { question: "这次 拍 的 照片 我 越 看 越 满意", answer: "这次 拍 的 照片 我 越 看 越 满意", japanese: "今回撮った写真は、見るたびにますます満足しています" },
    { question: "她 住 在 哪儿?", answer: "她 住 在 哪儿?", japanese: "彼女はどこに住んでいますか？" },
    { question: "她 住 在 神户", answer: "她 住 在 神户", japanese: "彼女は神戸に住んでいます" },
    { question: "下次 来 杭州， 我 想 住 在 西湖 旁边 的 宾馆", answer: "下次 来 杭州， 我 想 住 在 西湖 旁边 的 宾馆", japanese: "次回杭州に行く時、私は西湖の近くのホテルに泊まりたいです" },
    { question: "他 把 钱包 放 在 桌子 上", answer: "他 把 钱包 放 在 桌子 上", japanese: "彼は財布を机の上に置きました" },
    { question: "尽管 他 优点 很 多， 但是 也 有 一些 缺点", answer: "尽管 他 优点 很 多， 但是 也 有 一些 缺点", japanese: "彼には多くの長所がありますが、いくつかの短所もあります" },
    { question: "尽管 妈妈 说 了 好多 次， 他 还是 记 不住", answer: "尽管 妈妈 说 了 好多 次， 他 还是 记 不住", japanese: "母が何度も言ったにも関わらず、彼はまだ覚えられません" },
    { question: "尽管 这 台 电脑 价格 很 贵， 但 我 还是 要 买", answer: "尽管 这 台 电脑 价格 很 贵， 但 我 还是 要 买", japanese: "このパソコンはとても高価ですが、私はそれでも買います" },
    { question: "为了 孩子， 妈妈 什么 都 愿意 做", answer: "为了 孩子， 妈妈 什么 都 愿意 做", japanese: "子供のために、母は何でも喜んでやります" },
    { question: "为了 唱 好 这 首 歌， 他 每天 都 练习", answer: "为了 唱 好 这 首 歌， 他 每天 都 练习", japanese: "この歌をうまく歌うために、彼は毎日練習しています" },
    { question: "他 每天 都 练习， 是 为了 唱 好 这 首 歌", answer: "他 每天 都 练习， 是 为了 唱 好 这 首 歌", japanese: "彼は毎日練習しているのは、この歌をうまく歌うためです" },
    { question: "读书 是 为了 学 到 更多 的 知识， 提高 自己 的 修养", answer: "读书 是 为了 学 到 更多 的 知识， 提高 自己 的 修养", japanese: "勉強するのは、もっと多くの知識を学び、自分の教養を高めるためです" },
    { question: "他 儿子 十 岁 才 开始 学 英语", answer: "他 儿子 十 岁 才 开始 学 英语", japanese: "彼の息子は10歳になって初めて英語を学び始めました" },
    { question: "他 儿子 十 岁 就 开始 学 英语 了", answer: "他 儿子 十 岁 就 开始 学 英语 了", japanese: "彼の息子は10歳の時に英語を学び始めました" },
    { question: "只有 多 说 多 练， 才 能 学 好 汉语", answer: "只有 多 说 多 练， 才 能 学 好 汉语", japanese: "たくさん話して練習することで、初めて中国語をうまく学べます" },
    { question: "俗话 说 “ 不到 长城 非 好汉 ”， 只有 去 过 长城 才 算 是 好汉", answer: "俗话 说 “ 不到 长城 非 好汉 ”， 只有 去 过 长城 才 算 是 好汉", japanese: "言い伝えに「長城に行かなければ、立派な男とは言えない」とあります。長城に行った人こそ立派な男と認められるのです" },
    { question: "既然 喜欢， 就 多 吃 点儿 吧", answer: "既然 喜欢， 就 多 吃 点儿 吧", japanese: "好きなら、もっと食べなさい" },
    { question: "既然 你 想 去 美国 留学， 就 应该 好好儿 学 英语", answer: "既然 你 想 去 美国 留学， 就 应该 好好儿 学 英语", japanese: "アメリカに留学したいなら、英語をしっかり学ばないといけません" },
    { question: "既然 已经 发生 了， 后悔 又 有 什么 用 呢？", answer: "既然 已经 发生 了， 后悔 又 有 什么 用 呢？", japanese: "すでに起こったことなら、後悔しても意味がないでしょう" },
    { question: "听说 《赤壁》 这部 电影 非常 好看， 我 非 要 去 看 不可", answer: "听说 《赤壁》 这部 电影 非常 好看， 我 非 要 去 看 不可", japanese: "『赤壁』という映画がとても面白いと聞いたので、どうしても見に行かないといけません" },
    { question: "有 机会 去 四川， 非 要 尝 尝 正宗 的 四川 菜 不可", answer: "有 机会 去 四川， 非 要 尝 尝 正宗 的 四川 菜 不可", japanese: "四川に行く機会があれば、正宗の四川料理をぜひとも食べてみてください" },
    { question: "爸爸 不 让 他 去， 他 却 非 去 不可", answer: "爸爸 不 让 他 去， 他 却 非 去 不可", japanese: "父は彼に行かせたくなかったが、彼はどうしても行かなければなりませんでした" },
    { question: "今天 我 请 客， 你 想 吃 什么， 就 点 什么", answer: "今天 我 请 客， 你 想 吃 什么， 就 点 什么", japanese: "今日は私がご馳走しますので、食べたいものを何でも注文してください" },
    { question: "你 什么时候 有 空， 我们 就 什么时候 去", answer: "你 什么时候 有 空， 我们 就 什么时候 去", japanese: "あなたの都合のいい時に、私たちはその時に行きます" },
    { question: "谁 先 回家， 谁 就 做 饭", answer: "谁 先 回家， 谁 就 做 饭", japanese: "誰が先に帰宅したら、その人がご飯を作ります" },
    { question: "哪壶 不 开 提 哪壶", answer: "哪壶 不 开 提 哪壶", japanese: "触れてはいけない話題に触れる" },
    { question: "虽然 刚 开始 学， 但是 他 网球 已经 打 得 很 不错 了", answer: "虽然 刚 开始 学， 但是 他 网球 已经 打 得 很 不错 了", japanese: "まだ始めたばかりですが、彼はすでにテニスがとても上手です" },
    { question: "虽然 白天 很 热， 但是 晚上 很 凉快", answer: "虽然 白天 很 热， 但是 晚上 很 凉快", japanese: "昼はとても暑いですが、夜はとても涼しいです" },
    { question: "虽然 不 懂 中文， 但是 我 很 喜欢 看 中国 电影", answer: "虽然 不 懂 中文， 但是 我 很 喜欢 看 中国 电影", japanese: "中国語はわかりませんが、私は中国映画を見るのがとても好きです" },
    { question: "那天 雨 下 得 很 大， 所以 一个 人 也 没 来", answer: "那天 雨 下 得 很 大， 所以 一个 人 也 没 来", japanese: "その日は雨がとても強く降っていたので、誰も来ませんでした" },
    { question: "他 有 很 多 DVD， 但是 一 张 也 不 借 给 我", answer: "他 有 很 多 DVD， 但是 一 张 也 不 借 给 我", japanese: "彼はたくさんDVDを持っていますが、1枚も私には貸してくれません" },
    { question: "我 一点儿 也 不 知道", answer: "我 一点儿 也 不 知道", japanese: "私は全く知りません" },
    { question: "我 刚 吃 过 蛋糕， 现在 一点儿 也 不 饿", answer: "我 刚 吃 过 蛋糕， 现在 一点儿 也 不 饿", japanese: "私はさっきケーキを食べたので、今は全くお腹が空いていません" },
    { question: "他 一 边 看 书 一 边 听 音乐", answer: "他 一 边 看 书 一 边 听 音乐", japanese: "彼は本を読みながら音楽を聴いています" },
    { question: "我们 一 边 吃饭 一 边 聊天儿， 很 热闹", answer: "我们 一 边 吃饭 一 边 聊天儿， 很 热闹", japanese: "私たちは食事をしながらおしゃべりをして、とても賑やかです" },
    { question: "晚会 上， 她 一 边 唱 歌 一 边 跳 舞， 表演 得 很 精彩", answer: "晚会 上， 她 一 边 唱 歌 一 边 跳 舞， 表演 得 很 精彩", japanese: "パーティーで、彼女は歌いながら踊り、とても素晴らしいパフォーマンスをしました" },
    { question: "既然 来 了 苏州， 就 不能 不 去 拙政园 看 看", answer: "既然 来 了 苏州， 就 不能 不 去 拙政园 看 看", japanese: "すでに蘇州に来たのだから、拙政園を見に行かないわけにはいきません" },
    { question: "明天 要 考试， 所以 今天 不 得不 复习", answer: "明天 要 考试， 所以 今天 不 得不 复习", japanese: "明日試験があるので、今日は復習せざるを得ません" },
    { question: "太 晚 了， 没有 车 了， 我们 不 得不 打的 回家", answer: "太 晚 了， 没有 车 了， 我们 不 得不 打的 回家", japanese: "とても遅くなって、もう車がないので、タクシーで帰らざるを得ません" },
    { question: "太 难 了， 连 老师 都 不 会", answer: "太 难 了， 连 老师 都 不 会", japanese: "とても難しいので、先生でさえできません" },
    { question: "刚 来 中国 的 时候， 我 连 一句 中文 都 不 会 说", answer: "刚 来 中国 的 时候， 我 连 一句 中文 都 不 会 说", japanese: "中国に来たばかりの時、私は一言も中国語を話せませんでした" },
    { question: "山口 对 历史 很 感兴趣， 别 说 日本 历史， 连 中国 历史 都 非常 了解", answer: "山口 对 历史 很 感兴趣， 别 说 日本 历史， 连 中国 历史 都 非常 了解", japanese: "山口は歴史に非常に興味があり、日本の歴史はもちろん、中国の歴史も非常に詳しいです" },


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
    const shuffledWords = shuffle(currentProblem.question.split(" "));

    problemContainer.innerHTML = "";

    shuffledWords.forEach(word => {
        const wordElement = document.createElement("div");
        wordElement.classList.add("word");

        // ピンインを生成
        const pinyinText = pinyinPro.pinyin(word, { toneType: "tone" });

        // 漢字とピンインを交互に表示
        wordElement.innerHTML = `
            <span class="chinese">${word}</span>
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
        <p><strong>正解:</strong> ${correctAnswer} (${pinyinPro.pinyin(correctAnswer)})</p>
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
        word.addEventListener("dragstart", () => word.classList.add("dragging"));
        word.addEventListener("dragend", () => word.classList.remove("dragging"));
    });

    problemContainer.addEventListener("dragover", e => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(e.clientX);
        if (afterElement == null) {
            problemContainer.appendChild(dragging);
        } else {
            problemContainer.insertBefore(dragging, afterElement);
        }
    });

    function getDragAfterElement(x) {
        const draggableElements = [...problemContainer.querySelectorAll(".word:not(.dragging)")];
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
