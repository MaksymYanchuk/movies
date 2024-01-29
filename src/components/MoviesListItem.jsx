import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  text-align: center;
  width: 220px;
  height: 280px;
  border-radius: 12px;
  border: solid ${(props) => props.theme.colors.darkGrey} 1px;

`;

const MoviesListItem = ({ image, title }) => {
  return <Img src={image} alt={title} />;
};

MoviesListItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;
