// 定义全局变量
var questionsData = {
    chapter1: {
        title: "第一章",
        questions: [
            {
                id: 1,
                question: "人工智能的研究目的是促使智能机器具备______能力.",
                options: [
                    "A. 会编程、会设计、会制造",
                    "B. 以上都不是",
                    "C. 会飞、会游泳、会跑步",
                    "D. 会听、会看、会说、会思考、会学习、会行动"
                ],
                answer: "D. 会听、会看、会说、会思考、会学习、会行动"
            },
            {
                id: 2,
                question: "新技术的应用会带来______.",
                options: [
                    "A. 更多的失业",
                    "B. 经济衰退",
                    "C. 以上都不是",
                    "D. 新的行业和更多的就业岗位"
                ],
                answer: "D. 新的行业和更多的就业岗位"
            },
            {
                id: 3,
                question: "行为主义的原理是______.",
                options: [
                    "A. 控制论及'感知-动作'型控制系统",
                    "B. 物理符号系统假设和有限合理性原理",
                    "C. 神经网络及其连接机制",
                    "D. 以上都不是"
                ],
                answer: "A. 控制论及'感知-动作'型控制系统"
            },
            {
                id: 4,
                question: "连接主义又称______.",
                options: [
                    "A. 逻辑主义、心理学派或计算机学派",
                    "B. 进化主义或控制论学派",
                    "C. 以上都不是",
                    "D. 仿生学派或生理学派"
                ],
                answer: "D. 仿生学派或生理学派"
            },
            {
                id: 5,
                question: "符号主义又称______.",
                options: [
                    "A. 进化主义或控制论学派",
                    "B. 逻辑主义、心理学派或计算机学派",
                    "C. 仿生学派或生理学派",
                    "D. 以上都不是"
                ],
                answer: "B. 逻辑主义、心理学派或计算机学派"
            },
            {
                id: 6,
                question: "符号主义的原理是______.",
                options: [
                    "A. 控制论及'感知-动作'型控制系统",
                    "B. 物理符号系统假设和有限合理性原理",
                    "C. 以上都不是",
                    "D. 神经网络及其连接机制"
                ],
                answer: "B. 物理符号系统假设和有限合理性原理"
            },
            {
                id: 7,
                question: "人工智能技术的主要作用是______.",
                options: [
                    "A. 取代人类",
                    "B. 以上都不是",
                    "C. 使人类失业",
                    "D. 把人类从艰苦、危险、繁重的体力劳动中解放出来"
                ],
                answer: "D. 把人类从艰苦、危险、繁重的体力劳动中解放出来"
            },
            {
                id: 8,
                question: "人工智能的核心思想是______.",
                options: [
                    "A. 制造人类智能",
                    "B. 研究人类智能",
                    "C. 用机器模拟人类的学习能力和人类智能特征",
                    "D. 以上都不是"
                ],
                answer: "C. 用机器模拟人类的学习能力和人类智能特征"
            },
            {
                id: 9,
                question: "人工智能的三大学派不包括______.",
                options: [
                    "A. 连接主义",
                    "B. 符号主义",
                    "C. 行为主义",
                    "D. 进化主义"
                ],
                answer: "D. 进化主义"
            },
            {
                id: 10,
                question: "超人工智能的特点是______.",
                options: [
                    "A. 只能解决特定领域的问题",
                    "B. 以上都不是",
                    "C. 能同时解决不同领域的问题",
                    "D. 在任何领域都比最聪明的人类大脑还要聪明"
                ],
                answer: "D. 在任何领域都比最聪明的人类大脑还要聪明"
            },
            {
                id: 11,
                question: "AlphaGo属于______.",
                options: [
                    "A. 弱人工智能",
                    "B. 超人工智能",
                    "C. 强人工智能",
                    "D. 以上都不是"
                ],
                answer: "A. 弱人工智能"
            },
            {
                id: 12,
                question: "强人工智能的特点是______.",
                options: [
                    "A. 能同时解决不同领域的问题",
                    "B. 比人类更聪明",
                    "C. 以上都不是",
                    "D. 只能解决特定领域的问题"
                ],
                answer: "A. 能同时解决不同领域的问题"
            },
            {
                id: 13,
                question: "连接主义的原理是______.",
                options: [
                    "A. 控制论及'感知-动作'型控制系统",
                    "B. 神经网络及其连接机制",
                    "C. 物理符号系统假设和有限合理性原理",
                    "D. 以上都不是"
                ],
                answer: "B. 神经网络及其连接机制"
            },
            {
                id: 14,
                question: "行为主义又称______.",
                options: [
                    "A. 以上都不是",
                    "B. 仿生学派或生理学派",
                    "C. 进化主义或控制论学派",
                    "D. 逻辑主义、心理学派或计算机学派"
                ],
                answer: "C. 进化主义或控制论学派"
            },
            {
                id: 15,
                question: "弱人工智能的特点是______.",
                options: [
                    "A. 只能解决特定领域的问题",
                    "B. 比人类更聪明",
                    "C. 能解决所有领域的问题",
                    "D. 以上都不是"
                ],
                answer: "A. 只能解决特定领域的问题"
            }
        ]
    },
    chapter2: {
        title: "第二章",
        questions: [
            {
                id: 1,
                question: "AlphaGo战胜李世石的核心技术是( )",
                options: [
                    "A. 知识图谱",
                    "B. 强化学习与蒙特卡洛树搜索",
                    "C. 卷积神经网络",
                    "D. 符号逻辑推理"
                ],
                answer: "B. 强化学习与蒙特卡洛树搜索"
            },
            {
                id: 2,
                question: "k-means算法的初始步骤是：",
                options: [
                    "A. 更新Q值",
                    "B. 随机选择初始簇中心",
                    "C. 执行动作",
                    "D. 初始化Q表"
                ],
                answer: "B. 随机选择初始簇中心"
            },
            {
                id: 3,
                question: "k-means算法的核心思想是：",
                options: [
                    "A. 学习输入到输出的映射",
                    "B. 最大化累积奖励",
                    "C. 通过试错获得奖励信号",
                    "D. 迭代更新簇中心"
                ],
                answer: "D. 迭代更新簇中心"
            },
            {
                id: 4,
                question: "k-means算法的终止条件是：",
                options: [
                    "A. 奖励信号最大化",
                    "B. 数据点的归属簇不再变化",
                    "C. 策略优化完成",
                    "D. Q值收敛"
                ],
                answer: "B. 数据点的归属簇不再变化"
            },
            {
                id: 5,
                question: "k-means聚类算法的目标是：",
                options: [
                    "A. 学习输入到输出的映射",
                    "B. 最大化累积奖励",
                    "C. 将数据点分为若干簇",
                    "D. 更新Q值"
                ],
                answer: "C. 将数据点分为若干簇"
            },
            {
                id: 6,
                question: "Q-learning的核心是：",
                options: [
                    "A. 聚类中心的更新",
                    "B. 动作价值函数Q(s, a)",
                    "C. 输入特征的选择",
                    "D. 输出标签的预测"
                ],
                answer: "B. 动作价值函数Q(s, a)"
            },
            {
                id: 7,
                question: "Q-learning的目标是逼近：",
                options: [
                    "A. 最优奖励信号",
                    "B. 最优输入特征",
                    "C. 最优Q值Q*",
                    "D. 最优聚类中心"
                ],
                answer: "C. 最优Q值Q*"
            },
            {
                id: 8,
                question: "Q-learning的迭代过程包括：",
                options: [
                    "A. 奖励信号最大化、策略优化",
                    "B. 初始化簇中心、计算距离、更新簇中心",
                    "C. 选择动作、执行动作、更新Q值",
                    "D. 输入特征选择、输出标签预测"
                ],
                answer: "C. 选择动作、执行动作、更新Q值"
            },
            {
                id: 9,
                question: "Q-learning算法的第一步是：",
                options: [
                    "A. 初始化Q表",
                    "B. 执行动作",
                    "C. 选择动作",
                    "D. 更新Q值"
                ],
                answer: "A. 初始化Q表"
            },
            {
                id: 10,
                question: "下列技术中属于无监督学习的是( )",
                options: [
                    "A. 决策树",
                    "B. 线性回归",
                    "C. 逻辑回归",
                    "D. K-means聚类"
                ],
                answer: "D. K-means聚类"
            },
            {
                id: 11,
                question: "以下哪项是监督学习的核心要素之一？",
                options: [
                    "A. 聚类中心",
                    "B. 动作",
                    "C. 奖励信号",
                    "D. 输入特征"
                ],
                answer: "D. 输入特征"
            },
            {
                id: 12,
                question: "以下属于无监督学习的是( )",
                options: [
                    "A. 新闻情感分析",
                    "B. 股票价格预测",
                    "C. 客户分群",
                    "D. 人脸识别"
                ],
                answer: "C. 客户分群"
            },
            {
                id: 13,
                question: "以下属于监督学习任务的是( )",
                options: [
                    "A. 垃圾邮件分类",
                    "B. 图像风格迁移",
                    "C. 机器人行走",
                    "D. 客户群体聚类"
                ],
                answer: "A. 垃圾邮件分类"
            },
            {
                id: 14,
                question: "在k-means算法中，数据点的归属簇依据是：",
                options: [
                    "A. 奖励信号",
                    "B. 到簇中心的距离",
                    "C. ε-greedy策略",
                    "D. 动作价值函数"
                ],
                answer: "B. 到簇中心的距离"
            },
            {
                id: 15,
                question: "在k-means算法中，簇中心的初始选择是：",
                options: [
                    "A. 动态的",
                    "B. 随机的",
                    "C. 离散的",
                    "D. 固定的"
                ],
                answer: "B. 随机的"
            },
            {
                id: 16,
                question: "在k-means算法中，簇中心的更新依据是：",
                options: [
                    "A. 数据点的平均值",
                    "B. 动作价值函数",
                    "C. ε-greedy策略",
                    "D. 奖励信号"
                ],
                answer: "A. 数据点的平均值"
            },
            {
                id: 17,
                question: "在k-means算法中，簇中心的更新频率是：",
                options: [
                    "A. 每次奖励后",
                    "B. 每次动作后",
                    "C. 每次输入后",
                    "D. 每次迭代后"
                ],
                answer: "D. 每次迭代后"
            },
            {
                id: 18,
                question: "在Q-learning中，Q值的更新依据是：",
                options: [
                    "A. 聚类中心",
                    "B. 输出标签",
                    "C. 奖励和新状态",
                    "D. 输入特征"
                ],
                answer: "C. 奖励和新状态"
            },
            {
                id: 19,
                question: "在Q-learning中，ε-greedy策略的作用是：",
                options: [
                    "A. 平衡探索与利用",
                    "B. 更新Q值",
                    "C. 预测输出标签",
                    "D. 选择聚类中心"
                ],
                answer: "A. 平衡探索与利用"
            },
            {
                id: 20,
                question: "在Q-learning中，动作的选择可以使用：",
                options: [
                    "A. ε-greedy策略",
                    "B. 聚类算法",
                    "C. 随机森林",
                    "D. 线性回归"
                ],
                answer: "A. ε-greedy策略"
            },
            {
                id: 21,
                question: "在强化学习中，智能体的决策依据是：",
                options: [
                    "A. 输入特征",
                    "B. 聚类中心",
                    "C. 奖励信号",
                    "D. 策略"
                ],
                answer: "D. 策略"
            },
            {
                id: 22,
                question: "强化学习中的动作是：",
                options: [
                    "A. 数据点的平均值",
                    "B. 智能体可执行的操作",
                    "C. 环境的当前情境描述",
                    "D. 输入特征"
                ],
                answer: "B. 智能体可执行的操作"
            },
            {
                id: 23,
                question: "强化学习中的奖励信号是：",
                options: [
                    "A. 环境的即时反馈",
                    "B. 聚类中心",
                    "C. 输出标签",
                    "D. 输入特征"
                ],
                answer: "A. 环境的即时反馈"
            },
            {
                id: 24,
                question: "强化学习中的状态是：",
                options: [
                    "A. 环境的当前情境描述",
                    "B. 数据点的平均值",
                    "C. 输入特征",
                    "D. 动作的即时反馈"
                ],
                answer: "A. 环境的当前情境描述"
            },
            {
                id: 25,
                question: "强化学习中的环境是：",
                options: [
                    "A. 数据点的平均值",
                    "B. 输入特征",
                    "C. 动作的即时反馈",
                    "D. 智能体交互的外部系统"
                ],
                answer: "D. 智能体交互的外部系统"
            },
            {
                id: 26,
                question: "强化学习的智能体与环境的交互方式是：",
                options: [
                    "A. 输入特征到输出标签的映射",
                    "B. 聚类中心的更新",
                    "C. 试错",
                    "D. 动作价值函数的计算"
                ],
                answer: "C. 试错"
            },
            {
                id: 27,
                question: "强化学习的核心思想是：",
                options: [
                    "A. 预测连续变量",
                    "B. 通过试错获得奖励信号",
                    "C. 计算聚类中心",
                    "D. 学习输入到输出的映射"
                ],
                answer: "B. 通过试错获得奖励信号"
            },
            {
                id: 28,
                question: "强化学习的目标是：",
                options: [
                    "A. 最大化累积奖励",
                    "B. 更新Q值",
                    "C. 学习输入到输出的映射",
                    "D. 将数据点分为若干簇"
                ],
                answer: "A. 最大化累积奖励"
            },
            {
                id: 29,
                question: "深度学习中用于优化神经网络的算法是( )",
                options: [
                    "A. 反向传播",
                    "B. K-means",
                    "C. A*搜索",
                    "D. 决策树"
                ],
                answer: "A. 反向传播"
            },
            {
                id: 30,
                question: "监督学习中的分类任务的标签是：",
                options: [
                    "A. 动态的",
                    "B. 随机的",
                    "C. 连续的",
                    "D. 离散的"
                ],
                answer: "D. 离散的"
            },
            {
                id: 31,
                question: "监督学习的标签被称为：",
                options: [
                    "A. 奖励信号",
                    "B. 监督信号",
                    "C. 动作价值函数",
                    "D. 聚类中心"
                ],
                answer: "B. 监督信号"
            },
            {
                id: 32,
                question: "监督学习的目标是通过带标签的训练数据学习什么？",
                options: [
                    "A. 聚类中心",
                    "B. 输入特征到输出标签的映射函数",
                    "C. 奖励信号",
                    "D. 动作价值函数"
                ],
                answer: "B. 输入特征到输出标签的映射函数"
            },
            {
                id: 33,
                question: "线性回归的假设函数形式是：",
                options: [
                    "A. h(x) = Q(s, a)",
                    "B. h(x) = w[T]x + b",
                    "C. h(x) = max(a)",
                    "D. h(x) = Σ(x)"
                ],
                answer: "B. h(x) = w[T]x + b"
            },
            {
                id: 34,
                question: "PCA是一种______技术，用于压缩数据维度。",
                options: [
                    "A. 降维",
                    "B. 聚类",
                    "C. 分类",
                    "D. 回归"
                ],
                answer: "A. 降维"
            },
            {
                id: 35,
                question: "决策树通过规则划分提供高______性。",
                options: [
                    "A. 解释",
                    "B. 准确",
                    "C. 效率",
                    "D. 速度"
                ],
                answer: "A. 解释"
            },
            {
                id: 36,
                question: "决策树需要防止______问题的发生。",
                options: [
                    "A. 过拟合",
                    "B. 欠拟合",
                    "C. 噪声",
                    "D. 偏差"
                ],
                answer: "A. 过拟合"
            },
            {
                id: 37,
                question: "分类任务的标签是______的。",
                options: [
                    "A. 连续",
                    "B. 离散",
                    "C. 随机",
                    "D. 动态"
                ],
                answer: "B. 离散"
            },
            {
                id: 38,
                question: "回归任务的标签是______的。",
                options: [
                    "A. 连续",
                    "B. 离散",
                    "C. 随机",
                    "D. 动态"
                ],
                answer: "A. 连续"
            },
            {
                id: 39,
                question: "基因表达分析可以通过______技术可视化高维基因数据。",
                options: [
                    "A. 降维",
                    "B. 聚类",
                    "C. 分类",
                    "D. 回归"
                ],
                answer: "A. 降维"
            },
            {
                id: 40,
                question: "强化学习中的______策略用于平衡探索与利用。",
                options: [
                    "A. ε-greedy",
                    "B. 随机",
                    "C. 贪婪",
                    "D. 最优"
                ],
                answer: "A. ε-greedy"
            },
            {
                id: 41,
                question: "强化学习的目标是最大化长期累积的______。",
                options: [
                    "A. 奖励",
                    "B. 损失",
                    "C. 误差",
                    "D. 偏差"
                ],
                answer: "A. 奖励"
            },
            {
                id: 42,
                question: "强化学习通过与______交互获得奖励信号，学习最优策略。",
                options: [
                    "A. 环境",
                    "B. 数据",
                    "C. 标签",
                    "D. 特征"
                ],
                answer: "A. 环境"
            },
            {
                id: 43,
                question: "无监督学习的典型任务包括______、降维、关联规则挖掘和异常检测。",
                options: [
                    "A. 聚类",
                    "B. 分类",
                    "C. 回归",
                    "D. 预测"
                ],
                answer: "A. 聚类"
            },
            {
                id: 44,
                question: "无监督学习的目标是从数据中自主发现隐藏的______、模式或规律。",
                options: [
                    "A. 结构",
                    "B. 特征",
                    "C. 标签",
                    "D. 关系"
                ],
                answer: "A. 结构"
            },
            {
                id: 45,
                question: "无监督学习的目标是发现数据的内在______。",
                options: [
                    "A. 结构",
                    "B. 特征",
                    "C. 标签",
                    "D. 关系"
                ],
                answer: "A. 结构"
            },
            {
                id: 46,
                question: "机器学习中用于分类任务的______算法通过概率建模进行预测。",
                options: [
                    "A. 线性回归",
                    "B. 逻辑回归",
                    "C. 决策树",
                    "D. 随机森林"
                ],
                answer: "B. 逻辑回归"
            },
            {
                id: 47,
                question: "机器学习中的______算法通过试错获得最优策略。",
                options: [
                    "A. 监督学习",
                    "B. 无监督学习",
                    "C. 强化学习",
                    "D. 深度学习"
                ],
                answer: "C. 强化学习"
            },
            {
                id: 48,
                question: "梯度下降是一种优化______的方法。",
                options: [
                    "A. 参数",
                    "B. 特征",
                    "C. 标签",
                    "D. 数据"
                ],
                answer: "A. 参数"
            },
            {
                id: 49,
                question: "监督学习分为______和分类两种类型。",
                options: [
                    "A. 回归",
                    "B. 聚类",
                    "C. 降维",
                    "D. 预测"
                ],
                answer: "A. 回归"
            },
            {
                id: 50,
                question: "监督学习的核心要素包括输入特征、输出标签和______函数。",
                options: [
                    "A. 假设",
                    "B. 损失",
                    "C. 目标",
                    "D. 优化"
                ],
                answer: "A. 假设"
            },
            {
                id: 51,
                question: "监督学习的目标是通过带标签的训练数据，学习输入特征到输出标签的______函数。",
                options: [
                    "A. 映射",
                    "B. 转换",
                    "C. 变换",
                    "D. 处理"
                ],
                answer: "A. 映射"
            },
            {
                id: 52,
                question: "监督学习的评估可以通过______等量化指标进行。",
                options: [
                    "A. 准确率",
                    "B. 损失",
                    "C. 误差",
                    "D. 偏差"
                ],
                answer: "A. 准确率"
            },
            {
                id: 53,
                question: "监督学习需要______数据，而无监督学习不需要。",
                options: [
                    "A. 带标签",
                    "B. 原始",
                    "C. 处理",
                    "D. 清洗"
                ],
                answer: "A. 带标签"
            },
            {
                id: 54,
                question: "线性回归假设特征与标签之间存在线性______。",
                options: [
                    "A. 关系",
                    "B. 映射",
                    "C. 转换",
                    "D. 变换"
                ],
                answer: "A. 关系"
            },
            {
                id: 55,
                question: "线性回归的目标函数是最小化预测值与真实值的______。",
                options: [
                    "A. 均方误差",
                    "B. 绝对误差",
                    "C. 相对误差",
                    "D. 偏差"
                ],
                answer: "A. 均方误差"
            },
            {
                id: 56,
                question: "聚类是一种无监督学习任务，其目标是将相似数据______。",
                options: [
                    "A. 分组",
                    "B. 分类",
                    "C. 预测",
                    "D. 回归"
                ],
                answer: "A. 分组"
            },
            {
                id: 57,
                question: "谷歌DeepMind开发的围棋AI名称是______。",
                options: [
                    "A. AlphaGo",
                    "B. DeepBlue",
                    "C. Watson",
                    "D. Siri"
                ],
                answer: "A. AlphaGo"
            },
            {
                id: 58,
                question: "K-means是一种常见的聚类算法。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 59,
                question: "PCA是一种降维技术，属于无监督学习。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 60,
                question: "决策树算法属于强化学习范畴。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 61,
                question: "强化学习的反馈机制是一次性明确标签。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 62,
                question: "强化学习的奖励信号是延迟且稀疏的。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 63,
                question: "无监督学习不需要任何数据标注。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 64,
                question: "无监督学习的目标是最大化长期累积奖励。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 65,
                question: "无监督学习的评估通常依赖领域知识或间接指标。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 66,
                question: "监督学习可以通过准确率等量化指标进行评估。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 67,
                question: "监督学习的假设函数表示输入到输出的映射关系。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 68,
                question: "监督学习的标签可以是连续的或离散的。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 69,
                question: "监督学习的目标是发现数据的内在结构。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 70,
                question: "监督学习的目标是拟合输入与输出之间的关系。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 71,
                question: "监督学习需要标注数据训练模型。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 72,
                question: "聚类是无监督学习的典型任务之一。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 73,
                question: "逻辑回归是一种典型的无监督学习算法。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 74,
                question: "降维技术可以用于基因表达数据的可视化。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            }
        ]
    },
    chapter3: {
        title: "第三章",
        questions: [
            {
                id: 1,
                question: "池化层的作用是降低数据量并保留重要信息。",
                type: "judge",
                answer: "对"
            },
            {
                id: 2,
                question: "以下哪种深度学习模型用于图像分割任务？",
                options: [
                    "A. U-Net",
                    "B. BERT",
                    "C. Transformer",
                    "D. YOLO"
                ],
                answer: "A. U-Net"
            },
            {
                id: 3,
                question: "以下哪种深度学习模型适用于文本生成任务？",
                options: [
                    "A. GPT系列",
                    "B. Faster R-CNN",
                    "C. YOLO",
                    "D. Mask R-CNN"
                ],
                answer: "A. GPT系列"
            },
            {
                id: 4,
                question: "卷积神经网络的工作流程包括卷积层、池化层和全连接层。",
                type: "judge",
                answer: "对"
            },
            {
                id: 5,
                question: "神经网络的工作流程中，神经元计算包括加权求和并通过______函数处理。",
                type: "fill",
                answer: "激活"
            },
            {
                id: 6,
                question: "______和GRU是循环神经网络的改进版本。",
                type: "fill",
                answer: "LSTM"
            },
            {
                id: 7,
                question: "深度学习通过构建多层神经网络来模拟人脑的神经结构和信息处理机制。",
                type: "judge",
                answer: "对"
            },
            {
                id: 8,
                question: "神经网络的激活函数可以是以下哪种？",
                options: [
                    "A. Tanh",
                    "B. Sigmoid",
                    "C. ReLU",
                    "D. 以上都是"
                ],
                answer: "D. 以上都是"
            },
            {
                id: 9,
                question: "卷积神经网络通过卷积层和______层提取局部特征。",
                type: "fill",
                answer: "池化"
            },
            {
                id: 10,
                question: "训练GPT-3消耗的电力足够一个美国家庭使用______年。",
                type: "fill",
                answer: "100"
            },
            {
                id: 11,
                question: "以下哪种深度学习模型适用于处理时间序列数据？",
                options: [
                    "A. 前馈神经网络",
                    "B. RNN",
                    "C. 决策树",
                    "D. CNN"
                ],
                answer: "B. RNN"
            },
            {
                id: 12,
                question: "深度学习与传统机器学习的区别之一是深度学习模型的______性更高。",
                type: "fill",
                answer: "复杂"
            },
            {
                id: 13,
                question: "以下哪种深度学习框架专注于图像处理？",
                options: [
                    "A. CNN",
                    "B. GRU",
                    "C. LSTM",
                    "D. RNN"
                ],
                answer: "A. CNN"
            },
            {
                id: 14,
                question: "深度学习的主要模型中，哪种模型能够捕捉时间依赖关系？",
                options: [
                    "A. CNN",
                    "B. 前馈神经网络",
                    "C. 决策树",
                    "D. RNN"
                ],
                answer: "D. RNN"
            },
            {
                id: 15,
                question: "深度学习的目标是通过训练数据调整网络______，优化模型性能。",
                type: "fill",
                answer: "参数"
            },
            {
                id: 16,
                question: "以下哪种深度学习模型适用于情感分析任务？",
                options: [
                    "A. Faster R-CNN",
                    "B. BERT",
                    "C. YOLO",
                    "D. Mask R-CNN"
                ],
                answer: "B. BERT"
            },
            {
                id: 17,
                question: "神经网络的连接方式中，全连接的特点是什么？",
                options: [
                    "A. 每个神经元与上一层的所有神经元相连",
                    "B. 每个神经元与下一层的部分神经元相连",
                    "C. 每个神经元与下一层的所有神经元相连",
                    "D. 每个神经元与上一层的部分神经元相连"
                ],
                answer: "C. 每个神经元与下一层的所有神经元相连"
            },
            {
                id: 18,
                question: "Deepseek R1的参数量达到______亿级别。",
                type: "fill",
                answer: "6710"
            },
            {
                id: 19,
                question: "深度学习相比传统机器学习的主要优势是什么？",
                options: [
                    "A. 计算资源要求低",
                    "B. 适用于中小规模数据",
                    "C. 数据需求少",
                    "D. 模型复杂性高"
                ],
                answer: "D. 模型复杂性高"
            },
            {
                id: 20,
                question: "以下哪种深度学习模型专门用于处理图像数据？",
                options: [
                    "A. CNN",
                    "B. RNN",
                    "C. LSTM",
                    "D. GRU"
                ],
                answer: "A. CNN"
            },
            {
                id: 21,
                question: "卷积神经网络的核心操作包括以下哪一项？",
                options: [
                    "A. 数据输入",
                    "B. 激活函数",
                    "C. 卷积层",
                    "D. 加权求和"
                ],
                answer: "C. 卷积层"
            },
            {
                id: 22,
                question: "自动语音识别(ASR)是深度学习在语音识别中的应用。",
                type: "judge",
                answer: "对"
            },
            {
                id: 23,
                question: "深度学习的主要模型包括前馈神经网络、卷积神经网络和______神经网络。",
                type: "fill",
                answer: "循环"
            },
            {
                id: 24,
                question: "U-Net和Mask R-CNN是用于图像分割的深度学习模型。",
                type: "judge",
                answer: "对"
            },
            {
                id: 25,
                question: "以下哪种任务属于语音识别的应用场景？",
                options: [
                    "A. 语音转文字",
                    "B. 图像分类",
                    "C. 文本生成",
                    "D. 情感分析"
                ],
                answer: "A. 语音转文字"
            },
            {
                id: 26,
                question: "神经网络的全连接方式是每个神经元与下一层的所有神经元相连。",
                type: "judge",
                answer: "对"
            },
            {
                id: 27,
                question: "2012年ImageNet比赛夺冠的神经网络模型是______。",
                type: "fill",
                answer: "AlexNet"
            },
            {
                id: 28,
                question: "以下哪种模型是深度学习的主要模型之一？",
                options: [
                    "A. 前馈神经网络",
                    "B. 决策树",
                    "C. 支持向量机",
                    "D. K-Means"
                ],
                answer: "A. 前馈神经网络"
            },
            {
                id: 29,
                question: "卷积神经网络的池化层主要用于什么？",
                options: [
                    "A. 数据输入",
                    "B. 提取局部特征",
                    "C. 降低数据维度",
                    "D. 数据归一化"
                ],
                answer: "C. 降低数据维度"
            },
            {
                id: 30,
                question: "以下哪种任务属于计算机视觉的应用场景？",
                options: [
                    "A. 情感分析",
                    "B. 语音识别",
                    "C. 图像分类",
                    "D. 文本生成"
                ],
                answer: "C. 图像分类"
            },
            {
                id: 31,
                question: "深度学习需要大量数据和高计算资源支持。",
                type: "judge",
                answer: "对"
            },
            {
                id: 32,
                question: "下列属于连接主义技术路径的是()",
                options: [
                    "A. 循环神经网络",
                    "B. 决策树",
                    "C. 知识图谱",
                    "D. 专家系统"
                ],
                answer: "A. 循环神经网络"
            },
            {
                id: 33,
                question: "神经网络的输入层负责______数据。",
                type: "fill",
                answer: "接收"
            },
            {
                id: 34,
                question: "卷积层的主要功能是提取边缘、纹理等特征。",
                type: "judge",
                answer: "对"
            },
            {
                id: 35,
                question: "以下哪种激活函数常用于神经网络？",
                options: [
                    "A. Tanh",
                    "B. ReLU",
                    "C. 以上都是",
                    "D. Sigmoid"
                ],
                answer: "C. 以上都是"
            },
            {
                id: 36,
                question: "池化层的主要作用是提取边缘特征。",
                type: "judge",
                answer: "错"
            },
            {
                id: 37,
                question: "训练GPT-3消耗的电力足够一个美国家庭使用______年。",
                type: "fill",
                answer: "100"
            },
            {
                id: 38,
                question: "神经网络的隐藏层负责______数据。",
                type: "fill",
                answer: "处理"
            },
            {
                id: 39,
                question: "以下哪种任务属于自然语言处理的应用场景？",
                options: [
                    "A. 说话人识别",
                    "B. 图像分割",
                    "C. 机器翻译",
                    "D. 目标检测"
                ],
                answer: "C. 机器翻译"
            },
            {
                id: 40,
                question: "以下哪种模型是RNN的改进版本？",
                options: [
                    "A. U-Net",
                    "B. Mask R-CNN",
                    "C. YOLO",
                    "D. LSTM"
                ],
                answer: "D. LSTM"
            },
            {
                id: 41,
                question: "YOLO和Faster R-CNN是用于目标______的深度学习模型。",
                type: "fill",
                answer: "检测"
            },
            {
                id: 42,
                question: "YOLO和Faster R-CNN是目标检测的深度学习模型。",
                type: "judge",
                answer: "对"
            },
            {
                id: 43,
                question: "循环神经网络的主要特点是什么？",
                options: [
                    "A. 降低数据维度",
                    "B. 捕捉时间依赖关系",
                    "C. 提取局部特征",
                    "D. 处理静态数据"
                ],
                answer: "B. 捕捉时间依赖关系"
            },
            {
                id: 44,
                question: "神经网络的工作流程中，数据输入后第一步是什么？",
                options: [
                    "A. 数据归一化",
                    "B. 激活函数处理",
                    "C. 加权求和",
                    "D. 输出预测结果"
                ],
                answer: "C. 加权求和"
            },
            {
                id: 45,
                question: "神经网络的隐藏层通过加权求和和激活函数处理后得到______。",
                type: "fill",
                answer: "输出"
            },
            {
                id: 46,
                question: "卷积神经网络专注于图像处理，能够提取局部特征。",
                type: "judge",
                answer: "对"
            },
            {
                id: 47,
                question: "ASR(Automatic Speech Recognition)用于语音______。",
                type: "fill",
                answer: "转文字"
            },
            {
                id: 48,
                question: "常见的激活函数包括______和Sigmoid。",
                type: "fill",
                answer: "ReLU"
            },
            {
                id: 49,
                question: "Transformer和BERT是用于机器______的深度学习模型。",
                type: "fill",
                answer: "翻译"
            },
            {
                id: 50,
                question: "U-Net和Mask R-CNN是用于图像______的深度学习模型。",
                type: "fill",
                answer: "分割"
            },
            {
                id: 51,
                question: "Transformer和BERT是自然语言处理中的机器翻译模型。",
                type: "judge",
                answer: "对"
            },
            {
                id: 52,
                question: "深度学习适用于复杂任务，如图像分类、目标检测和图像______。",
                type: "fill",
                answer: "分割"
            },
            {
                id: 53,
                question: "神经网络的基本结构包括以下哪一项？",
                options: [
                    "A. 输出层",
                    "B. 输入层",
                    "C. 隐藏层",
                    "D. 以上都是"
                ],
                answer: "D. 以上都是"
            },
            {
                id: 54,
                question: "前馈神经网络是一种最基本的神经网络模型，数据从输入层逐层流向______层。",
                type: "fill",
                answer: "输出"
            },
            {
                id: 55,
                question: "深度学习的核心思想包括'深度'和'______'。",
                type: "fill",
                answer: "学习"
            },
            {
                id: 56,
                question: "深度学习适用于大规模数据和复杂任务。",
                type: "judge",
                answer: "对"
            },
            {
                id: 57,
                question: "神经网络的输出层负责给出______结果。",
                type: "fill",
                answer: "预测"
            },
            {
                id: 58,
                question: "深度学习适用于中小规模数据和简单任务。",
                type: "judge",
                answer: "错"
            },
            {
                id: 59,
                question: "LSTM和GRU是循环神经网络的改进版本。",
                type: "judge",
                answer: "对"
            },
            {
                id: 60,
                question: "GPT系列模型主要用于情感分析。",
                type: "judge",
                answer: "错"
            },
            {
                id: 61,
                question: "深度学习的工作流程包括数据输入、加权求和、激活函数和输出结果。",
                type: "judge",
                answer: "对"
            },
            {
                id: 62,
                question: "以下哪种深度学习模型适用于语音转文字任务？",
                options: [
                    "A. Mask R-CNN",
                    "B. YOLO",
                    "C. ASR",
                    "D. Faster R-CNN"
                ],
                answer: "C. ASR"
            },
            {
                id: 63,
                question: "以下哪种深度学习模型适用于图像分类任务？",
                options: [
                    "A. Mask R-CNN",
                    "B. YOLO",
                    "C. CNN",
                    "D. U-Net"
                ],
                answer: "C. CNN"
            },
            {
                id: 64,
                question: "深度学习需要大量______来训练模型。",
                type: "fill",
                answer: "数据"
            },
            {
                id: 65,
                question: "以下哪种深度学习模型适用于大规模数据和复杂任务？",
                options: [
                    "A. 决策树模型",
                    "B. 传统机器学习模型",
                    "C. 支持向量机模型",
                    "D. 深度学习模型"
                ],
                answer: "D. 深度学习模型"
            },
            {
                id: 66,
                question: "深度学习的模型复杂性较低，参数量较少。",
                type: "judge",
                answer: "错"
            },
            {
                id: 67,
                question: "神经网络的基本结构包括输入层、隐藏层和输出层。",
                type: "judge",
                answer: "对"
            },
            {
                id: 68,
                question: "卷积神经网络(CNN)主要用于处理时间序列数据。",
                type: "judge",
                answer: "错"
            },
            {
                id: 69,
                question: "神经网络的第𝑗个隐层神经元的输入是通过加权求和和______函数处理得到的。",
                type: "fill",
                answer: "激活"
            },
            {
                id: 70,
                question: "以下属于连接主义技术路径的是()",
                options: [
                    "A. 专家系统",
                    "B. 深度神经网络",
                    "C. 逻辑推理引擎",
                    "D. 知识图谱"
                ],
                answer: "B. 深度神经网络"
            },
            {
                id: 71,
                question: "图像分类是深度学习在计算机视觉中的应用场景之一。",
                type: "judge",
                answer: "对"
            },
            {
                id: 72,
                question: "卷积神经网络(CNN)主要用于处理什么类型的数据？",
                options: [
                    "A. 图像数据",
                    "B. 分类数据",
                    "C. 时间序列数据",
                    "D. 文本数据"
                ],
                answer: "A. 图像数据"
            },
            {
                id: 73,
                question: "深度学习的主要模型包括前馈神经网络、卷积神经网络和循环神经网络。",
                type: "judge",
                answer: "对"
            },
            {
                id: 74,
                question: "自然语言处理中的机器翻译任务常使用以下哪种模型？",
                options: [
                    "A. YOLO",
                    "B. Transformer",
                    "C. Mask R-CNN",
                    "D. Faster R-CNN"
                ],
                answer: "B. Transformer"
            },
            {
                id: 75,
                question: "卷积神经网络的应用包括手势识别。",
                type: "judge",
                answer: "对"
            },
            {
                id: 76,
                question: "循环神经网络用于处理______序列数据。",
                type: "fill",
                answer: "时间"
            },
            {
                id: 77,
                question: "图像分类任务中常用的数据集包括CIFAR-10和______。",
                type: "fill",
                answer: "ImageNet"
            },
            {
                id: 78,
                question: "GPT系列模型常用于文本______。",
                type: "fill",
                answer: "生成"
            },
            {
                id: 79,
                question: "循环神经网络(RNN)适合处理以下哪种数据？",
                options: [
                    "A. 静态数据",
                    "B. 分类数据",
                    "C. 时间序列数据",
                    "D. 图像数据"
                ],
                answer: "C. 时间序列数据"
            },
            {
                id: 80,
                question: "传统机器学习适用于中小规模数据，而深度学习适用于______数据和复杂任务。",
                type: "fill",
                answer: "大规模"
            },
            {
                id: 81,
                question: "以下哪种任务属于深度学习的应用场景？",
                options: [
                    "A. 数据标注",
                    "B. 数据清洗",
                    "C. 图像分割",
                    "D. 数据预处理"
                ],
                answer: "C. 图像分割"
            },
            {
                id: 82,
                question: "以下哪种深度学习模型适用于目标检测任务？",
                options: [
                    "A. BERT",
                    "B. Transformer",
                    "C. U-Net",
                    "D. YOLO"
                ],
                answer: "D. YOLO"
            },
            {
                id: 83,
                question: "深度学习能够从大量数据中自动提取______并进行复杂模式的识别和预测。",
                type: "fill",
                answer: "特征"
            },
            {
                id: 84,
                question: "深度学习的目标是发现数据的内在结构。",
                type: "judge",
                answer: "错"
            },
            {
                id: 85,
                question: "以下哪种任务属于深度学习的应用场景？",
                options: [
                    "A. 数据清洗",
                    "B. 数据预处理",
                    "C. 数据标注",
                    "D. 图像分类"
                ],
                answer: "D. 图像分类"
            },
            {
                id: 86,
                question: "深度学习对计算资源(如______)要求较高。",
                type: "fill",
                answer: "GPU"
            },
            {
                id: 87,
                question: "循环神经网络能够捕捉数据中的时间依赖关系。",
                type: "judge",
                answer: "对"
            },
            {
                id: 88,
                question: "循环神经网络(RNN)适用于处理图像数据。",
                type: "judge",
                answer: "错"
            },
            {
                id: 89,
                question: "卷积神经网络(CNN)的核心是池化层。",
                type: "judge",
                answer: "错"
            }
        ]
    },
    chapter4: {
        title: "第四章",
        questions: [
            {
                id: 1,
                question: "图像分割的应用场景包括以下哪项？",
                options: [
                    "A.分割道路和障碍物",
                    "B.生成逼真的图像",
                    "C.检测X光片中的病灶",
                    "D.图像分类"
                ],
                answer: "A.分割道路和障碍物"
            },
            {
                id: 2,
                question: "图像识别的定义是对图像整体内容进行分类。",
                type: "judge",
                answer: "对"
            },
            {
                id: 3,
                question: "YOLO模型主要用于。",
                type: "fill",
                answer: "目标检测"
            },
            {
                id: 4,
                question: "常用的深度学习框架包括TensorFlow、Keras和      。",
                type: "fill",
                answer: "PyTorch"
            },
            {
                id: 5,
                question: "以下哪项是目标检测的评价指标之一？",
                options: [
                    "A.图像采集",
                    "B.精确率(Precision)",
                    "C.灰度化",
                    "D.特征匹配"
                ],
                answer: "B.精确率(Precision)"
            },
            {
                id: 6,
                question: "深度学习方法对硬件依赖较高，常需要高性能硬件如TPU或      。",
                type: "fill",
                answer: "GPU"
            },
            {
                id: 7,
                question: "常用的深度学习框架不包括",
                options: [
                    "A.TensorFlow",
                    "B.PyTorch",
                    "C.YOLO",
                    "D.Keras"
                ],
                answer: "C.YOLO"
            },
            {
                id: 8,
                question: "OpenPose模型主要用于      ",
                options: [
                    "A.图像分割",
                    "B.姿态估计",
                    "C.图像分类",
                    "D.目标检测"
                ],
                answer: "B.姿态估计"
            },
            {
                id: 9,
                question: "GAN模型主要用于",
                options: [
                    "A.图像生成",
                    "B.图像分类",
                    "C.目标检测",
                    "D.姿态估计"
                ],
                answer: "A.图像生成"
            },
            {
                id: 10,
                question: "卷积神经网络的主要特性不包括",
                options: [
                    "A.端到端训练",
                    "B.手工特征提取",
                    "C.高识别准确率",
                    "D.自适应学习"
                ],
                answer: "B.手工特征提取"
            },
            {
                id: 11,
                question: "传统图像识别方法依赖手工设计特征，而深度学习方法能够1学习特征。",
                type: "fill",
                answer: "自动"
            },
            {
                id: 12,
                question: "车牌识别属于以下哪种计算机视觉应用？",
                options: [
                    "A.目标检测",
                    "B.图像识别",
                    "C.生成对抗网络",
                    "D.图像分割"
                ],
                answer: "B.图像识别"
            },
            {
                id: 13,
                question: "传统图像识别方法中，常用的机器学习分类器包括SVM和      。",
                type: "fill",
                answer: "kNN"
            },
            {
                id: 14,
                question: "YOLO模型主要用于",
                options: [
                    "A.图像生成",
                    "B.图像分割",
                    "C.目标检测",
                    "D.图像分类"
                ],
                answer: "C.目标检测"
            },
            {
                id: 15,
                question: "以下哪项是计算机视觉的定义之一？",
                options: [
                    "A.生成逼真的图像",
                    "B.让计算机能够感知外界环境，实现机器'看'世界",
                    "C.检测图像中的病灶",
                    "D.通过算法对图像整体内容进行分类"
                ],
                answer: "B.让计算机能够感知外界环境，实现机器'看'世界"
            },
            {
                id: 16,
                question: "深度学习在计算机视觉中的优势不包括",
                options: [
                    "A.端到端学习",
                    "B.低计算成本",
                    "C.高准确率",
                    "D.自动特征提取"
                ],
                answer: "B.低计算成本"
            },
            {
                id: 17,
                question: "深度学习方法能够处理非线性问题和高维数据，具有较高的      性。",
                type: "fill",
                answer: "鲁棒"
            },
            {
                id: 18,
                question: "深度学习在计算机视觉中的应用不包括",
                options: [
                    "A.图像分割",
                    "B.数据录入",
                    "C.图像分类",
                    "D.目标检测"
                ],
                answer: "B.数据录入"
            },
            {
                id: 19,
                question: "OpenPose模型主要用于      。",
                type: "fill",
                answer: "姿态估计"
            },
            {
                id: 20,
                question: "传统图像识别方法适用于简单场景，如工业检测中的      分析。",
                type: "fill",
                answer: "形状"
            },
            {
                id: 21,
                question: "人脸识别的第一步是什么？",
                options: [
                    "A.去噪",
                    "B.特征匹配",
                    "C.特征提取",
                    "D.图像采集"
                ],
                answer: "D.图像采集"
            },
            {
                id: 22,
                question: "以下哪项是计算机视觉的应用之一？",
                options: [
                    "A.车牌识别",
                    "B.随机噪声生成",
                    "C.图像风格迁移",
                    "D.边界框定位"
                ],
                answer: "A.车牌识别"
            },
            {
                id: 23,
                question: "GAN模型主要用于      。",
                type: "fill",
                answer: "图像生成"
            },
            {
                id: 24,
                question: "灰度化的作用是什么？",
                options: [
                    "A.提取图像特征",
                    "B.匹配图像特征点",
                    "C.将彩色图像转换为灰度图像",
                    "D.分割图像中的对象"
                ],
                answer: "C.将彩色图像转换为灰度图像"
            },
            {
                id: 25,
                question: "传统图像识别方法的特征设计需要领域知识，适应性      。",
                type: "fill",
                answer: "差"
            },
            {
                id: 26,
                question: "CNN是深度学习方法的一种。",
                type: "judge",
                answer: "对"
            },
            {
                id: 27,
                question: "以下哪项是目标检测的关键环节之一？",
                options: [
                    "A.定位目标的边界框",
                    "B.灰度化",
                    "C.特征匹配",
                    "D.数据生成"
                ],
                answer: "A.定位目标的边界框"
            },
            {
                id: 28,
                question: "卷积神经网络(CNN)适用于图像识别、图像分类和      。",
                type: "fill",
                answer: "目标检测"
            },
            {
                id: 29,
                question: "深度学习在计算机视觉中的优势包括自动特征提取、高准确率和      。",
                type: "fill",
                answer: "端到端学习"
            },
            {
                id: 30,
                question: "AlexNet是CNN的一种架构。",
                type: "judge",
                answer: "对"
            },
            {
                id: 31,
                question: "经典的深度学习模型AlexNet主要用于",
                options: [
                    "A.图像分割",
                    "B.图像分类",
                    "C.姿态估计",
                    "D.目标检测"
                ],
                answer: "B.图像分类"
            },
            {
                id: 32,
                question: "经典的深度学习模型AlexNet主要用于      。",
                type: "fill",
                answer: "图像分类"
            },
            {
                id: 33,
                question: "自动驾驶激光雷达在暴雨中性能优于毫米波雷达。",
                type: "judge",
                answer: "错"
            },
            {
                id: 34,
                question: "机器学习分类器中，SVM和kNN是常用方法。",
                type: "judge",
                answer: "对"
            },
            {
                id: 35,
                question: "图像分割是计算机视觉的一部分。",
                type: "judge",
                answer: "对"
            },
            {
                id: 36,
                question: "计算机视觉中，用于检测图像中物体边界的算法通常基于      特征提取方法。",
                type: "fill",
                answer: "边缘检测"
            },
            {
                id: 37,
                question: "自动驾驶系统在暴雨中依赖摄像头的性能最佳。",
                type: "judge",
                answer: "错"
            },
            {
                id: 38,
                question: "传统图像识别方法中常用的特征提取算法包括      和HOG。",
                type: "fill",
                answer: "SIFT"
            },
            {
                id: 39,
                question: "SIFT是一种机器学习分类器。",
                type: "judge",
                answer: "错"
            },
            {
                id: 40,
                question: "以下哪项是生成对抗网络(GAN)的核心组成部分之一？",
                options: [
                    "A.目标检测",
                    "B.特征提取",
                    "C.生成器和判别器",
                    "D.图像分割"
                ],
                answer: "C.生成器和判别器"
            },
            {
                id: 41,
                question: "目标检测主要解决以下哪个问题？",
                options: [
                    "A.图像分类",
                    "B.数据生成",
                    "C.图像风格迁移",
                    "D.对象在哪里"
                ],
                answer: "D.对象在哪里"
            },
            {
                id: 42,
                question: "传统图像识别方法算法较轻量，计算复杂度较低，适合      设备。",
                type: "fill",
                answer: "嵌入式"
            },
            {
                id: 43,
                question: "特斯拉自动驾驶系统主要依赖的传感器是()。",
                options: [
                    "A.压力传感器",
                    "B.红外传感器",
                    "C.毫米波雷达",
                    "D.激光雷达"
                ],
                answer: "C.毫米波雷达"
            },
            {
                id: 44,
                question: "以下哪项是图像识别的深度学习方法之一？",
                options: [
                    "A.CNN(如AlexNet、VGG、ResNet)",
                    "B.HOG特征",
                    "C.SVM",
                    "D.Haar特征"
                ],
                answer: "A.CNN(如AlexNet、VGG、ResNet)"
            },
            {
                id: 45,
                question: "U-Net模型主要用于",
                options: [
                    "A.目标检测",
                    "B.图像分割",
                    "C.姿态估计",
                    "D.图像分类"
                ],
                answer: "B.图像分割"
            },
            {
                id: 46,
                question: "深度学习方法对噪声和干扰的处理能力较强，适应      场景。",
                type: "fill",
                answer: "复杂"
            },
            {
                id: 47,
                question: "深度学习方法中的CNN包括AlexNet、VGG和ResNet。",
                type: "judge",
                answer: "对"
            },
            {
                id: 48,
                question: "深度学习方法的训练过程计算复杂度高，需要高性能硬件如      。",
                type: "fill",
                answer: "GPU"
            },
            {
                id: 49,
                question: "导致AI医疗诊断系统误诊癌症的主要技术缺陷是      不足。",
                type: "fill",
                answer: "可解释性"
            },
            {
                id: 50,
                question: "计算机视觉的应用包括图像识别、目标检测和图像分割。",
                type: "judge",
                answer: "对"
            },
            {
                id: 51,
                question: "以下哪项是车牌识别的应用场景之一？",
                options: [
                    "A.图像风格迁移",
                    "B.数据生成",
                    "C.停车场管理",
                    "D.图像分割"
                ],
                answer: "C.停车场管理"
            },
            {
                id: 52,
                question: "卷积神经网络的主要特性包括自适应学习、端到端训练和      。",
                type: "fill",
                answer: "高准确率"
            },
            {
                id: 53,
                question: "深度学习在计算机视觉中的应用包括图像分类、目标检测和      。",
                type: "fill",
                answer: "图像分割"
            },
            {
                id: 54,
                question: "以下哪项是生成对抗网络(GAN)的目标？",
                options: [
                    "A.匹配图像特征点",
                    "B.定位目标的边界框",
                    "C.生成逼真的数据，让判别器无法区分真假",
                    "D.分割图像中的对象"
                ],
                answer: "C.生成逼真的数据"
            },
            {
                id: 55,
                question: "HOG是一种特征提取方法。",
                type: "judge",
                answer: "对"
            },
            {
                id: 56,
                question: "图像识别通过算法对图像整体内容进行分类，识别其所属类别的过程称为      。",
                type: "fill",
                answer: "图像识别"
            },
            {
                id: 57,
                question: "深度学习方法具有较好的迁移学习能力，可在不同任务间快速      。",
                type: "fill",
                answer: "适应"
            },
            {
                id: 58,
                question: "特征提取方法包括SIFT和HOG。",
                type: "judge",
                answer: "对"
            },
            {
                id: 59,
                question: "目标检测是图像识别的一个子领域。",
                type: "judge",
                answer: "错"
            },
            {
                id: 60,
                question: "U-Net模型主要用于      。",
                type: "fill",
                answer: "图像分割"
            },
            {
                id: 61,
                question: "图像识别的定义是什么？",
                options: [
                    "A.分割道路和障碍物",
                    "B.检测图像中的病灶",
                    "C.对图像整体内容进行分类，识别其所属类别",
                    "D.生成逼真的图像"
                ],
                answer: "C.对图像整体内容进行分类，识别其所属类别"
            },
            {
                id: 62,
                question: "传统图像识别方法对数据需求较低，适用于      规模数据集。",
                type: "fill",
                answer: "小"
            },
            {
                id: 63,
                question: "深度学习方法中，常用的图像识别模型包括AlexNet、VGG和      。",
                type: "fill",
                answer: "ResNet"
            },
            {
                id: 64,
                question: "图像识别通过算法对图像整体内容进行分类，识别其所属类别。",
                type: "judge",
                answer: "对"
            }
        ]
    },
    chapter5: {
        title: "第五章",
        questions: [
            {
                id: 1,
                question: "人类听觉的频率范围是回答试题1Hz。",
                answer: "20-20000"
            },
            {
                id: 2,
                question: "数据增强可以通过增加训练数据的多样性来提高模型的泛化能力。",
                answer: "对"
            },
            {
                id: 3,
                question: "声波的振幅主要决定了声音的哪个主观感知特性？",
                options: [
                    "A.音色",
                    "B.音高",
                    "C.音调",
                    "D.响度"
                ],
                answer: "D.响度"
            },
            {
                id: 4,
                question: "声纹识别主要用于哪些领域？",
                options: [
                    "A.图像识别",
                    "B.数据挖掘",
                    "C.安全认证",
                    "D.网络通信"
                ],
                answer: "C.安全认证"
            },
            {
                id: 5,
                question: "语音识别技术的未来趋势之一是___________。",
                options: [
                    "A.增强硬件兼容性",
                    "B.提高能耗",
                    "C.增加数据存储",
                    "D.端到端模型"
                ],
                answer: "D.端到端模型"
            },
            {
                id: 6,
                question: "下列哪个不是声音的主观感知特性？",
                options: [
                    "A.音高",
                    "B.响度",
                    "C.音色",
                    "D.频率"
                ],
                answer: "D.频率"
            },
            {
                id: 7,
                question: "多模态融合可以提升语音处理的个性化体验。",
                answer: "对"
            },
            {
                id: 8,
                question: "在声音信号处理中，去噪的主要目的是什么？",
                options: [
                    "A.改善用户体验",
                    "B.提高信号质量",
                    "C.增加数据多样性",
                    "D.降低计算成本"
                ],
                answer: "B.提高信号质量"
            },
            {
                id: 9,
                question: "实时翻译的改进是语音处理未来发展的趋势之一。",
                answer: "对"
            },
            {
                id: 10,
                question: "语音识别的最大优势是什么？",
                options: [
                    "A.降低计算成本",
                    "B.使人机界面更自然",
                    "C.增加数据安全性",
                    "D.提高声音质量"
                ],
                answer: "B.使人机界面更自然"
            },
            {
                id: 11,
                question: "奈奎斯特采样定理指出，采样频率应不低于信号最高频率的回答试题11倍。",
                answer: "2"
            },
            {
                id: 12,
                question: "下列哪个频率范围是人类听觉系统可以感知的？",
                options: [
                    "A.30Hz~30kHz",
                    "B.20Hz~20kHz",
                    "C.10Hz~10kHz",
                    "D.40Hz~40kHz"
                ],
                answer: "B.20Hz~20kHz"
            },
            {
                id: 13,
                question: "主观平均判分法中，得分为1的声音质量级别是回答试题13。",
                answer: "劣"
            },
            {
                id: 14,
                question: "奈奎斯特采样定理指出，采样频率应不低于信号最高频率的多少倍？",
                options: [
                    "A.2",
                    "B.1.5",
                    "C.0.5",
                    "D.1"
                ],
                answer: "A.2"
            },
            {
                id: 15,
                question: "语音合成技术的英文缩写是回答试题15。",
                answer: "TTS"
            },
            {
                id: 16,
                question: "主观平均判分法是一种主观度量声音质量的方法。",
                answer: "对"
            },
            {
                id: 17,
                question: "梅尔频率倒谱系数(MFCC)用于___________。",
                options: [
                    "A.降低噪声",
                    "B.提取语音特征",
                    "C.增强信号",
                    "D.生成语音"
                ],
                answer: "B.提取语音特征"
            },
            {
                id: 18,
                question: "语音合成的评估指标包括自然度、可懂度和流畅性。",
                answer: "对"
            },
            {
                id: 19,
                question: "下列哪个不是音频信号数字化的三要素？",
                options: [
                    "A.数据压缩率",
                    "B.声道数",
                    "C.采样频率",
                    "D.量化位数"
                ],
                answer: "A.数据压缩率"
            },
            {
                id: 20,
                question: "填空题声音是一种回答试题20波。",
                answer: "纵向压力"
            },
            {
                id: 21,
                question: "声音的响度单位是什么？",
                options: [
                    "A.Hz",
                    "B.Pa",
                    "C.W",
                    "D.dB"
                ],
                answer: "D.dB"
            },
            {
                id: 22,
                question: "语音识别技术也被称为回答试题22。",
                answer: "自动语音识别(ASR)"
            },
            {
                id: 23,
                question: "语音识别技术的一个重要挑战是___________。",
                options: [
                    "A.数据存储",
                    "B.网络延迟",
                    "C.硬件兼容性",
                    "D.环境噪声"
                ],
                answer: "D.环境噪声"
            },
            {
                id: 24,
                question: "主观平均分(MOS)为5时，声音质量为'优'，无察觉失真。",
                answer: "对"
            },
            {
                id: 25,
                question: "语音识别技术的未来趋势之一是回答试题25学习。",
                answer: "无监督"
            },
            {
                id: 26,
                question: "声音的响度单位通常用回答试题26表示。",
                answer: "dB"
            },
            {
                id: 27,
                question: "下列哪个不是语音识别的挑战？",
                options: [
                    "A.数据标注的多样性",
                    "B.环境噪声",
                    "C.口音差异",
                    "D.识别距离"
                ],
                answer: "A.数据标注的多样性"
            },
            {
                id: 28,
                question: "端到端的语音合成技术可以避免中间环节的误差累积。",
                answer: "对"
            },
            {
                id: 29,
                question: "采样频率越高，声音质量越好，但数据量也越大。",
                answer: "对"
            },
            {
                id: 30,
                question: "语音合成中的HMM代表回答试题30。",
                answer: "隐马尔可夫模型"
            },
            {
                id: 31,
                question: "声波的振幅决定了声音的回答试题31。",
                answer: "响度"
            },
            {
                id: 32,
                question: "端到端模型可以简化处理流程并提高效率。",
                answer: "对"
            },
            {
                id: 33,
                question: "人声的频率范围大致是？",
                options: [
                    "A.300Hz~30kHz",
                    "B.20Hz~200Hz",
                    "C.16Hz~7kHz",
                    "D.80Hz~3400Hz"
                ],
                answer: "D.80Hz~3400Hz"
            },
            {
                id: 34,
                question: "语音识别技术中，DNN和RNN用于___________。",
                options: [
                    "A.生成语音",
                    "B.降低成本",
                    "C.增强信号",
                    "D.提高识别准确性和鲁棒性"
                ],
                answer: "D.提高识别准确性和鲁棒性"
            },
            {
                id: 35,
                question: "端到端的语音合成方法的特点是什么？",
                options: [
                    "A.灵活性差",
                    "B.需要大量训练数据",
                    "C.自然度和流畅性较低",
                    "D.直接生成语音波形"
                ],
                answer: "D.直接生成语音波形"
            },
            {
                id: 36,
                question: "语音合成中的HMM代表什么？",
                options: [
                    "A.隐马尔可夫模型",
                    "B.线性预测编码",
                    "C.高斯混合模型",
                    "D.梅尔频率倒谱系数"
                ],
                answer: "A.隐马尔可夫模型"
            },
            {
                id: 37,
                question: "跨语种识别是语音识别技术的未来趋势之一。",
                answer: "对"
            },
            {
                id: 38,
                question: "单选题声音是一种什么类型的波？",
                options: [
                    "A.引力波",
                    "B.横向波",
                    "C.电磁波",
                    "D.纵向压力波"
                ],
                answer: "D.纵向压力波"
            },
            {
                id: 39,
                question: "主观平均判分法用于评估什么？",
                options: [
                    "A.电池寿命",
                    "B.声音质量",
                    "C.网络速度",
                    "D.图像清晰度"
                ],
                answer: "B.声音质量"
            },
            {
                id: 40,
                question: "语音合成技术的重要性体现在___________。",
                options: [
                    "A.提升无障碍交流",
                    "B.提高计算速度",
                    "C.增强数据安全",
                    "D.降低能耗"
                ],
                answer: "A.提升无障碍交流"
            },
            {
                id: 41,
                question: "语音情感分析中的音量反映了回答试题41。",
                answer: "情感强度"
            },
            {
                id: 42,
                question: "语音识别技术也被称为什么？",
                options: [
                    "A.自动语音编码",
                    "B.自动语音合成",
                    "C.自动语音识别(ASR)",
                    "D.自动语音分析"
                ],
                answer: "C.自动语音识别(ASR)"
            },
            {
                id: 43,
                question: "语音识别技术的最大优势是___________。",
                options: [
                    "A.降低成本",
                    "B.提高计算速度",
                    "C.增强安全性",
                    "D.使人机用户界面更加自然和容易使用"
                ],
                answer: "D.使人机用户界面更加自然和容易使用"
            },
            {
                id: 44,
                question: "主观平均判分法所得的分数称为回答试题44。",
                answer: "主观平均分(MOS)"
            },
            {
                id: 45,
                question: "环境噪声是语音识别技术面临的挑战之一。",
                answer: "对"
            },
            {
                id: 46,
                question: "纯音是指具有回答试题46频率的声音。",
                answer: "单一"
            },
            {
                id: 47,
                question: "哪种声音是具有单一频率的？",
                options: [
                    "A.纯音",
                    "B.环境声",
                    "C.噪音",
                    "D.复音"
                ],
                answer: "A.纯音"
            },
            {
                id: 48,
                question: "声波的频率决定了声音的回答试题48。",
                answer: "音调"
            },
            {
                id: 49,
                question: "语音识别中常用的概率模型是___________。",
                options: [
                    "A.隐马尔可夫模型",
                    "B.线性回归",
                    "C.支持向量机",
                    "D.决策树"
                ],
                answer: "A.隐马尔可夫模型"
            },
            {
                id: 50,
                question: "语音识别技术中，特征提取常用的一个方法是回答试题50。",
                answer: "梅尔频率倒谱系数(MFCC)"
            },
            {
                id: 51,
                question: "主观平均判分法中，得分为5的声音质量级别是___________。",
                options: [
                    "A.良",
                    "B.差",
                    "C.优",
                    "D.中"
                ],
                answer: "C.优"
            },
            {
                id: 52,
                question: "立体声比单声道的表现力丰富，但数据量翻倍。",
                answer: "对"
            },
            {
                id: 53,
                question: "语音识别技术(ASR)是将语音信号转换为文本或指令的技术。",
                answer: "对"
            },
            {
                id: 54,
                question: "音频信号数字化的三要素包括采样频率、回答试题54和声道数。",
                answer: "量化位数"
            },
            {
                id: 55,
                question: "无监督学习可以减少对标注数据的依赖。",
                answer: "对"
            },
            {
                id: 56,
                question: "语音识别技术的最大优势是使得人机用户界面更加简单。",
                answer: "对"
            },
            {
                id: 57,
                question: "量化精度是指每个声音样本的位数。",
                answer: "对"
            },
            {
                id: 58,
                question: "主观平均分(MOS)为1时，声音质量为'劣'，极讨厌。",
                answer: "对"
            },
            {
                id: 59,
                question: "语音合成技术的英文缩写是___________。",
                options: [
                    "A.ASR",
                    "B.AI",
                    "C.TTS",
                    "D.NLP"
                ],
                answer: "C.TTS"
            },
            {
                id: 60,
                question: "语音识别技术(ASR)是将语音信号转换为文本或指令的技术。",
                answer: "对"
            },
            {
                id: 61,
                question: "量化位数越多，音质越差，数据量也越小。",
                answer: "错"
            },
            {
                id: 62,
                question: "采样频率是指每秒钟采集的声音样本数。",
                answer: "对"
            },
            {
                id: 63,
                question: "语音识别技术的英文缩写是___________。",
                options: [
                    "A.TTS",
                    "B.AI",
                    "C.ASR",
                    "D.NLP"
                ],
                answer: "C.ASR"
            }
        ]
    },
    chapter6: {
        title: "第六章",
        questions: [
            {
                id: 1,
                question: "评论观点抽取的第一步是：",
                options: [
                    "A.生成标题",
                    "B.确定评价对象或实体",
                    "C.去除噪声数据",
                    "D.抽取用户情感倾向"
                ],
                answer: "B.确定评价对象或实体"
            },
            {
                id: 2,
                question: "自然语言处理中，Word2Vec属于()",
                options: [
                    "A.机器翻译技术",
                    "B.词向量表示方法",
                    "C.文本分类算法",
                    "D.语言模型"
                ],
                answer: "B.词向量表示方法"
            },
            {
                id: 3,
                question: "短文本相似度计算用于生成文章标题。",
                answer: "错"
            },
            {
                id: 4,
                question: "在金融领域，文本信息提取技术可以提取金融机构实体和金融产品之间的关系。",
                answer: "对"
            },
            {
                id: 5,
                question: "文章标题生成技术可以提取出关键信息、主题关键词和回答试题5。",
                answer: "核心观点"
            },
            {
                id: 6,
                question: "文本清洗的步骤包括去除回答试题6、去除或替换数字以及文本规范化。",
                answer: "无用字符"
            },
            {
                id: 7,
                question: "在智能问答系统中，实体分析可以帮助理解用户问题中的实体。",
                answer: "对"
            },
            {
                id: 8,
                question: "文本信息提取技术只能用于媒体领域。",
                answer: "错"
            },
            {
                id: 9,
                question: "文本信息提取技术的关键技术包括回答试题9、关系抽取、事件抽取、文本分类等。",
                answer: "实体识别"
            },
            {
                id: 10,
                question: "短文本相似度计算通过将文本内容转化为_______来比较相似性。",
                options: [
                    "A.图像数据",
                    "B.文本段落",
                    "C.数值形式的向量",
                    "D.聚类中心"
                ],
                answer: "C.数值形式的向量"
            },
            {
                id: 11,
                question: "短文本相似度计算通过比较向量之间的相似性来评估语义接近程度。",
                answer: "对"
            },
            {
                id: 12,
                question: "在智能问答系统中，实体分析的主要作用是：",
                options: [
                    "A.理解用户问题中的实体并检索相关信息",
                    "B.评估短文本相似度",
                    "C.提供创意标题",
                    "D.处理政策文件"
                ],
                answer: "A.理解用户问题中的实体并检索相关信息"
            },
            {
                id: 13,
                question: "评论观点抽取的最后一步是将评价对象和相应观点关联起来。",
                answer: "对"
            },
            {
                id: 14,
                question: "文章分类是指将文章按照内容类型进行自动划分。",
                answer: "对"
            },
            {
                id: 15,
                question: "文本信息提取技术的目标是通过文本数据提取()？",
                options: [
                    "A.聚类中心",
                    "B.数值特征",
                    "C.关键信息",
                    "D.无用字符"
                ],
                answer: "C.关键信息"
            },
            {
                id: 16,
                question: "文本清洗的关键步骤不包括以下哪项？",
                options: [
                    "A.去除重复项",
                    "B.去除无用字符",
                    "C.拼写校正",
                    "D.提取事件论点"
                ],
                answer: "D.提取事件论点"
            },
            {
                id: 17,
                question: "文本清洗的步骤包括去除无用字符和生成文章标题。",
                answer: "错"
            },
            {
                id: 18,
                question: "以下哪项技术可以生成富有创意和吸引力的文章标题？",
                options: [
                    "A.文章分类",
                    "B.文本清洗",
                    "C.短文本相似度",
                    "D.文章标题生成"
                ],
                answer: "D.文章标题生成"
            },
            {
                id: 19,
                question: "以下哪项技术可以从社交媒体帖子中识别用户的具体观点？",
                options: [
                    "A.文章分类",
                    "B.短文本相似度",
                    "C.评论观点抽取",
                    "D.文本信息提取"
                ],
                answer: "C.评论观点抽取"
            },
            {
                id: 20,
                question: "以下哪项技术用于评估两个短文本之间的语义接近程度？",
                options: [
                    "A.情感分析",
                    "B.文本分类",
                    "C.短文本相似度计算",
                    "D.事件抽取"
                ],
                answer: "C.短文本相似度计算"
            },
            {
                id: 21,
                question: "短文本相似度计算是通过回答试题21技术将文本内容转化为数值形式的向量来比较相似性。",
                answer: "Word2Vec"
            },
            {
                id: 22,
                question: "在智能问答系统中，知识数据库为聊天机器人提供了回答问题的回答试题22。",
                answer: "依据"
            }
        ]
    },
    chapter7: {
        title: "第七章",
        questions: [
            {
                id: 1,
                question: "哪种机器人可能导致情侣之间的情感异化？",
                options: [
                    "A. 情侣机器人",
                    "B. 教育机器人",
                    "C. 工业机器人",
                    "D. 医疗机器人"
                ],
                answer: "A. 情侣机器人"
            },
            {
                id: 2,
                question: "欧盟《人工智能法案》禁止的技术是 ()",
                options: [
                    "A. 图像风格迁移",
                    "B. 医疗影像诊断",
                    "C. 语音助手",
                    "D. 社交信用评分系统"
                ],
                answer: "D. 社交信用评分系统"
            },
            {
                id: 3,
                question: "人工智能的性别偏见在招聘工具中表现为对回答试题 3 的简历权重降低。",
                options: [
                    "A. 男性",
                    "B. 女性",
                    "C. 中性",
                    "D. 以上都不是"
                ],
                answer: "B. 女性"
            },
            {
                id: 4,
                question: "在特斯拉自动驾驶事故中，现有法律无法确定责任主体的原因是：",
                options: [
                    "A. 车主操作不当",
                    "B. 现有法律框架比较空白",
                    "C. 人工智能产品具有法律人格属性",
                    "D. 事故责任明确"
                ],
                answer: "B. 现有法律框架比较空白"
            },
            {
                id: 5,
                question: "算法偏见在人工智能中可能导致黑人被告再次犯罪风险预测回答试题 5。",
                options: [
                    "A. 偏低",
                    "B. 偏高",
                    "C. 正常",
                    "D. 不确定"
                ],
                answer: "B. 偏高"
            },
            {
                id: 6,
                question: "哪种偏见可能导致特定人群受到不公正待遇？",
                options: [
                    "A. 地理偏见",
                    "B. 文化偏见",
                    "C. 算法偏见",
                    "D. 经济偏见"
                ],
                answer: "C. 算法偏见"
            },
            {
                id: 7,
                question: "人工智能在使用过程中可能形成哪种偏见？",
                options: [
                    "A. 地理偏见",
                    "B. 经济偏见",
                    "C. 文化偏见",
                    "D. 算法偏见"
                ],
                answer: "D. 算法偏见"
            },
            {
                id: 8,
                question: "过度依赖人工智能可能导致回答试题 8 依赖。",
                options: [
                    "A. 生理",
                    "B. 心理",
                    "C. 物理",
                    "D. 化学"
                ],
                answer: "B. 心理"
            },
            {
                id: 9,
                question: "MIT 道德机器实验证明文化背景影响伦理选择。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "A. 对"
            },
            {
                id: 10,
                question: "谷歌照片服务曾被指出在面部识别中存在回答试题 10 偏见。",
                options: [
                    "A. 年龄",
                    "B. 性别",
                    "C. 肤色",
                    "D. 种族"
                ],
                answer: "C. 肤色"
            },
            {
                id: 11,
                question: "人工智能治理的 '巴别塔困境' 指 ()",
                options: [
                    "A. 全球协作标准冲突",
                    "B. 硬件性能差异",
                    "C. 数据存储分散",
                    "D. 算法语言不兼容"
                ],
                answer: "A. 全球协作标准冲突"
            },
            {
                id: 12,
                question: "过度依赖医疗机器人可能导致什么问题？",
                options: [
                    "A. 医疗效率提高",
                    "B. 医疗能力提高",
                    "C. 医疗能力退化",
                    "D. 医疗成本降低"
                ],
                answer: "C. 医疗能力退化"
            },
            {
                id: 13,
                question: "MIT 道德机器实验的实验目标是 ()",
                options: [
                    "A. 测试人工智能在医疗领域的应用",
                    "B. 探讨人工智能算法的效率优化",
                    "C. 研究自动驾驶中伦理决策的社会偏好",
                    "D. 开发更加先进的自动驾驶技术"
                ],
                answer: "C. 研究自动驾驶中伦理决策的社会偏好"
            },
            {
                id: 14,
                question: "在金融领域中应用人工智能的典型风险是 ()",
                options: [
                    "A. 算法加剧市场波动",
                    "B. 数据处理速度慢",
                    "C. 用户界面不友好",
                    "D. 硬件耗电量过高"
                ],
                answer: "A. 算法加剧市场波动"
            },
            {
                id: 15,
                question: "联合国教科文组织《AI 伦理建议书》强调的原则是 ()",
                options: [
                    "A. 人类尊严至上",
                    "B. 技术优先发展",
                    "C. 数据自由流通",
                    "D. 算法绝对透明"
                ],
                answer: "A. 人类尊严至上"
            },
            {
                id: 16,
                question: "在隐私泄露问题中，容易引起事件发生的原因包括后台数据泄露问题、人工智能技术滥用问题和回答试题 16 问题。",
                options: [
                    "A. 大数据平台漏洞",
                    "B. 硬件故障",
                    "C. 网络延迟",
                    "D. 用户操作失误"
                ],
                answer: "A. 大数据平台漏洞"
            },
            {
                id: 17,
                question: "人工智能在医疗领域引发争议的主要问题是 ()",
                options: [
                    "A. 诊断速度过快",
                    "B. 缺乏可解释性",
                    "C. 操作界面复杂",
                    "D. 硬件成本过高"
                ],
                answer: "B. 缺乏可解释性"
            },
            {
                id: 18,
                question: "算法偏见可能导致特定人群受到回答试题 18 待遇。",
                options: [
                    "A. 公正",
                    "B. 不公正",
                    "C. 平等",
                    "D. 特殊"
                ],
                answer: "B. 不公正"
            },
            {
                id: 19,
                question: "COMPAS 算法被指出存在回答试题 19 偏见。",
                options: [
                    "A. 年龄",
                    "B. 性别",
                    "C. 肤色",
                    "D. 种族"
                ],
                answer: "C. 肤色"
            },
            {
                id: 20,
                question: "全球首个被证实自主攻击人类的 AI 武器是 ()",
                options: [
                    "A. 美国 '死神' 无人机",
                    "B. 以色列 '铁穹' 系统",
                    "C. 土耳其 Kargu-2 无人机",
                    "D. 俄罗斯 '标记' 机器人"
                ],
                answer: "C. 土耳其 Kargu-2 无人机"
            },
            {
                id: 21,
                question: "欧盟《通用数据保护条例》(GDPR) 允许用户行使的权利是 ()",
                options: [
                    "A. 强制算法开源",
                    "B. 修改他人数据",
                    "C. 删除个人数据",
                    "D. 数据永久存储"
                ],
                answer: "C. 删除个人数据"
            },
            {
                id: 22,
                question: "哪种机器人容易导致儿童出现社交障碍？",
                options: [
                    "A. 医疗机器人",
                    "B. 家用机器人",
                    "C. 教育机器人",
                    "D. 工业机器人"
                ],
                answer: "C. 教育机器人"
            },
            {
                id: 23,
                question: "人工智能治理全球协作的主要障碍是 ()",
                options: [
                    "A. 数据主权争议",
                    "B. 语言文化差异",
                    "C. 技术标准统一困难",
                    "D. 以上皆是"
                ],
                answer: "D. 以上皆是"
            },
            {
                id: 24,
                question: "以下哪类人员不属于人工智能产品责任划分中的责任主体？",
                options: [
                    "A. 设计、研发人员",
                    "B. 生产厂商",
                    "C. 使用者",
                    "D. 消费者"
                ],
                answer: "D. 消费者"
            },
            {
                id: 25,
                question: "过度依赖人工智能可能导致什么问题？",
                options: [
                    "A. 提高学习能力",
                    "B. 增强社交能力",
                    "C. 增强体能",
                    "D. 心理依赖"
                ],
                answer: "D. 心理依赖"
            },
            {
                id: 26,
                question: "美国白宫发布的《AI 权利法案》强调保护公民的回答试题 26 权。",
                options: [
                    "A. 隐私",
                    "B. 言论",
                    "C. 集会",
                    "D. 结社"
                ],
                answer: "A. 隐私"
            },
            {
                id: 27,
                question: "导致亚马逊 AI 招聘工具性别歧视的主要原因是 ()",
                options: [
                    "A. 用户操作不当",
                    "B. 硬件传感器缺陷",
                    "C. 算法代码错误",
                    "D. 历史数据偏见"
                ],
                answer: "D. 历史数据偏见"
            },
            {
                id: 28,
                question: "算法偏见仅存在于监督学习模型中。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 29,
                question: "人脸识别系统对深肤色人群准确率低的主要原因是 ()",
                options: [
                    "A. 法律政策限制",
                    "B. 训练数据偏见",
                    "C. 算法设计缺陷",
                    "D. 硬件传感器限制"
                ],
                answer: "B. 训练数据偏见"
            },
            {
                id: 30,
                question: "算法偏见只能通过修改代码消除。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 31,
                question: "程序员在设计无人驾驶汽车的决策时需要与回答试题 31 合作。",
                options: [
                    "A. 伦理学家",
                    "B. 设计师",
                    "C. 工程师",
                    "D. 营销人员"
                ],
                answer: "A. 伦理学家"
            },
            {
                id: 32,
                question: "性别和肤色偏见在人工智能算法中可能导致肤色较深的女性识别错误率回答试题 32。",
                options: [
                    "A. 下降",
                    "B. 上升",
                    "C. 不变",
                    "D. 不确定"
                ],
                answer: "B. 上升"
            },
            {
                id: 33,
                question: "哪种偏见在人工智能中可能导致女性简历的评级下调？",
                options: [
                    "A. 性别偏见",
                    "B. 算法偏见",
                    "C. 经济偏见",
                    "D. 文化偏见"
                ],
                answer: "A. 性别偏见"
            },
            {
                id: 34,
                question: "欧盟允许企业使用 AI 系统进行大规模社会监控。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 35,
                question: "全球 AI 治理已形成统一法律框架。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 36,
                question: "情侣机器人可能导致情侣之间的情感回答试题 36。",
                options: [
                    "A. 增强",
                    "B. 异化",
                    "C. 稳定",
                    "D. 改善"
                ],
                answer: "B. 异化"
            },
            {
                id: 37,
                question: "自主武器系统误伤平民时，责任归属的主要争议在于 ()",
                options: [
                    "A. 国际法缺失",
                    "B. 程序员个人责任",
                    "C. 算法自主性难以追责",
                    "D. 指挥官决策责任"
                ],
                answer: "C. 算法自主性难以追责"
            },
            {
                id: 38,
                question: "人工智能在使用过程中可能形成回答试题 38 偏见。",
                options: [
                    "A. 算法",
                    "B. 硬件",
                    "C. 软件",
                    "D. 网络"
                ],
                answer: "A. 算法"
            },
            {
                id: 39,
                question: "欧盟将 '通过潜意识操控人类行为' 的 AI 系统列为____风险等级。",
                options: [
                    "A. 可接受",
                    "B. 不可接受",
                    "C. 中等",
                    "D. 低"
                ],
                answer: "B. 不可接受"
            },
            {
                id: 40,
                question: "以下哪项不属于人工智能发展过程中涉及的法律问题？",
                options: [
                    "A. 责任划分问题",
                    "B. 性别偏见问题",
                    "C. 著作权保护问题",
                    "D. 隐私泄露问题"
                ],
                answer: "B. 性别偏见问题"
            },
            {
                id: 41,
                question: "人工智能伦理中的 '算法正义' 要求 ()",
                options: [
                    "A. 代码加密保护",
                    "B. 数据无限共享",
                    "C. 硬件国产化",
                    "D. 决策过程可审计"
                ],
                answer: "D. 决策过程可审计"
            },
            {
                id: 42,
                question: "欧盟允许使用 AI 社交信用评分系统。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 43,
                question: "教育机器人容易导致儿童出现回答试题 43 障碍。",
                options: [
                    "A. 学习",
                    "B. 社交",
                    "C. 运动",
                    "D. 语言"
                ],
                answer: "B. 社交"
            },
            {
                id: 44,
                question: "程序员在设计无人驾驶汽车的决策时需要与谁合作？",
                options: [
                    "A. 市场营销人员",
                    "B. 伦理学家",
                    "C. 设计师",
                    "D. 机械工程师"
                ],
                answer: "B. 伦理学家"
            },
            {
                id: 45,
                question: "人工智能可以完全避免伦理争议。",
                options: [
                    "A. 对",
                    "B. 错"
                ],
                answer: "B. 错"
            },
            {
                id: 46,
                question: "过度依赖医疗机器人可能导致医疗能力回答试题 46。",
                options: [
                    "A. 提高",
                    "B. 退化",
                    "C. 稳定",
                    "D. 改善"
                ],
                answer: "B. 退化"
            }
        ]
    }
}; 