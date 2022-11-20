import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = ({ to, text }) => (
  <NavLinkContainer
    to={to}
    className={({ isActive, isPending }) =>
      isActive ? "active" : isPending ? "pending" : ""
    }
  >
    {text}
  </NavLinkContainer>
);

const NavLinkContainer = styled(NavLink)`
  padding: 4px 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-out 300ms;
  &.active {
    color: white;
    background: #333;
    border-radius: 4px;
  }
`;

export default StyledNavLink;
