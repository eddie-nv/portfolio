import React, { useRef } from 'react'
import Flow from '@/components/Flow'
import { Box, Stack, Title } from '@mantine/core'
import { getHeroFlowData } from '@/utils/flowData'


const MyStack = () => {
    const flowWrapperRef = useRef<HTMLDivElement>(null);

    const { heroNodes, heroEdges } = getHeroFlowData(); 
        
    return (
        <Stack mt={50} gap={50}>
            <Title order={2}>
                My Stack
            </Title>    
            <Box ref={flowWrapperRef}>
                <Flow initialNodes={heroNodes} initialEdges={heroEdges}  />    
            </Box>
            
        </Stack>
    )
}

export default MyStack