import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImgWrapper = styled.div`
  display: flex;

  &::before {
    content: "${(props) => props.index}";
    font-family: "Abyssinica SIL", sans-serif;
    font-size: 214px;
    z-index: 0;
    font-weight: 500;
    min-height: 178px;

    @media ${(props) => props.theme.media.phone} {
      font-size: 80px;
      position: absolute;
      top: 80px;
      left: 30px;
    }
  }
  @media ${(props) => props.theme.media.phone} {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 138px;
  height: 178px;
  border-radius: 12px;
  position: absolute;
  left: 75px;
  top: 30px;

  @media ${(props) => props.theme.media.phone} {
    position: static;
  }
`;

const TitleListItemNumbered = ({ image, title, index, id, isSeries }) => {
  return (
    <ImgWrapper index={index + 1}>
      <Link to={isSeries ? `/series/${id}` : `/movies/${id}`}>
        <Img src={image} alt={title} />
      </Link>
    </ImgWrapper>
  );
};

TitleListItemNumbered.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSeries: PropTypes.bool.isRequired,
};

export default TitleListItemNumbered;
