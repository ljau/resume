import styled from "styled-components";
import { colors } from "../library/colors";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.strongBlue};
`;
const IconContainer = styled.div`
  display: flex;
  margin: 0 1rem 0 0;
`;
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
`;
const MainContainer = styled.div`
  max-width: 100%;
  padding: 30px;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
const Section = ({ children, title, icon: Icon }) => {
  return (
    <MainContainer>
      <TitleContainer>
        {Icon && (
          <IconContainer>
            <Icon size={32} rotation={90} />
          </IconContainer>
        )}
        <Title>{`  ${title}`}</Title>
      </TitleContainer>
      {children}
    </MainContainer>
  );
};

export default Section;
