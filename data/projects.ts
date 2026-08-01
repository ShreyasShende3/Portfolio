import type { ProjectEntry } from "@/lib/types";

export const PROJECTS: ProjectEntry[] = [
  {
    name: "Ad Analytics Pipeline",
    period: "Jul 2025 – Aug 2025",
    description:
      "Containerized Python + Airflow pipeline to ingest, validate, and orchestrate raw ad campaign data into BigQuery. Databricks (PySpark) transformations clean and aggregate campaign KPIs (CTR, CPC, ROI), delivered through an interactive Power BI dashboard.",
    flow: ["Ad Campaign Data", "Airflow (Docker)", "BigQuery", "Databricks / PySpark", "Power BI"],
    githubUrl: "https://github.com/ShreyasShende3/ad_analytics",
  },
  {
    name: "Spotify Listener Analytics Dashboard",
    period: "May 2025 – Jun 2025",
    description:
      "Star-schema data model transforming nested JSON into Parquet for scalable analytics with Spark SQL. Interactive Power BI dashboard with DAX-based KPIs for engagement, churn, and revenue trends — cut reporting turnaround by 70%.",
    flow: ["Nested JSON", "Python ETL", "Parquet (Star Schema)", "Spark SQL", "Power BI (DAX)"],
    githubUrl: "https://github.com/ShreyasShende3/Spotify-Data-Analysis",
  },
  {
    name: "Reddit Data Ingestion & Analytics Pipeline",
    period: "Mar 2025 – Apr 2025",
    description:
      "Scalable ETL pipeline using Airflow, Docker, and Celery to ingest Reddit data via APIs into Amazon S3, orchestrating transformations with AWS Glue and Athena. Automated ingestion of 100+ daily posts into Redshift for SQL-based trend and sentiment analytics.",
    flow: ["Reddit API", "Airflow + Celery", "Amazon S3", "AWS Glue / Athena", "Amazon Redshift"],
    githubUrl: "https://github.com/ShreyasShende3/reddit-data-engineering",
  },
  {
    name: "NFL Management System",
    description:
      "Full-stack app (React frontend, Express backend) with a Python/BeautifulSoup4 scraper gathering three seasons (2021–2023) of NFL data — players, coaches, teams, finances, and stats — stored in MySQL.",
    flow: ["NFL Web Pages", "BeautifulSoup4 Scraper", "MySQL", "Express API", "React Frontend"],
    githubUrl: "https://github.com/ShreyasShende3/NFL_Management_System",
  },
];

export const GITHUB_PROFILE_URL = "https://github.com/ShreyasShende3";
