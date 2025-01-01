import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Kevin Carbeti's Blog",
  DESCRIPTION: "A Hype driven developer who likes discover new techno's",
  AUTHOR: "Kevin  Carbeti",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
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
    TEXT: "kevincarbeti@proton.me",
    HREF: "mailto:kevincarbeti@proton.me",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "CarbeDev",
    HREF: "https://github.com/CarbeDev"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Kevin Carbeti",
    HREF: "https://www.linkedin.com/in/kevincarbeti/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@0xCarbe",
    HREF: "https://x.com/0xCarbe",
  },
]

