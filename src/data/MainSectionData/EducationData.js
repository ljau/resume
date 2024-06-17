import { FaGraduationCap } from "react-icons/fa";
import MainSection from "../../components/MainSection";

export const EducationData = {
  component: MainSection,
  data: {
    title: "EDUCATION",
    icon: FaGraduationCap,
    list: [
      {
        position: "React Native Developer",
        enterprise: "Bright Coders Academy (Magmalabs)",
        time: "2021",
        description: "Full course for React Native Developer.",
        tasks: [
          "Development of full-stack applications with React Native and firebase.",
          "Good practice writing JavaScript code (SOLID).",
          "Usage of tools like Git, GitHub, Code Climate, Slack",
        ],
      },
      {
        position: "Bachelor Degree",
        enterprise: "Universidad de Colima",
        time: "2015 - 2019",
        description:
          "Bachelor degree in Telematics Engineering got by outstanding performance",
        tasks: [
          "Publishment of an article called “A Game-Based Service to Mitigate the Risk of Inundations Caused by Solid Waste Accumulation”",
          "Development of severals projects with differents technologies.",
          "Got technical certificate of design and development of ubiquitous games.",
        ],
      },
    ],
  },
};
