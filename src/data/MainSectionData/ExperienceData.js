import { MdWork } from "react-icons/md";
import MainSection from "../../components/MainSection";

export const ExperienceData = {
  component: MainSection,
  data: {
    title: "EXPERIENCE",
    icon: MdWork,
    list: [
      {
        position: "System Monitoring for Radio and Television",
        enterprise: "Instituto Nacional Electoral, Colima",
        time: "Feb 2024 - Jun 2024",
        description:
          "Verification and application of operational policies for Radio and Television.",
        tasks: [
          "Debugging and system verification.",
          "Report of incidents related to system material.",
        ],
      },
      {
        position: "Front-end Web Developer",
        enterprise: "Freelance, Colima",
        time: "2023",
        description:
          "Development of web applications for small building enterprises, to manage providers, clients, materials, and delivery dates.",
        tasks: [
          "Development of progressive web applications using React.js.",
          "Development and design of user interface.",
        ],
      },
      {
        position: "Front-end Web Developer",
        enterprise:
          "Tata Consultancy Services, Zapopan Jalisco",
        time: "Sep 2022 - Sep 2023",
        description:
          "Development, creation, and modeling of components in React.js for a web application related to banking services.",
        tasks: [
          "Development of reusable components for react applications.",
          "Consumption of REST Apis to feed applications.",
        ],
      },
      {
        position: "System Administrator",
        enterprise:
          "Tata Consultancy Services, Zapopan Jalisco",
        time: "Jan 2019 - Sep 2022",
        description:
          "Administration of Unix operating systems on physical and virtual machines.",
        tasks: [
          "Configuration, monitoring and maintenance of physical and virtual machines.",
          "Use of web applications for monitoring alerts and management of servers and users information.",
        ],
      },
    ],
  },
};
