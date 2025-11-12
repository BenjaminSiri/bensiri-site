import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Accent, Accent2, Dark, Light } from './globalStyles';

import ContactDialog from './components/ContactDialog';
import ProjectCard from './components/ProjectCard';
import { useWindowWidth } from './util/useWindowWidth';


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
  align-items: center;
  margin-top: 50px;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

const StickyNavDiv = styled.div<{ $visible?: boolean }>`
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
  transform: translateY(${({ $visible }) => ($visible ? "0" : "-110%")});
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
    aspect-ratio: 1 / 1;
    width: 44px;
    background-color: ${({ $sticky }) => ($sticky ? Accent2 : Accent)};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 650px) {

    && {
      font-size: 10px;
      height: 26px;
    }

    &::before {
      width: 26px;
    }
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

  @media (max-width: 650px) {
    width: 250px;
  }
`;

const BioDiv = styled.div`
  width: 65%;
  margin-top: 80px;
  font-size: 42px;
  font-weight: bold;
  text-align: left;

  @media (max-width: 650px) {
    font-size: 28px;
  }
`;

const SectionDiv = styled.div<{ $fullWidth? : boolean }>`
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  background-color: ${({ $fullWidth }) => ($fullWidth ? `${Dark}` : "none")};
`;

const ProjectsDiv = styled.div`
  width: 80%;
  min-height: 200px;
  background-color: ${Dark};
  color: ${Light};
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media (max-width: 650px) {
    align-items: center;
  }
`;

const ProjectsHeader = styled.h1`
  width: 90%;
  text-align: left;
  margin-top: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ResumeDiv = styled.div`
  width: 80%;
  background-color: ${Accent};
  color: ${Dark};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 50px;
`;

const PDFDiv = styled.iframe<{ $fullWidth? : boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? `700px` : `300px`)};
  aspect-ratio: 1/1.29;
  margin: auto;

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
  const windowWidth = useWindowWidth();

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
            {windowWidth > 650 ?
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" onClick={onTopClick}>
                <rect x="2" y="2" width="60" height="60" rx="8"
                      fill="none" stroke="#000000" strokeWidth="4"/>
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle"
                      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                      fontWeight="800" fontSize="30" fill="#000000">BS</text>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" onClick={onTopClick}>
                <rect x="2" y="2" width="40" height="40" rx="8"
                      fill="none" stroke="#000000" strokeWidth="4"/>
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle"
                      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                      fontWeight="800" fontSize="20" fill="#000000">BS</text>
              </svg>
            }

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

        <StickyNavDiv $visible={stickyNavVisible}>
          <NavButtonsDiv>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" onClick={onTopClick}>
              <rect x="2" y="2" width="40" height="40" rx="8"
                    fill="none" stroke="#000000" strokeWidth="4"/>
              <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle"
                    fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
                    fontWeight="800" fontSize="20" fill="#000000">BS</text>
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

        <SectionDiv $fullWidth={true}>
          <ProjectsDiv id="projects">
            <ProjectsHeader>Projects</ProjectsHeader>
            <ProjectsGrid>
              <ProjectCard
                title='TrueHue'
                description='Modern color vision testing platform'
                type='Startup'
                image='/images/TrueHue.png'
                link='https://truehue.app'
              />
              <ProjectCard
                title='Guess My Spotify'
                description='Allows users to guess their most played songs and artists with the spotify API'
                type='Personal Project'
                image='/images/GuessMySpotify.png'
                link='https://main.djykgt5kfze64.amplifyapp.com'
              />
              <ProjectCard
                title='Jamming'
                description='Search songs, create playlists, and save them to your Spotify account'
                type='Personal Project'
                image='/images/Jamming.png'
                link='https://main.djfhhd91huokm.amplifyapp.com/'
              />
            </ProjectsGrid>
          </ProjectsDiv>
        </SectionDiv>

        <SectionDiv>
          <ResumeDiv id="resume">
            <ProjectsHeader>Resume</ProjectsHeader>
            <PDFDiv
              src="/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
              style={{ border: "none" }}
              $fullWidth={windowWidth > 650}
            ></PDFDiv>
            <a
              href="/resume.pdf"
              download="Ben_Siri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </ResumeDiv>
        </SectionDiv>

      </BodyDiv>
    </MainDiv>
  );
}

export default App;
