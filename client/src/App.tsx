import React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';

const MainDiv = styled.div`
  text-align: center;
  color: white;
  height: 100vh;
  width: 100vw;
`;

const StyledButton = styled(Button)`
`;

function App() {
  return (
    <MainDiv className="App">
      <StyledButton variant="contained">Hello World</StyledButton>
    </MainDiv>
  );
}

export default App;
