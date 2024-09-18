# 从零建模电机
引入部分：

引入库 numpy 作计算使用

在文件 rotor_base 中引入转子基本属性

在文件 draw_rotor_ipm_s 中引入draw函数

引入 constants  及 configurations 

draw函数：

定义转子对象 Rotor 属性 

引入 draw_arc,
    draw_segment,
    draw_label,

draw_arc 用以在 femm 中画圆弧

draw_segment 用以在 femm 中画线段

Draw_label 用以在 femm 中在闭合区域中添加标签  即指定区域的材料
