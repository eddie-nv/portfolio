'use client'
import { useGsapInView } from '@/utils/animations/gsap'
import { useGSAP } from '@gsap/react'
import {Group, Stack, Title, Box, AspectRatio } from '@mantine/core'
import React from 'react'
import gsap from 'gsap'
import GridFace  from '@/components/GridFace'

gsap.registerPlugin(useGSAP);

const Hero = () => {
    
    const { ref } = useGsapInView({
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out'
    })
    return (
        <Stack justify='center' align='center' gap={80} h='100%' >
            <Group justify='space-between' align='end' w='100%'>
                <Title order={1} lts={5} ref={ref} opacity={1} className='fade-in-left'>
                    <Stack>
                        <span style={{letterSpacing: 6}}>
                            FRONTEND
                        </span>
                        <span>
                            ENGINEER    
                        </span>
                    </Stack>
                </Title>
                <Box >
                    <Title order={5} ta='right' className='fade-in-right'>
                        <Stack gap={0}>
                            <span>
                                If You Don&apos;t Take Risks, You 
                            </span>
                            <span>
                                Can&apos;t Create A Future    
                            </span>
                        </Stack>
                    </Title>    
                </Box>
            </Group>
            <Group justify='space-between' align='start' w='100%'>
                <Box maw={300}>
                    <Title order={5} className='fade-in-up'>
                        I set out to walk the path of a coder 3 years ago, along the way learning what it takes to bring dreams to life. 
                    </Title>    
                </Box>
                <AspectRatio ratio={1} w={500} className='fade-in-up'>
                    <Box h='100%' w='100%' >
                        <GridFace />
                    </Box>
                </AspectRatio>
            </Group>
        </Stack>
    )
}

export default Hero