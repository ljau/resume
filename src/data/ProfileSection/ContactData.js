import { GrMail } from "react-icons/gr";
import { AiFillPhone } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ProfileSection from "../../components/ProfileSection";

export const ContactData = {
  name: "Contact",
  component: ProfileSection,
  data: {
    list: [
      {
        title: "ljau07@gmail.com",
        icon: GrMail,
        href: "mailto:ljau07@gmail.com",
      },
      {
        title: "3121203328",
        icon: AiFillPhone,
        href: false,
      },
      {
        title: "linkedin.com/in/ljau/",
        icon: FaLinkedin,
        href: "https://linkedin.com/in/ljau/",
      },
      {
        title: "github.com/ljau",
        icon: FaGithub,
        href: "https://github.com/ljau",
      },
    ],
  },
};
