import { Stack, Title, Group, AspectRatio, Box, Flex, Text } from '@mantine/core'
import React from 'react'


const MyStack = () => {
    return (
        <Stack mt={50}>
            <Flex justify='center'>
                <Title order={2}>
                    MyStack
                </Title>    
            </Flex>
            <Stack pt={100} pb={150} gap={350}>
                
            </Stack>
        </Stack>
    )
}

export default MyStack