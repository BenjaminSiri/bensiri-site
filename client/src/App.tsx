import React from 'react';
import styled from "styled-components";

const MainDiv = styled.div`
  text-align: center;
  color: white;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <MainDiv className="App">
      <p>Hello World</p>
    </MainDiv>
  );
}

export default App;
