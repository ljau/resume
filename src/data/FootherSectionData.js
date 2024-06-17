import { ContactData } from "./ProfileSection/ContactData";
import { FrameworksTools } from "./ProfileSection/FrameworksTools";
import { Languges } from "./ProfileSection/Languages";
import { SoftSkills } from "./ProfileSection/SoftSkills";

const FootherSectionData = [
  {
    ...SoftSkills,
    data: {
      ...SoftSkills.data,
      hideOnDesktop: true,
    },
  },
  {
    ...FrameworksTools,
    data: {
      ...FrameworksTools.data,
      hideOnDesktop: true,
    },
  },
  {
    ...Languges,
    data: {
      ...Languges.data,
      hideOnDesktop: true,
    },
  },
  {
    ...ContactData,
    data: {
      ...ContactData.data,
      hideOnDesktop: true,
    },
  },
];

export default FootherSectionData;
