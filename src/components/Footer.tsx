import React from 'react'
import { AspectRatio, Flex } from '@mantine/core'
import tongueFace from '/public/images/tongue_face.png'
import Image from 'next/image'


const Footer = () => {
    return (
        <Flex justify='center' h={125} pos='relative' style={{borderTop: '1px solid black'}}>
            <AspectRatio ratio={1} w={50}  pos='absolute' top={-25} style={{boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.2)'}}>
                <Image src={tongueFace} alt='tongue face' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
            </AspectRatio> 
        </Flex>
    )
}

export default Footer