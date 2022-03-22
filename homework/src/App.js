import React from "react";
import {Route, Routes} from "react-router-dom"
import styled from "styled-components"
import DayRate from "./DayRate";
import Detail from "./Detail";

function App() {
  

  return (
    <Container>
      <Routes>
        <Route path="/" element={<DayRate />} />
        <Route path="/detail/:choicedDay" element={<Detail />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 400px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 10px;
  padding: 2em;

  background-color: white;
`;