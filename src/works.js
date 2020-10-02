import BackgroundGradient1 from "./Assets/Background/background-gradient.png";
import BackgroundGradient2 from "./Assets/Background/background-gradient-2.png";
import BackgroundGradient3 from "./Assets/Background/background-gradient-3.png";
import BackgroundGradient4 from "./Assets/Background/background-gradient-4.png";
import ThumbPrismagram from "./Assets/Thumb/thumb-prismagram.mov";

export const mainWorks = [
  {
    id: "prismagram",
    type: "web",
    project: "Prismagram",
    background: BackgroundGradient1,
    thumb: ThumbPrismagram,
    category: "Web / Develop",
    caption: "Instaclone (GraphQL + Hooks)",
    meta: ["July 2020 (5 weeks)", "Develop"],
    tool: ["React", "GraphQL", "Express", "Prisma"],
    page: "http://prismagram.kingsky32.co.kr/",
    github: "https://github.com/kingsky32/prismagram"
  },
  {
    id: "facebook",
    type: "web",
    project: "Facebook",
    background: BackgroundGradient2,
    thumb: ThumbPrismagram,
    category: "Web / Develop",
    caption: "Facebook clone with Express + Prisma + React",
    meta: ["September 2020 (3 weeks)", "Develop"],
    tool: ["React", "GraphQL", "Express", "Prisma"],
    page: "http://facebook.kingsky32.co.kr/",
    github: "https://github.com/kingsky32/facebook"
  },
  {
    id: "nwitter",
    type: "web",
    project: "Nwitter",
    background: BackgroundGradient3,
    thumb: ThumbPrismagram,
    category: "Web / Develop",
    caption: "Cloning Twitter with React and Firebase",
    meta: ["September 2020 (3 weeks)", "Develop"],
    tool: ["React", "Firebase"],
    page: "http://nwitter.kingsky32.co.kr/",
    github: "https://github.com/kingsky32/nwitter"
  },
  {
    id: "weather",
    type: "app",
    project: "Weather",
    background: BackgroundGradient4,
    thumb: ThumbPrismagram,
    category: "App / Develop",
    caption: "React Native by Building a Apple Weather App",
    meta: ["September 2020 (3 weeks)", "Develop"],
    tool: ["React-Native"],
    github: "https://github.com/kingsky32/weather-app"
  }
];
