'use client'
import { AspectRatio, Stack, Title, Flex, Box } from '@mantine/core'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

const Showcase = ({ project }: { 
  project: { 
    title: string
    video?: string, 
    pic?: StaticImageData, 
    bg?: StaticImageData,  
  }
}) => {

  return (
    <Stack gap={70}>
      <Flex justify='end'>
        <Title order={2}>
          Showcase
        </Title>  
      </Flex> 
      <AspectRatio ratio={1.8} style={{borderRadius: '5px', overflow: 'hidden'}} pos='relative'>
        {project?.video && (
          <Box pos='absolute' top={0} left={0} w='100%' h='100%'>
            <Flex justify='center' align='center' h='100%'>
              <video width="800" controls src={project.video} autoPlay muted loop style={{borderRadius: '5px'}}/>
            </Flex>
          </Box>
        )}
        <Image src={project?.bg || ''} alt='showcase' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
      </AspectRatio>
    </Stack>
  )
}

export default Showcase