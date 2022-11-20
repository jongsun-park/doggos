import { useEffect, useState } from "react";
import styled from "styled-components";
import { doggos } from "../../data/doggos";
import BurgerIcon from "../ui/BurgerIcon";
import Logo from "../ui/Logo";
import StyledNavLink from "../ui/StyledNavLink";

const LinkList = ({ doggos = [] }) => (
  <>
    {doggos &&
      doggos.map((doggo) => (
        <li key={doggo.name} className="primary-link">
          <StyledNavLink
            to={`doggos/${doggo.name}`}
            text={doggo.name.toUpperCase()}
          />
          <ul className="secondary-link">
            <li>
              <a
                href={`https://www.google.com/search?q=${doggo.breed}`}
                target="_blank"
                rel="noreferrer"
              >
                Google
              </a>
            </li>
            <li>
              <a
                href={`https://en.wikipedia.org/wiki/${doggo.breed}`}
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>
            </li>
            <li>
              <a
                href={`https://www.youtube.com/results?search_query=${doggo.breed}`}
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
        </li>
      ))}
    <li>
      <StyledNavLink to={`about`} text="About Me" />
    </li>
    <li>
      <StyledNavLink to={`contact`} text="Submit Your Doggo" />
    </li>
  </>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  const onOpenMenu = () => {
    setOpen((prev) => !prev);
  };

  // If the mobile menu container link click,
  // close the menu container
  useEffect(() => {
    const links = document.querySelectorAll(".mobile-open-menu_list li a");
    links.forEach((link) =>
      link.addEventListener("click", () => {
        onOpenMenu();
      })
    );
  }, []);

  // If window scroll more than 200 px
  // change the fixed state
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setFixed(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <HeaderContainer className={fixed ? "fixed" : ""}>
      <Logo />
      <NavContainer className="main-navigation">
        <ul className="nav-desktop">
          <LinkList doggos={doggos} />
        </ul>
        <div className="nav-mobile">
          <BurgerIcon
            className="mobile-open-menu_btn"
            active={open}
            setActive={onOpenMenu}
          />
          <ul className={`mobile-open-menu_list ${open ? "open" : "close"}`}>
            <LinkList doggos={doggos} />
            <BurgerIcon
              className="mobile-open-menu_btn"
              active={open}
              setActive={onOpenMenu}
            />
          </ul>
        </div>
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  transition: all ease-out 400ms;

  // fixed header when it scroll down
  &.fixed {
    position: fixed;
    top: 0;
    z-index: 5;
    background: white;
    width: 100%;
    padding: 0 1em;
    box-shadow: 0 0 2px 4px rgb(0 0 0 / 1%);
  }

  // desktop nav
  .nav-mobile {
    // init state - hidden
    display: none;

    .mobile-open-menu_list {
      position: fixed;
      margin: 0;
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: white;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease-out 300ms;

      li {
        margin-bottom: 0.3rem;
      }

      &.open {
        opacity: 1;

        & * {
          opacity: 1;
        }
      }

      &.close {
        opacity: 0;
        width: 100vw;
        height: 0;
        overflow: hidden;
        & * {
          opacity: 0;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .nav-desktop {
      display: none;
    }
    .nav-mobile {
      display: unset;
    }
  }

  // Hover to visible secondary links
  .primary-link {
    position: relative;

    .secondary-link {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      background: white;
      padding: 14px;
      margin-top: 20px;
      border: 2px solid black;
      border-radius: 4px;
      box-shadow: 0 10px 4px #00000033;
      transition: all ease-out 200ms;
      z-index: 10;

      li {
        & + li {
          margin-top: 5px;
        }

        a {
          position: relative;

          &::before {
            content: "";
            width: 0%;
            position: absolute;
            top: -4px;
            bottom: -4px;
            left: -4px;
            right: -4px;
            background-color: #00000011;
            transition: all ease-out 100ms;
          }

          &:hover::before {
            width: calc(100% + 8px);
          }
        }
      }
    }

    &:hover .secondary-link {
      opacity: 1;
      margin-top: 10px;
      visibility: visible;
    }
  }
`;
const NavContainer = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;

export default Header;
