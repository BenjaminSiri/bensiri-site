import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Accent, Accent2, Dark, Light } from './globalStyles';

import ContactDialog from './components/ContactDialog';


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

const StickyNavDiv = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 66px;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(${({ visible }) => (visible ? "0" : "-110%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  background-color: ${Accent};

  > * {
    cursor: pointer;
  }
`;

const NavButtonsDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  > * {
    cursor: pointer;
  }
`;

const StyledButton = styled(Button)<{$sticky? : boolean}>`
  &&  {
    height: 44px;
    position: relative;
    overflow: hidden;
    background: none;
    border: none;
    color: black;
    font-size: 28px;
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
    width: ${({ $sticky }) => ($sticky ? '100%' : '44px')};
    height: ${({ $sticky }) => ($sticky ? '16px' : '100%')};
    background-color: ${({ $sticky }) => ($sticky ? Accent2 : Accent)};
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
  border: 10px solid ${Dark};

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

const ResumeDiv = styled.div`
  width: 80%;
  height: 600px;
  background-color: ${Accent};
  color: ${Dark};
  margin-top: 80px;
`;

const onProjectClick = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
}

const onResumeClick = () => {
  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
}

const onTopClick = () => {
  document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })
}


function App() {

  const [stickyNavVisible, setStickyNavVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyNavVisible(window.scrollY > 120); // adjust scroll trigger
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainDiv className="App">
      <ColorBar id="top"/>
      <ContactDialog open={dialogOpen} setOpen={setDialogOpen}/>
      <BodyDiv>
        <NavDiv>
          <NavButtonsDiv>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" onClick={onTopClick}>
            <rect x="2" y="2" width="60" height="60" rx="8"
                  fill="none" stroke="#000000" stroke-width="4"/>
            <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
                  font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                  font-weight="800" font-size="30" fill="#000000">BS</text>
          </svg>

            <StyledButton
              onClick={onProjectClick}
              $sticky={false}
            >
              Projects
            </StyledButton>
            <StyledButton
              onClick={onResumeClick}
              $sticky={false}
            >
              Resume
            </StyledButton>

          </NavButtonsDiv>
          <StyledButton
            $sticky={false}
            onClick={() => setDialogOpen(true)}
          >
            Contact Me
          </StyledButton>
        </NavDiv>

        <StickyNavDiv visible={stickyNavVisible}>
          <NavButtonsDiv>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" onClick={onTopClick}>
              <rect x="2" y="2" width="40" height="40" rx="8"
                    fill="none" stroke="#000000" stroke-width="4"/>
              <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
                    font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                    font-weight="800" font-size="20" fill="#000000">BS</text>
            </svg>

              <StyledButton
                onClick={onProjectClick}
                $sticky={true}
              >
                Projects
              </StyledButton>
              <StyledButton
                onClick={onResumeClick}
                $sticky={true}
              >
                Resume
              </StyledButton>

          </NavButtonsDiv>
          <StyledButton
            $sticky={true}
            onClick={() => setDialogOpen(true)}
          >
            Contact Me
          </StyledButton>
        </StickyNavDiv>

        <PFPDiv $imageUrl='/images/PFP.jpg'/>
        <BioDiv>
          Hey, I'm <span style={{color: Accent}}>Ben Siri</span>. 
          You can checkout what I'm working on. I'm passionate 
          about front-end dev and machine learning applications!
        </BioDiv>

        <ProjectsDiv id="projects">
          Projects
        </ProjectsDiv>

        <ResumeDiv id="resume">
          Resume
        </ResumeDiv>
      </BodyDiv>
    </MainDiv>
  );
}

export default App;
