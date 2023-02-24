import loginTemplate from "../../assets/loginTemplate.png";
import onlyFeiras from "../../assets/onlyFeiras.png";
import carGame from "../../assets/carGame.png";
import pepCompanies from "../../assets/pep.png";
import { IProjectsConfig } from "./types";

export const PROJECTS_CONFIG: IProjectsConfig[] = [
  {
    projectUrl: "https://github.com/assebc/login-template",
    image: loginTemplate,
  },
  {
    projectUrl:
      "https://github.com/assebc/uminho-lei/tree/main/3rd_year/LI4%20(Informatic%20Labs%20IV)",
    image: onlyFeiras,
  },
  {
    projectUrl:
      "https://github.com/assebc/uminho-lei/tree/main/3rd_year/IA%20(Artificial%20Intelligense)/project",
    image: carGame,
  },
  {
    projectUrl: "https://github.com/assebc/pep-it-companies-app",
    image: pepCompanies,
  },
];
