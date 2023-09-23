import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  z-index: 20;
`;
const Wrapper = styled.div`
  display: flex;
  font-family: "SF Compact Display", sans-serif;
  font-size: 20px;
  align-items: center;
`;

const Logo = styled.img`
  width: 15vmax;
  min-width: 200px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 2.42%;
  padding-right: 20%;
`;
const Ul = styled.ul`
  display: inline-flex;
  gap: 30px;
  align-items: center;
`;

const Li = styled.li`
  opacity: 0.8;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 50px;
  background-color: transparent;
  border: solid rgb(255, 255, 255, 0.2) 1px;
  margin-right: 20px;
`;
const Input = styled.input`
  border: none;
  width: 250px;
  height: 39px;
  outline: none;
  background-size: auto 90%;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.colors.primary};
  padding: 20px;
`;

const Button = styled.button`
  border: none;
  background: transparent url(/src/assets/search.svg) no-repeat center;
  background-size: contain;
  align-self: center;
  height: 30px;
  &:focus {
    outline: none;
  }
`;

const handleSubmit = () => {};

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link to={"/"}>
          <Logo src={logo}></Logo>
        </Link>
        <Nav>
          <Ul>
            <Li>
              <NavLink
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
