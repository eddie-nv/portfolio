import React from 'react'
import {  Stack, Title, Text, Flex } from '@mantine/core'
import ProjectSwitch from '@/components/ProjectSwitch';

type Hero = {
    title: string;
    info: string[];
    prev: string;
    next: string;
};

const ProjectHero = ({ project } : { project: Hero }) => {
    return (
        <Stack gap={70}>
            <Title order={3} mt={50}>
                {project?.title}
            </Title>   
            <Flex justify='end'>
                <Stack maw={720}>
                    {project?.info.map(text => (
                        <Text key={text}>
                            {text}
                        </Text>
                    ))}
                </Stack>    
            </Flex>
            <Flex justify='end'>
                <ProjectSwitch prev={project?.prev} next={project?.next} />
            </Flex>
        </Stack>
    )
}

export default ProjectHero