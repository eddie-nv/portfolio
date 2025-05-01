'use client'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import { UnstyledButton, Container, Group, Stack, Text } from '@mantine/core'
import { ArrowLeft } from '@phosphor-icons/react'
import React from 'react'
import { useRouter } from 'next/navigation'

const BackButton = ( { children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <UnstyledButton onClick={onClick}>
      <Group gap={4} align='center'>
        <ArrowLeft size={20} />
        <Text size='sm'>{children}</Text>
      </Group>
    </UnstyledButton>
  )
}

const ProjectPage = () => {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <Container py={120} size='xs'>
        <Stack>
          <BackButton onClick={() => router.back()}>Back</BackButton>
          <BackButton onClick={() => router.push('/')}>Back to home</BackButton>
        </Stack>
      </Container>
      <Footer />
    </>
  )
}

export default ProjectPage
