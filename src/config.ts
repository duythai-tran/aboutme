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
    "Currently MSc student in Artificial Intelligence Systems at EPITA, France, with 16 years of industry experience in Singapore across Cybersecurity, VoIP infrastructure, and enterprise systems. Seeking an internship or full-time opportunity to apply my technical skills and contribute to organizational success.",
  skills: ["Deep Learning", "Unsupervised Learning", "ML Modeling", "Data Science", "Python", "Java", "C++", "PowerShell", "VBA", "AWS", "Azure", "Docker", "PostgreSQL", "MS SQL", "MongoDB", "Neo4j", "Oracle", "Splunk", "Power BI","AWS", "Docker", "Firewall", "Network Routing", "Vmware", "HyperV", "Load Balancer", "Certificate Authority", "DHCP", "DNS", "VPN", "IIS", "SMTP", "System Administration", "Problem Solving", "Critical Thinking", "Team work"],
  projects: [
    {
      name: "Energy Production Prediction",
      description:
        "Built an end-to-end ML pipeline to predict energy production from multiple sources (solar, wind, hydro). Data is collected using Apache Airflow and used to train a prediction model. A Streamlit web interface allows users to submit queries, which are processed through a FastAPI service. The API either generates predictions from the trained model or retrieves historical predictions from a PostgreSQL database. Grafana monitors data quality issues and sends alerts to a Microsoft Teams channel.",
      link: "",
      skills: ["Python", "FastAPI", "Streamlit", "Apache Airflow", "PostgreSQL", "Grafana", "Docker"],
    },    
    
  ],
  experience: [
    {
      company: "Docyber Pte Ltd, Singapore",
      title: "Cybersecurity Engineer",
      dateRange: "Jul 2024 - Sep 2025",
      bullets: [
        "Deployed enterprise-scale Splunk Security platform including ES, SOAR, and UBA with clustered indexers/searchheads supporting multi-terabyte daily log ingestion.",
        "Anomaly detection use case implementation, data onboarding, cleansing, visualization on Splunk. Integration with customers' existing infrastructure",
        "Implemented enterprise infrastructure components including Microsoft Certificate Authority, Active Directory, VMware, Veeam Backup, A10 Load Balancer, eG Monitoring, Symantec Endpoint Protection, Kiwi Syslog, WSUS",
      ],
    },
    {
      company: "Standard Chartered Bank, Singapore",
      title: "Lead Architect",
      dateRange: "Jun 2023 - Jun 2024",
      bullets: [
        "High Level and Low Level architecture design/review/approving for internal Unified Communication systems.",
        "Working with Engineering team to test, proof of concept, automate and optimize project delivery.",
        "Technology involved: Microsoft Teams Room, Skype for Business, Zoom, Avaya, Gensys Contact Center, Microsoft Stream, Teams Webinar, Jabra,  Microsoft Certificate Authority, Active Directory, VMware, Syslog",
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
      company: "Robert Bosch (SEA) Pte Ltd, Singapore",
      title: "Product Manager",
      dateRange: "Oct 2014 - Aug 2022",
      bullets: [
        "Led development of internal VoIP monitoring system using Splunk to analyze call quality and operational metrics across multiple regions. Technology involved: Splunk Forwarder, SearchHead, Indexer, Deployment Manager, Power BI, MongoDB, MS SQL, Oracle, Rest API (Azure)",
        "Leading design/implementation phase for VoIP infrastructure deployment project for Asia region. Technology invovled: Skype for Business, Microsoft Teams, Avaya, Contact Center, AudioCodes SBC, Microosft Teams Room, Poly, Yealink, Jabra, Azure Graph API, Azure Sentinel, Mediapack, F5 Loadbalancer, Nagios",        
      ],
    },
    {
      company: "Multiple companies, Singapore",
      title: "Various roles",
      dateRange: "Aug 2007 - Oct 2014",
      bullets: [
        "Various roles in enterprise IT, VoIP, and network operations across multiple companies in Singapore, focusing on infrastructure deployment, system integration, and operational support.",
        "Technology invovled: Skype for Business, Nortel, Mitel, Avaya, Contact Center, AudioCodes, Poly, Loadbalancer, Nagios, Active Directory, IIS, LDAP, SMTP, ADFS, Aruba/Nokia/Watchguard Firewall, Cisco Routers/Switches, Trend Micro, Lotus Notes",        
      ],
    },
  ],
  education: [
    {
      school: "Epita School of Engineering and Computer Science, France",
      degree: "MSc in Artificial Intelligence System",
      dateRange: "2025 - present",
      achievements: [
        "",        
      ],
    },    
  ],
};
