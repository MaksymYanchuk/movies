import styled from "styled-components";
import Header from "./Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const AppWrapper = styled.div`
  min-height: 100vw;
  padding: 3rem;
  `
  return (
    <Router>
      <AppWrapper>
        <Header/>
      </AppWrapper>
    </Router>
  )
}

export default App
