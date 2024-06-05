import { useQuery } from "@tanstack/react-query";
import { http } from "../../services/moviesServices";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import ErrorBoundary from "../ErrorBoundary";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  margin: 3rem;
  position: relative;
  font-size: 18px;
`;

const CategoiesGrid = styled.ul`
  gap: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const CategoiesListItem = styled.li`
  padding: 5px;
  border-radius: 2px;
  transition: background-color 0.3s ease; /* Анимация изменения цвета фона */

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.darkGrey}; /* Цвет фона при наведении */
  }
`;

const Categories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["key"],
    queryFn: () => http.get("/titles/utils/genres", {}),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const categoriesArr = categories.data.results.filter((item) => item !== null); // API returns null in first value of the array

  return (
    <ErrorBoundary>
      <CategoiesGrid>
        {categoriesArr.map((category) => (
          <CategoiesListItem key={category}>
            <StyledLink color={"black"} to={`/categories/${category.toLowerCase()}/`}>
              {category}
            </StyledLink>
          </CategoiesListItem>
        ))}
      </CategoiesGrid>
    </ErrorBoundary>
  );
};

export default Categories;
