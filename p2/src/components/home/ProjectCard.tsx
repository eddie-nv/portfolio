import { Group, Text, Stack, AspectRatio, Image, Paper } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import Badge from '@/components/ui/Badge'
import React from 'react'

type ProjectCardProps = {
    title: string
    description: string
    image: string
    timeWorked: string
    technologies: string[]
    link: string
    badgeColor: string[]
}

const ProjectCard = ({ title, description, image, technologies, link, badgeColor }: ProjectCardProps) => {
  return (
    <Stack align='flex-start' w={500}>
        <Group justify='space-between' w='100%'>
                <Text fw={600}>{title}</Text>
                <Group gap='xs' maw={350}>
                    {technologies.map((technology, index) => (
                        <Badge key={technology} name={technology} color={badgeColor[index]}>{technology}</Badge>
                    ))}
                </Group>
        </Group>  
        <Text>{description}</Text>
        <Anchor href={link}>
            <Text fw={700}>View Project</Text>
        </Anchor>
        <Paper bg='gray.2' w='100%' radius='sm' style={{ overflow: 'hidden' }}>
            <AspectRatio ratio={16 / 9} bg='gray.2'>
                <Image src={image} alt={title} />
            </AspectRatio>    
        </Paper>
        
    </Stack>
        
  )
}

export default ProjectCard