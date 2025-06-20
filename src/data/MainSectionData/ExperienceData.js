import { MdWork } from "react-icons/md";
import MainSection from "../../components/MainSection";

export const ExperienceData = {
  component: MainSection,
  data: {
    title: "EXPERIENCE",
    icon: MdWork,
    list: [
      {
        position: "React Native Developer",
        enterprise: "Magma labs",
        technologies: "React Native, Next js, Express js, MySQL, Firebase",
        time: "Jan 2025 - Current",
        description:
          "Development of mobile applications using React Native, Next.js, Express.js, MySQL, Firebase. Brightcoders Bootcamp mentor.",
        tasks: [
          "Designed and implemented user-intiutive interfaces for mobile applications.",
          "Enhanced responsiveness and load times through progressive web application techniques.",
          "Ensured data integrity and security practices, especially for sensitive patient and laboratory information.",
        ],
      },
      {
        position: "Frontend Developer",
        enterprise: "NAIVE labs",
        technologies: "# - React js, Next js, Express js, React Native",
        time: "Jul 2024 - Dec 2024",
        description:
          "Development of applications for managing user, material, and appointment data in laboratory and hospital e, using React.js, Next.js, Express.js, and React Native. Integrated REST APIs for real-time data accuracy and accessibility.",
        tasks: [
          "Designed and implemented user-friendly interfaces tailored to medical and laboratory staff needs.",
          "Enhanced responsiveness and load times through progressive web application techniques.",
          "Ensured data integrity and security practices, especially for sensitive patient and laboratory information.",
        ],
      },
      {
        position: "System Monitor for Radio and Television",
        enterprise: "Instituto Nacional Electoral",
        technologies: "# - Radio, TV",
        time: "Jan 2024 - Jun 2024",
        description:
          "Conducted verification and implementation of operational policies for Radio and Television systems. Performed validation to ensure operational efficiency. Documented and reported incidents for timely resolution.",
        tasks: [
          "Ensured compliance with standards for broadcast policies and procedures.",
          "Identified system issues and created detailed incident reports.",
        ],
      },
      {
        position: "Frontend Developer",
        enterprise: "Tata Consultancy Services",
        technologies: "# - React js, Node js, Scrum",
        time: "Jan 2019 - Dec 2023",
        description:
          "Development and modeling web application for the banking services sector. Created reusable components for React applications, implemented node js and integrated REST APIs to provide real-time data. Also collaborated with cross-functional teams through Scrum sprints for efficient project delivery.",
        tasks: [
          "Designed modular components for scalability and consistency across banking service features.",
          "Consumption of REST Apis to feed applications.",
        ],
      },
      {
        position: "System Administrator",
        technologies: "# - Unix, Red Hat Enterprise Linux, Service Now",
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
