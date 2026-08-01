import type { Certificate } from "@/lib/types";

// Drop the matching badge image into public/certificates/ using these exact
// filenames (see CONTENT_GUIDE.md for details).
export const CERTIFICATES: Certificate[] = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    badge: "/certificates/aws-clf-c02.png",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    badge: "/certificates/azure-dp-900.png",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Generative AI Certified Professional",
    issuer: "Oracle",
    badge: "/certificates/oci-genai-2025.png",
  },
  {
    name: "SnowPro Associate: Platform Certification",
    issuer: "Snowflake",
    badge: "/certificates/snowpro-associate.png",
  },
];
