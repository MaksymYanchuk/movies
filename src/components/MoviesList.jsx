import styled from "styled-components";
import PropTypes from "prop-types";
import { useMemo } from "react";

import Slider from "./Slider";

import { SwiperSlide } from "swiper/react";

import { Button, CustomArrow } from "../style/Button";
import MoviesListItem from "./MoviesListItem";
import MoviesListItemNumbered from "./MoviesListItemNumbered";

const Wrapper = styled.div`
  position: relative;
  z-index:1;
  margin-bottom: 50px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 10px;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  font-weight: 500;
  z-index: 1;

  @media ${(props) => props.theme.media.phone} {
    font-size: 24px;
  }
`;

const MoviesList = ({ movieList, title, numbered }) => {
  const renderSlider = () => {
    return (
      <Slider>
        {movieList.map((movie, i) => {
          return (
            <SwiperSlide key={i}>
              {numbered ? (
                <MoviesListItemNumbered
                  image={movie.image}
                  title={movie.title}
                  index={i}
                />
              ) : (
                <MoviesListItem image={movie.image} title={movie.title} />
              )}
            </SwiperSlide>
          );
        })}
      </Slider>
    );
  };

  const slider = useMemo(() => {
    return renderSlider();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList]);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        {!numbered && (
          <Button height={"30px"} width={"120px"}>
            View More
            <CustomArrow />
          </Button>
        )}
      </TitleContainer>
      {slider}
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movieList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  numbered: PropTypes.bool.isRequired,
};

export default MoviesList;
