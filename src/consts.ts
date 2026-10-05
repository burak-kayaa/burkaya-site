import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Burak Kaya",
  DESCRIPTION:
    "Backend engineer building secure, scalable SaaS systems in Java/Spring Boot and Python/FastAPI. Maker of Canya, a local-first desktop app for technical diagrams, and Tidemark, which turns a workday into worklogs.",
  AUTHOR: "Burak Kaya",
}

// Work Page
export const WORK: Page = {
  TITLE: "CV",
  DESCRIPTION: "Where I have worked, what I studied, and what I work with.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Canya, Tidemark, and the things I have built at work, at university, and at 42.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "CV",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "dev@burkaya.com",
    HREF: "mailto:dev@burkaya.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "burak-kayaa",
    HREF: "https://github.com/burak-kayaa",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "burak-kaya-bk19",
    HREF: "https://www.linkedin.com/in/burak-kaya-bk19",
  },
]
