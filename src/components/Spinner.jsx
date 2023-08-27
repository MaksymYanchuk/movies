import styled from "styled-components";

const DivWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: block;
  overflow: hidden;
  background: ${(props) => props.theme.colors.background};
  margin: 0 auto;
`;
const DivInner = styled.div`
  @keyframes anim {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  & div {
    left: 94px;
    top: 42px;
    position: absolute;
    animation: anim linear 1s infinite;
    background: ${(props) => props.theme.colors.red};
    width: 12px;
    height: 24px;
    border-radius: 6px / 12px;
    transform-origin: 6px 58px;
  }
  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9230769230769231s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(2) {
    transform: rotate(27.692307692307693deg);
    animation-delay: -0.8461538461538461s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(3) {
    transform: rotate(55.38461538461539deg);
    animation-delay: -0.7692307692307693s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(4) {
    transform: rotate(83.07692307692308deg);
    animation-delay: -0.6923076923076923s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(5) {
    transform: rotate(110.76923076923077deg);
    animation-delay: -0.6153846153846154s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(6) {
    transform: rotate(138.46153846153845deg);
    animation-delay: -0.5384615384615384s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(7) {
    transform: rotate(166.15384615384616deg);
    animation-delay: -0.46153846153846156s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(8) {
    transform: rotate(193.84615384615384deg);
    animation-delay: -0.38461538461538464s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(9) {
    transform: rotate(221.53846153846155deg);
    animation-delay: -0.3076923076923077s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(10) {
    transform: rotate(249.23076923076923deg);
    animation-delay: -0.23076923076923078s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(11) {
    transform: rotate(276.9230769230769deg);
    animation-delay: -0.15384615384615385s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(12) {
    transform: rotate(304.61538461538464deg);
    animation-delay: -0.07692307692307693s;
    background: ${(props) => props.theme.colors.primary};
  }
  & div:nth-child(13) {
    transform: rotate(332.3076923076923deg);
    animation-delay: 0s;
    background: ${(props) => props.theme.colors.primary};
  }
  & {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  & div {
    box-sizing: content-box;
  }
`;

const Spinner = () => {
  return (
    <DivWrapper>
      <DivInner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </DivInner>
    </DivWrapper>
  );
};

export default Spinner;
