import ErrorBoundary from "../ErrorBoundary";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import { CardsGrid } from "../../style/styledComponents";
import { useInfiniteQuery } from "@tanstack/react-query";
import { _notFoundImg, http } from "../../services/moviesServices";
import { useEffect } from "react";
import TitleCard from "../TitleCard";


const Movies = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    ...result
  } = useInfiniteQuery({
    queryKey: ["titles"],
    refetchOnWindowFocus: false,
    retry: false,
    retryOnMount: false,
    keepPreviousData: true,
    queryFn: ({ pageParam }) =>
      http.get("/titles", {
        params: {
          list: "top_boxoffice_200",
          sort: "year.decr",
          info: "base_info",
          limit: "50",
          page: pageParam,
        },
      }),

    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = new URLSearchParams(lastPage.data.next).get("page");
      return nextPage;
    },
    getPreviousPageParam: (firstPage) => firstPage.prevCursor,
  });

  useEffect(() => {
    const scrollHandler = (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          200 &&
        !isFetchingNextPage &&
        !isLoading &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error ) {
    return <ErrorMessage />;
  }

  const pages = result.data?.pages;
  console.log('render')
  return (
    <CardsGrid>
      <ErrorBoundary>
        {pages.map((page) => {
          return page.data.results.map((title, i) => {
            return (
              <TitleCard
                key={title.id}
                image={title.primaryImage?.url || _notFoundImg}
                title={title.titleText.text}
                id={title.id}
                index={i}
                isSeries={title.titleType.isSeries}
              />
            );
          });
        })}
      </ErrorBoundary>
    </CardsGrid>
  );
};

export default Movies;
