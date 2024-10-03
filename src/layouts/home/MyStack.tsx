import Flow from '@/components/Flow'
import { Stack, Title } from '@mantine/core'
import React from 'react'


const MyStack = () => {
    return (
        <Stack mt={50} gap={50}>
            <Title order={2}>
                My Stack
            </Title>    
            <Flow />
        </Stack>
    )
}

export default MyStack