import type { ExperienceEntry } from "@/lib/types";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    arc: "Arc 01",
    title: "Platform Engineering & Automation Intern",
    organization: "Vendorpass (FIS Global)",
    location: "Remote, US",
    period: "May 2024 – Nov 2024",
    startDate: "2024-05",
    logo: "/logos/vendorpass.png",
    highlights: [
      "Automated Python and Bash ETL workflows, reducing manual mapping effort by 90% and improving pipeline reliability.",
      "Built a Streamlit dashboard integrated with Oracle REST APIs to automate reporting across 20K+ records while implementing CI/CD validation and post-clone automation that reduced environment downtime from 4+ hours to 1 hour.",
    ],
  },
  {
    arc: "Arc 02",
    title: "Graduate Research Assistant (Master's Project)",
    organization: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    period: "Jan 2025 – May 2025",
    startDate: "2025-01",
    logo: "/logos/njit.png",
    highlights: [
      "Built an end-to-end RNA-seq analysis pipeline in Python and PyTorch Geometric, automating data preprocessing, graph construction, model training, and feature selection across Cervical, Kidney, Alzheimer, and Lung cancer datasets; reduced feature space by >90% and improved classification accuracy by 5–10% over DESeq2 and EdgeR.",
      "Led a 3-member research team in collaboration with Brown University's Alpert Medical School to source and validate clinical RNA-seq datasets, resulting in a co-authored research paper demonstrating the pipeline's adaptability across diverse genomic datasets.",
    ],
  },
  {
    arc: "Arc 03",
    current: true,
    title: "Data Engineer",
    organization: "Morgan Stanley",
    location: "New York, NY",
    period: "Dec 2025 – Present",
    startDate: "2025-12",
    logo: "/logos/morgan-stanley.png",
    highlights: [
      "Designed and automated production ETL pipelines integrating data from 7+ enterprise APIs (Jira, Rally, OpenPages, etc.), processing ~35K records daily through scheduled AutoSys workflows, reducing pipeline failures by 30% and improving data reliability, resiliency, and quality through validation, structured logging, and fault-tolerant error handling.",
      "Built Agentic AI workflows leveraging enterprise GPT services to automate classification of 100+ monthly operational risk records — identifying cloud providers, cloud services, business impacts, and AI-related issues — with human-in-the-loop validation for audit readiness.",
      "Developed internal AI agents for Jira issue classification and automated pull request reviews, flagging security risks, coding standard violations, exposed secrets, and performance concerns before deployment.",
      "Automated CI/CD by configuring and maintaining 15 Jenkins pipelines and deployment workflows, while building operational Power BI dashboards and database fallback strategies over 2M+ records to improve monitoring and platform reliability.",
    ],
  },
];
