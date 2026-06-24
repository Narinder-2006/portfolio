// ============================================================
//  portfolioData.js — Single source of truth for all content
//  Edit this file to update bio, skills, projects, etc.
// ============================================================

const portfolioData = {
  profile: {
    name: "Narinder Partap Singh",
    title: "Machine Learning & Computer Science Engineer",
    tagline: "Building intelligent systems at the intersection of data, deep learning, and real-world impact.",
    email: "narinderpartapsinghasr@gmail.com",
    phone: "(+91) 7740019942",
    location: {
      city: "Amritsar",
      state: "Punjab",
      country: "India",
      lat: 31.6340,
      lng: 74.8723,
    },
    links: {
      linkedin: "https://linkedin.com/in/narinder-partap-singh-4038642a4",
      leetcode: "https://leetcode.com/u/aLzY9H8vlT/",
      github: "https://github.com/",
      kaggle: "https://www.kaggle.com/narinder2006",
    },
    avatar: null, // Replace with image path e.g. "assets/avatar.jpg"
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dr. BR Ambedkar National Institute of Technology, Jalandhar",
      period: "2024 – 2028",
      score: "CGPA: 8.81",
      icon: "🎓",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Punjab School Education Board",
      period: "2023 – 2024",
      score: "97%",
      icon: "📚",
    },
  ],

  skills: [
    {
      category: "Machine Learning & DL",
      icon: "🧠",
      color: "#6366f1",
      items: ["Deep Learning", "Computer Vision", "NLP", "Object Detection", "Image Segmentation", "Transformers", "LSTM"],
    },
    {
      category: "Data Science & Engineering",
      icon: "🔬",
      color: "#10b981",
      items: ["Probability & Statistics", "ETL Pipelines", "Exploratory Data Analysis", "Data Visualization", "Data Cleaning", "Web Scraping", "API Extraction"],
    },
    {
      category: "Programming Languages",
      icon: "💻",
      color: "#06b6d4",
      items: ["Python", "C/C++", "SQL"], // Added SQL and JS since you use DBs and HTML/CSS
    },
    {
      category: "Libraries & Tools",
      icon: "🔧",
      color: "#10b981",
      items: ["Scikit-learn", "Pandas", "NumPy", "OpenCV", "TensorFlow", "XGBoost", "NLTK", "spaCy", "Matplotlib", "Seaborn"],
    },
    {
      category: "Frameworks & APIs", // Renamed slightly to include APIs
      icon: "⚡",
      color: "#f59e0b",
      items: ["TensorFlow", "Keras", "FastAPI", "Streamlit"],
    },
    {
      category: "DevOps & Databases", // Combined to show engineering skills
      icon: "🗄️",
      color: "#ec4899",
      items: ["Docker", "Git/GitHub", "MySQL", "Linux (Ubuntu)", "REST APIs"],
    },
  ],

  experience: [
    {
      role: "Data Science Intern",
      company: "Skillcraft Technology",
      period: "Jul – Aug 2024",
      type: "Internship",
      bullets: [
        "Applied end-to-end data science workflows on banking and insurance datasets.",
        "Cleaned and prepared data using Pandas; performed EDA using Matplotlib.",
        "Built predictive classification models using Scikit-learn.",
      ],
      tags: ["Python", "Pandas", "Scikit-learn", "EDA", "Matplotlib"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "AI Driving Co-Pilot",
      subtitle: "A modern, high-performance autonomous driving assistant with AI-powered decision making.",
      description:
        "An interactive AI-powered Augmented Reality assistant handling real-time computer vision tasks and dynamic interactive overlays. Combines computer vision pipelines with AR rendering for immersive experiences.",
      image: "assets/projects/image_ai.png", // Replace with actual image path
      imagePlaceholderColor: "#6366f1",
      imagePlaceholderIcon: "🥽",
      tags: ["Python", "OpenCV", "Deep Learning", "Transformers", "Computer Vision","YOLOv26","Unet","BiLSTM"],
      github: "https://github.com/Narinder-2006/AI-Driving-CoPilot", // Add GitHub URL here
      demo: "assets/demo/Video Project.mp4",   // Add live demo URL here
      workflow: "assets/projects/workflow_ai.png",  // Add workflow image URL here
      status: "Completed",
      featured: true,
    },
     {
      id: 2,
      title: "EstateAPR Gurugram",
      subtitle: "Gurugram Real Estate Analysis + Pricing Prediction + Recommendation Engine",
      description:
        "end-to-end real estate analytics application built on a dataset of approximately 6,000 flats in Gurugram. The project covers the complete data science lifecycle — from web scraping and data cleaning to machine learning-based price prediction, recommendation systems, and an interactive Streamlit dashboard.",
      image: "assets/projects/image_estate.png", // Replace with actual image path
      imagePlaceholderColor: "#f59e0b",
      imagePlaceholderIcon: "🏙️",
      tags: ["Python", "Scikit-learn", "Streamlit", "Pandas", "EDA",'LightGBM','Kmeans Clustering','Recommendation Engine'],
      github: "https://github.com/Narinder-2006/EstateAPR-Gurgaon",
      demo: "assets/demo/Video Project 3.mp4",
      workflow: "assets/projects/workflow_estate.png",
      status: "Completed",
      featured: true,
    },
    {
      id: 3,
      title: "Faculty Research Publications Dashboard",
      subtitle: "Automated Academic Analytics Pipeline",
      description:
        "An automated pipeline using Python, SerpApi, and Streamlit to collect, process, and visualize institutional research publication data across departments and years.",
      image: null,
      imagePlaceholderColor: "#ec4899",
      imagePlaceholderIcon: "📊",
      tags: ["Python", "SerpApi", "Streamlit", "Data Pipeline", "Visualization"],
      github: "",
      demo: "",
      workflow: "",
      status: "Completed",
      featured: false,
    },
    {
      id: 4,
      title: "Next Word Predictor",
      subtitle: "LSTM-based NLP Language Model",
      description:
        "A Natural Language Processing model utilizing Long Short-Term Memory (LSTM) recurrent neural networks to predict subsequent words in user text inputs, trained on large text corpora.",
      image: null,
      imagePlaceholderColor: "#06b6d4",
      imagePlaceholderIcon: "🔤",
      tags: ["Python", "TensorFlow", "LSTM", "NLP", "Keras"],
      github: "",
      demo: "",
      workflow: "",
      status: "Completed",
      featured: true,
    },
    {
      id: 5,
      title: "Hostel Leave Management System",
      subtitle: "Web-Based Administrative Portal",
      description:
        "A full-featured web management portal featuring distinct student and administrative portals, leave request workflows, approval systems, and a responsive front-end interface.",
      image: "assets/projects/image_leave.png", // Replace with actual image path
      imagePlaceholderColor: "#10b981",
      imagePlaceholderIcon: "🏠",
      tags: ["HTML5", "CSS3", "JavaScript", "Web Dev", "UI/UX"],
      github: "",
      demo: "",
      workflow: "",
      status: "Completed",
      featured: false,
    },
   
    
    {
      id: 6,
      title: "Energy Tariff Policies Analysis",
      subtitle: "Causal ML Research Publication",
      description:
        "Research analyzing regional energy policy impacts using causal machine learning architectures in Python, benchmarking metrics against traditional econometric setups. Published as a research paper.",
      image: null,
      imagePlaceholderColor: "#8b5cf6",
      imagePlaceholderIcon: "⚡",
      tags: ["Python", "Causal ML", "Econometrics", "Research", "Policy Analysis"],
      github: "",
      demo: "",
      workflow: "",
      status: "Published",
      featured: false,
    },
  ],

  achievements: [
    {
      icon: "🏆",
      title: "JEE Main 2024",
      detail: "99.28 Percentile",
      color: "#f59e0b",
    },
    {
      icon: "🧩",
      title: "LeetCode 200 Days Badge",
      detail: "450+ Problems Solved",
      color: "#06b6d4",
    },
    {
      icon: "🌐",
      title: "Google Solution Challenge",
      detail: "Participant",
      color: "#10b981",
    },
    {
      icon: "🤖",
      title: "Amazon ML Challenge",
      detail: "Participant",
      color: "#f97316",
    },
    {
      icon: "📜",
      title: "Deloitte Data Analyst",
      detail: "Virtual Experience · Aug 2025",
      color: "#6366f1",
    },
    {
      icon: "📜",
      title: "Cisco Data Science",
      detail: "Virtual Experience · Jul 2025",
      color: "#ec4899",
    },
  ],
};