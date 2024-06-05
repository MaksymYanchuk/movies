import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { http } from "../../services/moviesServices";
import { enqueueSnackbar } from "notistack";
import styled from "styled-components";

import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import { _notFoundImg } from "../../services/moviesServices";
import { getMovieTime } from "../../utils/utils";

// import {
//   Button,
//   CustomArrow,
//   CustomCircle,
//   CustomTriangle,
// } from "../../style/Button";

const BackgroundImg = styled.img`
  z-index: 0;
  height: 650px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  margin-top: 430px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const TitleInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 33px;
  margin-bottom: 80px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 33px;
`;
const InfoListItem = styled.li`
  border: ${(props) => props.border || "1px solid black / 10px"};
  font-size: 20px;
  list-style-type: disc;
  white-space: nowrap;

  &:first-child,
  &:nth-child(2) {
    list-style-type: none;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 80px;
`;

const SingleMoviePage = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: title,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const response = await http.get(`/titles/${id}`, {
        params: { info: "base_info" },
      });
      return response.data.results;
    },
    throwOnError: () => {
      enqueueSnackbar(`Error fetching movie`, {
        variant: "error",
      });
    },
  });

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  const {
    primaryImage,
    originalTitleText,
    ratingsSummary,
    genres,
    runtime,
    plot,
  } = title;

  const { hours, minutes } = getMovieTime(runtime?.seconds);
  console.log(primaryImage?.url)
  return (
    <>
      <BackgroundImg src={primaryImage?.url || _notFoundImg}></BackgroundImg>
      <Wrapper>
        <Title>{originalTitleText?.text}</Title>
        <TitleInfoBlock>
          <InfoList>
            <InfoListItem>
              Raiting: {ratingsSummary?.aggregateRating}/10
            </InfoListItem>
            {genres?.genres &&
              genres.genres.map((genre) => (
                <InfoListItem key={genre.id}>{genre.text}</InfoListItem>
              ))}
            <InfoListItem>
              {hours} {minutes}
            </InfoListItem>
          </InfoList>
        </TitleInfoBlock>
        <Description>{plot?.plotText?.plainText}</Description>
      </Wrapper>
    </>
  );
};

export default SingleMoviePage;
