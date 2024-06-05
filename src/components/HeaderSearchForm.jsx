import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { http } from "../services/moviesServices";
import { _transformMoviesList } from "../services/moviesServices";
import debounce from "lodash.debounce";

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 50px;
  background-color: transparent;
  border: solid rgb(255, 255, 255, 0.2) 1px;
  height: 39px;
  position: relative;

  @media ${(props) => props.theme.media.phone} {
    align-self: flex-start;
  }
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  width: 250px;
  height: 39px;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.colors.primary};
  padding: 20px;

  @media (max-width: 1280px) {
    width: 200px;
    font-size: 14px;
  }

  @media (max-width: 900px) {
    width: 170px;
    font-size: 12px;
  }
`;

const Autocomplete = styled.ul`
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  height: 360px;
  background-color: white;
  overflow: auto;
  border-radius: 3px;
`;

const AutocompleteItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: #c0c0c0;
    transition: ease 0.2s all;
  }
`;

const AutocompleteItemImg = styled.img`
  height: 100px;
  width: 80px;
`;

const AutocompleteItemContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AutocompleteItemText = styled.p`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "black"};
`;

const Button = styled.button`
  border: none;
  background: transparent url(/src/assets/search.svg) no-repeat center;
  background-size: contain;
  align-self: center;
  height: 25px;
  &:focus {
    outline: none;
  }
`;

const HederSearchForm = () => {
  const [isAutocompleteOpen, setІsAutocompleteOpen] = useState(false);
  const [searchTitles, setSearchTitles] = useState([]);

  const debouncedOnChangeHandler = debounce(({ search }) => {
    if (search.length > 0) {
      http
        .get(
          `https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}`,
          {
            params: {
              exact: "false",
              info: "base_info",
            },
          }
        )
        .then((data) =>
          data.data.results.map((item) => {
            return _transformMoviesList(item);
          })
        )
        .then((data) => {
          setSearchTitles(data);
          setІsAutocompleteOpen(data.length > 0);
        });
    } else {
      setІsAutocompleteOpen(false);
    }
  }, 300);

  const itemClickHandler = () => {
    setІsAutocompleteOpen(false);
    reset();
  };

  const { register, handleSubmit, watch, reset } = useForm();

  return (
    <Form onChange={handleSubmit(debouncedOnChangeHandler)}>
      <Input
        placeholder="Search Movies, Series..."
        autoComplete="off"
        {...register("search", {
          maxLength: {
            value: 40,
            message: "The characters name must be less than 40 symbols",
          },
          minLength: {
            value: 0,
            message: "The characters name must be longer than 2 symbols",
          },
        })}
      ></Input>
      <Button type="submit" />
      {isAutocompleteOpen ? (
        <Autocomplete>
          {searchTitles
            .sort((a, b) => b.voteCount - a.voteCount)
            .map((item) => (
              <Link
                to={item.isSeries ? `/series/${item.id}` : `/movies/${item.id}`}
                key={item.id}
              >
                <AutocompleteItem onClick={itemClickHandler}>
                  <AutocompleteItemImg src={item.image} />
                  <AutocompleteItemContainer>
                    <AutocompleteItemText color="black">
                      {item.title}
                    </AutocompleteItemText>
                    <AutocompleteItemText fontSize="14px">
                      {item.releaseYear ? (item.releaseYear) : null}
                    </AutocompleteItemText>
                  </AutocompleteItemContainer>
                </AutocompleteItem>
              </Link>
            ))}
        </Autocomplete>
      ) : null}
    </Form>
  );
};

export default HederSearchForm;
