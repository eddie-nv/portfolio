import React from 'react'
import { AspectRatio, Stack, Title, Text, Flex } from '@mantine/core'
import Image, { StaticImageData } from 'next/image';

type Hero = {
    pic: StaticImageData;
    title: string;
    info: string[];
};

const ProjectHero = ({ project } : { project: Hero }) => {
    return (
        <Stack gap={70}>
            <AspectRatio ratio={3.5} style={{borderRadius: '5px', overflow: 'hidden'}}>
                <Image src={project?.pic} alt={project?.title} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
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