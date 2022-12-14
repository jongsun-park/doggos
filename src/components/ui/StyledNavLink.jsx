import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/styles";

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
    background: ${colors.gray[8]};
    border-radius: 4px;
  }

  position: relative;

  &:not(.active)::after {
    content: "";
    position: absolute;
    transition: all ease-out 200ms;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.gray[8]};
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export default StyledNavLink;
