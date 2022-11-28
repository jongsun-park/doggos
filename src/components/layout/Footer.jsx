import styled from "styled-components";
import SocialLink from "../ui/SocialLink";

const Footer = () => (
  <FooterContainer>
    <div className="copyright">© 2022 Jongsun Park, All rights reserved.</div>
    <div className="footer-links">
      <SocialLink
        name="facebook"
        link="https://www.facebook.com/JongsunPark89"
      />
      <SocialLink name="github" link="https://github.com/jongsun-park" />
      <SocialLink
        name="instagram"
        link="https://www.instagram.com/parpar.design/"
      />
      <SocialLink
        name="linkedin"
        link="https://www.linkedin.com/in/jongsun-park/"
      />
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
