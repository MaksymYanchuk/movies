import {styled, keyframes}from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const growShrinkAnimation = keyframes`
  0% {
    transform: scale(1.02);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(1.05);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const Img = styled.img`
  text-align: center;
  width: 220px;
  height: 280px;
  border-radius: 12px;
  border: solid ${(props) => props.theme.colors.darkGrey} 1px;
  &:hover {
    animation: ${growShrinkAnimation} 0.2s ease-in-out forwards;
    border: 2px solid ${(props) => props.theme.colors.red};
  
  }
`;

const TitleCard = ({ image, title, id, isSeries }) => {
  
  return (
    <Link to={isSeries ? `/series/${id}` : `/movies/${id}`}>
      <Img src={image} alt={title} />
    </Link>
  );
};

TitleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSeries: PropTypes.bool.isRequired,
};

export default TitleCard;
