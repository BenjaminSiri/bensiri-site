import React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Accent, Dark, Light } from './globalStyles';


const MainDiv = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const ColorBar = styled.div`
  width: 100%;
  height: 30px;
  background: ${Accent};
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
  &&  {
  position: relative;
  overflow: hidden;
  background: none;
  border: none;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding: 2px 2px;
  cursor: pointer;
  border-radius: 0;
}

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 48px;
    height: 48px;
    background-color: ${Accent};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
`;

const PFPDiv = styled.div<{ $imageUrl?: string }>`
  aspect-ratio: 1 / 1;
  width: 400px;
  border-radius: 50%;
  background-color: ${Accent};
  border: 10px solid black;

  background-image: ${({ $imageUrl }) => ($imageUrl ? `url(${$imageUrl})` : "none")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 80px;

  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${Accent};
  }
`;

const BioDiv = styled.div`
  width: 65%;
  margin-top: 80px;
  font-size: 42px;
  font-weight: bold;
  text-align: left;
`;

const ProjectsDiv = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${Dark};
  color: ${Light};
  margin-top: 80px;
`;

const onProjectClick = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
}


function App() {
  return (
    <MainDiv className="App">
      <ColorBar />
      <BodyDiv>
        <NavDiv>
          <NavButtonsDiv>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect x="2" y="2" width="60" height="60" rx="12"
                  fill="none" stroke="#000000" stroke-width="4"/>
            <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
                  font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                  font-weight="800" font-size="30" fill="#000000">BS</text>
          </svg>

            <StyledButton
              onClick={onProjectClick}
              >
                Projects
            </StyledButton>
            
          </NavButtonsDiv>
          <StyledButton>Contact Me</StyledButton>
        </NavDiv>
        <PFPDiv $imageUrl='/images/PFP.jpg'/>
        <BioDiv>
          Hey, I'm <span style={{color: Accent}}>Ben Siri</span>. 
          You can checkout what I'm working on. I'm passionate 
          about front-end dev and machine learning applications!
        </BioDiv>

        <ProjectsDiv id="projects">
          Work is progress...
        </ProjectsDiv>
      </BodyDiv>
    </MainDiv>
  );
}

export default App;
