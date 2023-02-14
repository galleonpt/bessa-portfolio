import design from "../../assets/design.png";
import code from "../../assets/code.png";
import consulting from "../../assets/consulting.png";
import { IServiceCardConfig } from "./types";

export const SERVICES_CARDS_CONFIG: IServiceCardConfig[] = [
  {
    title: "Beautiful Design",
    image: design,
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    subtitle: "Design tools I use",
    tools: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Premiere" }],
  },
  {
    title: "Code your dream project",
    image: code,
    description:
      "Do you have an idea for your next great website? Lets make it a reality.",
    subtitle: "Programming Languages I use",
    tools: [
      { name: "Java" },
      { name: "C/C++" },
      { name: ".NET" },
      { name: "HTML/CSS/JS" },
    ],
  },
  {
    title: "Consulting",
    image: consulting,
    description:
      "Are you interested in feedback for your current project? I can give you tips and tricks to level it up.",
    subtitle: "Reach me via",
    tools: [{ name: "All my links", contact: "https://allmylinks.com/bessa" }],
  },
];
