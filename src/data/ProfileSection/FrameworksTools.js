import { FaNode, FaReact } from "react-icons/fa";
import {
  SiFramer,
  SiStyledcomponents,
  SiCsharp,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

import ProfileSection from "../../components/ProfileSection";

export const FrameworksTools = {
  component: ProfileSection,
  data: {
    name: "FRAMEWORKS & TOOLS",
    list: [
      { title: "React.js", icon: FaReact },
      { title: "HTML", icon: SiHtml5 },
      { title: "CSS", icon: SiCss3 },
      { title: "styled-components", icon: SiStyledcomponents },
      { title: "Framer Motion", icon: SiFramer },
      { title: "React Native", icon: FaReact },
      { title: "Node.js", icon: FaNode },
      { title: "C#", icon: SiCsharp },
    ],
  },
};
