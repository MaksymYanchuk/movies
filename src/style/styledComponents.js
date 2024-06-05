import styled from "styled-components";

export const CustomArrow = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  &::before {
    content: "";
    position: ${(props) => props.position || "absolute"};;
    top: ${(props) => props.top || "0px" };
    left: ${(props) => props.left || "0px"};
    border: 2px solid ${(props) => props.color || props.theme.colors.white};
    border-width: 0 2px 2px 0;
    transform:  ${(props) => props.transform || "rotate(-45deg)"}; 
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
  }
`;

export const CustomCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background: ${(props) => props.background || "black"};
  border-radius: 200px;
`;

export const CustomTriangle = styled.div`
  position: relative;
  top: 6px;
  left: 6px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 8px solid white;
  transform: rotate(90deg);
`;

export const Button = styled.button`
  backdrop-filter: blur(4px);
  font-size: ${(props) => props.fontSize || "16px"};
  white-space: nowrap;
  padding: 5px;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.gap || "4px"};
  align-items: center;
  height: ${(props) => props.height || "54px"};
  min-width: ${(props) => props.width || "206px"};
  color: ${(props) => props.color || props.theme.colors.white};
  background: ${(props) => props.background || props.theme.colors.darkGrey};
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  border-radius: 200px;
  z-index: 0;

  &:focus {
    outline: none;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 16px;
    height: 30px;
    min-width: 120px
    
  }
`;

export const CardsGrid = styled.div`
  gap: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;


