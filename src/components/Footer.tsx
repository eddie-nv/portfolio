import React from 'react'
import { AspectRatio, Box, Flex } from '@mantine/core'


const Footer = () => {
    return (
        <Flex justify='center' h={100} pos='relative' style={{borderTop: '1px solid black'}}>
            <AspectRatio ratio={1} w={50} bg='gray' pos='absolute' top={-25}>
                <Box >

                </Box>
            </AspectRatio> 
        </Flex>
    )
}

export default Footer