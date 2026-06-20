// Portfolio data - Update this file with your information
export const siteConfig = {
  name: "Disha Satpute",
  title: "Full-Stack Developer & AI/ML Engineer",
  tagline: "Building products that matter.",
  description:
    "Final Year Computer Engineering student at MIT Academy of Engineering, Alandi Pune. I build scalable web applications, AI-powered systems, and love turning complex problems into elegant solutions.",
  email: "dishasatpute44@gmail.com",
  phone: "+91 94047XXXXX",
  location: "Pune, Maharashtra, India",
  resumeUrl: "/product_resume.pdf",
  availability: "Open to internships and product engineering opportunities",
  social: {
    github: "https://github.com/disha-satpute",
    linkedin: "https://linkedin.com/in/disha-satpute",
  },
}

export const stats = [
  { label: "Projects", value: "10+" },
  { label: "Hackathons", value: "4+" },
  { label: "Technologies", value: "8+" },
  { label: "Published Paper", value: "1" },
]

export const skills = {
  frontend: ["React.js", "Next.js", "JavaScript", "Typescript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "RESTful APIs","JSP"],
  database: ["PostgreSQL", "MongoDB", "Oracle SQL", "MySQL", "PL/SQL", "JDBC"],
  aiml: ["Python", "Deep Learning", "NLP","Machine Learning"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Tableau"],

}

export const experience = [
  {
    id: 1,
    type: "work",
    role: "Product Intern",
    company: "BMC Helix",
    location: "Onsite - Pune, Maharashtra",
    duration: "Jan - June 2026",
    description:
      "Working as backend .",
    technologies: ["Python", "Machine Learning", "React.js", "API Development"],
  },
  {
    id: 3,
    type: "education",
    role: "B.Tech in Computer Engineering",
    company: "MIT Academy of Engineering, Alandi Pune",
    location: "Pune, Maharashtra",
    duration: "2024 - 2027",
    description:
      "Currently pursuing Bachelor of Technology in Computer Engineering, focusing on advanced computer science concepts, software development, and emerging technologies.",
    technologies: ["Software Engineering", "DSA", "Deep Learning", "DBMS"],
  },
  {
    id: 4,
    type: "education",
    role: "Diploma in Information Technology",
    company: "Government Polytechnic Awsari(Kh)",
    location: "Pune, Maharashtra",
    duration: "2021 - 2024",
    description: "Completed with 91.75% - gained practical knowledge in programming and IT fundamentals.",
    technologies: ["Programming", "Database Management", "Web Development", "Computer Network"],
  },
   {
    id: 5,
    type: "education",
    role: "SSC Board",
    company: "Trimurti Vidyalaya Tinhewadi, Rajgurunagar",
    location: "Pune, Maharashtra",
    duration: "2021 - 2024",
    description: "Completed with 97.60% with excellent results in Maths and Science",
    technologies: ["Mathematics", "Social Science", "Science", "English"],
  },
  {
    id: 6,
    type: "work",
    role: "AI & Cloud Technologies Intern",
    company: "IBM SkillsBuild",
    duration: "2025",
    description: "Completed the IBM SkillsBuild Internship Program focused on Artificial Intelligence and emerging technologies.",
    technologies: ["Generative AI", "NLP", "AI Agents", "Research Automation"],
},
  {
    id: 7,
    type: "work",
    role: "Full Stack Developer Intern",
    company: "Omegasoft Technologies",
   location: "Onsite - Pune, Maharashtra",
    duration: "June to July 2024",
    description:
      "Built scalable web applications using React.js and Node.js, implementing RESTful APIs and database integration.",
    technologies: ["MERN Stack", "API Integration", "Database Design", "Agile"],
  },
]

export const projects = [
  {
    id: 1,
    title: "ScholarHub",
    description:
      "A comprehensive student scholarship discovery platform with advanced filtering capabilities by caste, state, and education level. Features JWT authentication, real-time chat system, and PostgreSQL database.",
    image: "/projects/scholarhub.jpg",
    technologies: ["React.js", "Node.js", "PostgreSQL", "JWT", "Express.js"],
    category: "fullstack",
    year: "2024",
    github: "https://github.com/dishasatpute/scholarhub",
    demo: "https://scholar-hub-xer4.vercel.app/",
    featured: true,
  },
 {
  id: 2,
  title: "Evidya",
  description:
    "A comprehensive student achievement and certificate management platform designed for educational institutions. Enables students to upload certificates, track extracurricular activities, and monitor academic progress, while providing faculty with a centralized system for verification, approval workflows, and performance evaluation.",
  image: "/projects/evidya.jpg",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "JWT",
    "REST API",
    "Tailwind CSS"
  ],
  category: "fullstack",
  year: "2026",
  github: "https://github.com/yourusername/evidya",
  demo: "https://evidya-demo.vercel.app",
  featured: true,
},
  {
    id: 4,
    title: "Grievance Management System",
    description:
      "A robust complaint tracking and management system with user authentication, complaint status tracking, and automated email notifications.",
    image: "/projects/grievance.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "fullstack",
    year: "2023",
    github: "https://github.com/dishasatpute/grievance-system",
    demo: "https://grievance.demo",
    featured: false,
  },
 {
  id: 6,
  title: "Dance Academy Management Website",
  description:
    "Developed a responsive and user-friendly website for a dance academy during my internship at OmegaSoft Technologies. Implemented modern UI/UX designs, mobile-first layouts, interactive animations, and optimized user navigation to enhance the academy's digital presence and student engagement.",
  image: "/projects/dance.jpg",
  technologies: [
    "React.js",
    "JavaScript",
    "CSS3",
    "Responsive Design",
    "UI/UX",
    "Animations"
  ],
  category: "internship",
  year: "2023",
  github: "https://github.com/dishasatpute/dance-academy",
  demo: "https://dance.demo",
  featured: false,
},
  {
  id: 7,
  title: "JSLT Event Transformation Engine",
  description:
    "Designed and implemented backend APIs for transforming observability and monitoring events into standardized formats. Developed scalable transformation pipelines, schema validation mechanisms, and error-reporting services to improve data interoperability across enterprise monitoring platforms.",
  image: "/projects/event-engine.jpg",
  technologies: [
    "Scala",
    "ZIO",
    "REST API",
    "JSON",
    "Postman",
    "BMC Helix"
  ],
  category: "internship",
  year: "2026",
  github: "",
  demo: "",
  featured: true,
},
{
  id: 8,
  title: "AI Fitness & Health Analyzer",
  description:
    "An AI-powered health assessment platform that analyzes user fitness and lifestyle data to generate personalized health insights, BMI evaluation, risk analysis, and wellness recommendations. Built with machine learning models and deployed as an interactive web application for real-time health monitoring and guidance.",
  image: "/projects/ai-fitness-health.jpg",
  technologies: [
    "Python",
    "Machine Learning",
    "Streamlit",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Data Analysis"
  ],
  category: "ai-ml",
  year: "2025",
  github: "https://github.com/disha-satpute/AI-fitness-health-analyzer",
  demo: "https://ai-fitness-health-analyzer.streamlit.app/",
  featured: true,
},
{
  id: 9,
  title: "Student Mental Stress Prediction",
  description:
    "Developed a machine learning-based mental health assessment platform that predicts stress levels among students using academic, lifestyle, and behavioral factors. The system analyzes user inputs to identify potential stress risks and provides data-driven insights to support early awareness and well-being.",
  image: "/projects/stress-prediction.jpg",
  technologies: [
    "Python",
    "Machine Learning",
    "Streamlit",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Data Visualization"
  ],
  category: "ai-ml",
  year: "2025",
  github: "https://github.com/disha-satpute/student-mental-stress-prediction",
  demo: "https://stress-analyzer-by-disha.streamlit.app/",
  featured: true,
},
{

  id: 10,
  title: "AI-Powered Disaster Forecast & Response System",
  description:
    "Built a smart disaster management solution that leverages machine learning and data analytics to predict potential disaster events and support emergency response operations. The platform provides risk assessment, affected-area insights, and response recommendations, enabling faster decision-making and improved resource allocation during critical situations.",
  image: "/projects/disaster-response.jpg",
  technologies: [
    "Python",
    "Machine Learning",
    "Streamlit",
    "Data Visualization",
    "Predictive Analytics",
    "Pandas",
    "NumPy"
  ],
  category: "hackathon",
  year: "2025",
  github: "https://github.com/disha-satpute/Disaster-Forecast-and-Response-System",
  demo: "",
  featured: true,
},
{
  id: 11,
  title: "CityConnect",
  description:
    "Built a smart city governance platform that bridges the gap between citizens and local authorities through digital issue reporting, real-time status tracking, and data-driven civic management. The solution improves transparency, accountability, and citizen participation while enabling faster resolution of public concerns. Selected as a Finalist in a competitive hackathon.",
  image: "/projects/cityconnect.jpg",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Git"
  ],
  category: "hackathon",
  year: "2025",
  github: "https://github.com/disha-satpute/CityConnect",
  demo: "https://www.linkedin.com/posts/disha-satpute_hackathon-smartcity-cityconnect-activity-7365802943117164545-vp_6?utm_source=share&utm_medium=member_android&rcm=ACoAAEUcnZMBufCEBGW9DlFM84H7BclvS19b4pw",
  featured: true,
},
{
  id: 12,
  title: "AI-Based Chronic Kidney Disease Predictor",
  description:
    "Built a predictive healthcare analytics solution that leverages machine learning algorithms to assess the likelihood of Chronic Kidney Disease using patient medical data. The platform supports early risk identification, improves diagnostic efficiency, and demonstrates the application of AI in preventive healthcare and clinical decision support systems.",
  image: "/projects/kidney-disease-predictor.jpg",
  technologies: [
    "Python",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Predictive Analytics",
    "Healthcare AI"
  ],
  category: "ai-ml",
  year: "2025",
  github: "https://github.com/disha-satpute/chronic-kidney-disease-predictor",
  demo: "https://drive.google.com/file/d/1W85XYz7MRSYwtjMvLVE4TTxcCC1A2OMx/view",
  featured: true,
},
{
  id: 13,
  title: "AI Research Agent",
  description:
    "Built an intelligent AI Research Agent as part of the IBM SkillsBuild Internship 2025. The solution automates research workflows by collecting information from diverse sources, generating concise summaries, extracting relevant insights, and organizing knowledge for faster analysis. The project demonstrates practical applications of Generative AI, NLP, and intelligent automation in research and decision support.",
  image: "/projects/ai-research-agent.jpg",
  technologies: [
    "Python",
    "Generative AI",
    "LLMs",
    "NLP",
    "Streamlit",
    "Research Automation",
    "AI Agents"
  ],
  category: "internship",
  year: "2025",
  github: "https://github.com/disha-satpute/AI_Research_Agent",
  demo: "https://www.linkedin.com/posts/disha-satpute_ibm-ai-cloudcomputing-activity-7357485859266322434-saDR?utm_source=share&utm_medium=member_android&rcm=ACoAAEUcnZMBufCEBGW9DlFM84H7BclvS19b4pw",
  featured: true,
},
{
  id: 14,
  title: "LittleQuest",
  description:
    "LittleQuest is an AI-powered play-based learning ecosystem designed for early childhood education. The platform personalizes learning journeys based on a child's progress, interests, and learning patterns while integrating gamification, adaptive learning, and multilingual content delivery to support foundational literacy and numeracy in an engaging and accessible manner. Developed as part of the SahAI for Shiksha Hackathon 2026.",
  image: "/projects/littlequest.jpg",
  technologies: [
    "React",
    "AI",
    "Adaptive Learning",
    "Educational Technology",
    "JavaScript",
    "Vercel"
  ],
  category: "hackathon",
  year: "2026",
  github: "https://github.com/Vaishnavi1955/LittleQuest_Play_based_Learning",
  demo: "https://drive.google.com/file/d/1qx5JWpZPliBLzXgzCvnIZtz9WzLeNHbY/view",
  featured: true,
},
{
  id: 15,
  title: "AI Autism Detection System",
  description:
    "Built a machine learning-based healthcare application for early autism spectrum disorder (ASD) risk prediction using behavioral and developmental assessment data. The system applies predictive analytics to identify potential indicators of autism, enabling early screening and supporting data-driven intervention strategies in educational and healthcare environments.",
  image: "/projects/autism-detection.jpg",
  technologies: [
    "Python",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Data Analysis",
    "Healthcare AI"
  ],
  category: "ai-ml",
  year: "2026",
  github: "https://github.com/Vaishnavi1955/AI_Autism_Detection_System",
  demo: "",
  featured: true,
},
{
  id: 16,
  title: "DataLakeEdge - Offline Biometric Authentication System",
  description:
    "Developed an Edge AI-powered biometric authentication platform for NHAI Hackathon 7.0 that enables secure offline identity verification in remote and network-constrained environments. The system combines facial recognition, randomized liveness detection, local audit logging, and cloud synchronization to prevent spoofing attacks while ensuring reliable authentication without internet connectivity. Built using React Native, Google ML Kit, MobileFaceNet, SQLite, and AWS-ready architecture.",
  image: "/projects/datalakeedge.jpg",
  technologies: [
    "React Native",
    "Edge AI",
    "Google ML Kit",
    "MobileFaceNet",
    "SQLite",
    "AWS",
    "Facial Recognition",
    "Liveness Detection"
  ],
  category: "hackathon",
  year: "2026",
  github: "https://drive.google.com/file/d/1xQj5XRUY9c1JW0w-iE4XJj-oBPjbCf0d/view",
  demo: "https://drive.google.com/file/d/1Vzv0dTkrXhUN_S2RSGYD1irUsG7tTJml/view",
  featured: true,
}
]

export const achievements = [
  {
    title: "AFE Scholar 2024",
    description: "Awarded for technical excellence by Amazon Future Engineer (AFE) - Zuvy.org",
    type: "award",
  },
  {
    title: "NMMS Scholarship",
    description: "National Means-cum-Merit Scholarship for academic achievement",
    type: "scholarship",
  },
  {
    title: "Grievance Redressal System",
    description:
      "Published research paper on developing an efficient grievance redressal system for improving organizational communication and problem resolution.",
    type: "research",
    certificateUrl: "#",
    paperUrl: "#",
  },
]

export const currentlyBuilding = [
  "AI-powered personal productivity assistant",
  "Open-source contribution tracker",
]

export const learning = ["System Design", "Distributed Systems", "Advanced ML/AI"]
