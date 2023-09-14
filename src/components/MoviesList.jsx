import styled from "styled-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Wrapper = styled.div`
  margin-bottom: 50px;
`;
const TrendingImageWrapper = styled.div`
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

const TrendingImg = styled.img`
  width: 138px;
  height: 178px;
  border-radius: 12px;
  position: absolute;
  left: 75px;
  top: 30px;
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

const Img = styled.img`
  width: 250px;
  height: 170px;
  border-radius: 12px;
  border: solid ${(props) => props.theme.colors.darkGrey} 1px;
`;

const MoviesList = ({ movieList, title }) => {
  const renderItems = (arr) => {
    const items = arr.map((item, i) => {
      switch (title) {
        case "Latest & Trending":
          return (
            <SwiperSlide key={item.id}>
              <TrendingImageWrapper index={i + 1}>
                <TrendingImg src={item.image} alt={item.title} />
              </TrendingImageWrapper>
            </SwiperSlide>
          );

        default:
          return (
            <SwiperSlide key={item.id}>
              <Img src={item.image} alt={item.title} />
            </SwiperSlide>
          );
      }
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
        {title !== "Latest & Trending" && (
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
};

export default MoviesList;
