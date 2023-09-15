import styled from "styled-components";
import PropTypes from "prop-types";

const ImgWrapper = styled.div`
  display: flex;
  &::before {
    content: "${(props) => props.index}";
    font-family: "Abyssinica SIL", sans-serif;
    font-size: 214px;
    z-index: -1;
    font-weight: 500;
    justify-content: left;
  }
`;

const Img = styled.img`
  width: 138px;
  height: 178px;
  border-radius: 12px;
  position: absolute;
  left: 75px;
  top: 30px;
`;

const MoviesListItemNumbered = ({ image, title, index }) => {
  return (
    <ImgWrapper index={index + 1}>
      <Img src={image} alt={title} />
    </ImgWrapper>
  );
};

MoviesListItemNumbered.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default MoviesListItemNumbered;
