'use client'
import React from 'react'
import { Container, Flex, Stack } from '@mantine/core'
import { AppLayout } from '@/components/AppLayout'
import Header from '@/layouts/projects/Header'
import Description from '@/layouts/projects/Description'
import Showcase from '@/layouts/projects/Showcase'
import ProjectStack from '@/layouts/projects/ProjectStack'
import touchHeader from '/public/images/touchstone_header.png'
import touchBg from '/public/images/touchstone_bg.png'
import wrapTintHeader from '/public/images/wrap_and_tint_header.png'
import wrapTintBg from '/public/images/wrap_and_tint_bg.png'
import infiniteUiHeader from '/public/images/infinite_ui_header.png'
import infiniteUiBg from '/public/images/infinite_ui_bg.png'
import dashboardHeader from '/public/images/dashboard_header.png'
import dashboardBg from '/public/images/dashboard_bg.png'
import { getTouchstoneFlowData, getWrapTintFlowData, getInfiniteUiFlowData, getDashboardFlowData } from '@/utils/flowData'
import { StaticImageData } from 'next/image'
import ProjectSwitch from '@/components/ProjectSwitch'


type Hero = {
    title: string;
    info: string[];
    prev: string;
    next: string;
    link: string;
};

type Project = {
    hero: Hero;
    approach: string;
    showcase: {
        title: string;
        pic?: StaticImageData;
        bg?: StaticImageData;
        video?: string;
    }
};

type Projects = {
    dashboard: Project;
    touchstone: Project;
    wrap_tint_my_ride: Project;
    infinite_ui: Project;
};

const PROJECT_CONTENT: Projects = {
    dashboard: {
        hero: {
            title: 'Dashboard',
            info: [
                'A dashboard for managing and visualizing data inspired by a dribbble design',
                'I built the dashboard using Next.js, TypeScript, AG Charts, and Ant Design',
                'Check out the dashboard '
            ],
            prev: '/',
            next: '/projects/touchstone',
            link: '/demo/dashboard'
        },
        approach: '',
        showcase: {
            title: 'Dashboard',
            video: '',
            pic: dashboardHeader,
            bg: dashboardBg,
        },
    },
    touchstone: {
        hero: {
            title: 'TouchStone',
            info: [
                'Touchstone aims at reducing STD infections by providing convinent at home testing, and allowing for verified sharing of results.', 
                "I was tasked with setting up the frontend architecture which included picking which libraries to use, organizing the project's file structure, setting up rules for contributing code, and building the initial landing page.", 
                "Check out TouchStone's journey so far "
            ],
            prev: '/projects/dashboard',
            next: '/projects/wrap_tint_my_ride',
            link: 'https://www.linkedin.com/company/touchstone-inc/'
        },
        approach: '',
        showcase: {
            title: 'TouchStone',
            pic: touchHeader,
            bg: touchBg,
            video: '/videos/touchstone.mp4',
        },
    },
    wrap_tint_my_ride: {
        hero: {
            title: 'Wrap and Tint My Ride',
            info: [
                'I worked alongside a designer to create a website using WebFlow for a client who wanted to offer custom car wrapping and tinting training to others.', 
                'I followed the client first guidelines by finsweet which includes a strategy for classes, a style guide, and design system.', 
                'Check out the website '
            ],
            prev: '/projects/touchstone',
            next: '/projects/infinite_ui',
            link: 'https://www.wrapandtintmyride.com/'
        },
        approach: '',
        showcase: {
            title: 'Wrap andTint My Ride',
            pic: wrapTintHeader,
            bg: wrapTintBg,
            video: '/videos/wrap_and_tint.mp4',
        },
    },
    infinite_ui: {
        hero: {
            title: 'Infinite UI',
            info: [
                '3rd place entry to the AGI House UI/UX hackathon. I worked with a designer and a backend developer to build a plugin for figma that would allow users to generate infinite UI mockups from a sketch.', 
                'I learned how to work with Figma\'s API to create the plugin in typescript. Once the user sumbitted a sketch, I used axios to send the data to the backend server which would then generate a mockup and send it back to the user.', 
                'Check out the plugin '
            ],
            prev: '/projects/wrap_tint_my_ride',
            next: '/',
            link: 'https://www.figma.com/community/plugin/1255528948875748925'
        },
        approach: '',
        showcase: {
            title: 'Infinite UI',
            pic: infiniteUiHeader,
            bg: infiniteUiBg,
            video: '/videos/infinite_ui.mp4',
        },
    },
};

const getFlowData = (projectName: string) => {
    switch (projectName) {
        case 'dashboard':
            return getDashboardFlowData;
        case 'touchstone':
            return getTouchstoneFlowData;
        case 'wrap_tint_my_ride':
            return getWrapTintFlowData;
        case 'infinite_ui':
            return getInfiniteUiFlowData;
    }
};

const Projects = ({ params }: { params: { projectName: string } }) => {
    const project = params.projectName as keyof Projects;
    return (
        <AppLayout>
            <Container mt={50} mb={150}>
                <Stack gap={70}>
                    <Header project={PROJECT_CONTENT[project]?.showcase}/>
                    <Description project={PROJECT_CONTENT[project]?.hero}/>
                    <Showcase 
                        project={PROJECT_CONTENT[project]?.showcase} 
                    />
                    <ProjectStack flow={getFlowData(params.projectName) || (() => ({ projectNodes: [], projectEdges: []}))}/>
                    <Flex justify='end'>
                        <ProjectSwitch prev={PROJECT_CONTENT[project]?.hero.prev} next={PROJECT_CONTENT[project]?.hero.next} />
                    </Flex>
                </Stack>
            </Container>
        </AppLayout>
    )
}

export default Projects
