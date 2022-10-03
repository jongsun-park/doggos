import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => (
  <Link to={"/"}>
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
`;

export default Logo;
