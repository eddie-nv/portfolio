import React from 'react'
import { AspectRatio, Box, Stack, Title, Text, Flex } from '@mantine/core'

type Hero = {
    pic: string;
    title: string;
    info: string[];
};

const ProjectHero = ({ project } : { project: Hero }) => {
    return (
        <Stack gap={70}>
            <AspectRatio bg='gray' ratio={4.5} >
                <Box />
            </AspectRatio> 
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
        </Stack>
    )
}

export default ProjectHero