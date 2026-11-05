window.WILSON_PROJECTS = [
  {
    "id": "agent-platform",
    "number": "01",
    "title": "Enterprise Agent Operations & Governance Platform",
    "short": "Agent Platform",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Lead (Initiated & Led)",
    "summary": "Taking an idea from technical validation to production and bringing Agent capabilities into everyday work.",
    "description": "I currently work as an algorithm engineer and lead the company's Agent platform. I initiated and led the enterprise Agent operations and governance platform from scratch, contributing to early technical validation, solution and architecture design, core development, production delivery, and continuous iteration. Only sanitized, publicly shareable information is presented here.",
    "challenge": "An enterprise Agent platform must accommodate multiple frameworks, real workflows, production delivery, and ongoing governance. My primary concern is whether people will actually keep using the system.",
    "capabilities": [
      {
        "title": "Instance Lifecycle & Platform Governance",
        "items": [
          "Established lifecycle management, trusted access, and a unified delivery path for Agent instances",
          "Covered technical validation, solution and architecture design, core development, production delivery, and continuous iteration",
          "Supported instance management, operations governance, and subsequent rollout through platform capabilities"
        ]
      },
      {
        "title": "Multi-Framework & Channel Integration",
        "items": [
          "Used OpenClaw as the primary production framework and completed integration validation for ZeroClaw / DeepSeek Harness",
          "Completed technical integration and joint debugging for channels including Feishu, and advanced authorization processes for business-side integration",
          "Validated integration and management across coexisting frameworks rather than only delivering a single-chat demonstration"
        ]
      },
      {
        "title": "Team Collaboration & Business Delivery",
        "items": [
          "Developed independently at first, then led a four-person team through subsequent iterations and mentored two campus hires",
          "Provided AI digital-twin capabilities to investment advisors at branch offices, supporting real business workflows",
          "Continuously iterated and scaled platform adoption based on production feedback"
        ]
      }
    ],
    "contributions": [
      "Completed 0-to-1 technical validation, architecture design, and core development",
      "Used OpenClaw as the primary production framework and validated ZeroClaw / DeepSeek Harness integrations",
      "Developed independently at first, then led a four-person team through subsequent iterations and mentored two campus hires"
    ],
    "outcomes": [
      "Serves more than 4,000 colleagues across nearly every department in the company",
      "Provides AI digital-twin capabilities to investment advisors at branch offices",
      "Has provisioned more than 6,000 Agent instances, with over 800 daily active users"
    ],
    "tags": [
      "Agent Platform",
      "OpenClaw",
      "ZeroClaw",
      "DeepSeek Harness",
      "Production Delivery"
    ],
    "link": "https://github.com/WilShi/agent-platform-cookbook",
    "linkLabel": "View Sanitized Engineering Patterns"
  },
  {
    "id": "ai-workbench",
    "number": "02",
    "title": "Enterprise AI Desktop Workbench",
    "short": "AI Workbench",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Independent Delivery",
    "summary": "Bringing AI chat, Agent capabilities, and the development and office toolchain into one ready-to-use desktop application.",
    "description": "I independently delivered an enterprise AI desktop workbench built on the DeepSeek Harness plugin architecture. Rather than a single chat window, it brings files, terminals, Git, SSH remote workspaces, and coding assistant sessions into a unified workflow. Every feature below is a module that has actually been run successfully. An internal test version has been delivered; later releases continue to improve installation and upgrades, signing, and acceptance testing with real services.",
    "challenge": "The biggest obstacle to efficiency is often not the lack of another AI chat box, but the fragmentation of context and tools. A layered plugin architecture allows general-purpose and company-specific capabilities to be maintained separately, making delivery clearer as well.",
    "capabilities": [
      {
        "title": "Model Gateway & Runtime Environment",
        "items": [
          "Adapted to company model authorization discovery, provider configuration, and default model selection, reusing official model and credential services",
          "Allowed company gateways to be added as needed in Settings without blocking basic startup when company API keys are absent",
          "Pinned Node / Python / pnpm and native dependencies, with offline materialization of workspace dependencies and preservation of previous environments"
        ]
      },
      {
        "title": "File & Office Workbench",
        "items": [
          "Integrated a file tree, text and code editing, Git, a terminal, and media / HTML previews",
          "Version-checked saves prevent silent overwrites of external changes",
          "Supported preview paths for Word / PPT / WPS to PDF conversion without claiming lossless online editing for every format"
        ]
      },
      {
        "title": "Memory & Knowledge Context",
        "items": [
          "Stored sources, entities, relationships, and usage policies in a SQLite sidecar, supporting layered and scoped recall",
          "Provided document knowledge bases, source associations, and interactive 2D / 3D graphs",
          "Local memory lifecycle and Chinese Markdown lexical search were verified in practice; semantic distillation remains under integration and acceptance testing with company services"
        ]
      },
      {
        "title": "Connectors & Coding Tools",
        "items": [
          "Centrally managed connector catalogs, credential forms, enable/disable controls, checks, and MCP tools",
          "Extended company search providers, Feishu long-lived connections, and streaming card interactions",
          "Bridged native coding tool events through Codex App Server / Claude Agent SDK",
          "Six general-purpose plugins have been open-sourced independently, with general-purpose and company-specific capabilities maintained separately"
        ]
      }
    ],
    "contributions": [
      "Independently delivered a desktop workbench based on the DeepSeek Harness plugin architecture",
      "Integrated AI chat, Agents, file preview and editing, terminals, and Git",
      "Added SSH remote workspaces, coding assistant session management, and integrations with existing company services",
      "Maintained general-purpose and company-specific capabilities in separate layers"
    ],
    "outcomes": [
      "Created a ready-to-use AI work entry point for the company",
      "Six general-purpose plugins have been open-sourced independently",
      "An internal test version has been delivered; subsequent candidate releases continue to improve installation, upgrades, signing, and acceptance testing with real services"
    ],
    "tags": [
      "Plugin Architecture",
      "AI Desktop",
      "SSH / SFTP",
      "AI Coding"
    ],
    "link": "https://github.com/WilShi",
    "linkLabel": "View Related Open-Source Projects"
  },
  {
    "id": "model-evaluation",
    "number": "03",
    "title": "Model Capability Evaluation Platform",
    "short": "Model Evaluation",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Development",
    "summary": "Using consistent, comparable dimensions to help the organization understand what different models do best.",
    "description": "I helped build a model capability evaluation platform covering eight evaluation dimensions, including tool calling, long context, code, mathematics, and financial knowledge. It supports horizontal evaluation across multiple models and deployment methods. The base framework, web service, and LLM-EvalHub respectively handle configuration execution, the task entry point, and the complete analysis workflow.",
    "challenge": "Model names and parameter counts cannot directly answer whether a model suits our work. What we really need is repeatable, comparable evidence of capability, so model selection does not rely on intuition alone.",
    "capabilities": [
      {
        "title": "Datasets & Evaluation Dimensions",
        "items": [
          "Supports CSV / JSONL / JSON / XLSX upload, parsed previews, versioning, and format detection",
          "Configures dimension names, associated datasets, evaluators, scoring criteria, and custom Judges / Prompts",
          "Covers tool calling, long context, code, mathematics, financial knowledge, text similarity, format following, and more"
        ]
      },
      {
        "title": "Async Tasks & Resumable Execution",
        "items": [
          "Supports task creation, item-by-item execution, pause, resume, rerun, and cancellation, with progress and detailed results",
          "Uses asyncio, Semaphore, and progress locks to coordinate background tasks, persists each item independently, and pushes progress updates",
          "Resumes by dimension, dataset, and item number to skip completed items instead of repeating execution from the beginning"
        ]
      },
      {
        "title": "Twelve Evaluators & Data Processing",
        "items": [
          "Provides exact_match, contains, regex, multiple_choice, math_answer, fin_qa, tool_call, f1, bleu, rouge_l, code_exec, and geval evaluators",
          "Calculates Precision / Recall / F1 from tool-call labels without presenting tool-name matches as proof of correct execution",
          "The tool-call data pipeline supports request filtering, normalization, MD5 deduplication, SimHash near-deduplication, caching, and output format configuration"
        ]
      },
      {
        "title": "Comparative Analysis & Playground",
        "items": [
          "Provides dimension statistics, radar and bar charts, multi-task comparisons, and CSV / JSON export",
          "Pairwise supports A / B / TIE judgments and statistics for two outputs",
          "Multiple models can chat side by side with streaming output, Markdown, and Thinking displays"
        ]
      }
    ],
    "contributions": [
      "Covered eight dimensions of real-world capability evaluation",
      "Supported horizontal comparisons across different models and deployment methods",
      "Used evaluation results to inform model selection within the organization"
    ],
    "outcomes": [
      "Established a unified workflow for datasets, dimensions, asynchronous tasks, and comparative analysis",
      "Provided an explainable basis for model selection",
      "Development is complete, with validation deployment in the test environment; production rollout will undergo separate acceptance testing"
    ],
    "tags": [
      "Model Evaluation",
      "Tool Calling",
      "Long Context",
      "Finance"
    ],
    "link": "",
    "linkLabel": ""
  },
  {
    "id": "data-annotation",
    "number": "04",
    "title": "Data Annotation Platform & Training Data Engineering",
    "short": "Data & Training",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Delivery Integration & Data Engineering",
    "summary": "One track addresses task and quality management for multimodal data production; the other supports data preparation for LLM post-training / fine-tuning.",
    "description": "I advanced delivery integration for a multimodal annotation platform and contributed to data tooling for post-training / fine-tuning. The vendor system and in-house tools are two separate tracks: the former focused on requirements coordination, authentication, and company service integration; the latter on document processing, generation, filtering, and dataset preparation.",
    "challenge": "An annotation platform is more than an interface for drawing boxes. The real challenges are task assignment, role separation, multiple rounds of quality inspection, company system integration, and turning raw material into data that can be used for training.",
    "capabilities": [
      {
        "title": "Multimodal Task Workflows",
        "items": [
          "Covers requirements intake, upload preparation, cleaning and optional pre-annotation, task assignment, annotation, quality inspection, return for re-annotation, acceptance, and export",
          "Supports assignment by person, ratio, quantity, or task pool, with reclamation or transfer of unprocessed tasks",
          "Separates annotation, inspection, and acceptance roles, with different rounds avoiding assignment to the same inspector"
        ]
      },
      {
        "title": "Enterprise Integration & Assisted Annotation",
        "items": [
          "Integrates enterprise SSO, users / organizations / tenants, and default roles",
          "Connects existing company LLM, OCR, and document parsing capabilities for pre-annotation and processing",
          "Delivery focused on dialogue, text, images, and 12+ specialized templates, rather than claiming every product-manual feature as personal development"
        ]
      },
      {
        "title": "Post-Training / Fine-Tuning Data Preparation",
        "items": [
          "Supports project and model configuration, document upload, chunking, and domain-tree organization",
          "Generates questions, answers, or training records from text chunks, followed by manual confirmation, scoring, filtering, and export",
          "Covers data models including Chunks, Questions, Datasets, CoT, dialogue data, label trees, and evaluation datasets"
        ]
      }
    ],
    "contributions": [
      "Coordinated requirements, vendors, delivery quality, and deployment in the company environment",
      "Advanced integration of authentication, model-assisted parsing, and task workflows",
      "Contributed to data preparation and cleaning pipelines for post-training / fine-tuning"
    ],
    "outcomes": [
      "The iFlytek annotation system went live on July 1, 2026, operated normally during its July trial, and completed signed acceptance on July 31, 2026",
      "Launch and acceptance evidence is available; test deployment of the in-house post-training platform is not conflated with the vendor system",
      "Vendor and open-source baseline features are not all claimed as original personal work"
    ],
    "tags": [
      "Multimodal Annotation",
      "SSO",
      "Data Pipeline",
      "Fine-tuning"
    ],
    "link": "",
    "linkLabel": ""
  },
  {
    "id": "middleware-operations",
    "number": "05",
    "title": "Intelligent Middleware Operations & Kafka Management",
    "short": "Middleware & Kafka",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Development / SRE",
    "summary": "Connecting manual inspections, metric collection, anomaly detection, reporting and notifications, and Kafka governance into a sustainable engineering workflow.",
    "description": "During my time on the middleware team, I advanced metric collection, standardized inspections, anomaly diagnosis, reporting and notifications, and governance tracking around Kafka, ZooKeeper, and other components, while contributing to Topics, permissions, configuration, version upgrades, and container migration. This work includes continuously operating tools and processes, as well as intelligent diagnostic capabilities developed in later iterations.",
    "challenge": "With many components and inconsistent configurations and runtime environments, checking graphs machine by machine and inspecting items individually can miss disk capacity issues, consumer backlogs, configuration drift, and health changes. Governance needs a continuous process of collection, detection, reporting, and handling, not just monitoring dashboards.",
    "capabilities": [
      {
        "title": "Metric Collection & Standardized Inspection",
        "items": [
          "Collects ZooKeeper status through mntr / ruok / stat and converts it into Prometheus metrics",
          "Assesses Kafka health using ActiveControllerCount, OfflinePartitionsCount, UnderReplicatedPartitions, and thread status",
          "Configuration-driven component, cluster, node, and metric tasks support scheduled execution, result retention, and tracking"
        ]
      },
      {
        "title": "Anomaly Detection & Model Fallback",
        "items": [
          "Supports configurable thresholds, exemptions, and isolation-forest anomaly detection",
          "Trains models by hour and time period, falls back to default models when data is insufficient, and uses caching with multi-level concurrent execution",
          "Historical trends are generated with Pandas / NumPy / Matplotlib; trend charts are not presented as neural-network forecasts"
        ]
      },
      {
        "title": "Reporting, Notifications & Governance Tracking",
        "items": [
          "Outputs CSV / TXT / HTML inspection reports, summaries, low-watermark matrices, and component trends",
          "Supports ticket assignment and reminders through email and report publication, closing the loop between tooling and manual operations",
          "Supports trading-day inspections, weekly summaries, and notifications for sudden watermark increases or decreases"
        ]
      },
      {
        "title": "Kafka Administration & Migration Engineering",
        "items": [
          "Covers Topic creation, details, listing, configuration updates, partition reassignment, and message query and export",
          "Supports ACL / SCRAM users, permission query, addition, and revocation, credential rotation, and authentication validation",
          "Validates Offset / Lag, consumer group status, and restricted resets; test environments support message production for joint debugging",
          "Advanced configuration standardization, version compatibility, Helm deployment and scaling validation, and coordination of business container migration"
        ]
      }
    ],
    "contributions": [
      "Managed stability for approximately 300 Kafka clusters and more than 20 Pulsar clusters",
      "Built messaging middleware management and control capabilities, supported by platform-based automated inspection and operations for the team",
      "Advanced tools for Topics, permissions, configuration, version compatibility, and migration"
    ],
    "outcomes": [
      "Established automated inspection and operations platform capabilities across the middleware team",
      "Historical inspection reports and governance processes remain in use, supporting configuration, capacity, and stability governance",
      "Completed 18 Kafka-related operations tools and built a feature controller compatible with multiple Kafka versions"
    ],
    "tags": [
      "Kafka",
      "ZooKeeper",
      "SRE",
      "Inspection",
      "Migration"
    ],
    "link": "https://github.com/WilShi/kafka-pulsar-ops-toolkit",
    "linkLabel": "View Related Operations Toolkit"
  },
  {
    "id": "developer-framework",
    "number": "06",
    "title": "Low-Code & High-Code Development Framework",
    "short": "Developer Framework",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Development",
    "summary": "Using SDKs, scaffolding, adapters, and an online IDE to bring AI capabilities into more business teams' development workflows.",
    "description": "I contributed to a Python SDK, Java Spring AI scaffolding, HiAgent Adapter, and an online IDE, helping teams with different technical backgrounds use models and Agent capabilities in a unified way.",
    "challenge": "If only a small number of people familiar with low-level interfaces can use model capabilities, those capabilities will struggle to reach more business scenarios. Development frameworks need to package authentication, invocation, orchestration, and debugging into reusable engineering entry points.",
    "capabilities": [
      {
        "title": "SDKs & Scaffolding",
        "items": [
          "Provides a Python SDK to lower the barrier to calling models and workflows",
          "Provides Java Spring AI scaffolding to standardize business integration",
          "Uses HiAgent Adapter to connect existing business systems with Agent capabilities"
        ]
      },
      {
        "title": "Online Development & Debugging",
        "items": [
          "Built an online IDE for development, debugging, and integration validation",
          "Allows business teams to start without rebuilding low-level authentication and interface details",
          "Forms a supporting development chain with data annotation, model evaluation, and the Agent platform"
        ]
      }
    ],
    "contributions": [
      "Contributed to the Python SDK, Java Spring AI scaffolding, and HiAgent Adapter",
      "Contributed to the online IDE and related development and debugging capabilities"
    ],
    "outcomes": [
      "Related development capabilities support more than 100 developers",
      "Serves multiple business departments and provides an engineering foundation for subsequent Agent platform development"
    ],
    "tags": [
      "Python SDK",
      "Spring AI",
      "HiAgent",
      "Online IDE"
    ],
    "link": "",
    "linkLabel": ""
  },
  {
    "id": "dsh-feishu",
    "number": "07",
    "title": "dsh-feishu",
    "short": "Feishu Interface",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "Bringing DeepSeek Harness into Feishu with streaming cards for conversations, questions, and approvals.",
    "description": "A Feishu / Lark chat interface that brings DeepSeek Harness interactions into a team's everyday communication tool. It goes beyond messaging to cover streaming cards, in-card questions and approvals, and a friendlier configuration process.",
    "challenge": "Agent capabilities move closer to everyday work only when they enter real communication scenarios. In-card interactions can reduce switching between tools.",
    "contributions": [
      "Implemented streaming conversation cards in Feishu",
      "Supported in-card questions and approvals",
      "Provided wizard-based configuration to reduce integration overhead"
    ],
    "outcomes": [
      "Released under the MIT License",
      "Serves as a Feishu chat entry point for DeepSeek Harness"
    ],
    "tags": [
      "Feishu",
      "Streaming Card",
      "Approval",
      "DeepSeek Harness"
    ],
    "link": "https://github.com/WilShi/dsh-feishu",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "dsh-ssh-workspace",
    "number": "08",
    "title": "dsh-ssh-workspace",
    "short": "SSH Workspace",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "Bringing remote workspaces, caching, conflict-safe synchronization, and a terminal into one continuous workflow.",
    "description": "An SSH / SFTP remote workspace tool with local caching, conflict-safe synchronization, and a remote terminal. It grew from my direct interest in the remote development experience: fewer window switches mean more uninterrupted thinking.",
    "challenge": "Remote work is about more than connecting to a machine. File synchronization, conflict handling, and bringing the terminal into the same context all affect real productivity.",
    "contributions": [
      "Provided an SSH / SFTP remote workspace",
      "Implemented local caching and conflict-safe synchronization",
      "Integrated a remote terminal into the same workspace"
    ],
    "outcomes": [
      "Released under the MIT License",
      "Established reusable remote workspace foundations"
    ],
    "tags": [
      "SSH",
      "SFTP",
      "Remote Workspace",
      "Sync"
    ],
    "link": "https://github.com/WilShi/dsh-ssh-workspace",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "dsh-coding-agents",
    "number": "09",
    "title": "dsh-coding-agents",
    "short": "Coding Agents",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "Managing Codex and Claude Code work sessions in a single control center.",
    "description": "A unified control center for the AI coding toolchain, built to manage Codex and Claude Code sessions in one place and reduce fragmentation between coding assistants.",
    "challenge": "As coding assistants multiply, what needs managing is not just conversations, but tasks, context, and work status.",
    "contributions": [
      "Unified the control entry point for Codex / Claude Code",
      "Provided centralized management for coding assistant sessions"
    ],
    "outcomes": [
      "Maintained as an open-source project",
      "Supports personal AI coding workflows"
    ],
    "tags": [
      "Codex",
      "Claude Code",
      "AI Coding"
    ],
    "link": "https://github.com/WilShi/dsh-coding-agents",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "dsh-external-api",
    "number": "10",
    "title": "dsh-external-api",
    "short": "External API",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "Providing an authenticated HTTP API for local and trusted-LAN integrations.",
    "description": "An opt-in authenticated HTTP API for DeepSeek Harness integrations in local and trusted-LAN environments. It explicitly defines its trust boundary rather than exposing the interface indiscriminately to the public internet.",
    "challenge": "External integrations need both convenience and clear boundaries. Authentication and intended usage scenarios should be documented from the outset.",
    "contributions": [
      "Provided external HTTP API integration capabilities",
      "Added an access authentication mechanism",
      "Defined clear usage boundaries for local and trusted-LAN environments"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides an integration entry point for tools in trusted environments"
    ],
    "tags": [
      "HTTP API",
      "Authentication",
      "LAN"
    ],
    "link": "https://github.com/WilShi/dsh-external-api",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "dsh-plugin-builder",
    "number": "11",
    "title": "dsh-plugin-builder",
    "short": "Plugin Builder",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "Bringing the plugin creation workflow and development conventions together to shorten the path from idea to plugin.",
    "description": "An intelligent builder for DeepSeek Harness plugins, accompanied by a complete set of development conventions. It combines how to build with how to build consistently in one workflow.",
    "challenge": "A plugin ecosystem needs more than additional plugins; it also needs reusable conventions, boundaries, and creation methods.",
    "contributions": [
      "Provided an intelligent plugin creation workflow",
      "Documented supporting development conventions",
      "Embedded those conventions in the actual creation process"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides a consistent starting point for plugin development"
    ],
    "tags": [
      "Plugin Builder",
      "Developer Tooling",
      "Conventions"
    ],
    "link": "https://github.com/WilShi/dsh-plugin-builder",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "dsh-connector-builder",
    "number": "12",
    "title": "dsh-connector-builder",
    "short": "Connector Builder",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "A toolchain covering MCP connector design, validation, registration, and sharing.",
    "description": "An MCP connector builder that connects design, validation, registration, and sharing. It addresses the complete lifecycle of a connector, from idea to reusable asset.",
    "challenge": "A connector is not finished when its code is written. Whether it can be validated, registered, and shared determines whether it can truly become part of the ecosystem.",
    "contributions": [
      "Supported MCP connector design",
      "Provided validation, registration, and sharing workflows",
      "Organized connector development into a complete toolchain"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides a unified build entry point for MCP connectors"
    ],
    "tags": [
      "MCP",
      "Connector",
      "Validation"
    ],
    "link": "https://github.com/WilShi/dsh-connector-builder",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "dsh-skill-station",
    "number": "13",
    "title": "dsh-skill-station",
    "short": "Skill Station",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "An Agent skill ecosystem manager with scanning, importing, and drag-and-drop installation.",
    "description": "An Agent skill management station that can scan skill libraries across different tools, import them with one click, manage global and project skills, and install skills through drag and drop.",
    "challenge": "When skills are scattered across directories and tools, the real difficulty is discovering, comparing, and managing them, not simply copying files.",
    "contributions": [
      "Scans skill libraries across multiple Agent tools",
      "Supports one-click import and drag-and-drop installation",
      "Provides global and project-level skill management"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides a unified entry point for managing the skill ecosystem"
    ],
    "tags": [
      "Agent Skills",
      "Ecosystem",
      "Drag & Drop"
    ],
    "link": "https://github.com/WilShi/dsh-skill-station",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "agent-platform-cookbook",
    "number": "14",
    "title": "agent-platform-cookbook",
    "short": "Platform Cookbook",
    "category": "open",
    "categoryLabel": "Engineering Notes",
    "role": "Independent Open Source",
    "summary": "Turning publicly shareable methods from enterprise Agent platform practice into a collection of engineering patterns.",
    "description": "A sanitized collection of engineering patterns from enterprise Agent platform practice, covering unified multi-framework management, channel integration gateways, and more. Rather than showcasing an internal system, it distills experience into methods others can understand and use.",
    "challenge": "What can truly be shared is not internal names and architectural details, but the problems, constraints, and solutions. Sanitization is part of the content design.",
    "contributions": [
      "Documented engineering patterns for unified multi-framework management",
      "Distilled practices including channel integration gateways",
      "Sanitized enterprise content for public disclosure"
    ],
    "outcomes": [
      "Published as open-source engineering notes",
      "Provides a reference for similar platform work"
    ],
    "tags": [
      "Agent Platform",
      "Engineering Patterns",
      "Sanitized"
    ],
    "link": "https://github.com/WilShi/agent-platform-cookbook",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "scholarmind",
    "number": "15",
    "title": "ScholarMind_MAS",
    "short": "ScholarMind",
    "category": "open",
    "categoryLabel": "Research Project",
    "role": "Independent Open Source",
    "summary": "Letting multiple Agents discuss a paper from different perspectives instead of generating only a summary.",
    "description": "ScholarMind is a multi-agent academic research system. Multiple Agents simulate a seminar, examining a paper's questions, methods, evidence, and limitations from different perspectives before producing a more accessible interpretation.",
    "challenge": "Complex papers need more than condensed text; they also need questioning and cross-validation. Multiple agents provide a way to organize different perspectives.",
    "contributions": [
      "Designed a multi-agent collaborative paper interpretation workflow",
      "Organized different analytical perspectives into a seminar process",
      "Turned complex academic content into more accessible explanations"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Explores the use of multi-agent systems in knowledge interpretation"
    ],
    "tags": [
      "Multi-agent",
      "Academic Papers",
      "Research"
    ],
    "link": "https://github.com/WilShi/ScholarMind_MAS",
    "linkLabel": "Open GitHub Repository"
  },
  {
    "id": "kafka-pulsar-ops-toolkit",
    "number": "16",
    "title": "kafka-pulsar-ops-toolkit",
    "short": "Messaging Ops",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open Source",
    "summary": "A toolkit of the checks and reports actually used in Kafka / Pulsar operations.",
    "description": "A messaging middleware operations toolkit with frontline SRE tools such as consumer-backlog inspections and topic lag reports, drawn from production messaging middleware operations.",
    "challenge": "Operations tools should make repetitive checks faster and clearer, and should support both real incident investigation and day-to-day governance.",
    "contributions": [
      "Curated Kafka / Pulsar operations scripts",
      "Provided consumer-backlog inspections and topic lag reports",
      "Distilled frontline production operations experience"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides practical tools for day-to-day messaging middleware operations"
    ],
    "tags": [
      "Kafka",
      "Pulsar",
      "SRE",
      "Operations"
    ],
    "link": "https://github.com/WilShi/kafka-pulsar-ops-toolkit",
    "linkLabel": "Open GitHub Repository"
  }
];
