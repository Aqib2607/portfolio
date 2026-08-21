import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "reqs-ai",
    title: "Reqs.ai — AI Software Planning Platform",
    description: "Designed and developed an AI-powered SaaS platform that transforms software ideas into comprehensive PRDs, technical specifications, and design documents.",
    projectType: "Development Project",
    badge: "AI SaaS",
    role: "Full Stack Developer",
    duration: "2026",
    image: "/projects/Reqs-ai.png",
    gradient: "from-[#6a329f] to-[#f1c232]",
    overview: "Designed and developed an AI-powered SaaS platform that transforms software ideas into comprehensive PRDs, technical specifications, and design documents. Built using React, TypeScript, Laravel, PHP, MySQL, REST APIs, and AI integrations.",
    businessProblem: "Software planning is often fragmented and time-consuming, resulting in unstructured specifications, misaligned expectations, and scope creep during implementation.",
    impact: "Structures and accelerates early-stage software planning by generating standardized PRDs, architecture outlines, and technical documentation from initial project concepts.",
    technologies: [
      "React", "TypeScript", "Laravel", "PHP", "MySQL", "REST APIs", "AI Integrations"
    ],
    features: [
      "AI-powered document generation for software planning",
      "PRD and technical specification drafting",
      "Design documentation and technology stack recommendations",
      "Document version management and revision tracking",
      "Authentication and project management dashboard"
    ],
    architecture: "React and TypeScript frontend communicating via RESTful API endpoints to a Laravel backend, persisting structured documents in MySQL and interfacing with AI generation APIs.",
    databaseDesign: "Relational schema designed for user authentication, project workspaces, document templates, version snapshots, and generated specification sections.",
    engineeringDecisions: [
      {
        decision: "Decoupled React Frontend and Laravel REST API",
        why: "Provides a responsive, stateful document editing interface while leveraging Laravel for structured backend validation, API routing, and AI integration services.",
        alternativesConsidered: ["Monolithic Blade Templates", "Full-stack Next.js"],
        tradeoffs: "Requires managing separate frontend and backend deployments, but provides strict separation of concerns."
      },
      {
        decision: "Structured Prompt Pipelines for Documentation Modules",
        why: "Breaking documentation generation into discrete modular steps (PRD, Technical Specs, Architecture) produces more consistent, structured outputs than single large prompts.",
        alternativesConsidered: ["Single monolithic generation prompt"],
        tradeoffs: "Involves orchestrating multiple API requests, but yields significantly higher document quality."
      }
    ],
    securityConsiderations: [
      "Authentication and token validation for workspace and document access",
      "Server-side input sanitization and prompt injection safeguards",
      "Environment-based configuration for API keys and secrets"
    ],
    performanceOptimizations: [
      "Optimistic UI state updates for workspace and document navigation",
      "Normalized relational database indexing on user and document workspace IDs",
      "Code-split frontend components to maintain fast dashboard load times"
    ],
    challenges: [
      {
        challenge: "Generating consistently formatted, technical markdown across varied user inputs",
        solution: "Implemented structured prompt templates and response parsing on the backend to enforce uniform document hierarchies."
      }
    ],
    lessonsLearned: [
      "Designing modular prompt workflows produces more reliable AI outputs than single-pass generation.",
      "Early schema planning for document versioning simplifies snapshot restoration."
    ],
    futureImprovements: [
      "Exporting generated specifications directly to PDF, Markdown, and Jira-compatible formats",
      "Collaborative multi-user editing on shared planning workspaces"
    ]
  },
  {
    slug: "clinexa",
    title: "Clinexa HMS — Hospital Management System",
    description: "A full-stack hospital management platform designed to centralize hospital operations and patient-related workflows across administrative, medical, and billing modules.",
    projectType: "Portfolio Project",
    badge: "Healthcare Platform",
    role: "Full Stack Developer",
    duration: "2026",
    image: "/projects/clinexa_thumbnail.png",
    gradient: "from-[#0ea5e9] to-[#2dd4bf]",
    live: "https://clinexa-chi.vercel.app/",
    sourceFiles: "https://github.com/Aqib2607/clinexa",
    overview: "A full-stack hospital management platform designed to centralize hospital operations and patient-related workflows across administrative, medical, and billing modules.",
    businessProblem: "Healthcare facilities require unified workflows to manage patient admissions, appointments, clinical records, billing, and inventory without fragmented data silos.",
    impact: "Models end-to-end healthcare operations in a modular architecture, connecting patient appointments, billing, pharmacy, and laboratory management through a single interface.",
    technologies: [
      "React", "TypeScript", "Laravel", "PHP", "MySQL", "REST APIs", "Tailwind CSS"
    ],
    features: [
      "Patient registration, admission management, and appointment scheduling",
      "Integrated billing, invoicing, and payment record tracking",
      "Pharmacy inventory and medicine stock management",
      "Laboratory test records and report tracking",
      "Role-based access patterns for healthcare workflows"
    ],
    architecture: "React frontend coupled with a modular Laravel REST API backend, backed by a normalized MySQL relational schema.",
    databaseDesign: "Relational database schema modeling doctors, patients, appointments, billing items, pharmacy inventory, and lab results with foreign-key relational integrity.",
    engineeringDecisions: [
      {
        decision: "Modular Module Architecture in Backend",
        why: "Isolating hospital domains (Patient, Billing, Pharmacy, Lab) prevents coupling and allows each module's business rules to evolve independently.",
        alternativesConsidered: ["Single monolithic controller structure"],
        tradeoffs: "Increases initial architectural boilerplate, but prevents domain pollution."
      },
      {
        decision: "Type-Safe Client Interfaces Matching Backend Schemas",
        why: "Using TypeScript interfaces aligned with database models eliminates runtime data mapping bugs across patient and billing forms.",
        alternativesConsidered: ["Untyped JavaScript payloads"],
        tradeoffs: "Requires keeping TypeScript types synchronized with backend migrations."
      }
    ],
    securityConsiderations: [
      "Role-based authorization checks across patient records and billing actions",
      "Prepared statements via Laravel Eloquent to prevent SQL injection vulnerabilities",
      "Input validation on all medical and billing submission endpoints"
    ],
    performanceOptimizations: [
      "Database indexing on patient identifiers, appointment dates, and invoice records",
      "Eager-loading relationships to prevent N+1 query overhead in medical record views",
      "Lazy-loading secondary management modules in the React frontend"
    ],
    challenges: [
      {
        challenge: "Managing complex interdependencies between patient appointments, lab orders, and final billing invoices",
        solution: "Designed a centralized billing ledger schema that references line-items from appointments, pharmacy, and lab modules."
      }
    ],
    lessonsLearned: [
      "Domain modeling in healthcare requires careful validation rules at every relational boundary.",
      "Clear status lifecycles for appointments and invoices reduce state ambiguities in the UI."
    ],
    futureImprovements: [
      "Automated appointment reminder notifications via SMS/email",
      "Detailed financial reporting dashboard for hospital administration"
    ]
  },
  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    description: "Developed a restaurant management application with menu management, order processing, inventory tracking, and billing functionality using Laravel MVC architecture and React.",
    projectType: "Academic / Portfolio Project",
    badge: "Business Operations",
    role: "Full Stack Developer",
    duration: "2025",
    image: "/projects/velora_thumbnail.png",
    gradient: "from-[#f97316] to-[#fcd34d]",
    overview: "Developed a restaurant management application with menu management, order processing, inventory tracking, and billing functionality using Laravel MVC architecture and a React frontend.",
    businessProblem: "Restaurant staff need streamlined workflows to record customer orders, update menu availability, track ingredient inventory, and process customer receipts.",
    impact: "Demonstrates practical full-stack MVC application architecture with REST API integration for order lifecycle management and inventory adjustments.",
    technologies: [
      "Laravel", "PHP", "MySQL", "React", "TypeScript", "REST APIs"
    ],
    features: [
      "Menu item categorization and pricing management",
      "Table order capture and status processing",
      "Ingredient inventory and stock tracking",
      "Receipt and bill calculation",
      "Responsive interface integrated with Laravel backend"
    ],
    architecture: "Laravel MVC backend exposing RESTful endpoints to a responsive React frontend, connected to a MySQL relational database.",
    databaseDesign: "Relational database schema storing menu categories, items, orders, order items, and inventory levels.",
    engineeringDecisions: [
      {
        decision: "REST API Integration with MVC Backend",
        why: "Allows the frontend interface to process order state changes asynchronously without requiring full page reloads.",
        alternativesConsidered: ["Traditional server-rendered Blade templates"],
        tradeoffs: "Requires client-side state handling for active orders, but delivers a smoother order management experience."
      }
    ],
    securityConsiderations: [
      "Sanitized inputs on all order and menu modification endpoints",
      "Database transactions during order creation to ensure data consistency"
    ],
    performanceOptimizations: [
      "Efficient query filtering for active orders and category menus",
      "Responsive, lightweight component tree for rapid order entry"
    ],
    challenges: [
      {
        challenge: "Maintaining accurate inventory counts during peak order creation",
        solution: "Utilized atomic database transactions when finalizing orders to decrement inventory quantities safely."
      }
    ],
    lessonsLearned: [
      "Using database transactions is critical when multi-item orders modify inventory state.",
      "Clean separation between menu presentation and order state management simplifies frontend code."
    ],
    futureImprovements: [
      "Kitchen display system (KDS) live order status view",
      "Table reservation management module"
    ]
  },
  {
    slug: "virtual-cpu-emulator",
    title: "Virtual CPU Emulator",
    description: "An academic computer architecture simulator that demonstrates CPU instruction execution, registers, memory addressing, and arithmetic-logic operations using OOP principles.",
    projectType: "Academic Project",
    badge: "Systems Architecture",
    role: "Developer",
    duration: "2024",
    image: "/projects/weather_dashboard.png",
    gradient: "from-[#10b981] to-[#3b82f6]",
    overview: "An academic computer architecture simulator that demonstrates CPU instruction execution, registers, memory addressing, and arithmetic-logic operations using object-oriented programming principles.",
    businessProblem: "Gaining a deep understanding of low-level computer systems requires practical software modeling of hardware instruction cycles and memory architectures.",
    impact: "Demonstrates low-level systems logic, instruction decoding, register-state transitions, and core computer architecture fundamentals.",
    technologies: [
      "Object-Oriented Programming", "Computer Architecture", "TypeScript / Systems Logic"
    ],
    features: [
      "Instruction cycle simulation (Fetch, Decode, Execute)",
      "General-purpose register state management",
      "Memory addressing and read/write simulation",
      "Arithmetic and logic unit (ALU) operation modeling"
    ],
    architecture: "Instruction stream input processed by an instruction decoder and control unit, updating internal ALU registers and memory state arrays.",
    databaseDesign: "In-memory state representations of CPU registers (Accumulator, Program Counter, Instruction Register) and RAM address blocks.",
    engineeringDecisions: [
      {
        decision: "Object-Oriented State Machine Architecture",
        why: "Encapsulating the CPU components (Registers, ALU, Memory Bus, Control Unit) as discrete classes creates a clear, modular simulation model.",
        alternativesConsidered: ["Procedural switch-case loop"],
        tradeoffs: "Slightly more class boilerplate, but results in readable, testable processor logic."
      }
    ],
    securityConsiderations: [
      "Boundary checking on memory address lookups to prevent out-of-bounds access simulation"
    ],
    performanceOptimizations: [
      "Fast bitwise and integer operations for instruction decoding"
    ],
    challenges: [
      {
        challenge: "Accurately modeling instruction flags (Zero, Carry, Overflow) across arithmetic operations",
        solution: "Implemented dedicated status register flag evaluators executed after every ALU arithmetic operation."
      }
    ],
    lessonsLearned: [
      "Building a software emulator provides practical insight into how high-level code translates into machine cycles.",
      "Strict state validation prevents simulated instruction corruption."
    ],
    futureImprovements: [
      "Visual instruction execution debugger with step-by-step register inspection",
      "Assembly language parser to load custom program text"
    ]
  }
];
