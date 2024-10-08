'use client'
import { AspectRatio, Stack, Title, Flex, Box, Button, ButtonGroup } from '@mantine/core'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Showcase = ({ project } : { project: { bg: StaticImageData, video: string, prev: string, next: string } }) => {
  return (
    <Stack gap={100}>
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
      <Flex justify='end'>
        <ButtonGroup >
          {project?.prev ? (
            <Button
              component={Link}
              href={`/projects/${project?.prev}`}
              bg='white'
              c='black'
              w={100}
              h={100}
              style={{ border: '2px solid black', borderRight: '1px solid black' }} 
            >
              {'<'}
            </Button>
          ) :
            <Button
              bg='white'
              c='black'
              w={100}
              h={100}
              disabled
              style={{ border: '2px solid black', borderRight: '1px solid black' }} 
            >
              {'<'}
            </Button>
          }
          {project?.next ? (
            <Button
              component={Link}
              href={`/projects/${project?.next}`}
              bg='white'
              c='black'
              w={100}
              h={100}
              style={{ border: '2px solid black', borderLeft: '1px solid black' }} 
            >
              {'>'}
            </Button>
          ):
            <Button
              bg='white'
              c='black'
              w={100}
              h={100}
              disabled
              style={{ border: '2px solid black', borderLeft: '1px solid black' }} 
            >
              {'>'}
            </Button>
          }
        </ButtonGroup>
          
      </Flex>
    </Stack>
  )
}

export default Showcase