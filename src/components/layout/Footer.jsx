import styled from "styled-components";
import SocialLink from "../ui/SocialLink";

const Footer = () => (
  <FooterContainer>
    <div className="copyright">© 2022 Jongsun Park, All rights reserved.</div>
    <div className="footer-links">
      <SocialLink name="facebook" link="" />
      <SocialLink name="github" link="" />
      <SocialLink name="instagram" link="" />
      <SocialLink name="linkedin" link="" />
    </div>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  font-size: 0.8rem;
  padding: 1rem 1rem;
  background: #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer-links {
    display: flex;
  }
`;

export default Footer;
