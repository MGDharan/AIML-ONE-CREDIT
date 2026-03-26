/**
 * Portfolio Configuration File
 * Edit this file to customize your portfolio content
 * Changes will be reflected when you sync with HTML
 */

const portfolioConfig = {
    // Hero Section
    hero: {
        title: "Giridharan M",
        subtitle: "AI/ML Engineer | Automation Specialist | Full Stack Developer",
        buttonText: "Explore My Work"
    },

    // Personal Information
    personal: {
        name: "Giridharan M",
        email: "mgdharan7@gmail.com",
        phone: "+91-7305848376",
        location: "Tiruchengode, Tamil Nadu, India",
        college: "K.S. Rangasamy College of Technology",
        socialLinks: {
            github: "https://github.com/MGDharan",
            linkedin: "https://www.linkedin.com/in/giridharan-m/"
        }
    },

    // About Section
    about: {
        heading: "About Me",
        description: [
            "Motivated AI/ML Engineer and Full Stack Developer with hands-on experience building intelligent, real-time systems and automation workflows. I've demonstrated the ability to deliver end-to-end AI-powered solutions including computer vision systems, predictive analytics engines, and smart notification platforms.",
            "Proficient in Python, machine learning frameworks, React, Node.js, and no-code automation tools. Passionate about creating accessible technology that solves real-world problems for businesses and rural communities. Currently pursuing B.E. in AI/ML specialization at K.S. Rangasamy College of Technology."
        ],
        stats: [
            { number: "5+", label: "AI/ML Projects" },
            { number: "4", label: "Oracle Certifications" },
            { number: "10+", label: "Tech Stack Proficiency" }
        ]
    },

    // Experience Section
    experience: [
        {
            title: "Tech Associate – Full Stack Development Intern",
            company: "SIDRA HUB ACIC",
            period: "Jul 2025 - Oct 2025",
            description: "Engineered a full-stack AgriTech web platform serving rural farmers with scalable architecture.",
            achievements: [
                "Built scalable RESTful APIs using Node.js & Express.js with reusable React components",
                "Architected hybrid database solution combining Firebase (real-time) and MySQL (relational)",
                "Automated real-time weather advisory delivery for farmers using n8n workflows",
                "Designed intuitive UI optimized for users with low digital literacy"
            ]
        },
        {
            title: "AI/ML Intern",
            company: "AI/ML Internship (Confidential Organization)",
            period: "Apr 2025 - Oct 2025",
            description: "Developed three production-ready AI applications and automated workflows.",
            achievements: [
                "Developed Hand Sign Detection System (Mediapipe + CNN) for accessibility",
                "Created Shop AI Assistant for dress-stock forecasting using Pandas and CNN",
                "Built Weather & Time-Based Food Suggestion App with real-time API integrations",
                "Orchestrated AI agents and GitHub automation pipelines using n8n"
            ]
        },
        {
            title: "Education",
            company: "K.S. Rangasamy College of Technology",
            period: "Currently Pursuing",
            description: "B.E./B.Tech - AI/ML Specialization",
            achievements: [
                "Oracle Certified: Generative AI Professional – 84%",
                "Oracle Certified: AI Foundations Associate – 85%",
                "Oracle Certified: AI Vector Search Professional – 84%",
                "Oracle Certified: DevOps Professional – 88%"
            ]
        }
    ],

    // Skills & Technologies
    skills: [
        {
            category: "Programming Languages",
            icon: "fa-code",
            skills: ["Python", "JavaScript", "Java", "C", "HTML/CSS"]
        },
        {
            category: "AI/ML & Data Science",
            icon: "fa-brain",
            skills: ["Machine Learning", "CNN", "Mediapipe", "LLM", "RAG", "OpenCV", "Data Analysis", "AI Agents"]
        },
        {
            category: "Databases & Backend",
            icon: "fa-database",
            skills: ["MySQL", "Firebase", "MongoDB", "Node.js", "Express.js", "REST APIs"]
        },
        {
            category: "Automation & Tools",
            icon: "fa-cog",
            skills: ["n8n", "GitHub API", "Power BI", "Webhooks", "Excel"]
        },
        {
            category: "APIs & Integrations",
            icon: "fa-network-wired",
            skills: ["WeatherAPI", "LocationIQ", "Telegram Bot API", "Twilio", "Pushbullet"]
        },
        {
            category: "Frontend Frameworks",
            icon: "fa-react",
            skills: ["React", "Responsive Design", "UI/UX", "CSS"]
        }
    ],

    // Advanced Tools/Expertise
    tools: [
        {
            icon: "fa-robot",
            title: "AI/ML Systems",
            description: "Building computer vision systems, CNN models, and AI agents using Mediapipe, OpenCV, and LLMs"
        },
        {
            icon: "fa-handshake",
            title: "No-Code Automation",
            description: "Expert in n8n workflow orchestration, API integrations, and AI agent automation platforms"
        },
        {
            icon: "fa-leaf",
            title: "AgriTech Solutions",
            description: "Developing intelligent systems for rural farmers including weather advisory and crop guidance"
        },
        {
            icon: "fa-chart-bar",
            title: "Predictive Analytics",
            description: "Creating forecasting engines using Pandas, data analysis, and machine learning models"
        },
        {
            icon: "fa-plug",
            title: "Real-Time API Integration",
            description: "Seamlessly integrating WeatherAPI, LocationIQ, Telegram, Twilio, and custom webhooks"
        },
        {
            icon: "fa-network-wired",
            title: "Full Stack Development",
            description: "Building scalable applications with React, Node.js, Express, and hybrid database architecture"
        }
    ],

    // Projects
    projects: [
        {
            title: "Sign Language Detection (A-Z)",
            description: "Built a complete computer vision pipeline for real-time hand gesture recognition. Trained CNN model on extracted hand landmarks achieving accurate letter identification.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            tags: ["Python", "Mediapipe", "CNN", "Computer Vision"],
            links: {
                view: "https://github.com/MGDharan",
                code: "https://github.com/MGDharan"
            }
        },
        {
            title: "Shop AI Assistant – Dress Forecasting",
            description: "AI chatbot analyzing historical sales data to predict dress categories for specific days. Integrated with conversational interface for natural-language recommendations.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            tags: ["Python", "Pandas", "CNN", "n8n AI Agent"],
            links: {
                view: "https://github.com/MGDharan/sales-chatbot",
                code: "https://github.com/MGDharan/sales-chatbot"
            }
        },
        {
            title: "Weather & Time-Based Food Recommendation",
            description: "Smart app recommending meals based on real-time temperature, location, and time-of-day. Delivers via push notifications and SMS.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            tags: ["Python", "WeatherAPI", "LocationIQ", "Twilio"],
            links: {
                view: "https://github.com/MGDharan/internship",
                code: "https://github.com/MGDharan/internship"
            }
        },
        {
            title: "GitHub Code Upload Automation Agent",
            description: "AI agent generating code from natural-language prompts and autonomously committing to GitHub with structured naming and automated management.",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            tags: ["n8n", "GitHub API", "LLM", "Webhooks"],
            links: {
                view: "https://github.com/MGDharan",
                code: "https://github.com/MGDharan"
            }
        },
        {
            title: "Telegram Weather Notification System",
            description: "Automated system for farmers reading Excel database and delivering personalized weather alerts via Telegram for irrigation and spraying decisions.",
            gradient: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
            tags: ["Python", "Telegram Bot API", "Weather API", "Pandas"],
            links: {
                view: "https://github.com/MGDharan",
                code: "https://github.com/MGDharan"
            }
        }
    ],

    // Contact Section
    contact: {
        heading: "Get In Touch",
        intro: "I'm always open to interesting AI/ML projects, collaborations, and opportunities. Feel free to reach out!",
        infoCards: [
            {
                icon: "fa-envelope",
                title: "Email",
                content: "mgdharan7@gmail.com",
                link: "mailto:mgdharan7@gmail.com"
            },
            {
                icon: "fa-phone",
                title: "Phone",
                content: "+91-7305848376",
                link: "tel:+917305848376"
            },
            {
                icon: "fa-map-marker-alt",
                title: "Location",
                content: "Tiruchengode, Tamil Nadu, India"
            }
        ]
    },

    // Theme Colors
    theme: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#f093fb",
        darkBg: "#0f0f0f",
        lightBg: "#ffffff",
        textDark: "#1a1a1a",
        textLight: "#f0f0f0"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

// Usage Example:
// Access portfolio data anywhere in your code with:
// portfolioConfig.hero.title
// portfolioConfig.personal.email
// portfolioConfig.experience[0].title
// portfolioConfig.skills[0].skills[0]
// etc.

console.log('Portfolio Configuration Loaded ✓');
