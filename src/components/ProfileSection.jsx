import styled from "styled-components";
import { colors } from "../library/colors";
const ListContainer = styled.ul`
  margin: 0 0 3rem 0;
  list-style: none;

  @media (min-width: 768px) {
    ${({ hideOnDesktop }) => hideOnDesktop && "display: none;"}
  }
  @media (max-width: 768px) {
    ${({ hideOnSmall }) => hideOnSmall && "display: none;"}
    @media print {
      display: block;
    }
  }
`;
const ListItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const ListTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;
const GhostTitle = styled.span`
  color: ${colors.ghostText};
`;
const IconContainer = styled.div`
  margin: 0 0.5rem 0 0;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${colors.white} !important;
`;
const ProfileSection = ({ name, list, hideOnSmall, hideOnDesktop }) => {
  return (
    <ListContainer hideOnSmall={hideOnSmall} hideOnDesktop={hideOnDesktop}>
      <ListItem>{name && <ListTitle>{name}</ListTitle>}</ListItem>
      {list.map(({ title, ghostTitle, icon: Icon, href }) => {
        const titleComplete = `${title}${ghostTitle ? " " : ""} `;
        return (
          <ListItem>
            {Icon && (
              <IconContainer>
                <Icon size={20} />
              </IconContainer>
            )}
            {href ? <Link href={href}>{titleComplete}</Link> : titleComplete}
            <GhostTitle> {ghostTitle ? ghostTitle : ""}</GhostTitle>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default ProfileSection;
