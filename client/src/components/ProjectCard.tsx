import React from "react";
import styled from "styled-components";
import  { Card, CardContent, CardActions, CardMedia }  from "@mui/material";
import { Accent, Accent2, Dark, Light } from "../globalStyles";

const StyledCard = styled(Card)`
    background-color: ${Light};
    max-width: 350px;

    &:hover{
        transform: translateY(-10px);
        transition: transform 0.2s ease-in-out;
    }
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
            <CardContent>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h5>{type}</h5>
            </CardContent>
        </StyledCard>
    );
}

export default ProjectCard;