import styled from "styled-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button, ArrowDecoration} from "../style/Button";
import MoviesListItem from "./MoviesListItem";
import MoviesListItemNumbered from "./MoviesListItemNumbered";

import "swiper/css";

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const ContentList = styled.ul`
  width: 1312px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  font-weight: 500;
  z-index:20;
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
          <Button height={"30px"} width={"120px"}>
            View More
            <ArrowDecoration />
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
