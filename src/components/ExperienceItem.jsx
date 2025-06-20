import { useState } from "react";
import styled from "styled-components";
import { colors } from "../library/colors";
import { Text } from "./styled";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ExperienceContainer = styled.div`
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
`;

const Position = styled(Text)`
  margin: 0 0 8px 0;
  font-size: 14px;
`;

const Time = styled(Text)`
  line-height: 1.2;
  font-size: 14px;
  color: ${colors.ghost};
  text-align: right;
`;

const Enterprise = styled(Text)`
  line-height: 1.2;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

const Technologies = styled(Text)`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: ${colors.ghost};
  font-weight: bold;
`;

const Description = styled(Text)``;

const ListItem = styled(Text)``;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LinkDescription = styled(Text)`
  color: ${colors.blue};
  text-decoration: underline;
  display: flex;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
  @media print {
    display: none;
  }
`;

const OpenCloseButton = ({ open, setOpen }) => {
  return (
    <LinkDescription onClick={() => setOpen(!open)}>
      {open ? "Close description" : "Full description"}
      {open ? <TiArrowSortedUp size={18} /> : <TiArrowSortedDown size={18} />}
    </LinkDescription>
  );
};

const ExperienceItem = ({
  position,
  enterprise,
  technologies,
  time,
  description,
  tasks,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ExperienceContainer>
      <TopContainer>
        <Enterprise>{enterprise}</Enterprise>
        <Time>{time}</Time>
      </TopContainer>
      <Position>{position}</Position>
      <Technologies>{technologies}</Technologies>
      <Description>{description}</Description>
      {open && (
        <ul>
          {tasks.map((item, idx) => (
            <li key={idx}>
              <ListItem>{item}</ListItem>
            </li>
          ))}
        </ul>
      )}
      <OpenCloseButton open={open} setOpen={setOpen} />
    </ExperienceContainer>
  );
};
export default ExperienceItem;
