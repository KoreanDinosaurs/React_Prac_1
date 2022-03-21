import React from "react";
import {Route, Routes} from "react-router-dom"
import styled from "styled-components"
import DayRate from "./DayRate";
import Detail from "./Detail";

function App() {
  const [list, setList] = React.useState([
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ])

  return (
    <Container>
      <Routes>
        <Route path="/" element={<DayRate list={list}/>} />
        <Route path="/detail/:choicedDay" element={<Detail list={list}/>} />
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

  border: 1px solid black;
  border-radius: 10px;
  padding: 1em;
`;