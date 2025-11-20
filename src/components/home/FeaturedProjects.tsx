import { Container, Text, Stack, Grid, Box, Group } from '@mantine/core'
import ProjectCard from './ProjectCard'

type Project = {
    title: string
    description: string
    image: string
    timeWorked: string
    technologies: string[]
    link: string
    badgeColor: string[]
}

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
    return (
        <>
            {/* Desktop */}
            <Container py='xl' w='100%' visibleFrom='sm'>
                <Stack gap={80}>
                    <Grid>
                        <Grid.Col span={3} >
                            <Box ta="right" h={50}/>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text size='lg'>Selected Projects</Text>
                        </Grid.Col>
                    </Grid>
                    {projects.map((project) => (
                        <Grid key={project.title} gutter={25}>
                            <Grid.Col span={3}>
                                <Group justify='flex-end' h={35}>
                                    <Text ta='right' size='sm'>{project.timeWorked}</Text>
                                </Group>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <ProjectCard {...project} />
                            </Grid.Col>
                        </Grid>
                    ))} 
                </Stack>
            </Container>
            
            {/* Mobile */}
            <Container py='lg' w='100%' hiddenFrom='sm'>
                <Stack gap={80}>
                    <Text size='lg' ta='center'>Selected Projects</Text>
                    {projects.map((project) => (
                        <Stack key={project.title} gap='sm'>
                            <Text size='md' c='dimmed' ta='center'>{project.timeWorked}</Text>
                            <ProjectCard {...project} />
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </>    
    )
}

export default FeaturedProjects