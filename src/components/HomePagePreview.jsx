import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Button,
  CustomArrow,
  CustomCircle,
  CustomTriangle,
} from "../style/styledComponents";

import { getMovieTime } from "../utils/utils";

const BackgroundImg = styled.img`
  height: 950px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 0;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin: 150px auto 50px auto;
  max-width: 435px;

  @media ${(props) => props.theme.media.phone} {
    margin: 50px auto 20px auto;
  }
`;
const Title = styled.div`
  font-weight: bold;
  font-family: emoji;
  text-align: center;
  font-size: 60px;
  padding-bottom: 30px;
  @media ${(props) => props.theme.media.phone} {
    font-size: 38px;
  }
`;
const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 35px;

  @media ${(props) => props.theme.media.phone} {
    gap: 0px;
    flex-wrap: wrap;
  }
`;
const InfoItem = styled.li`
  font-size: 20px;
  list-style-type: disc;
  white-space: nowrap;

  &:first-child {
    list-style-type: none;
  }

  @media ${(props) => props.theme.media.phone} {
    font-size: 16px;
    flex: 0 1 50%;
    list-style-type: none;
    text-align: center;
    &::before {
      content: "•";
      position: relative;
      left: -20px;
    }
  }
`;
const Description = styled.p`
  padding-top: 20px;
  text-align: center;
  @media ${(props) => props.theme.media.phone} {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.media.phone} {
    justify-content: space-evenly;
  }
`;

const HomePagePreview = ({ movie }) => {
  const { image, title, genres, description, runtime } = movie;
  const { hours, minutes } = getMovieTime(runtime);

  return (
    <div>
      {movie && <BackgroundImg src={image}></BackgroundImg>}
      <Wrapper>
        <Title>{title}</Title>
        <InfoList>
          {genres &&
            genres.map((genre) => (
              <InfoItem key={genre.id}>{genre.text}</InfoItem>
            ))}
          <InfoItem>
            {hours} {minutes}
          </InfoItem>
        </InfoList>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button
            fontSize={"20px"}
            color={"black"}
            background={"white"}
            gap={"12px"}
          >
            <CustomCircle background={"black"}>
              <CustomTriangle />
            </CustomCircle>
            Watch Now
          </Button>
          <Button gap={"12px"} fontSize={"20px"}>
            <CustomCircle background={"white"}>
              <CustomArrow
                color="black"
                top={"2.5px"}
                left={"2px"}
              ></CustomArrow>
            </CustomCircle>
            More Info
          </Button>
        </ButtonContainer>
      </Wrapper>
    </div>
  );
};

HomePagePreview.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
};

export default HomePagePreview;
