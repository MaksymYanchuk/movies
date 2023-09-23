import styled from "styled-components";

export const ArrowDecoration = styled.div`
  position: relative;
  width: 8px;
  height: 8px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${(props) => props.color|| props.theme.colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
    width: 100%;
    height: 100%;
  }
`;

export const CircleDecoration = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.backgroundColor || "black"};
  border-radius: 200px;
`;

export const TriangleDecoration = styled.div`
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
  backdrop-filter: ${(props) => props.backdropFilter};
  font-size: ${(props) => props.fontSize || "16px"};
  white-space: nowrap;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.gap || "4px"};
  align-items: center;
  height: ${(props) => props.height || "54px"};
  width: ${(props) => props.width || "206px"};
  color: ${(props) => props.color || props.theme.colors.white};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.darkGrey};
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  border-radius: 200px;
  z-index: 20;

  &:focus {
  outline: none;
}
`;
