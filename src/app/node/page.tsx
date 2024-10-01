'use client'
import React from 'react'
import Flow from '@/components/Flow'
import { Container } from '@mantine/core'
import { ReactFlowProvider } from 'reactflow'

const Node = () => {
    return (
        <ReactFlowProvider>
            <Container>
                <Flow />
            </Container>
        </ReactFlowProvider>
    )
}

export default Node