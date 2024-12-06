'use client'
import { useGsapInView } from '@/utils/animations/gsap'
import { useGSAP } from '@gsap/react'
import {Group, Stack, Title, Box, AspectRatio, Flex } from '@mantine/core'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP);
import { useMediaQuery } from '@mantine/hooks'

const Hero = ({ setPosition }: { 
    setPosition: (position: { x: number, y: number }) => void 
}) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery('(max-width: 30em)') 
    const isTablet = useMediaQuery('(max-width: 53em)') 

    useEffect(() => {
        if (parentRef.current) {
            const rect = parentRef.current.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const absoluteTop = rect.top + scrollTop;
            const absoluteLeft = rect.left;
            setPosition && setPosition({ x: absoluteLeft, y: absoluteTop });
        }
    }, [setPosition])

    const { ref } = useGsapInView({
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out'
    })
    return (
        <Stack gap={80} h='100%' >
            <Group justify='space-between' align='end' w='100%' gap={isMobile ? 30 : 40}>
                <Title 
                    order={1} 
                    lts={5} 
                    ref={ref} 
                    opacity={1}
                    className='fade-in-left'
                    style={{ fontSize: isMobile ? '3rem' : isTablet ? '4rem' : '5rem' }}
                >
                    <Stack>
                        <span style={{letterSpacing: 6}}>
                            FRONTEND
                        </span>
                        <span>
                            ENGINEER    
                        </span>
                    </Stack>
                </Title>
                <Flex w={isTablet ? '100%' : ''} justify='flex-end'>
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
                </Flex>
            </Group>
            <Group justify='space-between' align='start' w='100%' gap={isTablet ? 70 : 0}>
                <Box maw={300}>
                    <Title order={5} className='fade-in-up'>
                        I set out on my development journey 3 years ago, discovering the art of transforming ideas into digital reality.
                    </Title>    
                </Box>
                <Flex w={isTablet ? '100%' : ''} justify='flex-end'>
                <AspectRatio w={isMobile ? 350 : 500} h={isMobile ? 350 : 500} style={{ overflow: 'hidden' }}>
                    <Box w='100%' h='100%' ref={parentRef}/>
                </AspectRatio>    
                </Flex>
            </Group>
        </Stack>
    )
}

export default Hero