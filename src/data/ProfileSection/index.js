import { ContactData } from "./ContactData";
import { FrameworksTools } from "./FrameworksTools";
import { Languges } from "./Languages";
import { Profile } from "./Profile";
import { SoftSkills } from "./SoftSkills";

const ProfileSectionData = [
  { ...Profile },
  {
    ...ContactData,
    data: {
      ...ContactData.data,
      hideOnSmall: true,
    },
  },
  {
    ...SoftSkills,
    data: {
      ...SoftSkills.data,
      hideOnSmall: true,
    },
  },
  {
    ...Languges,
    data: {
      ...Languges.data,
      hideOnSmall: true,
    },
  },
  {
    ...FrameworksTools,
    data: {
      ...FrameworksTools.data,
      hideOnSmall: true,
    },
  },
];

export default ProfileSectionData;
