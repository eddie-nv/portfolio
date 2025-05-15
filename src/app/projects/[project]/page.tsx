'use client'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import { UnstyledButton, Container, Group, Stack, Text, Image, List, rem, AspectRatio, MantineProvider, Loader, Center } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import { ArrowLeft } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { projectsData } from '@/data/projectsData'
import { theme } from '@/app/theme'
import { Project } from '@/data/projectsData'

type ProjectKey = keyof typeof projectsData

type ProjectContent = {
  type: 'title' | 'text' | 'image' | 'list';
  title?: string;
  description?: string[];
  image?: string;
  imageDescription?: string;
  list?: string[];
}

const BackButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <UnstyledButton onClick={onClick}>
      <Group gap={4} align='center'>
        <ArrowLeft size={20} />
        <Text size='sm'>{children}</Text>
      </Group>
    </UnstyledButton>
  )
}

const renderProjectContent = (content: ProjectContent, index: number) => {
  switch (content.type) {
    case 'title':
      return <Text fw={700} mt={24} key={`${content.title}-${index}`}>{content.title}</Text>
    case 'text':
      return (
        <Stack gap={16} key={`text-${index}`}>
          {content.description?.map((paragraph, i) => (
            <Text key={`para-${index}-${i}`}>{paragraph}</Text>
          ))}
        </Stack>
      )
    case 'image':
      return (
        <Stack gap={8} key={`image-${index}`}>
          <AspectRatio ratio={16 / 9} bg="gray.1" >
            <Image 
              src={content.image} 
              alt={content.imageDescription || ''} 
              radius="md"
            />
          </AspectRatio>
          
          {content.imageDescription && (
            <Text size="sm" c="dimmed" ta="center">{content.imageDescription}</Text>
          )}
        </Stack>
      )
    case 'list':
      return (
        <List key={`list-${index}`} withPadding>
          {content.list?.map((item, i) => (
            <List.Item key={`list-item-${index}-${i}`}>{item}</List.Item>
          ))}
        </List>
      )
    default:
      return null
  }
}

const ProjectPage = ({ params }: { params: Promise<{ project: ProjectKey }> }) => {
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setLoading(true)
        const resolvedParams = await params
        const projectKey = resolvedParams.project
        
        if (!projectsData[projectKey]) {
          setError(`Project ${projectKey} not found`)
          return
        }
        
        setProject(projectsData[projectKey])
      } catch (err) {
        setError('Error loading project data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchProjectData()
  }, [params])
  
  return (
    <>
    <MantineProvider theme={theme}>
      <Navbar />
      <Container py={120} size='xs'>
        {loading ? (
          <Center>
            <Loader size="lg" />
          </Center>
        ) : error ? (
          <Text c="red" ta="center">{error}</Text>
        ) : project && (
          <Stack gap={32}>
            <BackButton onClick={() => router.back()}>Back</BackButton>
            <Text fw={700} size={rem(32)}>{project.mainTitle}</Text>
            <Text fw={500}>{project.hook}</Text>
            <Text>{project.description}</Text>
            <Anchor href={project.titleLink}>Check it out</Anchor>
            
            {project.projectContent.map((content, index) => renderProjectContent(content, index))}
            
            <BackButton onClick={() => router.push('/')}>Back to home</BackButton>
          </Stack>
        )}
      </Container>
      <Footer />
      </MantineProvider>
    </>
  )
}

export default ProjectPage
