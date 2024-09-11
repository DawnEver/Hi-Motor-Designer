# 结构建模

## 电机建模

### 1、定子建模

#### 定子槽型切换可选择平行齿园底槽、平行齿方形槽、平行槽和锥形槽

<img src=".\modeling\定子槽型切换.png">

#### 1）、平行齿园底槽

<table><tr>
<td><img src=".\modeling\平行齿园底槽1.png"></td>
<td><img src=".\modeling\平行齿园底槽2.png"></td>
</tr></table>

#### 2）、平行齿方形槽

<table><tr>
<td><img src=".\modeling\平行齿方形槽1.png"></td>
<td><img src=".\modeling\平行齿方形槽2.png"></td>
</tr></table>

#### 3）、平行槽

<table><tr>
<td><img src=".\modeling\平行槽1.png"></td>
<td><img src=".\modeling\平行槽2.png"></td>
</tr></table>

#### 4）、锥形槽

<table><tr>
<td><img src=".\modeling\锥形槽1.png"></td>
<td><img src=".\modeling\锥形槽2.png"></td>
</tr></table>

---

### 2、转子建模

#### 转子槽型切换可选择流线型磁障永磁磁阻和U型磁障同步磁阻

<img src=".\modeling\转子类型切换.png">

#### 1）、流线型磁障永磁磁阻

<table><tr>
<td><img src=".\modeling\流线型磁障永磁磁阻1.png"></td>
<td><img src=".\modeling\流线型磁障永磁磁阻2.png"></td>
</tr></table>

- **磁障画法可以选择自动与手动**
- **磁障尾部形状可以选择矩形和圆弧型**
- **磁障对称可选择对称**

<table><tr>
<td><img src=".\modeling\磁障画法.png"></td>
<td><img src=".\modeling\磁障尾部.png"></td>
<td><img src=".\modeling\磁障对称.png"></td>
</tr></table>

- 矩形与圆弧型磁障尾部对比

<table><tr>
<td><img src=".\modeling\矩形.png"></td>
<td><img src=".\modeling\圆弧型.png"></td>
</tr></table>

#### 2）、U型磁障同步磁阻

<table><tr>
<td><img src=".\modeling\U型磁障同步磁阻1.png"></td>
<td><img src=".\modeling\U型磁障同步磁阻2.png"></td>
</tr></table>


---

## 材料与剖分

### 1、仿真区域切换：可选择单极、单元电机和全模型

<img src=".\modeling\仿真区域.jpg">

#### 效果图如下：

1. 单极
2. 单元电机
3. 全模型
<table><tr>
<td><img src=".\modeling\单极.jpg"></td>
<td><img src=".\modeling\单元电机.jpg"></td>
<td><img src=".\modeling\全模型.jpg"></td>
</tr></table>
    

### 2、材料选择：可选择常见材料（或温度）

#### 以定子铁芯和绕组温度为例

1. 定子铁芯
2. 绕组温度

<table><tr>
<td><img src=".\modeling\定子铁芯.jpg"></td>
<td><img src=".\modeling\绕组温度.jpg"></td>
</tr></table>

### 3、自定义材料：可自定义材料参数，如材料类型、材料属性等
自定义材料格式如下：

<table><tr>
<td><img src=".\modeling\自定义材料.jpg"></td>
<td><img src=".\modeling\自定义格式.jpg"></td>
</tr></table>

### 4、剖分：通过更改剖分数值，可对电机不同区域选择剖分密度大小

#### 以定子、转子铁芯和转轴为例（均以数值为1和3的情况展示）

- 定子

<table><tr>
<td><img src=".\modeling\定子1.jpg"></td>
<td><img src=".\modeling\定子2.jpg"></td>
</tr></table>

- 转子铁芯

<table><tr>
<td><img src=".\modeling\转子铁芯1.jpg"></td>
<td><img src=".\modeling\转子铁芯2.jpg"></td>
</tr></table>

- 转轴

<table><tr>
<td><img src=".\modeling\转轴1.jpg"></td>
<td><img src=".\modeling\转轴2.jpg"></td>
</tr></table>