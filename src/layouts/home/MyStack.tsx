import React from 'react'
import Flow from '@/components/Flow'
import { Stack, Title } from '@mantine/core'
import { heroNodes, heroEdges } from '@/utils/flowData'


const MyStack = () => {
    return (
        <Stack mt={50} gap={50}>
            <Title order={2}>
                My Stack
            </Title>    
            <Flow nodes={heroNodes} edges={heroEdges} />
        </Stack>
    )
}

export default MyStack