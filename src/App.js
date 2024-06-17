import {
  InfoSection,
  MainContainer,
  SelectSection,
  SubContainer,
  FooterSection,
  Button,
} from "./components/styled";
import {
  MainSectionData,
  ProfileSectionData,
  FootherSectionData,
} from "./data";

const App = () => {
  const handleClick = () => {
    window.print();
    return false;
  };
  return (
    <MainContainer>
      <SubContainer id="ifmcontentstoprint">
        <FooterSection hideOnDesktop>
          {FootherSectionData.map(({ component: Component, data }, index) => {
            return (
              <Component key={`foother-section-item-${index}`} {...data} />
            );
          })}
        </FooterSection>
        <InfoSection>
          {MainSectionData.map(({ component: Component, data }, index) => {
            return <Component key={`main-section-item-${index}`} {...data} />;
          })}
        </InfoSection>
        <SelectSection>
          {ProfileSectionData.map(({ component: Component, data }, index) => {
            return (
              <Component key={`profile-section-item-${index}`} {...data} />
            );
          })}
        </SelectSection>
      </SubContainer>
      <Button onClick={handleClick}> Print</Button>
    </MainContainer>
  );
};
export default App;
