import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/styles";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Logo = () => (
  <Link to={"/"} onClick={scrollToTop}>
    <LogoContainer>DOGGOS</LogoContainer>
  </Link>
);

const LogoContainer = styled.div`
  font-weight: bold;
  border: 3px solid;
  padding: 8px 14px;
  border-radius: 4px;
  line-height: 1rem;
  font-size: 1rem;
  display: inline-block;
  cursor: pointer;
  transition: all ease-out 200ms;

  &:hover {
    color: ${colors.gray[2]};
    background-color: ${colors.gray[9]};
    border: 3px solid ${colors.gray[9]};
  }
`;

export default Logo;
