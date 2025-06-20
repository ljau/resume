import ExperienceItem from "./ExperienceItem";
import Section from "./Section";
import { Text } from "./styled";

const MainSection = ({ title, icon, description, list }) => {
  return (
    <Section title={title} icon={icon}>
      <div style={{ marginBottom: description ? 24 : 0 }}>
        {description && <Text>{description}</Text>}
      </div>
      {list && list.map((data, idx) => <ExperienceItem key={idx} {...data} />)}
    </Section>
  );
};
export default MainSection;
