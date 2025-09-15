import React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Blue } from './globalStyles';


const MainDiv = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const ColorBar = styled.div`
  width: 100%;
  height: 30px;
  background: ${Blue};
`;

const BodyDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const NavButtonsDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  && {
    color: black;
    font-size: 30px;
    font-weight: bold;
  }
`;

const PFPDiv = styled.div<{ $imageUrl?: string }>`
  aspect-ratio: 1 / 1;
  width: 400px;
  border-radius: 50%;
  background-color: ${Blue};
  border: 10px solid black;

  background-image: ${({ $imageUrl }) => ($imageUrl ? `url(${$imageUrl})` : "none")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 80px;

  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${Blue};
  }
`;

const BioDiv = styled.div`
  width: 65%;
  margin-top: 80px;
  font-size: 30px;
  font-weight: bold;
`;

function App() {
  return (
    <MainDiv className="App">
      <ColorBar />
      <BodyDiv>
        <NavDiv>
          <NavButtonsDiv>
            <StyledButton>BS</StyledButton>
            <StyledButton>Projects</StyledButton>
          </NavButtonsDiv>
          <StyledButton>Contact Me</StyledButton>
        </NavDiv>
        <PFPDiv $imageUrl='/images/PFP.jpg'/>
        <BioDiv>
          Hey, I'm <span style={{color: Blue}}>Ben Siri</span>. 
          You can checkout what I'm working on. I'm passionate 
          about front-end dev and machine learning applications!
        </BioDiv>
      </BodyDiv>
    </MainDiv>
  );
}

export default App;
