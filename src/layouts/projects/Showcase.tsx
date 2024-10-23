'use client'
import { AspectRatio, Stack, Title, Flex, Box } from '@mantine/core'
import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import Flow from '@/components/Flow'
import { Edge, Node } from 'reactflow'

const Showcase = ({ project, flow }: { 
  project: { 
    title: string
    video: string, 
    pic: StaticImageData, 
    bg: StaticImageData,  
  },
  flow: () => { projectNodes: Node[], projectEdges: Edge[] };
}) => {
  const flowWrapperRef = useRef<HTMLDivElement>(null);

  const { projectNodes, projectEdges } = flow();

  return (
    <Stack gap={70}>
      <AspectRatio ratio={3.5} style={{borderRadius: '5px', overflow: 'hidden'}}>
          <Image src={project?.pic} alt={project?.title} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
      </AspectRatio>
      <Title order={2}>
        Project Stack
      </Title>
      <Box ref={flowWrapperRef}>
        <Flow initialNodes={projectNodes} initialEdges={projectEdges}/>
      </Box>
      <Flex justify='end'>
        <Title order={2}>
          Showcase
        </Title>  
      </Flex> 
      <AspectRatio ratio={1.8} style={{borderRadius: '5px', overflow: 'hidden'}} pos='relative'>
        <Box pos='absolute' top={0} left={0} w='100%' h='100%'>
          <Flex justify='center' align='center' h='100%'>
            <video width="800" controls src={project?.video} autoPlay muted loop style={{borderRadius: '5px'}}/>
          </Flex>
        </Box>
        <Image src={project?.bg} alt='showcase' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
      </AspectRatio>
    </Stack>
  )
}

export default Showcase