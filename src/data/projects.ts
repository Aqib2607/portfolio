export const projects = [
    {
        title: "Velora - Multi Tenant Financial Marketplace",
        description: "Enterprise Grade B2C & B2B2C Commerce Platform engineered for high-throughput commerce with financial-grade integrity. Features an immutable double-entry ledger, escrow-based payments, and strict tenant isolation.",
        overview: "Velora is a distributed, multi-tenant global marketplace platform engineered for high-throughput commerce with financial-grade integrity. It implements CQRS architecture, an immutable double-entry ledger, escrow-based payments, and strict tenant isolation. The system is designed for 1,500+ orders per minute, 99.9% checkout uptime, and 7-year financial audit retention.",
        technologies: [
            "Laravel 11",
            "React 18",
            "Vite",
            "Tailwind CSS",
            "MySQL 8",
            "Redis",
            "OpenSearch",
            "AWS",
            "Docker",
            "Terraform"
        ],
        features: [
            "Multi-tenant architecture with global tenant_id enforcement",
            "Immutable double-entry ledger (append-only, debit=credit)",
            "Escrow-based payment lifecycle with compensating refund entries",
            "Idempotent order processing with strict state machine",
            "Soft reserve (Redis) + hard inventory locking",
            "CQRS separation (MySQL write model / OpenSearch read model)",
            "Policy-based RBAC with Seller, Admin, Finance roles",
            "PCI-compliant tokenized payment integration",
            "GDPR-ready data export & deletion compliance",
            "Kafka-ready event-driven architecture"
        ],
        technicalInsights: [
            "Laravel 11 modular backend with Sanctum authentication",
            "React 18 + Vite frontend with React Query and Zustand",
            "MySQL 8 (InnoDB strict mode) with monthly partitioning",
            "Redis for sessions, cart soft reserves, and queue handling",
            "OpenSearch full-text indexing with aggregations",
            "AWS infrastructure (RDS, ElastiCache, EKS, S3, CloudFront)",
            "Prometheus, Grafana, ELK, Jaeger observability stack",
            "Terraform-based infrastructure as code"
        ],
        metrics: {
            "Checkout Uptime": "99.9%",
            "Peak Throughput": "1,500 orders/min",
            "Search Latency": "<50ms",
            "Financial Retention": "7 Years"
        },
        badge: "Financial-grade / Enterprise",
        image: "/projects/velora_thumbnail.png",
        sourceFiles: "https://github.com/Aqib2607/Velora",
        live: "https://velora-mart.vercel.app/",
        gradient: "from-[#6a329f] to-[#f1c232]",
    },
    {
        title: "TaskFlow - Task Management App",
        description: "A high-performance task management app with intuitive Kanban boards, real-time collaboration, and insightful analytics to streamline your workflow.",
        overview: "TaskFlow eliminates chaotic project management by providing a centralized hub for team collaboration. It combines the visual clarity of Kanban boards with powerful analytics, enabling teams to track progress, identify bottlenecks, and meet deadlines efficiently. Real-time updates ensure everyone stays on the same page.",
        technologies: ["React", "Socket.io", "PostgreSQL", "Tailwind CSS", "OpenAI"],
        features: [
            "Intuitive Kanban Boards",
            "Real-time Collaboration",
            "Insightful Analytics Dashboard",
            "Drag & Drop Interface",
            "Team Management & Roles",
            "AI-Powered Productivity Insights"
        ],
        technicalInsights: [
            "Real-time bidirectional communication using Socket.io.",
            "Drag-and-drop implementation with optimistic UI updates.",
            "Complex database schema design in PostgreSQL for task relationships.",
            "AI integration (OpenAI API) for automated task summarization."
        ],
        image: "/projects/task_management_app.png",
        sourceFiles: "https://drive.google.com/drive/folders/1n5AoyZ4-6aRVpgLCFNuqR8XlqYCmMYrc?usp=sharing",
        live: "https://taskflow-ten-lemon.vercel.app/",
        gradient: "from-secondary to-secondary-glow"
    },
    {
        title: "Clinexa - Hospital Management System",
        description: "A comprehensive, modern, and production-ready Hospital Management System (HMS) designed to streamline clinical workflows, automate laboratory operations, and manage hospital administration.",
        overview: "Clinexa is a robust Hospital Management System engineered to digitize and automate widely complex medical workflows. From patient registration to discharge, it handles every aspect of hospital administration. It reduces paperwork, minimizes errors, and improves patient care through streamlined data access and inter-departmental communication.",
        technologies: ["Laravel", "React", "TypeScript", "MySQL", "Tailwind CSS"],
        features: [
            "Clinical & OPD Management",
            "Inpatient (IPD) Ward Management",
            "Lab Automation & Sample Tracking",
            "Pharmacy POS & Inventory Control",
            "Finance, Billing & Accounting",
            "Role-Based Access Control (RBAC)"
        ],
        technicalInsights: [
            "Multi-tenant architecture supporting separate data silos for different departments.",
            "RBAC (Role-Based Access Control) system with granular permission gates.",
            "Database normalization for handling millions of patient records efficiently.",
            "Automated PDF generation for medical reports and prescriptions."
        ],
        image: "/projects/clinexa_thumbnail.png",
        sourceFiles: "https://github.com/Aqib2607/clinexa",
        live: "https://clinexa-chi.vercel.app/",
        gradient: "from-blue-600 to-cyan-600"
    },
    {
        title: "Single Doc - Health & Wellness Platform",
        description: "A comprehensive health management system connecting patients with doctors and wellness experts. Features video consultations via Google Meet, course management, and real-time appointment updates.",
        overview: "Single Doc continuously connects patients with healthcare providers, breaking down geographical barriers. It offers a holistic approach to wellness by combining medical consultations with lifestyle coaching. The platform supports secure video calls, comprehensive health tracking, and educational resources.",
        technologies: ["Laravel", "React", "TypeScript", "MySQL", "Google Meet API"],
        features: [
            "Video Consultations (Google Meet)",
            "Course Management & Player",
            "Collaborative Todo Lists",
            "Real-time Appointment Updates",
            "Professional Dashboard",
            "Wellness & Coaching Services"
        ],
        technicalInsights: [
            "WebRTC integration via Google Meet API for secure video consultations.",
            "Real-time notification system using Laravel Echo and Pusher.",
            "JWT authentication for secure stateless API communication.",
            "Video streaming implementation for course content delivery."
        ],
        image: "/projects/single_doc.png",
        sourceFiles: "https://github.com/Aqib2607/Single_Doc",
        live: "https://drive.google.com/file/d/1ntncbIWDYjoiDnVS09mepJ93okD5lSk1/view?usp=sharing",
        demoType: "video" as const,
        gradient: "from-primary to-primary-glow"
    },
    {
        title: "WeatherSphere - Weather Dashboard",
        description: "A real-time weather dashboard offering hourly and 7-day forecasts with detailed metrics like humidity and wind speed. Built with React, TypeScript, and shadcn/ui for a polished, responsive user experience.",
        overview: "WeatherSphere is more than just a forecast; it's a comprehensive weather intelligence dashboard. By aggregating data from multiple meteorological sources, it provides hyper-local accuracy for current conditions and future trends. The interactive interface allows users to visualize weather patterns dynamically.",
        technologies: ["React", "TypeScript", "shadcn/ui", "Tailwind CSS", "Vite"],
        features: [
            "Real-time Weather Data",
            "Hourly & 7-Day Forecasts",
            "Detailed Metrics (Humidity, Wind, UV)",
            "Interactive Maps & Radar",
            "Location Search & Auto-detection",
            "Responsive & Polished UI"
        ],
        technicalInsights: [
            "Integration with OpenWeatherMap API for high-frequency data polling.",
            "Client-side caching strategies to minimize API calls and latency.",
            "Geolocation API integration for automatic location detection.",
            "Data visualization using Chart.js for temperature and precipitation trends."
        ],
        image: "/projects/weather_dashboard.png",
        sourceFiles: "https://github.com/Aqib2607/aura-weather",
        live: "https://aura-weather-seven.vercel.app/",
        gradient: "from-accent to-accent-glow"
    },
];
