export const projects = [
    {
        title: "Velora - Next Gen Shopping",
        description: "A modern e-commerce platform featuring a seamless shopping experience with exclusive deals. Built with a robust Laravel backend and a dynamic React frontend for optimal performance.",
        overview: "Velora is a cutting-edge e-commerce platform designed to bridge the gap between traditional retail and modern digital shopping. It offers a curated selection of premium products with a focus on user experience, speed, and security. The platform features real-time inventory updates, personalized recommendations, and a seamless checkout process.",
        technologies: ["Laravel", "React", "Tailwind CSS", "Vite", "Framer Motion"],
        features: [
            "Seamless Shopping Experience",
            "Exclusive Deals & Premium Products",
            "Robust Laravel Backend",
            "Dynamic React Frontend",
            "Secure Authentication",
            "Responsive Design"
        ],
        technicalInsights: [
            "State management via React Context API for cart and user sessions.",
            "Optimized asset loading with Vite for lightning-fast application performance.",
            "Secure payment gateway integration patterns.",
            "Responsive UI using Tailwind CSS grid and flexbox systems."
        ],
        image: "/projects/velora_thumbnail.png",
        sourceFiles: "https://github.com/Aqib2607/Velora",
        live: "https://velora-sigma.vercel.app/",
        gradient: "from-primary to-accent"
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
