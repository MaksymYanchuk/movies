import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  font-family: "SF Compact Display", sans-serif;
  font-size: 2rem;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 15vmax;
  min-width: 200px;
`;

const Nav = styled.nav`
  margin: 0 15px;
`;
const Ul = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Li = styled.li`
  opacity: 0.8;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
`;
const Input = styled.input`
  width: 400px;
  height: 60px;
  border-radius: 50px;
  background-color: transparent;
  border: solid rgb(255, 255, 255, 0.2) 1px;
  outline: none;
  background-size: auto 90%;
  color: ${props => props.color || props.theme.colors.primary 
   };
  padding: 20px;
`;

const Button = styled.button`
  border: none;
  background: transparent url(/src/assets/search.svg) no-repeat center;
  background-size: contain;
  position: relative;
  right: 75px;
  top: 10px;
  height: 30px;
  &:focus {
    outline: none;
}
`;

const handleSubmit = () => {};

const Header = () => {
  return (
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
        <Input type="input"></Input>
        <Button type="submit" />
      </Form>
    </Wrapper>
  );
};

export default Header;
