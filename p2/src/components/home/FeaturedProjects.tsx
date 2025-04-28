import React from 'react'
import { Container, Flex, Text, Stack, Group, Box } from '@mantine/core'
import ProjectCard from './ProjectCard'

type Project = {
    title: string
    description: string
    image: string
    timeWorked: string
    technologies: string[]
    link: string
}

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
    // Calculate the max width based on the longest timeWorked string
    const maxTimeWorked = Math.max(...projects.map(p => p.timeWorked.length))
    const timeWorkedWidth = maxTimeWorked * 14 // Approximate width based on character count

    const TimeWorkedSpacing = ({ children }: { children?: React.ReactNode }) => (
        <Box ta='right' h={40} w={timeWorkedWidth} style={{ minWidth: timeWorkedWidth }}>
            {children}
        </Box>
    )

    return (
        <Container py='xl'>
            <Flex justify='center' align='center' h='100%'>
                <Stack gap='xl' align='stretch' style={{ transform: `translateX(-${timeWorkedWidth / 2}px)` }}>
                    <Group>
                        <TimeWorkedSpacing />
                        <Text size='lg'>Selected Projects</Text>
                    </Group>
                    {projects.map((project) => (
                        <Group key={project.title} align='flex-start'>
                            <TimeWorkedSpacing>{project.timeWorked}</TimeWorkedSpacing>
                            <ProjectCard {...project} />
                        </Group>
                    ))} 
                </Stack>
            </Flex>
        </Container>    
    )
}

export default FeaturedProjects