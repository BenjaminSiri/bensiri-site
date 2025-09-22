import React from "react";
import styled from "styled-components";
import  { Card, CardContent, CardActions, CardMedia }  from "@mui/material";
import { Accent, Accent2, Dark, Light } from "../globalStyles";

const StyledCard = styled(Card)`
    background-color: ${Light};
    max-width: 350px;
    height: 250px;

    &:hover{
        transform: translateY(-10px);
        transition: transform 0.2s ease-in-out;
    }
`;

const StyledCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
`;

interface ProjectCardProps {
    title: string;
    description: string;
    type: string;
    link: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, type, link, image}) => {

    const handleClick = () => {
        window.open(link, "_blank");
    }

    return(
        <StyledCard onClick={handleClick}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <StyledCardContent>
                <div>
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>
                <h5>{type}</h5>
            </StyledCardContent>
        </StyledCard>
    );
}

export default ProjectCard;