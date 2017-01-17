---
order: 0
chinese: 单位和换乘系数
english: Unit and Multipliers
---

### 定义／Definition

AntD Mobile在设计过程中需要考虑各类操作系统以及不同设备的PPI对UI的影响。在多重复杂的设计环境下，用pixel作为UI设计的基本单元是不合适的，这里我们需要引入设备独立像素的概念。苹果以及谷歌在此类问题上早就有解决方法，他们的设计团队分别采用PT （point）和DP （device independent pixel）两个单位来定义UI设计中图形的最小单元，事实上两者是同一种概念。
AntD Mobile将DP （device independent pixel）和SP（scaled pixels）分别定为UI设计的图形单位和字体单位。再通过换算系数来达到UI设计在不同PPI之下的通用性。

### 换算系数／multipliers

由于不同设备间存在PPI和分辨率的差异，设计师需要考虑设计中各类情况的兼容性，尽量保证图形在各种PPI下的物理尺寸是一致的。这时引入换算系数的概念就能令这一过程变得高效起来。换算系数（multiplier）简单的来说是在同一个操作系统下的不同设备分辨率之间一个DP所对应的像素数量。

![](https://os.alipayobjects.com/rmsportal/yGbLSzSEOXtOrfK.png)

iOS系统下的换乘系数表主要有两组，分别代表手机以及pad：

iPhone的换算系数：

![](https://os.alipayobjects.com/rmsportal/LaOsAgSfYQuyALQ.png)

iPad的换算系数：

![](https://os.alipayobjects.com/rmsportal/oyMeqeJihcjqiqG.png)

苹果手机的换乘系数相对来说较为简单，在设计时选择基准的尺寸一般会建议1X的作为基准点，这样能更加方便的进行其他PPI的换算，但同时也需要考虑各类型号的用户覆盖率。android系统相对来说会比较复杂，根据DPI的不同总共可以分为7类（DPI和PPI是一个概念），其中标灰的两类是不太常用的。

Android的换算系数：

![](https://os.alipayobjects.com/rmsportal/pflzZpXUROmvxOe.png)

进一步了解更多屏幕分辨率可以访问 screensiz.es

### 画板尺寸／Artboard Sizes

在设计团队中采用统一的设计软件，一致的设计单位，和统UI设计中不同场景下的画板尺寸。

![](https://os.alipayobjects.com/rmsportal/HvtfdjGjgIpvRAa.png)
