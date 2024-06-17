import styled from "styled-components";
import { colors } from "../library/colors";

export const MainContainer = styled.main`
  font-family: "Roboto", sans-serif;
  color: ${colors.strongGray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundGray};
  text-align: justify;
  padding: 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  @media print {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const InfoSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  @media (min-width: 768px) {
    padding: 60px;
    width: 700px;
  }
`;

export const SelectSection = styled.div`
  background-color: ${colors.blue};
  width: 100%;
  @media (min-width: 768px) {
    width: 300px;
    ${({ hideOnDesktop }) => hideOnDesktop && "display: none;"}
  }
`;
export const FooterSection = styled.div`
  background-color: ${colors.blue};
  width: 100%;
  @media print {
    display: none;
  }
  @media (min-width: 768px) {
    width: 300px;
    ${({ hideOnDesktop }) => hideOnDesktop && "display: none;"}
  }
`;
export const Text = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  background-color: ${colors.blue};
  border: none;
  margin: 40px;
  height: 40px;
  width: 100px;
  font-size: 1.5rem;
  border-radius: 8px;
  color: white; 
  &:hover{
    cursor: pointer;
  }
  @media print {
    display: none;
  }
`;
