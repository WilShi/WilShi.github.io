window.WILSON_PROJECTS = [
  {
    id:"agent-platform", number:"01", title:"企业级智能体运行管控平台", short:"Agent Platform",
    category:"enterprise", categoryLabel:"企业实践", role:"平台负责人（发起并主导）",
    summary:"把一个想法从技术验证一路推到生产环境，让 Agent 能力真正进入日常工作。",
    description:"我目前担任算法工程师、公司智能体平台负责人。我从零发起并主导企业级智能体运行管控平台，参与前期技术验证、方案与架构设计、主体研发、生产交付和持续迭代。页面只呈现可公开的脱敏信息。",
    challenge:"企业里的 Agent 平台需要同时面对多框架接入、真实工作流、生产交付和持续治理。我更关心的是，系统能不能被真实的人持续使用。",
    contributions:["完成从 0 到 1 的技术验证、架构设计与主体研发","以 OpenClaw 为生产主线，验证 ZeroClaw / DeepSeek Harness 接入","初期独立开发，后期带领 4 人协作迭代，并担任 2 名校招生导师"],
    outcomes:["平台服务 4000+ 同事，覆盖公司几乎所有部门","为营业部投资顾问提供 AI 数字分身能力","累计发放超过 6000 个 Agent 实例，日活用户超过 800"],
    tags:["Agent Platform","OpenClaw","ZeroClaw","DeepSeek Harness","生产交付"],
    link:"https://github.com/WilShi/agent-platform-cookbook", linkLabel:"查看脱敏工程模式集"
  },
  {
    id:"ai-workbench", number:"02", title:"企业级 AI 桌面工作台", short:"AI Workbench",
    category:"enterprise", categoryLabel:"企业实践", role:"独立交付",
    summary:"把 AI 对话、Agent 能力和研发办公工具链，收进一个开箱即用的桌面应用。",
    description:"我独立交付了基于 DeepSeek Harness 插件化架构的企业 AI 桌面工作台。它不是单一聊天窗口，而是把文件、终端、Git、SSH 远程工作区和编程助手会话放进统一工作流。",
    challenge:"真正影响效率的，往往不是缺少另一个 AI 对话框，而是上下文和工具被切得太散。插件化分层让通用能力和公司定制能力可以分别维护，也让交付更清晰。",
    contributions:["独立交付基于 DeepSeek Harness 插件化架构的桌面工作台","整合 AI 对话、Agent、文件预览编辑、终端与 Git","接入 SSH 远程工作区、编程助手会话管理及公司服务","将通用能力与公司定制能力分层维护"],
    outcomes:["形成一个开箱即用的企业内部 AI 工作入口","通用层 6 个插件已经独立开源","以统一方式接入公司现有模型、搜索与业务服务"],
    tags:["Plugin Architecture","AI Desktop","SSH / SFTP","AI Coding"],
    link:"https://github.com/WilShi", linkLabel:"查看相关开源项目"
  },
  {
    id:"model-evaluation", number:"03", title:"模型能力评测平台", short:"Model Evaluation",
    category:"enterprise", categoryLabel:"企业实践", role:"平台研发",
    summary:"用统一、可比较的维度，帮助机构理解不同模型到底擅长什么。",
    description:"我参与建设模型能力评测平台，覆盖工具调用、长上下文、代码、数学、金融知识等八类评测维度，支持多种模型及部署方式的横向评测。",
    challenge:"模型名称和参数并不能直接回答「它适不适合我们的工作」。真正需要建立的是可重复、可比较的能力证据，让模型选型不只依赖感觉。",
    contributions:["覆盖八类真实能力评测维度","支持不同模型与部署方式的横向比较","将评测结果用于机构内部模型选型"],
    outcomes:["形成统一的模型能力比较入口","为模型选型提供可解释的依据","覆盖通用能力与金融知识场景"],
    tags:["Model Evaluation","Tool Calling","Long Context","Finance"], link:"", linkLabel:""
  },
  {
    id:"data-framework-sre", number:"04", title:"数据、开发框架与消息基础设施", short:"Data & Infrastructure",
    category:"enterprise", categoryLabel:"企业实践", role:"平台研发 / SRE",
    summary:"从数据标注到开发脚手架，再到生产消息系统，处理 AI 落地更底层的那一段。",
    description:"在 Agent 平台之前和与此同时，我做过数据标注平台、高低代码开发框架，也负责过消息中间件 SRE。它们让我接触到 AI 系统从数据、开发到生产稳定性的完整链路。",
    challenge:"上层的智能能力离不开底层工程。数据是否可用、开发是否顺畅、消息系统是否稳定，最终都会影响用户看到的结果。",
    contributions:["建设图片、音频、视频和文本的多模态标注与清洗流水线","提供 Python SDK、Java Spring AI 脚手架与在线 IDE","负责约 300 个 Kafka 集群与 20 多个 Pulsar 集群的稳定性治理","建设消息队列中间件管控能力，以及团队自动化巡检与自动化运维能力，并以平台化能力支撑","参与监控告警、自动巡检、集群治理和容器化迁移"],
    outcomes:["开发能力覆盖百名以上开发者","形成覆盖中间件团队的自动化巡检与运维平台能力","沉淀生产消息中间件治理与管控经验","形成从数据到底层生产的完整工程视角"],
    tags:["Data Pipeline","Python SDK","Spring AI","Kafka","Pulsar","SRE"],
    link:"https://github.com/WilShi/kafka-pulsar-ops-toolkit", linkLabel:"查看关联运维工具集"
  },
  {
    id:"dsh-feishu", number:"05", title:"dsh-feishu", short:"Feishu Interface",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把 DeepSeek Harness 带进飞书，用流式卡片承载对话、提问与审批。",
    description:"这是一个飞书 / Lark 聊天界面，让 DeepSeek Harness 的交互进入团队常用沟通工具。它关注的不只是发消息，还有流式卡片、卡片内提问与审批，以及更友好的配置过程。",
    challenge:"Agent 能力只有进入真实沟通场景，才会离日常工作更近。卡片内交互可以减少在不同工具之间来回切换。",
    contributions:["实现飞书中的流式对话卡片","支持卡片内提问与审批","提供向导式配置，降低接入成本"],
    outcomes:["以 MIT 许可证开源","可作为 DeepSeek Harness 的飞书聊天入口"],
    tags:["Feishu","Streaming Card","Approval","DeepSeek Harness"], link:"https://github.com/WilShi/dsh-feishu", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-ssh-workspace", number:"06", title:"dsh-ssh-workspace", short:"SSH Workspace",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把远程工作区、缓存、冲突安全同步和终端，收进同一个连续工作流。",
    description:"这是一个 SSH / SFTP 远程工作区工具，提供本地缓存、冲突安全同步和远程终端。它来自我对远程开发体验的直接关注：少一些窗口切换，就多一点连续思考。",
    challenge:"远程工作并不只是连上一台机器。文件如何同步、冲突如何处理、终端如何进入同一个上下文，都会影响真正的工作效率。",
    contributions:["提供 SSH / SFTP 远程工作区","实现本地缓存与冲突安全同步","将远程终端整合进同一工作区"],
    outcomes:["以 MIT 许可证开源","形成可复用的远程工作区基础能力"],
    tags:["SSH","SFTP","Remote Workspace","Sync"], link:"https://github.com/WilShi/dsh-ssh-workspace", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-coding-agents", number:"07", title:"dsh-coding-agents", short:"Coding Agents",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"在一个控制中心里管理 Codex 与 Claude Code 的工作会话。",
    description:"这是一个面向 AI Coding 工具链的统一控制中心，用来集中管理 Codex 和 Claude Code 会话，减少不同编程助手之间的割裂。",
    challenge:"当编程助手越来越多，真正需要管理的不只是对话，而是任务、上下文和工作状态。",
    contributions:["统一 Codex / Claude Code 的控制入口","围绕编程助手会话提供集中管理"],
    outcomes:["以开源项目形式持续维护","服务于个人 AI Coding 工作流"],
    tags:["Codex","Claude Code","AI Coding"], link:"https://github.com/WilShi/dsh-coding-agents", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-external-api", number:"08", title:"dsh-external-api", short:"External API",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"为本地和可信局域网集成，提供带认证的 HTTP API。",
    description:"这是一个选择性启用的认证 HTTP API，面向本地和可信局域网中的 DeepSeek Harness 集成场景。它明确限定信任边界，而不是把接口无差别暴露到公网。",
    challenge:"外部集成需要便利，也需要清晰的边界。认证和使用场景应该在设计之初就被说明。",
    contributions:["提供外部 HTTP API 集成能力","加入访问认证机制","明确本地与可信局域网的使用边界"],
    outcomes:["以开源项目形式发布","为受信任环境中的工具集成提供入口"],
    tags:["HTTP API","Authentication","LAN"], link:"https://github.com/WilShi/dsh-external-api", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-plugin-builder", number:"09", title:"dsh-plugin-builder", short:"Plugin Builder",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把插件制作流程和开发规范放在一起，减少从想法到插件之间的距离。",
    description:"这是一个 DeepSeek Harness 插件智能制作器，同时包含完整的开发规范。它希望把「怎么做」和「怎样做得一致」合并到同一个工作流里。",
    challenge:"插件生态需要的不只是更多插件，还需要可复用的约定、边界和制作方式。",
    contributions:["提供插件智能制作流程","整理配套的开发规范","将规范融入实际制作过程"],
    outcomes:["以开源项目形式发布","为插件开发提供统一起点"],
    tags:["Plugin Builder","Developer Tooling","Conventions"], link:"https://github.com/WilShi/dsh-plugin-builder", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-connector-builder", number:"10", title:"dsh-connector-builder", short:"Connector Builder",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"覆盖 MCP 连接器从设计、校验到注册和分享的工具链。",
    description:"这是一个 MCP 连接器构建工具，把设计、验证、注册和分享串起来。它关注连接器从想法到可复用资产的完整生命周期。",
    challenge:"连接器不是写完一段代码就结束了。能否被验证、注册和分享，决定了它能否真正进入生态。",
    contributions:["支持 MCP 连接器设计","提供校验、注册和分享流程","将连接器开发整理为完整工具链"],
    outcomes:["以开源项目形式发布","为 MCP 连接器提供统一构建入口"],
    tags:["MCP","Connector","Validation"], link:"https://github.com/WilShi/dsh-connector-builder", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"dsh-skill-station", number:"11", title:"dsh-skill-station", short:"Skill Station",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"一个 Agent 技能生态管理站，支持扫描、导入和拖拽安装。",
    description:"这是一个 Agent 技能管理站，可以扫描不同工具的技能库、一键导入、管理全局和项目技能，并通过拖拽完成安装。",
    challenge:"技能散落在不同目录和工具里时，真正困难的是发现、比较和管理，而不只是复制文件。",
    contributions:["扫描多个 Agent 工具的技能库","支持一键导入和拖拽安装","提供全局与项目级技能管理"],
    outcomes:["以开源项目形式发布","形成统一的技能生态管理入口"],
    tags:["Agent Skills","Ecosystem","Drag & Drop"], link:"https://github.com/WilShi/dsh-skill-station", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"agent-platform-cookbook", number:"12", title:"agent-platform-cookbook", short:"Platform Cookbook",
    category:"open", categoryLabel:"工程笔记", role:"独立开源",
    summary:"把企业级 Agent 平台实践里可以公开的方法，整理成工程模式集。",
    description:"这是一本经过脱敏的企业级 Agent 平台工程模式集，包含多框架统一纳管、渠道接入网关等实践。它不是内部系统展示，而是把经验整理成别人可以理解和使用的方法。",
    challenge:"真正可分享的不是内部名称和架构细节，而是问题、约束和解决方式。脱敏是内容设计的一部分。",
    contributions:["整理多框架统一纳管的工程模式","沉淀渠道接入网关等实践","对企业内容进行公开口径脱敏"],
    outcomes:["以开源工程笔记形式发布","为类似平台实践提供参考"],
    tags:["Agent Platform","Engineering Patterns","Sanitized"], link:"https://github.com/WilShi/agent-platform-cookbook", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"scholarmind", number:"13", title:"ScholarMind_MAS", short:"ScholarMind",
    category:"open", categoryLabel:"研究项目", role:"独立开源",
    summary:"让多个 Agent 从不同角度讨论一篇论文，而不是只生成一段摘要。",
    description:"ScholarMind 是一个多智能体学术研究系统。它让多个 Agent 模拟研讨过程，从不同角度审视论文的问题、方法、证据和局限，再形成更易理解的解读。",
    challenge:"复杂论文需要的不只是压缩文字，还需要追问和交叉验证。多智能体提供了一种组织不同视角的方式。",
    contributions:["设计多智能体协作的论文解读流程","将不同分析视角组织成研讨过程","把复杂学术内容转化为更易理解的表达"],
    outcomes:["以开源项目形式发布","用于探索多智能体在知识解读中的应用"],
    tags:["Multi-agent","Academic Papers","Research"], link:"https://github.com/WilShi/ScholarMind_MAS", linkLabel:"打开 GitHub 仓库"
  },
  {
    id:"kafka-pulsar-ops-toolkit", number:"14", title:"kafka-pulsar-ops-toolkit", short:"Messaging Ops",
    category:"open", categoryLabel:"开源工具", role:"独立开源",
    summary:"把 Kafka / Pulsar 运维中真正会用到的检查和报告，整理成工具集。",
    description:"这是一个消息中间件运维工具集，包含消费积压巡检、topic lag 报告等一线 SRE 工具，来自生产工作中的消息中间件运维实践。",
    challenge:"运维工具应该让重复检查更快、更清晰，也应该服务于实际事故排查和日常治理。",
    contributions:["整理 Kafka / Pulsar 运维脚本","提供消费积压巡检与 topic lag 报告","沉淀一线生产运维经验"],
    outcomes:["以开源项目形式发布","为消息中间件日常运维提供实用工具"],
    tags:["Kafka","Pulsar","SRE","Operations"], link:"https://github.com/WilShi/kafka-pulsar-ops-toolkit", linkLabel:"打开 GitHub 仓库"
  }
];