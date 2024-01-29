import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const Container = styled.div`
  position: relative;
  z-index: 4;
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

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 50px;
  background-color: transparent;
  border: solid rgb(255, 255, 255, 0.2) 1px;
  height: 39px;

  @media ${(props) => props.theme.media.phone} {
    align-self: flex-start;
  }
`;
const Input = styled.input`
  font-size: 16px;
  border: none;
  width: 250px;
  height: 39px;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.colors.primary};
  padding: 20px;

  @media (max-width: 1280px) {
    width: 200px;
    font-size: 14px;
  }

  @media (max-width: 900px) {
    width: 170px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent url(/src/assets/search.svg) no-repeat center;
  background-size: contain;
  align-self: center;
  height: 25px;
  &:focus {
    outline: none;
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

  const handleSubmit = () => {};

  return (
    <Container>
      <BurgerIcon onClick={toggleMenu} className={isMenuOpen ? "open" : ""} />
      <Wrapper>
        <Link to={"/"}>
          <Logo src={logo}></Logo>
        </Link>
        <Nav
          className={isMenuOpen ? "open" : ""}
          onClick={(e) => e.stopPropagation()}
        >
          <Ul className={isMenuOpen ? "open" : ""}>
            <Li>
              <NavLink
                onClick={isMenuOpen ? toggleMenu : null}
                to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
              >
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink
                onClick={isMenuOpen ? toggleMenu : null}
                to={"/movies"}
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
              >
                Movies
              </NavLink>
            </Li>
            <Li>
              <NavLink
                onClick={isMenuOpen ? toggleMenu : null}
                to={"/series"}
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
              >
                Series
              </NavLink>
            </Li>
            <Li>
              <NavLink
                onClick={isMenuOpen ? toggleMenu : null}
                to={"/trending"}
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
              >
                Trending
              </NavLink>
            </Li>
            <Li>
              <NavLink
                onClick={isMenuOpen ? toggleMenu : null}
                to={"/categories"}
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
              >
                Categories
              </NavLink>
            </Li>
          </Ul>
        </Nav>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Search Movies, Series..." type="input"></Input>
          <Button type="submit" />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Header;
