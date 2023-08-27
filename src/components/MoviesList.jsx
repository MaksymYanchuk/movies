import styled from "styled-components";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Wrapper = styled.div`
    margin-bottom: 50px;
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
const ContentList = styled.ul`
  gap: 14px;
  display: flex;
`;

const ContentItem = styled.li`
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 250px;
  height: 170px;
  border-radius: 12px;
  border: solid ${(props) => props.theme.colors.darkGrey} 1px;
`;

const MoviesList = (props) => {
  const renderItems = (arr) => {
    const items = arr.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <ContentItem>
            <Img src={item.image} alt={item.title} />
          </ContentItem>
        </SwiperSlide>

        //
        // </ContentItem>
      );
    });
    return items;
  };

  const { movieList } = props;

  const items = renderItems(movieList);
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{movieList[0]?.genre}</Title>
        <Button>View More<CustomArrow/>
        </Button>
      </TitleContainer>
      <ContentList>
        <Swiper
          spaceBetween={14}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items}
        </Swiper>
      </ContentList>
    </Wrapper>
  );
};
MoviesList.propTypes = {
    movieList: PropTypes.array,
     
};

export default MoviesList;
