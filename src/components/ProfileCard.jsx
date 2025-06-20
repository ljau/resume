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
    {/* <Image src={image} alt="Profile image" /> */}
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Container>
);

export const MainContainer = styled.main`
  font-family: "Roboto", sans-serif;
  color: ${colors.strongGray};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundGray};
  text-align: justify;
  padding: 0 0 40px 0;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
  @media print {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const InfoSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  margin-bottom: 24px;
  @media (min-width: 768px) {
    padding: 60px;
    width: 700px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background-color: ${colors.strongBlue};
  border: none;
  margin: 40px 0 0 0;
  height: 48px;
  width: 160px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${colors.blue};
  }
  @media print {
    display: none;
  }
`;

export default ProfileCard;
