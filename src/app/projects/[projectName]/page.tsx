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
    wrap_tint_my_ride: Project;
    infinite_ui: Project;
};

const PROJECT_CONTENT: Projects = {
    touchstone: {
        hero: {
            pic: '',
            title: 'TouchStone',
            info: [
                'Touchstone aims at reducing STD infections by providing convinent at home testing, and allowing for verified sharing of results.', 
                "I was tasked with setting up the frontend architecture which included picking which libraries to use, organizing the project's file structure, setting up rules for contributing code, and building the initial landing page.", 
                "Check out TouchStone's journey so far here"
            ],
        },
        approach: '',
        showcase: '',
    },
    wrap_tint_my_ride: {
        hero: {
            pic: '',
            title: 'Wrap andTint My Ride',
            info: [
                'I worked alongside a designer to create a website using WebFlow for a client who wanted to offer custom car wrapping and tinting training to others.', 
                'I followed the client first guidelines by finsweet which includes a strategy for classes, a style guide, and design system.', 
                'Check out the website here'
            ],
        },
        approach: '',
        showcase: '',
    },
    infinite_ui: {
        hero: {
            pic: '',
            title: 'Infinite UI',
            info: [
                '3rd place entry to the AGI House UI/UX hackathon. I worked with a designer and a backend developer to build aplugin for figma that would allow users to generate infinite UI mockups from a sketch.', 
                'I learned how to work with Figma\'s API to create the plugin in typescript. Once the user sumbitted a sketch, I used axios to send the data to the backend server which would then generate a mockup and send it back to the user.', 
                'Check out the plugin here'
            ],
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