import React, { useRef, useState, useEffect } from 'react'
import Flow from '@/components/Flow'
import { Box, Stack, Title } from '@mantine/core'
import { getHeroFlowData } from '@/utils/flowData'


const MyStack = () => {
    const flowWrapperRef = useRef<HTMLDivElement>(null);
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const { heroNodes, heroEdges, height } = getHeroFlowData();

    
    // useEffect(() => {
    //     const updateDimensions = () => {
    //       if (flowWrapperRef.current) {
    //         setDimensions({
    //           width: flowWrapperRef.current.offsetWidth,
    //           height: flowWrapperRef.current.offsetHeight,
    //         });
    //       }
    //     };
    
    //     updateDimensions();
    //     window.addEventListener('resize', updateDimensions);
    
    //     return () => window.removeEventListener('resize', updateDimensions);
    //   }, []);    
        
    return (
        <Stack mt={50} gap={50}>
            <Title order={2}>
                My Stack
            </Title>    
            <Box ref={flowWrapperRef}>
                <Flow initialNodes={heroNodes} initialEdges={heroEdges} height={height} />    
            </Box>
            
        </Stack>
    )
}

export default MyStack