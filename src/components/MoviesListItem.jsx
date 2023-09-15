import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  width: 250px;
  height: 170px;
  border-radius: 12px;
  border: solid ${(props) => props.theme.colors.darkGrey} 1px;
`;

const MoviesListItem = ({ image, title }) => {
  return <Img src={image} alt={title} />;
};

MoviesListItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;
