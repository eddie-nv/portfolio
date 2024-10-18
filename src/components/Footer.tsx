'use client'
import React from 'react'
import { AspectRatio, Flex, Box } from '@mantine/core'
import tongueFace from '/public/images/tongue_face.png'
import Image from 'next/image'
import GridParent from '@/components/GridParent'
import MouseDirectionHandler from '@/components/MouseDirectionHandler'


const Footer = () => {
    return (
        <Flex justify='center' h={125} pos='relative'>
            <GridParent 
                fill={({ cellHeight, cellWidth, index }) => (
                    <MouseDirectionHandler cellHeight={cellHeight} cellWidth={cellWidth} index={index} />
                )}
            />
            <AspectRatio ratio={1} w={50} pos='absolute' top={-25} >
                <Box bg='white' w='100%' h='100%' style={{boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.2)'}}>
                    <Image src={tongueFace} alt='tongue face' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                </Box>
            </AspectRatio> 
        </Flex>
    )
}

export default Footer