window.WILSON_PROJECTS = [
  {
    id:"agent-platform", number:"01", title:"企业级智能体运行管控平台", short:"Agent Platform",
    category:"enterprise", categoryLabel:"企业实践", role:"平台负责人（发起并主导）",
    summary:"把一个想法从技术验证一路推到生产环境，让 Agent 能力真正进入日常工作。",
    description:"我目前担任算法工程师、公司智能体平台负责人。我从零发起并主导企业级智能体运行管控平台，参与前期技术验证、方案与架构设计、主体研发、生产交付和持续迭代。页面只呈现可公开的脱敏信息。",
    challenge:"企业里的 Agent 平台需要同时面对多框架接入、真实工作流、生产交付和持续治理。我更关心的是，系统能不能被真实的人持续使用。",
    capabilities:[
      {title:"实例生命周期与平台治理",items:["围绕 Agent 实例建立生命周期管理、可信访问与统一交付路径","覆盖技术验证、方案与架构设计、主体研发、生产交付和持续迭代","以平台化方式支撑实例管理、运行管控与后续推广"]},
      {title:"多框架与渠道接入",items:["以 OpenClaw 为生产主线，完成 ZeroClaw / DeepSeek Harness 接入验证","完成飞书等渠道的技术接入与联调，推进业务侧接入的授权流程","验证多框架并存下的接入与管理方式，而不是只完成单一对话演示"]},
      {title:"团队协作与业务交付",items:["初期独立开发，后期带领 4 人协作迭代，并担任 2 名校招生导师","为营业部投资顾问提供 AI 数字分身能力，支持真实业务工作流","持续根据生产反馈推进平台迭代与规模化推广"]}
    ],
    contributions:["完成从 0 到 1 的技术验证、架构设计与主体研发","以 OpenClaw 为生产主线，验证 ZeroClaw / DeepSeek Harness 接入","初期独立开发，后期带领 4 人协作迭代，并担任 2 名校招生导师"],
    outcomes:["平台服务 4000+ 同事，覆盖公司几乎所有部门","为营业部投资顾问提供 AI 数字分身能力","累计发放超过 6000 个 Agent 实例，日活用户超过 800"],
    tags:["Agent Platform","OpenClaw","ZeroClaw","DeepSeek Harness","生产交付"],
    link:"https://github.com/WilShi/agent-platform-cookbook", linkLabel:"查看脱敏工程模式集"
  },
  {
    id:"ai-workbench", number:"02", title:"企业级 AI 桌面工作台", short:"AI Workbench",
    category:"enterprise", categoryLabel:"企业实践", role:"独立交付",
    summary:"把 AI 对话、Agent 能力和研发办公工具链，收进一个开箱即用的桌面应用。",
    description:"我独立交付了基于 DeepSeek Harness 插件化架构的企业 AI 桌面工作台。它不是单一聊天窗口，而是把文件、终端、Git、SSH 远程工作区和编程助手会话放进统一工作流。以下功能均为实际跑通过的模块；内部测试版已经交付，后续版本继续完善安装升级、签名和真实服务验收。",
    challenge:"真正影响效率的，往往不是缺少另一个 AI 对话框，而是上下文和工具被切得太散。插件化分层让通用能力和公司定制能力可以分别维护，也让交付更清晰。",
    capabilities:[
      {title:"模型网关与运行环境",items:["适配公司模型授权发现、提供方配置与默认模型选择，复用官方模型与凭据服务","支持在设置中按需添加公司网关，缺少公司密钥时不阻塞基础启动","固定 Node / Python / pnpm 与原生依赖，支持工作区依赖离线物化和旧环境保留"]},
      {title:"文件与 Office 工作台",items:["整合文件树、文本与代码编辑、Git、终端以及媒体 / HTML 预览","保存带版本检查，避免静默覆盖外部修改","支持 Word / PPT / WPS 转 PDF 的预览路径；不把所有格式都宣称成无损在线编辑"]},
      {title:"记忆与知识上下文",items:["以 SQLite sidecar 保存来源、实体、关系和使用策略，支持分层与范围召回","提供文档知识库、来源关联和 2D / 3D 图谱交互","本地记忆生命周期与中文 Markdown 词法检索已实际验证，语义提炼继续接入公司服务验收"]},
      {title:"连接器与编程工具",items:["统一管理连接器目录、凭据表单、启停、检查与 MCP 工具","扩展公司检索 provider、飞书长连接和流式卡片交互","通过 Codex App Server / Claude Agent SDK 桥接原生编程工具事件","通用层 6 个插件已独立开源，通用能力与公司定制能力分别维护"]}
    ],
    contributions:["独立交付基于 DeepSeek Harness 插件化架构的桌面工作台","整合 AI 对话、Agent、文件预览编辑、终端与 Git","接入 SSH 远程工作区、编程助手会话管理及公司现有服务","将通用能力与公司定制能力分层维护"],
    outcomes:["形成一个开箱即用的企业内部 AI 工作入口","通用层 6 个插件已经独立开源","内部测试版已经交付，后续候选版本持续完善安装、升级、签名和真实服务验收"],
    tags:["Plugin Architecture","AI Desktop","SSH / SFTP","AI Coding"],
    link:"https://github.com/WilShi", linkLabel:"查看相关开源项目"
  },
  {
    id:"model-evaluation", number:"03", title:"模型能力评测平台", short:"Model Evaluation",
    category:"enterprise", categoryLabel:"企业实践", role:"平台研发",
    summary:"用统一、可比较的维度，帮助机构理解不同模型到底擅长什么。",
    description:"我参与建设模型能力评测平台，覆盖工具调用、长上下文、代码、数学、金融知识等八类评测维度，支持多种模型及部署方式的横向评测。基础框架、Web 服务和 LLM-EvalHub 分别承担配置执行、任务入口和完整分析工作流。",
    challenge:"模型名称和参数并不能直接回答「它适不适合我们的工作」。真正需要建立的是可重复、可比较的能力证据，让模型选型不只依赖感觉。",
    capabilities:[
      {title:"数据集与评测维度",items:["支持 CSV / JSONL / JSON / XLSX 上传、解析预览、版本和格式识别","配置维度名称、关联数据集、评判器、评分标准与自定义 Judge / Prompt","覆盖工具调用、长上下文、代码、数学、金融知识、文本相似度与格式遵循等方向"]},
      {title:"异步任务与可恢复执行",items:["支持创建、逐题运行、暂停、继续、重跑和取消，展示任务进度与结果明细","以 asyncio、Semaphore 和进度锁组织后台任务，单题独立落库并推送进度","续跑按维度、数据集和题号跳过已完成项，而不是从头重复执行"]},
      {title:"十二类评判与数据处理",items:["提供 exact_match、contains、regex、multiple_choice、math_answer、fin_qa、tool_call、f1、bleu、rouge_l、code_exec 与 geval 等评判方式","工具调用标签计算 Precision / Recall / F1，不把工具名匹配夸大为实际执行正确","工具调用数据链支持请求筛选、归一化、MD5 去重、SimHash 近似去重、缓存和输出格式配置"]},
      {title:"对比分析与 Playground",items:["提供维度统计、雷达图、柱状图、多任务对比和 CSV / JSON 导出","Pairwise 支持两个输出的 A / B / TIE 判定与统计","多个模型可并排对话，支持流式输出、Markdown 与 Thinking 展示"]}
    ],
    contributions:["覆盖八类真实能力评测维度","支持不同模型与部署方式的横向比较","将评测结果用于机构内部模型选型"],
    outcomes:["形成统一的数据集、维度、异步任务和对比分析工作流","为模型选型提供可解释的依据","开发完成并在测试环境验证性部署，后续生产推广另行验收"],
    tags:["Model Evaluation","Tool Calling","Long Context","Finance"], link:"", linkLabel:""
  },
  {
    id:"data-annotation", number:"04", title:"数据标注平台与训练数据工程", short:"Data & Training",
    category:"enterprise", categoryLabel:"企业实践", role:"交付集成与数据工程",
    summary:"一条线解决多模态数据生产的任务与质量管理，另一条线服务 LLM 精训 / 微调的数据准备。",
    description:"我推进了多模态标注平台的交付集成，也参与了面向精训 / 微调的数据工具建设。厂商系统与自主工具是两条不同路径：前者重点是需求协同、认证与公司服务集成，后者重点是文档加工、生成、筛选和数据集准备。",
    challenge:"标注平台不只是提供一个画框界面。真正的难点在于任务分配、角色分离、多轮质检、公司系统对接，以及把原始资料转化为可用于训练的数据。",
    capabilities:[
      {title:"多模态任务工作流",items:["覆盖需求录入、上传准备、清洗与可选预标注、任务分配、标注、质检、退回重标、验收和导出","支持按人、比例、数量或任务池分配，未处理任务可回收或转移","标注、检查与验收角色分离，不同轮次避免由同一检查员处理"]},
      {title:"企业集成与辅助标注",items:["适配企业 SSO、用户 / 组织 / 租户和默认角色","接入公司已有 LLM、OCR 与文档解析能力，用于预标注和处理","交付重点覆盖对话、文本、图像及 12+ 细分模板，而不是把产品手册全部归为个人开发"]},
      {title:"精训 / 微调数据准备",items:["支持项目与模型配置、文档上传、分块与领域树整理","按文本块生成问题、答案或训练条目，再进行人工确认、评分、筛选与导出","覆盖 Chunks、Questions、Datasets、CoT、对话数据、标签树和评估数据集等数据模型"]}
    ],
    contributions:["负责需求梳理、厂商协同、交付质量把控与公司环境落地","推进认证、模型辅助解析和任务工作流集成","参与面向精训 / 微调的数据准备与清洗流水线建设"],
    outcomes:["讯飞标注系统于 2026-07-01 上线，7 月试运行正常，并于 2026-07-31 完成签字验收","已有上线与验收证据，不把自主精训平台的测试部署与厂商系统混为一谈","不把厂商或开源基础功能全部归为个人原创"],
    tags:["Multimodal Annotation","SSO","Data Pipeline","Fine-tuning"], link:"", linkLabel:""
  },
  {
    id:"middleware-operations", number:"05", title:"中间件智能运维与 Kafka 管控", short:"Middleware & Kafka",
    category:"enterprise", categoryLabel:"企业实践", role:"平台研发 / SRE",
    summary:"把人工巡检、指标采集、异常识别、报告通知和 Kafka 治理串成可持续运行的工程流程。",
    description:"在中间件团队阶段，我围绕 Kafka、ZooKeeper 等组件推进指标采集、标准化巡检、异常诊断、报告通知和治理跟踪，同时参与 Topic、权限、配置、版本升级与容器迁移。这里既有持续运行的工具与流程，也有后续迭代的智能诊断能力。",
    challenge:"组件多、配置和运行环境不一致时，逐台看图和逐项检查容易漏掉磁盘容量、消费堆积、配置漂移和健康变化。治理需要的不只是监控图，而是采集、识别、报告和处理的连续流程。",
    capabilities:[
      {title:"指标采集与标准化巡检",items:["通过 mntr / ruok / stat 等方式采集 ZooKeeper 状态并转换为 Prometheus 指标","按 ActiveControllerCount、OfflinePartitionsCount、UnderReplicatedPartitions 及线程状态判断 Kafka 健康","以配置驱动组件、集群、节点和指标任务，支持定时执行、结果保存与跟踪"]},
      {title:"异常识别与模型回退",items:["支持可配置阈值、豁免和孤立森林异常检测","按小时和时段训练模型，数据不足时回退到默认模型，配合缓存与多层并发执行","历史趋势使用 Pandas / NumPy / Matplotlib 生成，不把趋势图夸大为神经网络预测"]},
      {title:"报告、通知与治理跟踪",items:["输出 CSV / TXT / HTML 巡检报告、总结、低水位矩阵和组件趋势","通过邮件与报告晾晒支持工单派发和催办，形成工具加人工运营的闭环","支持交易日巡检、周总结及水位突增 / 突降通知"]},
      {title:"Kafka 管理与迁移工程",items:["覆盖 Topic 创建、详情、列表、配置更新、分区重分配和消息查询导出","支持 ACL / SCRAM 用户、权限查询添加撤销、账密轮换和认证校验","验证 Offset / Lag、消费组状态与受限重置，测试环境支持消息发送联调","推进配置标准化、版本兼容、Helm 部署扩容验证和业务容器迁移协同"]}
    ],
    contributions:["负责约 300 个 Kafka 集群与 20 多个 Pulsar 集群的稳定性治理","建设消息队列中间件管控能力，以及团队自动化巡检与自动化运维能力，并以平台化能力支撑","推进 Topic、权限、配置、版本兼容和迁移相关工具建设"],
    outcomes:["形成覆盖中间件团队的自动化巡检与运维平台能力","历史巡检报告与治理流程持续使用，支持配置、容量和稳定性治理","完成 18 个 Kafka 相关运维工具，并建设适配多个 Kafka 版本的功能控制器"],
    tags:["Kafka","ZooKeeper","SRE","Inspection","Migration"], link:"https://github.com/WilShi/kafka-pulsar-ops-toolkit", linkLabel:"查看关联运维工具集"
  },
  {
    id:"developer-framework", number:"06", title:"高低代码开发框架", short:"Developer Framework",
    category:"enterprise", categoryLabel:"企业实践", role:"平台研发",
    summary:"用 SDK、脚手架、适配器和在线 IDE，把 AI 能力接入更多业务团队的开发流程。",
    description:"我参与了 Python SDK、Java Spring AI 脚手架、HiAgent Adapter 和在线 IDE 建设，帮助不同技术背景的团队以统一方式调用模型与 Agent 能力。",
    challenge:"模型能力如果只能由少数熟悉底层接口的人使用，就很难进入更多业务。开发框架需要把认证、调用、编排和调试封装成可复用的工程入口。",
    capabilities:[
      {title:"SDK 与脚手架",items:["提供 Python SDK，降低模型与工作流调用门槛","提供 Java Spring AI 脚手架，统一业务接入方式","通过 HiAgent Adapter 适配既有业务系统与 Agent 能力"]},
      {title:"在线开发与调试",items:["建设在线 IDE，支持开发、调试和接入验证","让业务团队不必从底层认证与接口细节开始搭建","与数据标注、模型评测和 Agent 平台形成配套开发链路"]}
    ],
    contributions:["参与 Python SDK、Java Spring AI 脚手架与 HiAgent Adapter 建设","参与在线 IDE 和相关开发调试能力建设"],
    outcomes:["相关开发能力覆盖百名以上开发者","服务多个业务部门，为后续 Agent 平台开发提供工程基础"],
    tags:["Python SDK","Spring AI","HiAgent","Online IDE"], link:"", linkLabel:""
  },
  {
    id:"dsh-feishu", number:"07", title:"dsh-feishu", short:"Feishu Interface",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把 DeepSeek Harness 带进飞书，用流式卡片承载对话、提问与审批。",
    description:"这是一个飞书 / Lark 聊天界面，让 DeepSeek Harness 的交互进入团队常用沟通工具。它关注的不只是发消息，还有流式卡片、卡片内提问与审批，以及更友好的配置过程。",
    challenge:"Agent 能力只有进入真实沟通场景，才会离日常工作更近。卡片内交互可以减少在不同工具之间来回切换。",
    contributions:["实现飞书中的流式对话卡片","支持卡片内提问与审批","提供向导式配置，降低接入成本"],
    outcomes:["以 MIT 许可证开源","可作为 DeepSeek Harness 的飞书聊天入口"],
    tags:["Feishu","Streaming Card","Approval","DeepSeek Harness"], link:"https://github.com/WilShi/dsh-feishu", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-ssh-workspace", number:"08", title:"dsh-ssh-workspace", short:"SSH Workspace",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把远程工作区、缓存、冲突安全同步和终端，收进同一个连续工作流。",
    description:"这是一个 SSH / SFTP 远程工作区工具，提供本地缓存、冲突安全同步和远程终端。它来自我对远程开发体验的直接关注：少一些窗口切换，就多一点连续思考。",
    challenge:"远程工作并不只是连上一台机器。文件如何同步、冲突如何处理、终端如何进入同一个上下文，都会影响真正的工作效率。",
    contributions:["提供 SSH / SFTP 远程工作区","实现本地缓存与冲突安全同步","将远程终端整合进同一工作区"],
    outcomes:["以 MIT 许可证开源","形成可复用的远程工作区基础能力"],
    tags:["SSH","SFTP","Remote Workspace","Sync"], link:"https://github.com/WilShi/dsh-ssh-workspace", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-coding-agents", number:"09", title:"dsh-coding-agents", short:"Coding Agents",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"在一个控制中心里管理 Codex 与 Claude Code 的工作会话。",
    description:"这是一个面向 AI Coding 工具链的统一控制中心，用来集中管理 Codex 和 Claude Code 会话，减少不同编程助手之间的割裂。",
    challenge:"当编程助手越来越多，真正需要管理的不只是对话，而是任务、上下文和工作状态。",
    contributions:["统一 Codex / Claude Code 的控制入口","围绕编程助手会话提供集中管理"],
    outcomes:["以开源项目形式持续维护","服务于个人 AI Coding 工作流"],
    tags:["Codex","Claude Code","AI Coding"], link:"https://github.com/WilShi/dsh-coding-agents", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-external-api", number:"10", title:"dsh-external-api", short:"External API",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"为本地和可信局域网集成，提供带认证的 HTTP API。",
    description:"这是一个选择性启用的认证 HTTP API，面向本地和可信局域网中的 DeepSeek Harness 集成场景。它明确限定信任边界，而不是把接口无差别暴露到公网。",
    challenge:"外部集成需要便利，也需要清晰的边界。认证和使用场景应该在设计之初就被说明。",
    contributions:["提供外部 HTTP API 集成能力","加入访问认证机制","明确本地与可信局域网的使用边界"],
    outcomes:["以开源项目形式发布","为受信任环境中的工具集成提供入口"],
    tags:["HTTP API","Authentication","LAN"], link:"https://github.com/WilShi/dsh-external-api", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-plugin-builder", number:"11", title:"dsh-plugin-builder", short:"Plugin Builder",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把插件制作流程和开发规范放在一起，减少从想法到插件之间的距离。",
    description:"这是一个 DeepSeek Harness 插件智能制作器，同时包含完整的开发规范。它希望把「怎么做」和「怎样做得一致」合并到同一个工作流里。",
    challenge:"插件生态需要的不只是更多插件，还需要可复用的约定、边界和制作方式。",
    contributions:["提供插件智能制作流程","整理配套的开发规范","将规范融入实际制作过程"],
    outcomes:["以开源项目形式发布","为插件开发提供统一起点"],
    tags:["Plugin Builder","Developer Tooling","Conventions"], link:"https://github.com/WilShi/dsh-plugin-builder", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-connector-builder", number:"12", title:"dsh-connector-builder", short:"Connector Builder",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"覆盖 MCP 连接器从设计、校验到注册和分享的工具链。",
    description:"这是一个 MCP 连接器构建工具，把设计、验证、注册和分享串起来。它关注连接器从想法到可复用资产的完整生命周期。",
    challenge:"连接器不是写完一段代码就结束了。能否被验证、注册和分享，决定了它能否真正进入生态。",
    contributions:["支持 MCP 连接器设计","提供校验、注册和分享流程","将连接器开发整理为完整工具链"],
    outcomes:["以开源项目形式发布","为 MCP 连接器提供统一构建入口"],
    tags:["MCP","Connector","Validation"], link:"https://github.com/WilShi/dsh-connector-builder", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-skill-station", number:"13", title:"dsh-skill-station", short:"Skill Station",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"一个 Agent 技能生态管理站，支持扫描、导入和拖拽安装。",
    description:"这是一个 Agent 技能管理站，可以扫描不同工具的技能库、一键导入、管理全局和项目技能，并通过拖拽完成安装。",
    challenge:"技能散落在不同目录和工具里时，真正困难的是发现、比较和管理，而不只是复制文件。",
    contributions:["扫描多个 Agent 工具的技能库","支持一键导入和拖拽安装","提供全局与项目级技能管理"],
    outcomes:["以开源项目形式发布","形成统一的技能生态管理入口"],
    tags:["Agent Skills","Ecosystem","Drag & Drop"], link:"https://github.com/WilShi/dsh-skill-station", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"agent-platform-cookbook", number:"14", title:"agent-platform-cookbook", short:"Platform Cookbook",
    category:"open", categoryLabel:"工程笔记", role:"独立开源",
    summary:"把企业级 Agent 平台实践里可以公开的方法，整理成工程模式集。",
    description:"这是一本经过脱敏的企业级 Agent 平台工程模式集，包含多框架统一纳管、渠道接入网关等实践。它不是内部系统展示，而是把经验整理成别人可以理解和使用的方法。",
    challenge:"真正可分享的不是内部名称和架构细节，而是问题、约束和解决方式。脱敏是内容设计的一部分。",
    contributions:["整理多框架统一纳管的工程模式","沉淀渠道接入网关等实践","对企业内容进行公开口径脱敏"],
    outcomes:["以开源工程笔记形式发布","为类似平台实践提供参考"],
    tags:["Agent Platform","Engineering Patterns","Sanitized"], link:"https://github.com/WilShi/agent-platform-cookbook", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"scholarmind", number:"15", title:"ScholarMind_MAS", short:"ScholarMind",
    category:"open", categoryLabel:"研究项目", role:"独立开源",
    summary:"让多个 Agent 从不同角度讨论一篇论文，而不是只生成一段摘要。",
    description:"ScholarMind 是一个多智能体学术研究系统。它让多个 Agent 模拟研讨过程，从不同角度审视论文的问题、方法、证据和局限，再形成更易理解的解读。",
    challenge:"复杂论文需要的不只是压缩文字，还需要追问和交叉验证。多智能体提供了一种组织不同视角的方式。",
    contributions:["设计多智能体协作的论文解读流程","将不同分析视角组织成研讨过程","把复杂学术内容转化为更易理解的表达"],
    outcomes:["以开源项目形式发布","用于探索多智能体在知识解读中的应用"],
    tags:["Multi-agent","Academic Papers","Research"], link:"https://github.com/WilShi/ScholarMind_MAS", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"kafka-pulsar-ops-toolkit", number:"16", title:"kafka-pulsar-ops-toolkit", short:"Messaging Ops",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把 Kafka / Pulsar 运维中真正会用到的检查和报告，整理成工具集。",
    description:"这是一个消息中间件运维工具集，包含消费积压巡检、topic lag 报告等一线 SRE 工具，来自生产工作中的消息中间件运维实践。",
    challenge:"运维工具应该让重复检查更快、更清晰，也应该服务于实际事故排查和日常治理。",
    contributions:["整理 Kafka / Pulsar 运维脚本","提供消费积压巡检与 topic lag 报告","沉淀一线生产运维经验"],
    outcomes:["以开源项目形式发布","为消息中间件日常运维提供实用工具"],
    tags:["Kafka","Pulsar","SRE","Operations"], link:"https://github.com/WilShi/kafka-pulsar-ops-toolkit", linkLabel:"打开 GitHub 仓库"
  }
];