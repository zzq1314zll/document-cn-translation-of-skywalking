# 服务网格探针(Server Mesh Probe)

服务网格探针利用了服务网格实现者的可扩展机制, 如 Istio.

## 什么是服务网格?

以下是来自 Istio 文档中对服务网格的解释:
> 术语"服务网格"通常用来描述一种微服务网络, 这些微服务构成了一个完整的应用以及他们之间的交互.
随着服务网格不断增大, 复杂性不断增加, 可能会使其难以理解和管理.
服务网格的需求可能包含服务发现, 负载均衡, 失败探测, 性能指标以及监控, 通常可能还有更复杂的
操作性需求, 如 AB 测试, 灰度发布, 频率限制, 访问控制以及端到端鉴权.

## 探针从哪里收集数据?

Istio 是一个非常典型的服务网格设计和实现, 它定义了**控制面板**和**数据面板**, 受到广泛应用.
以下是 Istio 的架构:

<img src="https://istio.io/docs/concepts/what-is-istio/arch.svg"/>

服务网格探针可以选择从**控制面板**或**数据面板**收集数据. 对应到 Istio 中, 则是从 Mixer(控制面板)
或 Envoy sidecar(数据面板) 收集遥测数据. 底层上它们都是相同的数据, 探针会从每个请求的服务端和客户端
收集两方面的遥测实体.

## 后端是如何在服务网格奏效的?

从探针方面来看, 你知道服务网格探针中肯定没有和链路追踪相关的东西, 那么为什么 SkyWalking 平台还能正常工作?

服务网格探针从每一个请求那里收集遥测数据, 因此它知道请求的源, 目标, 端点, 耗时以及状态.
通过把这些调用关系以及每个节点的性能指标进行结合, 后端能够构造出一张完整的拓扑图.
后端同时还从解析链路追踪数据那里获得同样的指标数据. 因此完整的描述如下:
**服务网格指标正是链路追踪解析器产生的指标数据, 它们是一样的.**

## 下一步?

- 如果你想使用服务网格探针, 请阅读[在服务网格中配置 SkyWalking](../setup/README.md#on-service-mesh) 一文.
