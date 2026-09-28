export const siteConfig = {
  name: "Tran Duy Thai",
  title: "MSc Student in Artificial Intelligence Systems | EPITA, France",
  description: "Portfolio website of Tran Duy Thai",
  accentColor: "#1d4ed8",
  social: {
    email: "thai_td@hotmail.com",
    linkedin: "https://www.linkedin.com/in/thai-tran-8a177537",
    github: "https://github.com/thaitd1234",
  },
  aboutMe:
    "Currently MSc student in Artificial Intelligence Systems at EPITA, France, with 16 years of industry experience across Cybersecurity, VoIP infrastructure, and Enterprise systems.",
  skills: ["Python", "Java", "VBA", "PowerShell", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "LightGBM", "XGBoost", "CNNs", "Recommender Systems", "Unsupervised Learning", "Feature Engineering", "Computer Vision", "Image Classification", "Audio Classification", "RAG", "MCP", "Prompt Engineering", "MLflow", "Great Expectations", "Airflow", "AWS", "Azure", "Docker", "VMware", "Hyper-V", "PostgreSQL", "MongoDB", "Oracle", "Neo4j", "Power BI", "Splunk", "Grafana", "Firewall", "Networking", "Certificate Authority", "DHCP", "DNS", "LDAP", "VoIP", "System Administration"],
  projects: [
    {
      name: "AI-empowered Geospatial Environmental Analysis Platform",
      bullets: [
        "Developed a web platform that enables government agencies, NGOs, researchers, and urban planners to assess the environmental impact of climate changes over time. Allow users to simulate different future planning scenarios to evaluate the effects of land-use decisions.",
        "Developed a geospatial pipeline integrating Google Earth Engine satellite imagery with various models such as InVEST and Dynamic World, featuring an interactive 3D interface built with CesiumJS for estimating carbon storage, urban cooling, and stormwater retention.",
        "ACHIEVEMENT: Ranked among the Top 3 projects in the overall AIS program, 2025 Fall intake, EPITA.",
      ],
      link: "",
      skills: ["React", "TypeScript", "Google Earth Engine", "InVEST", "Dynamic World", "CesiumJS", "IndexedDB","Github"],
    },
    {
      name: "Cloud-based Smart Hospital Monitoring System",
      bullets: [
        "Developed a cloud based healthcare analytics platform for monitoring patient vital signs from wearable IoT devices, which includes operational dashboards that monitor and detect anomaly in real time.",
        "Built a data pipeline on AWS using API Gateway, Lambda, S3 Medallion Architecture (Bronze/Silver/Gold), Glue ETL, Step Functions, Athena.",
        "Developed analytical models running on AWS Lambda to detect abnormal patient conditions. implemented Amazon Athena queries to extract insights from the Silver data layer. Results are visualized in Grafana dashboards.",
        "Simulated IoT telemetry with Python using Synthea synthetic patient data.",
      ],
      link: "",
      skills: ["AWS", "Lambda", "S3", "Glue", "Step Functions", "Athena", "Grafana", "Python","Gitlab","Github"],
    },
    {
      name: "Real-Time Book Recommendation System (Amazon Reviews)",
      bullets: [
        "Built a recommendation pipeline that recommends books for different user types (guest, new signed up, existing users) of an online book selling website. The recommendation bases on  personalized preferences, similar items, and users' interaction.",
        "Implemented data preprocessing, time-based train/validation/test split, baseline evaluation (Random/Popularity), and retrieval/ranking metrics (Recall@K, NDCG).",
        "Deployed the service using FastAPI, PostgreSQL, Streamlit, and Docker. The pipeline uses PyTorch MF-BPR, Two-Tower Retrieval, FAISS candidate search, and LightGBM LambdaRank re-ranking with 12 engineered features.",
      ],
      link: "",
      skills: ["PyTorch", "FAISS", "LightGBM", "FastAPI", "PostgreSQL", "Streamlit", "Docker","Github"],
    },
    {
      name: "Multi-agent RAG for Emergency Response Instructions",
      bullets: [
        "Built a multi-agent Retrieval-Augmented Generation (RAG) system, a chatbot that answers questions related to Emergency Response using both internal knowledge and real-time web data.",
        "PDF documents are indexed in a FAISS vector store, enabling a first agent to retrieve relevant information and generate grounded responses.",
        "A second agent enriches the answers through web search, while a third agent combines both outputs into a more complete final response.",
		"The system was integrated with WhatsApp so users can ask questions and get responses directly through chat.",
		"Including a dashboard to monitor agent performance and inference cost.",
      ],
      link: "",
      skills: ["Python", "RAG", "fastMCP", "LLM", "FAISS", "Nodejs", "Gradio", "Github"],
    },
    {
      name: "Find Best Route",
      bullets: [
        "Built a cloud-based route optimization system on AWS that recommends optimal paths based on distance and real-time traffic conditions.",
        "Simulated traffic congestion and streamed data to a traffic API backed by DynamoDB for storage and retrieval.",
        "Developed a web interface enabling users to visualize maps, monitor traffic, select origin/destination, and receive optimal routes.",
        "Containerized the entire system and implemented CI/CD pipelines in GitLab to automate deployment to AWS.",
      ],
      link: "",
      skills: ["AWS", "ECS", "ECR", "Cognito", "ALB", "GitLab", "Github", "Python", "OSRM"],
    },
    {
      name: "Energy Production Forecasting MLOps Platform",
      bullets: [
        "Developed an end-to-end MLOps platform for renewable energy production forecasting, automating the complete machine learning lifecycle from data ingestion and validation to model deployment, monitoring, and retraining.",
        "Data is auto ingested, validated, splited using Apache Airflow and used to train a prediction model. Integration to Microsoft Teams to send alert about data quality issue in real-time.",
        "A Streamlit web interface allows users to submit inference queries, which are processed through a FastAPI service.",
        "Developed a FastAPI model serving API with batch prediction, model hot-swapping, version management through MLflow, and REST endpoints for prediction, health monitoring, and historical results.",
		"Implemented production monitoring with daily data drift detection, PostgreSQL metrics storage, and Grafana dashboards for prediction performance, data quality, training statistics, and operational health.",
		"Containerized the platform with Docker Compose and established CI/CD pipelines using GitHub Actions for automated testing, linting, semantic versioning, and release management.",
      ],
      link: "",
      skills: ["Python", "Apache Airflow", "MLflow", "FastAPI", "Streamlit", "PostgreSQL", "Grafana", "Docker"],
    },
  ],
  experience: [
    {
      company: "Docyber Pte Ltd, Singapore",
      title: "Cybersecurity Engineer",
      dateRange: "Jul 2024 - Sep 2025",
      bullets: [        
		"Delivered cybersecurity monitoring and detection solutions using Splunk Enterprise Security, UBA and SOAR.",
		"Implemented security data onboarding and anomaly detection processes across enterprise environment.",
        "Developed SOAR workbook to automate operational and monitoring activities.",
		"Optimized Splunk performance, availability and resilience through clustering setup across different sites.",
		"Participated in security system integration, deployment, and continuous improvement initiatives.", 
        "Implemented enterprise infrastructure components including Microsoft Certificate Authority, Active Directory, VMware, Veeam Backup, A10 Load Balancer, eG Monitoring, Symantec Endpoint Protection, Kiwi Syslog, WSUS.",
      ],
    },
    {
      company: "Standard Chartered Bank, Singapore",
      title: "Lead Architect",
      dateRange: "Jun 2023 - Jun 2024",
      bullets: [
        "High Level and Low Level design, reviewing, approving, and governing internal Unified Communication systems, including meeting room and datacenter solutions.",
        "Working with the Engineering team to test, proof of concept, automate, and optimize project delivery.",
        "Technology involved: Microsoft Teams Room, Poly, Skype for Business, Teams Webinar, Microsoft Stream, Jabra, Avaya, Genesys, Active Directory, Certificate Authority",
      ],
    },
    {
      company: "Infosys iCompaz Pte Ltd, Singapore",
      title: "Senior Consultant",
      dateRange: "Aug 2022 - May 2023",
      bullets: [
        "Operational support for VoIP infrastructure, vendor management, project rollouts.",
        "Solution design review and implementation",
        "Technology involved: Microsoft Teams, Zoom, AudioCodes SBC, Crestron, Kollective, Cinos XIO, AirMedia, Jabra, Neat, Vmware, Active Directory, OVOC, F5 Loadbalancer, Wireshark,Syslog",
      ],
    },
    {
      company: "Bosch (SEA) Pte Ltd, Singapore",
      title: "Product Manager",
      dateRange: "Oct 2014 - Aug 2022",
      bullets: [
        "System design, implementation, and operation across VoIP infrastructure, including PoC, system integration, product development, project rollout, audit review, and performance monitoring & tuning.",
        "Led development of an internal VoIP monitoring system using Splunk to analyze call quality and operational metrics across multiple regions, with data onboarding, visualization, and dashboard building. Technology involved: Splunk Enterprise, SOAR, UBA, Indexer & Searchhead, Power BI, MS SQL, Oracle, MongoDB, Rest API.",
        "Technology involved: Skype for Business, Microsoft Teams Room, Contact Center, Avaya, Zoom, AudioCodes SBC, Jabra, Neat, PSTN, VMware, Active Directory, DNS, DHCP, OVOC, Load Balancer, Wireshark, Syslog, CDN",
      ],
    },
    {
      company: "Multiple companies, Singapore",
      title: "Various roles",
      dateRange: "2007 - 2014",
      bullets: [
        "IT Infrastructure: Email/Web hosting, Active Directory, DNS, DHCP, LDAP, IIS, MS SQL, ADFS, Certificate Authority, VMware, Proxmox, Hyper-V, Citrix.",
        "Networking & Security: WAN/LAN, VPN, Cisco routers & switches, SIP/H323, firewalls (Checkpoint, ASA, WatchGuard), load balancers (F5, Kemp).",
        "Unified Communications: Lync, Exchange, Avaya, Nortel, IP Telephony, AudioCodes Gateway, Contact Center, Video Conferencing. Delivered projects end-to-end through requirement gathering, solution design, PoC, deployment, migration, and user training.",
      ],
    },
  ],
  education: [
    {
      school: "Epita School of Engineering and Computer Science, France",
      degree: "MSc in Artificial Intelligence System",
      dateRange: "2025 - 2027",
      achievements: [
        "",        
      ],
    },    
  ],
};
