import type { ResumeData } from "@/lib/types";
import midjourneyAvatar from "@/images/midjourney_avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Sergey Yakushevich",
  initials: "SY",
  location: "Warsaw, Poland",
  locationLink: "https://www.google.com/maps/place/Warsaw",
  about: "Software Engineer with 7 years of experience building scalable, reliable applications.",
  summary: (
    <>
      Senior Software Engineer with 9 years of experience designing and building
      scalable backend systems and full‑stack web applications. Specialized in Ruby
      on Rails with deep expertise in PostgreSQL, Redis, Sidekiq, and distributed
      message brokers (Kafka, RabbitMQ). Skilled at architecting secure APIs
      (REST/GraphQL), optimizing performance under high‑traffic loads, and leading
      cloud deployments on AWS. Proven track record delivering production‑ready
      software across fintech, e‑commerce, and enterprise domains. Collaborative
      engineer who mentors junior developers and leverages modern JavaScript
      frameworks (React, Next.js) to deliver impactful end‑to‑end solutions.
    </>
  ),
  avatarUrl: midjourneyAvatar,
  personalWebsiteUrl: "https://syakushevich.github.io/portfolio",
  contact: {
    email: "sergeyayya@gmail.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/syakushevich",
        icon: "github",
      },
      {
        name: "Portfolio",
        url: "https://syakushevich.github.io/portfolio",
        icon: "globe",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sergey-yakushevich-688a4b179/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Belarusian State University",
      degree: "Bachelor of Science in Computer Science",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Regate",
      link: "https://regate.com",
      badges: [
        "Ruby on Rails",
        "React",
        "PostgreSQL",
        "Kafka",
        "Docker",
        "AWS RDS",
        "ECS",
        "CI/CD",
        "Terraform",
      ],
      title: "Senior Ruby on Rails Engineer",
      start: "Nov 2022",
      end: "May 2025",
      description: [
        "Introduced a Service Layer pattern to simplify model callbacks and improve maintainability.",
        "Integrated multiple payment and banking APIs, automating accounting processes for a fintech startup.",
        "Enhanced test coverage with RSpec and reduced error rates using robust monitoring with CloudWatch.",
        "Added CI/CD automation to spawn new AWS testing environments for each Pull Request, improving workflow and QA efficiency.",
      ],
    },
    {
      company: "Aristek Systems",
      link: "https://aristeksystems.com",
      badges: [
        "Ruby on Rails",
        "React",
        "PostgreSQL",
        "Docker",
        "AWS RDS",
        "ECS",
        "Lambda",
        "CI/CD",
      ],
      title: "Software Engineer",
      start: "Jul 2020",
      end: "Oct 2022",
      description: [
        "Refactored and merged codebases, enabling CI/CD automation and speeding deployments by 50%.",
        "Scaled a new e‑commerce platform to increase market reach.",
        "Containerized services with Docker and deployed on AWS ECS to improve scalability.",
      ],
    },
    {
      company: "iTransition",
      link: "https://itransition.com",
      badges: [
        "Ruby on Rails",
        "Elasticsearch",
        "GraphQL",
        "MySQL",
        "Docker",
        "Kafka",
        "AWS ECS",
        "CI/CD",
      ],
      title: "Software Engineer",
      start: "Jan 2016",
      end: "Jun 2020",
      description: [
        "Migrated primary DB from MySQL to Elasticsearch, boosting search performance by 90% for 50M+ users.",
        "Implemented Kafka to improve communication between microservices.",
        "Developed GraphQL endpoints and optimized test pipelines 5x, reducing release cycles.",
      ],
    },
  ],
  skills: [
    "Ruby",
    "Ruby on Rails",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "Elasticsearch",
    "Redis",
    "Sidekiq",
    "RabbitMQ",
    "Kafka",
    "AWS (EC2, RDS, S3, Lambda)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD pipelines (GitHub Actions)",
    "RSpec",
    "Minitest",
    "Cypress",
    "Git",
    "Agile/Scrum",
    "API Design (REST & GraphQL)",
    "Authentication/Authorization (JWT, OAuth2)",
    "Event-Driven Systems",
    "Microservices",
  ],
  projects: [
    {
      title: "Regate",
      techStack: [
        "Ruby on Rails",
        "React",
        "PostgreSQL",
        "Kafka",
        "Docker",
        "AWS RDS",
        "ECS",
        "CI/CD",
        "Terraform",
      ],
      description:
        "Fintech platform. Built scalable Rails services, integrated banking APIs, added CI/CD automation to spin up AWS test environments for PRs.",
      link: {
        label: "regate.com",
        href: "https://regate.com",
      },
    },
    {
      title: "Aristek Systems",
      techStack: [
        "Ruby on Rails",
        "React",
        "PostgreSQL",
        "Docker",
        "AWS RDS",
        "ECS",
        "Lambda",
        "CI/CD",
      ],
      description:
        "E-commerce platform. Scaled services, migrated to Dockerized microservices on AWS ECS, and improved operational efficiency with CI/CD pipelines.",
      link: {
        label: "aristeksystems.com",
        href: "https://aristeksystems.com",
      },
    },
    {
      title: "iTransition",
      techStack: [
        "Ruby on Rails",
        "Elasticsearch",
        "GraphQL",
        "MySQL",
        "Docker",
        "Kafka",
        "AWS ECS",
        "CI/CD",
      ],
      description:
        "Enterprise-scale systems. Migrated DB to Elasticsearch, integrated Kafka for microservices, added GraphQL endpoints, and optimized CI tests 5x faster.",
      link: {
        label: "itransition.com",
        href: "https://itransition.com",
      },
    },
  ],
} as const;