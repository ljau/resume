import { MdWork } from "react-icons/md";
import MainSection from "../../components/MainSection";

export const ExperienceData = {
  component: MainSection,
  data: {
    title: "EXPERIENCE",
    icon: MdWork,
    list: [
      {
        position: "Frontend Developer",
        enterprise: "NAIVE labs, Colima",
        technologies: "# - React js, Next js, Express js, React Native",
        time: "Jun 2024 - Temporary",
        description:
          "Development of applications for managing user, material, and appointment data in laboratory and hospital e, using React.js, Next.js, Express.js, and React Native. Integrated REST APIs for real-time data accuracy and accessibility.",
        tasks: [
          "Designed and implemented user-friendly interfaces tailored to medical and laboratory staff needs.",
          "Enhanced responsiveness and load times through progressive web application techniques.",
          "Ensured data integrity and security practices, especially for sensitive patient and laboratory information.",
        ],
      },
      {
        position: "System Monitoring for Radio and Television",
        enterprise: "Instituto Nacional Electoral, Colima",
        technologies: "# - Radio, TV",
        time: "Feb 2024 - Jun 2024",
        description:
          "Conducted verification and implementation of operational policies for Radio and Television systems. Performed validation to ensure operational efficiency. Documented and reported incidents for timely resolution.",
        tasks: [
          "Ensured compliance with standards for broadcast policies and procedures.",
          "Identified system issues and created detailed incident reports.",
        ],
      },
      {
        position: "Front-end Web Developer",
        enterprise: "Freelance, Colima",
        technologies: "# - React js, Node js, React Native, Firebase",
        time: "2023",
        description:
          "Development of web applications for small enterprises to manage providers, clients, materials, and delivery schedules. Created progressive web applications using React js and Node js, with a focus on user interface design and functionality.",
        tasks: [
          "Designed intuitive user interfaces to streamline project and material management.",
          "Developed features for managing client and provider databases efficiently.",
          "Implemented progressive web application standards for better accessibility and offline functionality.",
        ],
      },
      {
        position: "Front-end Web Developer",
        enterprise: "Tata Consultancy Services, Zapopan Jalisco",
        technologies: "# - React js, Node js, Scrum",
        time: "Sep 2022 - Sep 2023",
        description:
          "Development and modeling web application for the banking services sector. Created reusable components for React applications, implemented node js and integrated REST APIs to provide real-time data. Also collaborated with cross-functional teams through Scrum sprints for efficient project delivery.",
        tasks: [
          "Designed modular components for scalability and consistency across banking service features.",
          "Consumption of REST Apis to feed applications.",
        ],
      },
      {
        position: "System Administrator",
        enterprise: "Tata Consultancy Services, Zapopan Jalisco",
        technologies: "# - Unix, Red Hat Enterprise Linux, Service Now",
        time: "Jan 2019 - Sep 2022",
        description:
          "Administered Unix servers on both physical and virtual machines with Red Hat Enterprise operating systems. Configured, monitored, and maintained these machines, utilizing Service Now application for alert monitoring and server and user information management.",
        tasks: [
          "Performed system updates and patches to ensure optimal performance and security.",
          "Managed user permissions and access controls for secure system operations.",
          "Implemented monitoring tools to proactively identify and resolve system issues.",
        ],
      },
    ],
  },
};
