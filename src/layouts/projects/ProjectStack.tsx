'use client'
import { Stack, Title, Box } from '@mantine/core'
import { useRef } from 'react'
import Flow from '@/components/Flow'
import { Edge, Node } from 'reactflow'

type ProjectStackProps = {
  flow: () => {
    projectNodes: Node[]
    projectEdges: Edge[]
  }
}

const ProjectStack = ({ flow }: ProjectStackProps) => {
  const flowWrapperRef = useRef<HTMLDivElement>(null)
  const { projectNodes, projectEdges } = flow()

  return (
    <Stack gap={70}>
      <Title order={2}>
        Project Stack
      </Title>
      <Box ref={flowWrapperRef}>
        <Flow 
          initialNodes={projectNodes} 
          initialEdges={projectEdges}
        />
      </Box>
    </Stack>
  )
}

export default ProjectStack 