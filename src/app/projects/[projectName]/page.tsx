import React from 'react'
import { Container, Stack } from '@mantine/core'
import ProjectHero from '@/layouts/projects/ProjectHero'
import Approach from '@/layouts/projects/Approach'
import Showcase from '@/layouts/projects/Showcase'

type Hero = {
    pic: string;
    title: string;
    info: string[];
};

type Project = {
    hero: Hero;
    approach: string;
    showcase: string;
};

type Projects = {
    touchstone: Project;
    projectTwo: Project;
    projectThree: Project;
};

const PROJECT_CONTENT: Projects = {
    touchstone: {
        hero: {
            pic: '',
            title: 'TouchStone',
            info: [
                'Touchstone aims at reducing STD infections by providing convinent at home testing, and allowing for verified sharing of results.', 
                "I was tasked with setting up the frontend architecture which included picking which libraries to use, organizing the project's file structure, setting up rules for contributing code, and learning how to best work with designers to bring their ideas to life.", 
                "Check out TouchStone's journey so far here"
            ],
        },
        approach: '',
        showcase: '',
    },
    projectTwo: {
        hero: {
            pic: '',
            title: 'projectTwo',
            info: ['projectTwo', 'projectTwo', 'projectTwo'],
        },
        approach: '',
        showcase: '',
    },
    projectThree: {
        hero: {
            pic: '',
            title: 'projectTwo',
            info: ['projectTwo', 'projectTwo', 'projectTwo'],
        },
        approach: '',
        showcase: '',
    },
};

const Projects = ({ params }: { params: { projectName: string } }) => {
    const project = params.projectName as keyof Projects;
    return (
        <Container mt={50} mb={150}>
            <Stack gap={250}>
                <ProjectHero project={PROJECT_CONTENT[project]?.hero}/>
                <Approach project={PROJECT_CONTENT[project]?.approach}/>
                <Showcase project={PROJECT_CONTENT[project]?.showcase}/>
            </Stack>
        </Container>
    )
}

export default Projects