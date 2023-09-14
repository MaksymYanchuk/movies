import { lazy, Suspense } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "./Spinner";

const Page404 = lazy(() => import("./pages/404"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Movies = lazy(() => import("./pages/Movies"));
const Series = lazy(() => import("./pages/Series"));
const Trending = lazy(() => import("./pages/Trending"));
const Categories = lazy(() => import("./pages/Categories"));

const AppWrapper = styled.div`
overflow: hidden;
  min-height: 50vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px 50px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundIn};
`;
const Main = styled.div`
  flex: 1 1 auto;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/series" element={<Series />} />
              <Route exact path="/trending" element={<Trending />} />
              <Route exact path="/categories" element={<Categories />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
