#  *Hi-Motor Designer*
##  *Hi-Motor Designer*概述
*Hi-Motor Designer*，是一款由 Hi-Motor 团队独立研发的一款国产高效电机设计优化工业软件。项目依托华中科技大学创新电机研究中心十年技术积累，立足产业实际需求，为用户提供高效电机建模、仿真、优化全流程、一站式服务。<br>
<table><tr>
<td><img src="./what-is-hmd/Initial.jpg" /></td>
</tr></table>

*Hi-Motor Designer*，正如其名， *Design of High Performance Motor*，本产品正是为高效电机设计优化而生；又意为 *Hi, Motor Design*，我们的目标是让电机设计不再困难！<br>

## *Hi-Motor Designer* 功能
*Hi-Motor Designer*，是一款针对电机设计的创新软件。通过使用Python语言，实现同步磁阻电机参数化建模；<br>

<table><tr>
<td><img src="./what-is-hmd/modeling.jpg" /></td>
</tr></table>

基于开源工具FEMM，实现电机电流相位角仿真等多种仿真模式；<br>
<table><tr>
<td><img src="./what-is-hmd/simulation.jpg" /></td>
</tr></table>

结合差分进化算法等多种高效智能算法，实现电机多目标优化设计和分层优化。<br>
<table><tr>
<td><img src="./what-is-hmd/simulation-0.jpg" /></td>
</tr></table>

同时，*Hi-Motor Designer* 还具备高效电机智能优化设计平台，通过参数化建模和多目标优化设计等功能，实现了从用户需求到高效电机的转化，解决了电机设计复杂和优化困难的问题。<br>
<table><tr>
<td><img src="./what-is-hmd/optimization-1.jpg" /></td>
</tr></table>

*Hi-Motor Designer*的出现，将为电机行业的发展带来新的机遇和挑战。
## *Hi-Motor Designer* 的优势

### 轻量化设计
我们的软件相比其他商业软件站用内存更小，可以在个人笔记本上面运行，ansys maxwell占用内存23G，JMAG占用内存11G，*Hi-Motor Designer*占用内存仅800M，能在个人电脑上面流畅运行。
### 快速仿真优化
我们用时步有限元替代传统瞬态场仿真极大程度提高电机仿真速度。<br>
以一36槽4极电机为例，本软件得到的电机总损耗、负载转矩等主要电机性能指标与商业有限元软件Maxwell相比，误差范围均在1%以内，仿真速度明显优于商业有限元软件。
示例电机如图所示<br>
<table><tr>
<td><img src="./what-is-hmd/model.jpg" width=50%/></td>
</tr></table>

仿真性能对比如下
<table><tr>
<td><img src="./what-is-hmd/result.jpg" /></td>
</tr></table>

计算速度的到了很大的提升
### 核心技术
#### 核心技术一：基于新型拓扑的高自由度参数化建模技术
我们创新建模方式，应用镜像对称结构谐波相消降低转矩脉动，应用样条曲线设计磁障尾部优化应力分布，通过增加设计自由度，提升设计上限。
<table><tr>
<td><img src="./what-is-hmd/mirror.jpg" /></td>
</tr></table>

#### 核心技术二：基于时步有限元的高效仿真分析技术
我们用时步有限元替代传统瞬态场仿真，单时步3秒出结果完成性能快速估算，多时步在保证精度的同时大幅提升计算速度，完成性能精确校核。
<table><tr>
<td><img src="./what-is-hmd/FEA-1.jpg" /></td>
<td><img src="./what-is-hmd/FEA-2.jpg" /></td>
</tr></table>

#### 核心技术三：基于分层策略的电机多目标参数优化技术
我们应用分层优化策略，确定每个参数对性能目标的敏感度，分层求取最优解，让结果能够同时兼顾多维目标，进一步推进前沿解，提升优化效果。
<table><tr>
<td><img src="./what-is-hmd/optimization.jpg" /></td>
</tr></table>

我们在优化中引入代理模型，基于历史数据和有限的样本点构建出一个近似的模型快速、准确地预测电机性能，以辅助优化决策，节省实际测试和验证的时间和资源。
电机优化计算往往十分复杂和耗时，每个解的评估都可能需要大量的计算资源。代理模型基于已有数据构建一个近似模型，可以用来预测未知解的性能，极大减少计算量，加速优化过程。
<table><tr>
<td><img src="./what-is-hmd/proxy-1.jpg" /></td>
<td><img src="./what-is-hmd/proxy-2.jpg" /></td>
</tr></table>