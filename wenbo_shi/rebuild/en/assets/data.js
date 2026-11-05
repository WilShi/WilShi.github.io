window.WILSON_PROJECTS = [
  {
    "id": "agent-platform",
    "number": "01",
    "title": "Enterprise Agent Operations & Governance Platform",
    "short": "Agent Platform",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Lead (Initiated & Led)",
    "summary": "Took an idea through technical validation and into production, bringing agent capabilities into everyday work.",
    "description": "I am an algorithm engineer and the lead of my company's agent platform. I initiated and led this enterprise agent operations and governance platform from concept to production, spanning early technical validation, solution and architecture design, core development, production delivery, and ongoing iteration. This page includes only sanitized information that can be shared publicly.",
    "challenge": "An enterprise agent platform must support multiple frameworks and real workflows while meeting production and ongoing governance needs. My focus is whether people will actually continue using it.",
    "capabilities": [
      {
        "title": "Instance Lifecycle & Platform Governance",
        "items": [
          "Manages the agent instance lifecycle, trusted access, and unified delivery",
          "Covers technical validation, solution and architecture design, core development, production delivery, and continuous iteration",
          "Provides a platform foundation for instance management, operational control, and wider rollout"
        ]
      },
      {
        "title": "Multi-Framework & Channel Integration",
        "items": [
          "Uses OpenClaw as the primary production framework, with validated ZeroClaw / DeepSeek Harness integrations",
          "Covers technical integration and joint testing for channels such as Feishu, together with the authorization process for business onboarding",
          "Validates integration and management across coexisting frameworks, not just a single-chat demo"
        ]
      },
      {
        "title": "Team Collaboration & Business Delivery",
        "items": [
          "Started as a solo effort, then led a four-person team and mentored two campus hires",
          "Provides AI digital avatars for branch-based investment advisors, supporting real business workflows",
          "Uses production feedback to drive continuous iteration and broader adoption"
        ]
      }
    ],
    "contributions": [
      "Completed 0-to-1 technical validation, architecture design, and core development",
      "Made OpenClaw the primary production framework and validated ZeroClaw / DeepSeek Harness integrations",
      "Started solo, then led a four-person team and mentored two campus hires"
    ],
    "outcomes": [
      "Serves 4,000+ colleagues across nearly every company department",
      "Provides AI digital avatars for branch-based investment advisors",
      "Has provisioned 6,000+ agent instances and serves 800+ daily active users"
    ],
    "tags": [
      "Agent Platform",
      "OpenClaw",
      "ZeroClaw",
      "DeepSeek Harness",
      "Production Delivery"
    ],
    "link": "https://github.com/WilShi/agent-platform-cookbook",
    "linkLabel": "View sanitized engineering patterns"
  },
  {
    "id": "ai-workbench",
    "number": "02",
    "title": "Enterprise AI Desktop Workbench",
    "short": "AI Workbench",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Delivered Independently",
    "summary": "A ready-to-use desktop app that unifies AI chat, agents, and development and office tools.",
    "description": "I independently delivered this enterprise AI desktop workbench on the DeepSeek Harness plugin architecture. It combines files, terminals, Git, SSH remote workspaces, and coding assistant sessions in one workflow rather than another standalone chat window. All modules listed below have been run and verified. An internal test build has been delivered, with installation, upgrades, signing, and acceptance testing against real services continuing in later releases.",
    "challenge": "The main barrier to efficiency is often fragmented context and tooling, not the lack of another AI chat window. A layered plugin architecture separates general-purpose capabilities from company-specific ones, simplifying maintenance and delivery.",
    "capabilities": [
      {
        "title": "Model Gateway & Runtime Environment",
        "items": [
          "Supports company model authorization discovery, provider configuration, and default model selection while reusing official model and credential services",
          "Allows optional company gateways in Settings; missing company API keys do not block basic startup",
          "Pins Node / Python / pnpm and native dependencies, supports offline workspace dependency materialization, and preserves previous environments"
        ]
      },
      {
        "title": "File & Office Workbench",
        "items": [
          "Combines a file tree, text and code editing, Git, a terminal, and media / HTML previews",
          "Checks versions before saving to prevent silent overwrites of external changes",
          "Previews Word / PPT / WPS files through PDF conversion without claiming lossless online editing for every format"
        ]
      },
      {
        "title": "Memory & Knowledge Context",
        "items": [
          "Uses a SQLite sidecar for sources, entities, relationships, and usage policies, with layered and scoped recall",
          "Includes document knowledge bases, source links, and interactive 2D / 3D graphs",
          "Local memory lifecycle and Chinese Markdown lexical search have been verified; semantic distillation continues through integration and acceptance testing with company services"
        ]
      },
      {
        "title": "Connectors & Coding Tools",
        "items": [
          "Manages connector catalogs, credential forms, enable/disable controls, checks, and MCP tools",
          "Extends company search providers, Feishu persistent connections, and streaming card interactions",
          "Bridges native coding tool events through Codex App Server / Claude Agent SDK",
          "Six general-purpose plugins are independently open source; general-purpose and company-specific capabilities are maintained separately"
        ]
      }
    ],
    "contributions": [
      "Independently delivered the DeepSeek Harness plugin-based desktop workbench",
      "Integrated AI chat, agents, file preview and editing, terminals, and Git",
      "Integrated SSH remote workspaces, coding assistant session management, and existing company services",
      "Separated general-purpose and company-specific capabilities into independently maintained layers"
    ],
    "outcomes": [
      "Created a ready-to-use internal AI work hub for the company",
      "Released six general-purpose plugins as independent open-source projects",
      "Delivered an internal test build; later release candidates continue to improve installation, upgrades, signing, and acceptance testing with real services"
    ],
    "tags": [
      "Plugin Architecture",
      "AI Desktop",
      "SSH / SFTP",
      "AI Coding"
    ],
    "link": "https://github.com/WilShi",
    "linkLabel": "View related open-source projects"
  },
  {
    "id": "model-evaluation",
    "number": "03",
    "title": "Model Capability Evaluation Platform",
    "short": "Model Evaluation",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Development",
    "summary": "Helps the organization compare model strengths across consistent dimensions.",
    "description": "I helped build a platform that evaluates eight dimensions of model capability, including tool calling, long context, coding, mathematics, and financial knowledge. It compares multiple models and deployment methods. The base framework executes configured evaluations, the web service provides the task interface, and LLM-EvalHub supports the complete analysis workflow.",
    "challenge": "A model's name and parameter count cannot tell us whether it fits our work. We need repeatable, comparable evidence of capability so selection is based on more than intuition.",
    "capabilities": [
      {
        "title": "Datasets & Evaluation Dimensions",
        "items": [
          "Uploads and parses CSV / JSONL / JSON / XLSX files, with previews, versioning, and format detection",
          "Configures dimension names, linked datasets, evaluators, scoring criteria, and custom judges / prompts",
          "Covers tool calling, long context, coding, mathematics, financial knowledge, text similarity, format compliance, and more"
        ]
      },
      {
        "title": "Async Tasks & Resumable Execution",
        "items": [
          "Creates and runs item-level tasks with pause, resume, rerun, and cancellation, plus progress and detailed results",
          "Uses asyncio, Semaphore, and progress locks to coordinate background tasks, with per-item persistence and progress updates",
          "Skips completed items on resume by dimension, dataset, and item number rather than restarting from scratch"
        ]
      },
      {
        "title": "Twelve Evaluators & Data Processing",
        "items": [
          "Includes exact_match, contains, regex, multiple_choice, math_answer, fin_qa, tool_call, f1, bleu, rouge_l, code_exec, and geval evaluation methods",
          "Calculates Precision / Recall / F1 from tool-call labels without treating tool-name matches as proof of correct execution",
          "The tool-call data pipeline supports request filtering, normalization, MD5 deduplication, SimHash near-deduplication, caching, and configurable output formats"
        ]
      },
      {
        "title": "Comparative Analysis & Playground",
        "items": [
          "Provides dimension statistics, radar and bar charts, multi-task comparisons, and CSV / JSON export",
          "Supports pairwise A / B / TIE judgments and statistics for two outputs",
          "Supports side-by-side chats with multiple models, including streaming output, Markdown, and Thinking views"
        ]
      }
    ],
    "contributions": [
      "Covered eight real-world capability dimensions",
      "Enabled comparisons across models and deployment methods",
      "Applied evaluation results to model selection within the organization"
    ],
    "outcomes": [
      "Unified datasets, dimensions, asynchronous tasks, and comparative analysis in one workflow",
      "Provides explainable evidence for model selection",
      "Development is complete and deployed for validation in the test environment; production rollout requires separate acceptance testing"
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
    "summary": "Covers task and quality management for multimodal data production, alongside data preparation for LLM post-training and fine-tuning.",
    "description": "I drove delivery integration for a multimodal annotation platform and contributed to data tools for post-training and fine-tuning. These were separate tracks: the vendor system focused on requirements coordination, authentication, and company service integration, while the in-house tools covered document processing, generation, filtering, and dataset preparation.",
    "challenge": "Annotation is more than a box-drawing interface. The hard problems are task assignment, role separation, multi-round quality control, company system integration, and converting raw material into training-ready data.",
    "capabilities": [
      {
        "title": "Multimodal Task Workflows",
        "items": [
          "Covers requirements intake, upload preparation, cleaning, optional pre-annotation, assignment, annotation, quality inspection, rework, acceptance, and export",
          "Assigns work by person, ratio, quantity, or task pool, and allows unprocessed tasks to be reclaimed or transferred",
          "Separates annotation, inspection, and acceptance roles, and avoids assigning the same inspector to different rounds"
        ]
      },
      {
        "title": "Enterprise Integration & Assisted Annotation",
        "items": [
          "Supports enterprise SSO, users / organizations / tenants, and default roles",
          "Uses existing company LLM, OCR, and document parsing services for pre-annotation and processing",
          "Delivery focused on dialogue, text, images, and 12+ specialized templates; features from the product manual are not presented as entirely self-developed"
        ]
      },
      {
        "title": "Post-Training & Fine-Tuning Data Preparation",
        "items": [
          "Supports project and model configuration, document upload, chunking, and domain-tree organization",
          "Generates questions, answers, or training records from chunks for manual review, scoring, filtering, and export",
          "Includes Chunks, Questions, Datasets, CoT, dialogue data, label trees, and evaluation datasets"
        ]
      }
    ],
    "contributions": [
      "Coordinated requirements, vendor collaboration, delivery quality, and deployment in the company environment",
      "Integrated authentication, model-assisted parsing, and task workflows",
      "Contributed to data preparation and cleaning pipelines for post-training and fine-tuning"
    ],
    "outcomes": [
      "The iFlytek annotation system launched on July 1, 2026, ran normally during its July trial, and was formally accepted with sign-off on July 31, 2026",
      "Launch and acceptance evidence is available; the in-house post-training platform's test deployment is distinct from the vendor system",
      "Does not claim all vendor or open-source baseline functionality as original personal work"
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
    "summary": "Brings manual inspections, metric collection, anomaly detection, reporting, notifications, and Kafka governance into a sustainable engineering workflow.",
    "description": "On the middleware team, I worked on metric collection, standardized inspections, anomaly diagnosis, reporting, notifications, and governance tracking for Kafka, ZooKeeper, and other components. I also contributed to topics, permissions, configuration, version upgrades, and container migration. The work includes tools and processes in continuous use, as well as intelligent diagnostics developed in later iterations.",
    "challenge": "With many components and inconsistent configurations and environments, machine-by-machine dashboard checks and manual inspection can miss disk capacity issues, consumer backlogs, configuration drift, and health changes. Governance requires a continuous workflow for collection, detection, reporting, and follow-up, not dashboards alone.",
    "capabilities": [
      {
        "title": "Metric Collection & Standardized Inspection",
        "items": [
          "Collects ZooKeeper status with mntr / ruok / stat and converts it into Prometheus metrics",
          "Assesses Kafka health through ActiveControllerCount, OfflinePartitionsCount, UnderReplicatedPartitions, and thread status",
          "Uses configuration-driven component, cluster, node, and metric tasks with scheduling, result storage, and tracking"
        ]
      },
      {
        "title": "Anomaly Detection & Model Fallback",
        "items": [
          "Supports configurable thresholds, exemptions, and isolation forest anomaly detection",
          "Trains models by hour and time period, falls back to defaults when data is insufficient, and uses caching and multi-level concurrency",
          "Generates historical trends with Pandas / NumPy / Matplotlib without presenting trend charts as neural-network forecasts"
        ]
      },
      {
        "title": "Reporting, Notifications & Governance Tracking",
        "items": [
          "Generates CSV / TXT / HTML inspection reports, summaries, low-watermark matrices, and component trends",
          "Uses email and report publication to support ticket assignment and reminders, combining tooling with manual operations",
          "Supports trading-day inspections, weekly summaries, and alerts for sudden watermark rises or drops"
        ]
      },
      {
        "title": "Kafka Administration & Migration Engineering",
        "items": [
          "Covers topic creation, details, listing, configuration updates, partition reassignment, and message search and export",
          "Supports ACL / SCRAM users, permission lookup, grants and revocation, credential rotation, and authentication checks",
          "Validates offset / lag, consumer group status, and restricted resets; test environments support message production for integration testing",
          "Supports configuration standardization, version compatibility, Helm deployment and scaling tests, and coordination of business container migrations"
        ]
      }
    ],
    "contributions": [
      "Managed stability for approximately 300 Kafka clusters and more than 20 Pulsar clusters",
      "Built platform-based messaging middleware management, automated inspection, and operations capabilities for the team",
      "Advanced tooling for topics, permissions, configuration, version compatibility, and migration"
    ],
    "outcomes": [
      "Established a middleware team platform for automated inspections and operations",
      "Historical inspection reports and governance workflows remain in use for configuration, capacity, and stability management",
      "Completed 18 Kafka operations tools and a feature controller supporting multiple Kafka versions"
    ],
    "tags": [
      "Kafka",
      "ZooKeeper",
      "SRE",
      "Inspection",
      "Migration"
    ],
    "link": "https://github.com/WilShi/kafka-pulsar-ops-toolkit",
    "linkLabel": "View related operations toolkit"
  },
  {
    "id": "developer-framework",
    "number": "06",
    "title": "Low-Code & Pro-Code Development Framework",
    "short": "Developer Framework",
    "category": "enterprise",
    "categoryLabel": "Enterprise Project",
    "role": "Platform Development",
    "summary": "Helps business teams integrate AI through SDKs, scaffolding, adapters, and an online IDE.",
    "description": "I contributed to a Python SDK, Java Spring AI scaffolding, HiAgent Adapter, and an online IDE, giving teams with different technical backgrounds a consistent way to use models and agents.",
    "challenge": "Model capabilities are unlikely to reach broader business use if only specialists in low-level APIs can access them. Development frameworks must turn authentication, invocation, orchestration, and debugging into reusable engineering entry points.",
    "capabilities": [
      {
        "title": "SDKs & Scaffolding",
        "items": [
          "Simplifies model and workflow calls through a Python SDK",
          "Standardizes business integration with Java Spring AI scaffolding",
          "Connects existing business systems to agent capabilities through HiAgent Adapter"
        ]
      },
      {
        "title": "Online Development & Debugging",
        "items": [
          "Provides an online IDE for development, debugging, and integration testing",
          "Removes the need for business teams to rebuild low-level authentication and API handling",
          "Complements data annotation, model evaluation, and the agent platform in a connected development toolchain"
        ]
      }
    ],
    "contributions": [
      "Contributed to the Python SDK, Java Spring AI scaffolding, and HiAgent Adapter",
      "Contributed to the online IDE and related development and debugging tools"
    ],
    "outcomes": [
      "Supports more than 100 developers",
      "Used by multiple business departments, providing an engineering foundation for later agent platform development"
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
    "role": "Independent Open-Source Developer",
    "summary": "Brings DeepSeek Harness to Feishu with streaming cards for conversations, questions, and approvals.",
    "description": "A Feishu / Lark chat interface that brings DeepSeek Harness into everyday team communication. Beyond messaging, it supports streaming cards, in-card questions and approvals, and a more approachable configuration process.",
    "challenge": "Agents move closer to everyday work when they operate within real communication flows. In-card interactions reduce tool switching.",
    "contributions": [
      "Implemented streaming chat cards in Feishu",
      "Added in-card questions and approvals",
      "Provided wizard-based setup to simplify integration"
    ],
    "outcomes": [
      "Open-sourced under the MIT License",
      "Provides a Feishu chat interface for DeepSeek Harness"
    ],
    "tags": [
      "Feishu",
      "Streaming Card",
      "Approval",
      "DeepSeek Harness"
    ],
    "link": "https://github.com/WilShi/dsh-feishu",
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "dsh-ssh-workspace",
    "number": "08",
    "title": "dsh-ssh-workspace",
    "short": "SSH Workspace",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "Combines remote workspaces, caching, conflict-safe sync, and a terminal in one continuous workflow.",
    "description": "An SSH / SFTP remote workspace with local caching, conflict-safe synchronization, and a remote terminal. It reflects my own focus on remote development: fewer window switches, more uninterrupted thinking.",
    "challenge": "Remote development is more than connecting to a machine. File sync, conflict handling, and keeping the terminal in the same context all shape productivity.",
    "contributions": [
      "Built an SSH / SFTP remote workspace",
      "Added local caching and conflict-safe synchronization",
      "Integrated a remote terminal into the same workspace"
    ],
    "outcomes": [
      "Open-sourced under the MIT License",
      "Provides a reusable foundation for remote workspaces"
    ],
    "tags": [
      "SSH",
      "SFTP",
      "Remote Workspace",
      "Sync"
    ],
    "link": "https://github.com/WilShi/dsh-ssh-workspace",
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "dsh-coding-agents",
    "number": "09",
    "title": "dsh-coding-agents",
    "short": "Coding Agents",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "Manages Codex and Claude Code work sessions from one control center.",
    "description": "A unified control center for AI coding tools that centralizes Codex and Claude Code sessions and reduces fragmentation between assistants.",
    "challenge": "As coding assistants multiply, the challenge expands from conversations to tasks, context, and work status.",
    "contributions": [
      "Unified control of Codex / Claude Code",
      "Centralized coding assistant session management"
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
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "dsh-external-api",
    "number": "10",
    "title": "dsh-external-api",
    "short": "External API",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "An authenticated HTTP API for local and trusted-LAN integrations.",
    "description": "An opt-in, authenticated HTTP API for DeepSeek Harness integrations on local machines and trusted LANs. It defines a clear trust boundary instead of exposing the API indiscriminately to the public internet.",
    "challenge": "External integrations need convenience without ambiguous boundaries. Authentication and intended use cases should be explicit from the start.",
    "contributions": [
      "Added an external HTTP integration API",
      "Added access authentication",
      "Defined local and trusted-LAN usage boundaries"
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
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "dsh-plugin-builder",
    "number": "11",
    "title": "dsh-plugin-builder",
    "short": "Plugin Builder",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "Combines plugin creation and development conventions to shorten the path from idea to plugin.",
    "description": "An intelligent DeepSeek Harness plugin builder with comprehensive development conventions, combining creation guidance and consistent implementation practices in one workflow.",
    "challenge": "A plugin ecosystem needs reusable conventions, boundaries, and creation methods—not just more plugins.",
    "contributions": [
      "Provided an intelligent plugin creation workflow",
      "Documented the accompanying development conventions",
      "Embedded those conventions in the creation process"
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
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "dsh-connector-builder",
    "number": "12",
    "title": "dsh-connector-builder",
    "short": "Connector Builder",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "A toolchain for designing, validating, registering, and sharing MCP connectors.",
    "description": "An MCP connector builder that covers design, validation, registration, and sharing across the full lifecycle from idea to reusable asset.",
    "challenge": "Writing the code is only part of building a connector. Validation, registration, and sharing determine whether it can actually join the ecosystem.",
    "contributions": [
      "Supported MCP connector design",
      "Added validation, registration, and sharing workflows",
      "Organized connector development into an end-to-end toolchain"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides a unified way to build MCP connectors"
    ],
    "tags": [
      "MCP",
      "Connector",
      "Validation"
    ],
    "link": "https://github.com/WilShi/dsh-connector-builder",
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "dsh-skill-station",
    "number": "13",
    "title": "dsh-skill-station",
    "short": "Skill Station",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "An agent skill manager with library scanning, one-click import, and drag-and-drop installation.",
    "description": "An agent skill manager that scans skill libraries across tools, imports skills with one click, manages global and project-level skills, and supports drag-and-drop installation.",
    "challenge": "When skills are scattered across directories and tools, discovery, comparison, and management become harder than simply copying files.",
    "contributions": [
      "Scans skill libraries across multiple agent tools",
      "Supports one-click import and drag-and-drop installation",
      "Manages global and project-level skills"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Provides a central entry point for managing the skill ecosystem"
    ],
    "tags": [
      "Agent Skills",
      "Ecosystem",
      "Drag & Drop"
    ],
    "link": "https://github.com/WilShi/dsh-skill-station",
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "agent-platform-cookbook",
    "number": "14",
    "title": "agent-platform-cookbook",
    "short": "Platform Cookbook",
    "category": "open",
    "categoryLabel": "Engineering Notes",
    "role": "Independent Open-Source Developer",
    "summary": "A collection of publicly shareable engineering patterns drawn from enterprise agent platform work.",
    "description": "A sanitized set of engineering patterns from enterprise agent platform work, including unified multi-framework management and channel integration gateways. It turns experience into reusable methods rather than showcasing an internal system.",
    "challenge": "The shareable value lies in the problems, constraints, and solutions—not internal names or architectural details. Sanitization is part of the content design.",
    "contributions": [
      "Documented engineering patterns for unified multi-framework management",
      "Distilled practices such as channel integration gateways",
      "Sanitized enterprise content for publication"
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
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "scholarmind",
    "number": "15",
    "title": "ScholarMind_MAS",
    "short": "ScholarMind",
    "category": "open",
    "categoryLabel": "Research Project",
    "role": "Independent Open-Source Developer",
    "summary": "Lets multiple agents discuss a paper from different perspectives instead of producing only a summary.",
    "description": "ScholarMind is a multi-agent academic research system. Agents simulate a seminar, examining a paper's questions, methods, evidence, and limitations from different perspectives before producing a more accessible interpretation.",
    "challenge": "Complex papers need questioning and cross-validation, not just compression. Multiple agents offer a way to organize different perspectives.",
    "contributions": [
      "Designed a multi-agent workflow for collaborative paper interpretation",
      "Organized different analytical perspectives into a seminar-style process",
      "Made complex academic content more accessible"
    ],
    "outcomes": [
      "Released as an open-source project",
      "Explores multi-agent approaches to knowledge interpretation"
    ],
    "tags": [
      "Multi-agent",
      "Academic Papers",
      "Research"
    ],
    "link": "https://github.com/WilShi/ScholarMind_MAS",
    "linkLabel": "Open GitHub repository"
  },
  {
    "id": "kafka-pulsar-ops-toolkit",
    "number": "16",
    "title": "kafka-pulsar-ops-toolkit",
    "short": "Messaging Ops",
    "category": "open",
    "categoryLabel": "Open-Source Tool",
    "role": "Independent Open-Source Developer",
    "summary": "Practical Kafka / Pulsar operations checks and reports in one toolkit.",
    "description": "A messaging middleware operations toolkit built from production experience, with frontline SRE tools for consumer-backlog inspections, topic lag reports, and more.",
    "challenge": "Operations tools should make repetitive checks faster and clearer while supporting incident investigation and day-to-day governance.",
    "contributions": [
      "Curated Kafka / Pulsar operations scripts",
      "Added consumer-backlog inspections and topic lag reports",
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
    "linkLabel": "Open GitHub repository"
  }
];
