import { Stack, Title, Group, AspectRatio, Box, Flex, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const PROJECTS_DATA = [
    {
        image: '',
        title: 'Touchstone',
        description: 'Developed branding and worked on mobile frontend architecture ',
        slug: 'touchstone',
    },
    {
        image: '',
        title: 'Wrap and Tint My Ride',
        description: 'Applied Client-First principles to develop a site on Webflow for window tinting classes',
        slug: 'wrap_tint_my_ride',
    },
    {
        image: '',
        title: 'Infinite Ui',
        description: 'A plugin for Figma that took a sketch input and used AI to generate images of UI Mockups based on the sketch',
        slug: 'infinite_ui',
    }
]

const Projects = () => {
    const renderProjects = () => (
        PROJECTS_DATA.map((project, i) => {
            if (i % 2 === 0) {
                return (
                    <Group key={project.title} pl={( i + 1 ) % 3 === 0 ? 80 : 0} gap={40}>
                        <Link href={`/projects/${project.slug}`} passHref>
                            <AspectRatio ratio={1.3} w={200} bg='gray'>
                                <Box />
                            </AspectRatio>
                        </Link>
                        <Box w={200} pos='relative'>
                            <Stack pos='absolute' top={62}>
                                <Text size='sm'>{i + 1}</Text>
                                <Title order={5} >
                                    {project.title}
                                </Title>
                                <Text size='sm'>{project.description}</Text>
                            </Stack> 
                        </Box>
                    </Group>
                )
            } else {
                return (
                    <Group key={project.title} style={{flexDirection: 'row-reverse'}} gap={40}>
                        <Link href={`/projects/${project.slug}`} passHref>
                            <AspectRatio ratio={1.3} w={200} bg='gray'>
                                <Box />
                            </AspectRatio>
                        </Link>
                        <Box w={200} pos='relative'>
                            <Stack pos='absolute' top={62} ta='right'>
                                <Text size='sm'>{i + 1}</Text>
                                <Title order={5} >
                                    {project.title}
                                </Title>
                                <Text size='sm'>{project.description}</Text>
                            </Stack>
                        </Box>
                    </Group>
                )    
            }
        })
    )
    return (
        <Stack mt={50}>
            <Flex justify='center'>
                <Title order={2}>
                    PROJECTS
                </Title>    
            </Flex>
            <Stack pt={100} pb={150} gap={350}>
                { renderProjects() }
            </Stack>
        </Stack>
    )
}

export default Projects