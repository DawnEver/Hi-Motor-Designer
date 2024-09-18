# 概念：Case
## class ***Case***

case 即 仿真案例

是对单个确定参数的电机 参数化建模，绕组计算，材料，仿真求解这一流程的抽象

一方面，所有的电机，无论是内转子、外转子，哪怕双转子、双定子，参数都可以划分成 **定子参数**，**转子参数**，**仿真参数**。此外的材料参数可以看作一个大型数据库，另作考虑；Ansys 等等其他商业软件中常常单独列出的激励参数、边界参数、剖分参数，在电机设计中并不具有独立地位，故合并到上述三个字典中。（当然 GUI 部分由于历史的惯性和人们的直觉就不做修改。）

于是在这里，我们各用一个字典来容纳这些参数 stator_dict,rotor_dict,simulation_dict。

另一方面，单步仿真、多步仿真无论每一种仿真，不同仿真模式的输出也都可以抽象成一个字典。

让我们仅仅关注输入和输出，输入三个字典，输出一个字典，这就是 run_case() 干的事情。

于是在 Case() 这里，我们就不必考虑各种类型、奇形怪状的电机是如何画出，我们在不同的 Rotor() , Stator() ,draw_rotor(),draw_stator() 实现中考虑，只要他们满足一定的规范（ 如 group组号，如变量定义），就可以被仿真和后处理部分识别并处理。



这样，对于更高层次的优化、我们只要使用 var_name_list 和 obj_name_list 两个记录所需参数的数组提供索引即可将这些字典整理成数组，或是矩阵。

## **run_case()** & **try_run_case()**
```python
run_case(stator_dict:dict,rotor_dict:dict,simulation_dict:dict,case_type="inner_rotor",rotor_type="spm",case_id=0)->dict
```

输入:

```
stator_dict:dict,rotor_dict:dict,simulation_dict:dict
{英文键:值}
```

在 **try_run_case()** 之前实现字典键中文到英文的转换

输出:

```
{"solution_type":"ERROR" 或 simulation_dict["sim_type"],
中文键名:值}
```

## class ***RunCaseMultiprocessing***
理解了 case ，基于 case 的并发模块就不难理解了。

本质上就是用一定的调度算法多核并发执行 **try_run_case()**

这里的 **try_run_case()** 就是 对 **run_case()** 进行了 `try...except...` 的封装。

输入:
```python
def __init__(self,num_cores=None,num_process=None,args_list=[],timeout=20,retry_timeout=True,retry_error=True):
"""
num_cores 使用计算机的核心数
num_process 创建进程数
args_list 参数列表 参见 run_case
args_list=[[*args_1],[*args_2]...]
每一个 *args_x 都是一个 run_case 的输入
timeout 超时时间
retry_timeout 超时重试
retry_error 失败重试

返回 results
[{"solution_type":"ERROR",...},
{"solution_type":"ERROR",...},
...]
"""
```