import ExperienceItem from "./ExperienceItem";
import Section from "./Section";
import { Text } from "./styled";

const MainSection = ({ title, icon, description, list }) => {
  return (
    <Section title={title} icon={icon}>
      {description && <Text>{description}</Text>}
      {list && list.map((data) => <ExperienceItem {...data} />)}
    </Section>
  );
};
export default MainSection;
