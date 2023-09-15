import styled from "styled-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import MoviesListItem from "./MoviesListItem";
import MoviesListItemNumbered from "./MoviesListItemNumbered";

import "swiper/css";

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  font-weight: 500;
`;

const ContentList = styled.ul`
  width: 1312px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 120px;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.darkGrey};
  border-radius: 15px;
`;

const CustomArrow = styled.p`
  position: relative;
  width: 8px;
  height: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${(props) => props.theme.colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
    width: 100%;
    height: 100%;
  }
`;

const MoviesList = ({ movieList, title, numbered }) => {
  const renderItems = (arr) => {
    const items = arr.map((item, i) => {
      if (numbered) {
        return (
          <SwiperSlide key={item.id}>
            <MoviesListItemNumbered
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              index={i}
            />
          </SwiperSlide>
        );
      }
      return (
        <SwiperSlide key={item.id}>
          <MoviesListItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        </SwiperSlide>
      );
    });

    return (
      <Swiper spaceBetween={14} slidesPerView={5}>
        {items}
      </Swiper>
    );
  };

  const elements = useMemo(() => {
    return renderItems(movieList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList]);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        {!numbered && (
          <Button>
            View More
            <CustomArrow />
          </Button>
        )}
      </TitleContainer>
      <ContentList>{elements}</ContentList>
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movieList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  numbered: PropTypes.bool.isRequired,
};

export default MoviesList;
