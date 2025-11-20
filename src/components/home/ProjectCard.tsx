import { Group, Text, Stack, AspectRatio, Image, Paper, Box } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import Badge from '@/components/ui/Badge'
import { useScrollAnimation } from '@/hooks/animations/useScrollAnimation'

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
    const desktopImageRef = useScrollAnimation<HTMLDivElement>({ variant: 'rotate', options: { scrub: true } })
    const mobileImageRef = useScrollAnimation<HTMLDivElement>({ variant: 'rotate', options: { scrub: true } })
  
  return (
    <>
      {/* Desktop */}
      <Stack align='start' visibleFrom='sm'>
          <Group justify='space-between' w='100%' h={35}>
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
          <Paper 
              bg='gray.2' 
              w='100%' 
              radius='md' 
              opacity={0}
              style={{ overflow: 'hidden' }} 
              ref={desktopImageRef}
          >
              <AspectRatio ratio={16 / 9} >
                  <Image src={image} alt={title} style={{ objectPosition: 'top' }}/>
              </AspectRatio>    
          </Paper>
      </Stack>

      {/* Mobile */}
      <Stack align='start' gap='sm' hiddenFrom='sm'>
        <Stack gap='xs' w='100%'>
          <Text fw={600} size='lg' ta='center'>{title}</Text>
          <Group gap='xs' justify='center' wrap='wrap'>
            {technologies.map((technology, index) => (
              <Badge key={technology} name={technology} color={badgeColor[index]}>{technology}</Badge>
            ))}
          </Group>
        </Stack>
        <Text size='sm' ta='center' w='100%'>{description}</Text>
        <Box w='100%' style={{ display: 'flex', justifyContent: 'center' }}>
          <Anchor href={link}>
            <Text fw={700}>View Project</Text>
          </Anchor>
        </Box>
        <Paper 
          bg='gray.2' 
          w='100%' 
          radius='md' 
          opacity={0}
          style={{ overflow: 'hidden' }} 
          ref={mobileImageRef}
        >
          <AspectRatio ratio={16 / 9} >
            <Image src={image} alt={title} style={{ objectPosition: 'top' }}/>
          </AspectRatio>    
        </Paper>
      </Stack>
    </>
  )
}

export default ProjectCard