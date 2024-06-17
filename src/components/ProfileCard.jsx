import styled from "styled-components";
import { colors } from "../library/colors";

const Container = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: ${colors.blue};
  @media (min-width: 768px) {
    background-color: ${colors.strongBlue};
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
 
`;

const Name = styled.h1`
  font-size: 30px;
  font-weight: 900;
  margin: 8px 0;
  color: ${colors.white};
`;
const Position = styled.h3`
  font-size: 1.2rem;
  margin: 8px 0;
  color: ${colors.white};
`;
const ProfileCard = ({ image, name, position }) => (
  <Container>
    <Image src={image} alt="Profile image" />
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Container>
);

export default ProfileCard;
