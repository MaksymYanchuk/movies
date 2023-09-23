import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Button,
  ArrowDecoration,
  TriangleDecoration,
  CircleDecoration,
} from "../style/Button";

const BackgroundImg = styled.img`
  height: 950px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 155px auto;
  width: 435px;
`;
const Title = styled.div`
  font-weight: bold;
  font-family: emoji;
  text-align: center;
  font-size: 60px;
  padding-bottom: 30px;
`;
const Info = styled.ul`
  display: flex;
  justify-content: center;
  gap: 35px;
`;
const InfoItem = styled.li`
  font-size: 20px;
  list-style-type: disc;
  white-space: nowrap;

  &:first-child {
    list-style-type: none;
  }
`;
const Description = styled.p`
  padding-top: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const getMovieTime = (seconds) => {
  const hours = Math.floor(seconds / 3600) + "h";
  const minutes = Math.floor((seconds % 3600) / 60) + "m";

  return (
    <>
      <InfoItem>
        {hours} {minutes}
      </InfoItem>
    </>
  );
};

const MainPagePreview = ({ movie }) => {
  console.log(movie);
  const { image, title, genres, description, runtime } = movie;
  console.log(runtime);
  return (
    <div>
      {movie && <BackgroundImg src={image}></BackgroundImg>}
      <Wrapper>
        <Title>{title}</Title>
        <Info>
          {genres &&
            genres.map((genre) => (
              <InfoItem key={genre.id}>{genre.text}</InfoItem>
            ))}
          {getMovieTime(runtime)}
        </Info>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button
            fontSize={"20px"}
            color={"black"}
            backgroundColor={"white"}
            gap={"12px"}
          >
            <CircleDecoration backgroundColor="black">
              <TriangleDecoration />
            </CircleDecoration>
            Watch Now
          </Button>
          <Button gap={"12px"} fontSize={"20px"} backdropFilter={"blur(4px)"}>
            <CircleDecoration backgroundColor="white">
              <ArrowDecoration
                color="black"
                top={"6px"}
                left={"5px"}
              ></ArrowDecoration>
            </CircleDecoration>
            More Info
          </Button>
        </ButtonContainer>
      </Wrapper>
    </div>
  );
};

MainPagePreview.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
};

export default MainPagePreview;
