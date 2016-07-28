---
order: 1
chinese: 颜色
english: Color
---

### 定义／Definition

色彩是界面设计中的最为基础的设计元素之一。蚂蚁中后台项目不是单一的产品线，而是由多条产品线的多类产品组成的。因此更加需要系统的考虑配色方案，合理的平衡感性与理性是Ant Design Mobile色彩设计的原则。配色设计时设计者需要同时关注以下几个方面：

1. 品牌识别和一致性
2. 色相间搭配的视觉和谐度以及灵活性
3. 色彩选择以及调用上的高效

### 构成／Composition

AntD Mobile的色彩设计包含以下三部分内容：

1. 色板
2. UI中的色彩分类
3. 颜色与交互的关系

### 色板／Color Palette

AntD Mobile定义了包括中性色在内的共10种颜色，每种颜色在饱和度和明暗的层面又有10种变化。自上而下是色相（H）的变化，从左自右体现饱和度（S）以及明暗（L）的变化。我们对每一款颜色都做了对应的命名。定义好的色板，只体现颜色的变化，不赋予其任何含义。
事实上，色相、饱和度以及明暗的设定有很多种方式，对于色块们的定义是通过ant design自己的配色辅助工具 Curve 来实现的，保证了每一个色相对应的颜色都在一条贝塞尔曲线之上。

![色板](https://os.alipayobjects.com/rmsportal/kEcoQTCBsjKdlGZ.png)

中性色定义如下：

![中性色](https://os.alipayobjects.com/rmsportal/VNdsMvNZYwiHjrq.png)
## 色彩的分类／Classification

---

### 品牌色／Brand Color

品牌色承载的是品牌传递的作用。在设计开始前，先系统思考品牌色在UI中的哪些方面会有所体现，这一块并没有什么特定的规矩，不同的产品设计中品牌色的体现方式多种多样，以Ant Design Mobile的默认样式为例，品牌色主要体现在logo，icon、主button，信息的高亮区域或文字链接，配图类设计等处。我们不限定品牌色在具体UI设计中的应用方式，但在色彩的选择有两条要求：
1. 原则上品牌色不能脱离色板被重新定义。
2. 在选择上建议选择3-8之间的颜色，中性色不建议做主色。Ant Design Mobile的default版本选用的品牌色为@blue－6，即#2db7f5。

![品牌色](https://os.alipayobjects.com/rmsportal/lNsYPpUKoOZEwnb.png)


### 功能色／Functional Color

UI设计中的颜色除了传递品牌特性以外，还有一部分用于传递信息功能、状态的颜色需要被定义清楚。比如：成功、出错、失败、提醒、链接等。功能色的定义方式和品牌色一致，也是取自大色板中。命名方式采用@function-功能英文-n

![功能色](https://os.alipayobjects.com/rmsportal/ZhcQaUlPcucnYty.png)

### 色彩和交互／Color with Interaction

当色彩被应用在UI元素上的时候还需要考虑交互的因素。一套UI设计中，选定了某一种主色之后，需要考虑不同交互状态下的变化所产生的色彩需求。Ant Design Mobile定义了一套较为完整色彩交互体系，使用者只需要找到合适的主色即可得到一系列与之相对应的色彩交互变化。下面举个栗子：
1. 选择蓝色系的@blue－5为品牌色
2. 当UI元素本身为@blure－5的时候默认@blue-6为active颜色。
实际应用中，使用者只需要调整色相，输入一个固定的值就可以得到一系列基于主色交互变化的色谱。想要深度了解更多关于Ant Design Mobile交互上的色彩变化的详细内容可以参考 [元素状态]()。

![色彩和交互](https://os.alipayobjects.com/rmsportal/RZtVRWecHMipAOU.png)
