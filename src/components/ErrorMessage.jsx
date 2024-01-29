import styled from "styled-components";
const Wrapper = styled.div`
text-align: center;
`;
const Message = styled.h4`
color: red;
font-size: 28px;
`;
const Img = styled.img`
width: 400px`;

const ErrorMessage = () => {
  return (
    <Wrapper>
      <Img src="/src/assets/error.png"></Img>
      <Message>Oops, something went wrong.</Message>
    </Wrapper>
  );
};

export default ErrorMessage;
