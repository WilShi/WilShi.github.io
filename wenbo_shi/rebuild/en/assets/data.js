window.WILSON_PROJECTS = [
  {
    id:"agent-platform", number:"01", title:"Enterprise Agent Operations & Governance Platform", short:"Agent Platform",
    category:"enterprise", categoryLabel:"Enterprise Project", role:"Platform Lead (Initiated & Led)",
    summary:"Taking an idea from technical validation to production and bringing Agent capabilities into everyday work.",
    description:"I currently work as an algorithm engineer and lead the company's Agent platform. I initiated and led the enterprise Agent operations and governance platform from scratch, contributing to early technical validation, solution and architecture design, core development, production delivery, and continuous iteration. Only sanitized, publicly shareable information is presented here.",
    challenge:"An enterprise Agent platform must accommodate multiple frameworks, real workflows, production delivery, and ongoing governance. My primary concern is whether people will actually keep using the system.",
    contributions:["Completed 0-to-1 technical validation, architecture design, and core development","Used OpenClaw as the primary production framework and validated ZeroClaw / DeepSeek Harness integrations","Developed independently at first, then led a four-person team through subsequent iterations and mentored two campus hires"],
    outcomes:["Serves more than 4,000 colleagues across nearly every department in the company","Provides AI digital-twin capabilities to investment advisors at branch offices","Has provisioned more than 6,000 Agent instances, with over 800 daily active users"],
    tags:["Agent Platform","OpenClaw","ZeroClaw","DeepSeek Harness","Production Delivery"],
    link:"https://github.com/WilShi/agent-platform-cookbook", linkLabel:"View Sanitized Engineering Patterns"
  },
  {
    id:"ai-workbench", number:"02", title:"Enterprise AI Desktop Workbench", short:"AI Workbench",
    category:"enterprise", categoryLabel:"Enterprise Project", role:"Independent Delivery",
    summary:"Bringing AI chat, Agent capabilities, and the development and office toolchain into one ready-to-use desktop application.",
    description:"I independently delivered an enterprise AI desktop workbench built on the DeepSeek Harness plugin architecture. Rather than a single chat window, it brings files, terminals, Git, SSH remote workspaces, and coding assistant sessions into a unified workflow.",
    challenge:"The biggest obstacle to efficiency is often not the lack of another AI chat box, but the fragmentation of context and tools. A layered plugin architecture allows general-purpose and company-specific capabilities to be maintained separately, making delivery clearer as well.",
    contributions:["Independently delivered a desktop workbench based on the DeepSeek Harness plugin architecture","Integrated AI chat, Agents, file preview and editing, terminals, and Git","Added SSH remote workspaces, coding assistant session management, and company services","Maintained general-purpose and company-specific capabilities in separate layers"],
    outcomes:["Created a ready-to-use AI work entry point for the company","Six general-purpose plugins have been open-sourced independently","Connects existing company models, search, and business services in a unified way"],
    tags:["Plugin Architecture","AI Desktop","SSH / SFTP","AI Coding"],
    link:"https://github.com/WilShi", linkLabel:"View Related Open-Source Projects"
  },
  {
    id:"model-evaluation", number:"03", title:"Model Capability Evaluation Platform", short:"Model Evaluation",
    category:"enterprise", categoryLabel:"Enterprise Project", role:"Platform Development",
    summary:"Using consistent, comparable dimensions to help the organization understand what different models do best.",
    description:"I helped build a model capability evaluation platform covering eight evaluation dimensions, including tool calling, long context, code, mathematics, and financial knowledge. It supports horizontal evaluation across multiple models and deployment methods.",
    challenge:"Model names and parameter counts cannot directly answer whether a model suits our work. What we really need is repeatable, comparable evidence of capability, so model selection does not rely on intuition alone.",
    contributions:["Covered eight dimensions of real-world capability evaluation","Supported horizontal comparisons across different models and deployment methods","Used evaluation results to inform model selection within the organization"],
    outcomes:["Established a unified entry point for comparing model capabilities","Provided an explainable basis for model selection","Covered both general capabilities and financial knowledge scenarios"],
    tags:["Model Evaluation","Tool Calling","Long Context","Finance"], link:"", linkLabel:""
  },
  {
    id:"data-framework-sre", number:"04", title:"Data, Development Frameworks & Messaging Infrastructure", short:"Data & Infrastructure",
    category:"enterprise", categoryLabel:"Enterprise Project", role:"Platform Development / SRE",
    summary:"Working on the lower layers of AI implementation, from data annotation and development scaffolding to production messaging systems.",
    description:"Before and while working on the Agent platform, I built a data annotation platform and low-code and high-code development frameworks, and was responsible for messaging middleware SRE. This work exposed me to the full chain of AI systems, from data and development to production stability.",
    challenge:"Higher-level intelligence depends on underlying engineering. Data usability, the development experience, and messaging system stability all ultimately affect what users see.",
    contributions:["Built multimodal annotation and cleaning pipelines for images, audio, video, and text","Provided a Python SDK, Java Spring AI scaffolding, and an online IDE","Managed stability for approximately 300 Kafka clusters and more than 20 Pulsar clusters","Built messaging middleware management and control capabilities, supported by platform-based automated inspection and operations for the team","Participated in monitoring and alerting, automated inspections, cluster governance, and containerized migration"],
    outcomes:["Supported more than 100 developers with development capabilities","Established platform capabilities for automated inspection and operations across the middleware team","Developed production messaging middleware governance and management expertise","Formed an end-to-end engineering perspective from data to production infrastructure"],
    tags:["Data Pipeline","Python SDK","Spring AI","Kafka","Pulsar","SRE"],
    link:"https://github.com/WilShi/kafka-pulsar-ops-toolkit", linkLabel:"View Related Operations Toolkit"
  },
  {
    id:"dsh-feishu", number:"05", title:"dsh-feishu", short:"Feishu Interface",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"Bringing DeepSeek Harness into Feishu with streaming cards for conversations, questions, and approvals.",
    description:"A Feishu / Lark chat interface that brings DeepSeek Harness interactions into a team's everyday communication tool. It goes beyond messaging to cover streaming cards, in-card questions and approvals, and a friendlier configuration process.",
    challenge:"Agent capabilities move closer to everyday work only when they enter real communication scenarios. In-card interactions can reduce switching between tools.",
    contributions:["Implemented streaming conversation cards in Feishu","Supported in-card questions and approvals","Provided wizard-based configuration to reduce integration overhead"],
    outcomes:["Released under the MIT License","Serves as a Feishu chat entry point for DeepSeek Harness"],
    tags:["Feishu","Streaming Card","Approval","DeepSeek Harness"], link:"https://github.com/WilShi/dsh-feishu", linkLabel:"Open GitHub Repository"
  },
  {
    id:"dsh-ssh-workspace", number:"06", title:"dsh-ssh-workspace", short:"SSH Workspace",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"Bringing remote workspaces, caching, conflict-safe synchronization, and a terminal into one continuous workflow.",
    description:"An SSH / SFTP remote workspace tool with local caching, conflict-safe synchronization, and a remote terminal. It grew from my direct interest in the remote development experience: fewer window switches mean more uninterrupted thinking.",
    challenge:"Remote work is about more than connecting to a machine. File synchronization, conflict handling, and bringing the terminal into the same context all affect real productivity.",
    contributions:["Provided an SSH / SFTP remote workspace","Implemented local caching and conflict-safe synchronization","Integrated a remote terminal into the same workspace"],
    outcomes:["Released under the MIT License","Established reusable remote workspace foundations"],
    tags:["SSH","SFTP","Remote Workspace","Sync"], link:"https://github.com/WilShi/dsh-ssh-workspace", linkLabel:"Open GitHub Repository"
  },
  {
    id:"dsh-coding-agents", number:"07", title:"dsh-coding-agents", short:"Coding Agents",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"Managing Codex and Claude Code work sessions in a single control center.",
    description:"A unified control center for the AI coding toolchain, built to manage Codex and Claude Code sessions in one place and reduce fragmentation between coding assistants.",
    challenge:"As coding assistants multiply, what needs managing is not just conversations, but tasks, context, and work status.",
    contributions:["Unified the control entry point for Codex / Claude Code","Provided centralized management for coding assistant sessions"],
    outcomes:["Maintained as an open-source project","Supports personal AI coding workflows"],
    tags:["Codex","Claude Code","AI Coding"], link:"https://github.com/WilShi/dsh-coding-agents", linkLabel:"Open GitHub Repository"
  },
  {
    id:"dsh-external-api", number:"08", title:"dsh-external-api", short:"External API",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"Providing an authenticated HTTP API for local and trusted-LAN integrations.",
    description:"An opt-in authenticated HTTP API for DeepSeek Harness integrations in local and trusted-LAN environments. It explicitly defines its trust boundary rather than exposing the interface indiscriminately to the public internet.",
    challenge:"External integrations need both convenience and clear boundaries. Authentication and intended usage scenarios should be documented from the outset.",
    contributions:["Provided external HTTP API integration capabilities","Added an access authentication mechanism","Defined clear usage boundaries for local and trusted-LAN environments"],
    outcomes:["Released as an open-source project","Provides an integration entry point for tools in trusted environments"],
    tags:["HTTP API","Authentication","LAN"], link:"https://github.com/WilShi/dsh-external-api", linkLabel:"Open GitHub Repository"
  },
  {
    id:"dsh-plugin-builder", number:"09", title:"dsh-plugin-builder", short:"Plugin Builder",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"Bringing the plugin creation workflow and development conventions together to shorten the path from idea to plugin.",
    description:"An intelligent builder for DeepSeek Harness plugins, accompanied by a complete set of development conventions. It combines how to build with how to build consistently in one workflow.",
    challenge:"A plugin ecosystem needs more than additional plugins; it also needs reusable conventions, boundaries, and creation methods.",
    contributions:["Provided an intelligent plugin creation workflow","Documented supporting development conventions","Embedded those conventions in the actual creation process"],
    outcomes:["Released as an open-source project","Provides a consistent starting point for plugin development"],
    tags:["Plugin Builder","Developer Tooling","Conventions"], link:"https://github.com/WilShi/dsh-plugin-builder", linkLabel:"Open GitHub Repository"
  },
  {
    id:"dsh-connector-builder", number:"10", title:"dsh-connector-builder", short:"Connector Builder",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"A toolchain covering MCP connector design, validation, registration, and sharing.",
    description:"An MCP connector builder that connects design, validation, registration, and sharing. It addresses the complete lifecycle of a connector, from idea to reusable asset.",
    challenge:"A connector is not finished when its code is written. Whether it can be validated, registered, and shared determines whether it can truly become part of the ecosystem.",
    contributions:["Supported MCP connector design","Provided validation, registration, and sharing workflows","Organized connector development into a complete toolchain"],
    outcomes:["Released as an open-source project","Provides a unified build entry point for MCP connectors"],
    tags:["MCP","Connector","Validation"], link:"https://github.com/WilShi/dsh-connector-builder", linkLabel:"Open GitHub Repository"
  },
  {
    id:"dsh-skill-station", number:"11", title:"dsh-skill-station", short:"Skill Station",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"An Agent skill ecosystem manager with scanning, importing, and drag-and-drop installation.",
    description:"An Agent skill management station that can scan skill libraries across different tools, import them with one click, manage global and project skills, and install skills through drag and drop.",
    challenge:"When skills are scattered across directories and tools, the real difficulty is discovering, comparing, and managing them, not simply copying files.",
    contributions:["Scans skill libraries across multiple Agent tools","Supports one-click import and drag-and-drop installation","Provides global and project-level skill management"],
    outcomes:["Released as an open-source project","Provides a unified entry point for managing the skill ecosystem"],
    tags:["Agent Skills","Ecosystem","Drag & Drop"], link:"https://github.com/WilShi/dsh-skill-station", linkLabel:"Open GitHub Repository"
  },
  {
    id:"agent-platform-cookbook", number:"12", title:"agent-platform-cookbook", short:"Platform Cookbook",
    category:"open", categoryLabel:"Engineering Notes", role:"Independent Open Source",
    summary:"Turning publicly shareable methods from enterprise Agent platform practice into a collection of engineering patterns.",
    description:"A sanitized collection of engineering patterns from enterprise Agent platform practice, covering unified multi-framework management, channel integration gateways, and more. Rather than showcasing an internal system, it distills experience into methods others can understand and use.",
    challenge:"What can truly be shared is not internal names and architectural details, but the problems, constraints, and solutions. Sanitization is part of the content design.",
    contributions:["Documented engineering patterns for unified multi-framework management","Distilled practices including channel integration gateways","Sanitized enterprise content for public disclosure"],
    outcomes:["Published as open-source engineering notes","Provides a reference for similar platform work"],
    tags:["Agent Platform","Engineering Patterns","Sanitized"], link:"https://github.com/WilShi/agent-platform-cookbook", linkLabel:"Open GitHub Repository"
  },
  {
    id:"scholarmind", number:"13", title:"ScholarMind_MAS", short:"ScholarMind",
    category:"open", categoryLabel:"Research Project", role:"Independent Open Source",
    summary:"Letting multiple Agents discuss a paper from different perspectives instead of generating only a summary.",
    description:"ScholarMind is a multi-agent academic research system. Multiple Agents simulate a seminar, examining a paper's questions, methods, evidence, and limitations from different perspectives before producing a more accessible interpretation.",
    challenge:"Complex papers need more than condensed text; they also need questioning and cross-validation. Multiple agents provide a way to organize different perspectives.",
    contributions:["Designed a multi-agent collaborative paper interpretation workflow","Organized different analytical perspectives into a seminar process","Turned complex academic content into more accessible explanations"],
    outcomes:["Released as an open-source project","Explores the use of multi-agent systems in knowledge interpretation"],
    tags:["Multi-agent","Academic Papers","Research"], link:"https://github.com/WilShi/ScholarMind_MAS", linkLabel:"Open GitHub Repository"
  },
  {
    id:"kafka-pulsar-ops-toolkit", number:"14", title:"kafka-pulsar-ops-toolkit", short:"Messaging Ops",
    category:"open", categoryLabel:"Open-Source Tool", role:"Independent Open Source",
    summary:"A toolkit of the checks and reports actually used in Kafka / Pulsar operations.",
    description:"A messaging middleware operations toolkit with frontline SRE tools such as consumer-backlog inspections and topic lag reports, drawn from production messaging middleware operations.",
    challenge:"Operations tools should make repetitive checks faster and clearer, and should support both real incident investigation and day-to-day governance.",
    contributions:["Curated Kafka / Pulsar operations scripts","Provided consumer-backlog inspections and topic lag reports","Distilled frontline production operations experience"],
    outcomes:["Released as an open-source project","Provides practical tools for day-to-day messaging middleware operations"],
    tags:["Kafka","Pulsar","SRE","Operations"], link:"https://github.com/WilShi/kafka-pulsar-ops-toolkit", linkLabel:"Open GitHub Repository"
  }
];
