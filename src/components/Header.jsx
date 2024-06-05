import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import HederSearchForm from "./HeaderSearchForm";

const Container = styled.div`
  position: relative;
  z-index: 4;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "SF Compact Display", sans-serif;
  font-size: 20px;
  align-items: center;

  @media ${(props) => props.theme.media.phone} {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 150px;

  @media ${(props) => props.theme.media.phone} {
    width: 0px;
  }
`;

const Nav = styled.nav`
  padding: 20px;
  transition: 0.5s;

  @media ${(props) => props.theme.media.phone} {
    position: absolute;
    top: -15px;
    left: 0;
    flex-direction: column;
    background-color: black;
    transform: translateX(-100%);
    min-width: 100vw;
    min-height: 100vh;
    margin: 0px -30px;
    z-index: 5;

    padding: 50px;
  }

  &.open {
    transform: translateX(0);
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1280px) {
    gap: 20px;
  }

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
  }
  &.open {
    justify-content: center;
  }
`;

const Li = styled.li`
  opacity: 0.8;

  @media (max-width: 1280px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 16px;

    @media ${(props) => props.theme.media.phone} {
      text-align: right;
    }
  }
`;

const BurgerIcon = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  width: 30px;
  height: 3px;
  background-color: ${(props) => props.color || props.theme.colors.primary};
  margin-top: 20px;
  &.open {
    height: 0;
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }

  &:before,
  &:after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.color || props.theme.colors.primary};
    position: absolute;
    transition: 0.4s;
  }

  &:before {
    transform: translateY(-8px);
  }

  &:after {
    transform: translateY(8px);
  }
  @media ${(props) => props.theme.media.phone} {
    display: block;
  }
`;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/movies/", label: "Movies" },
  { to: "/series/", label: "Series" },
  { to: "/trending/", label: "Top 250" },
  { to: "/categories/", label: "Categories" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <Container>
      <BurgerIcon onClick={toggleMenu} className={isMenuOpen ? "open" : ""} />
      <Wrapper>
        <Link to={"/"}>
          <Logo src={logo}></Logo>
        </Link>
        <Nav className={isMenuOpen ? "open" : ""}>
          <Ul className={isMenuOpen ? "open" : ""}>
            {navLinks.map((link) => (
              <Li key={link.to}>
                <NavLink
                  onClick={isMenuOpen ? toggleMenu : null}
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? "#9f0013" : "inherit",
                  })}
                >
                  {link.label}
                </NavLink>
              </Li>
            ))}
          </Ul>
        </Nav>
        <HederSearchForm />
      </Wrapper>
    </Container>
  );
};

export default Header;
