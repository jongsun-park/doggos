import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { doggos } from "../../data/doggos";
import Logo from "../ui/Logo";

export const StyledNavLink = ({ to, text }) => (
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

const Header = () => (
  <HeaderContainer>
    <Logo />{" "}
    <NavContainer className="main-navigation">
      <ul>
        {doggos.map((doggo) => (
          <li key={doggo.name}>
            <StyledNavLink
              to={`doggos/${doggo.name}`}
              text={doggo.name.toUpperCase()}
            />
          </li>
        ))}
        <li>
          <StyledNavLink to={`contact`} text="Submit Your Doggo" />
        </li>
      </ul>
    </NavContainer>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
`;
const NavContainer = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;

export default Header;
