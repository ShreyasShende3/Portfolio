import type { SkillBranch } from "@/lib/types";

export const SKILL_BRANCHES: SkillBranch[] = [
  {
    id: "data-cloud",
    label: "Data Engineering & Cloud",
    shortLabel: "Data & Cloud",
    tools: [
      "Airflow",
      "dbt",
      "Docker",
      "Databricks",
      "AWS (S3, Glue, Athena, Redshift)",
      "BigQuery",
      "Star Schema",
      "Snowflake",
    ],
    featured: ["Airflow", "AWS", "Databricks"],
  },
  {
    id: "programming-sql",
    label: "Programming & SQL",
    shortLabel: "Programming",
    tools: [
      "Python (Pandas, NumPy, PySpark)",
      "SQL (MySQL, PostgreSQL)",
      "Window Functions & CTEs",
      "Matplotlib / Seaborn",
    ],
    featured: ["Python", "SQL", "PySpark"],
  },
  {
    id: "analytics-bi",
    label: "Analytics & BI",
    shortLabel: "Analytics & BI",
    tools: [
      "Power BI (DAX)",
      "Tableau",
      "Excel / Sheets (Pivot Tables, Power Query)",
      "A/B Testing",
      "Hypothesis & Regression Testing",
    ],
    featured: ["Power BI", "Tableau", "A/B Testing"],
  },
  {
    id: "machine-learning",
    label: "Machine Learning (Applied)",
    shortLabel: "Machine Learning",
    tools: ["Scikit-learn", "TensorFlow", "PyTorch", "Time-Series Analysis", "XGBoost"],
    featured: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    id: "devops-collab",
    label: "Collaboration & DevOps",
    shortLabel: "DevOps",
    tools: ["Git / GitHub", "CI/CD", "Linux", "CRON", "Confluence", "JIRA", "FastAPI / Flask"],
    featured: ["Git / GitHub", "CI/CD", "JIRA"],
  },
];
