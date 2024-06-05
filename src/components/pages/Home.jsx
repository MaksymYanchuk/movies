import styled from "styled-components";
import TitleList from "../TitleList";
import HomePagePreview from "../HomePagePreview";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";
import useFetchMovies from "../hooks/useFetchMovies";
import ErrorMessage from "../ErrorMessage";
import { GENRES, URL_PARAMS } from "../../constants/homePageParams";

const TitlesWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  const {
    data: titles,
    isLoading,
    error,
  } = useFetchMovies(GENRES, URL_PARAMS, {
    throwOnError: false,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <ErrorBoundary>
        <HomePagePreview movie={titles[GENRES[0]?.genre]?.[0]} />
      </ErrorBoundary>
      <ErrorBoundary>
        <TitlesWrapper>
          {Object.entries(titles).map((item) => (
            <TitleList
              key={item[0]}
              movieList={item[1]}
              title={item[1]?.[0]?.genre}
              numbered={item[1]?.[0]?.numbered}
            />
          ))}
        </TitlesWrapper>
      </ErrorBoundary>
    </>
  );
};

export default Home;
