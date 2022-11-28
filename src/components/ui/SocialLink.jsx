import styled from "styled-components";

import facebookIcon from "../../assets/images/icons/facebook.png";
import githubIcon from "../../assets/images/icons/github.png";
import instagramIcon from "../../assets/images/icons/instagram.png";
import linkedinIcon from "../../assets/images/icons/linkedin.png";

const SocialLink = ({ link = "#", name = "" }) => {
  if (link === "#" && name === "") return;

  let iconImage = "";
  if (name === "facebook") iconImage = facebookIcon;
  if (name === "github") iconImage = githubIcon;
  if (name === "instagram") iconImage = instagramIcon;
  if (name === "linkedin") iconImage = linkedinIcon;

  return (
    <LinkContainer href={link} target="_blank" rel="nofollow">
      <img src={iconImage} alt={`${name}-icon`} />
    </LinkContainer>
  );
};

const LinkContainer = styled.a`
  & + & {
    margin-left: 0.5rem;
  }

  display: inline-flex;

  img {
    max-width: 1.4rem;
  }
`;

export default SocialLink;
