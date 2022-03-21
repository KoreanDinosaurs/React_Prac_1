import React from "react";
import {Route, Routes} from "react-router-dom"
import styled from "styled-components"

function App() {
  return (
    <Container>
      <h1>내 일주일은?</h1>
      <hr />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 10px;
  padding: 1em;
  
  
  h1 {
    text-align: center;
  }
  
  hr {
    /* margin: 2em; */
    width: 100%;
  }
`;