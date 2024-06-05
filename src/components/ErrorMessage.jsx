import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  text-align: center;
  margin: 50px;
`;
const Message = styled.h4`
  color: red;
  font-size: 28px;
`;
const Img = styled.img`
  width: 400px;
`;

const ErrorMessage = ({text}) => {
  return (
    <Wrapper>
      <Img src="/src/assets/error.png"></Img>
      <Message> {text || "Oops, something went wrong"}</Message>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorMessage;
