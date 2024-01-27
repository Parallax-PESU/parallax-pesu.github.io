import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://parallax-pesu.github.io/",
  author: "Abhinav Chennubhotla",
  desc: "Parallax is a club focused on game development, and AR/VR at PES University ECC.",
  title: "Parallax",
  ogImage: "parallax-logo.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Instagram",
    href: "https://instagram.com/parallax_pesu",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/fvHVJWzSm",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/parallax_pesu",
    linkTitle: `${SITE.title} on Linktr.ee`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:parallax@pes.edu",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/parallax-pesu",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/Parallax-PESU",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Twitter",
    href: "",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
