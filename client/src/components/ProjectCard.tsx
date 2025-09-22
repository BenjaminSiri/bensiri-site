import React from "react";
import styled from "styled-components";
import  { Card, CardContent, CardActions, Typography }  from "@mui/material";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link}) => {

    return(
        <Card>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;