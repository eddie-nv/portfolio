import { Box } from '@mantine/core';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';


const AnchorNode = memo(() => {
    return (
        <>
            <Box w={200} h={1}/>
            <Handle type="source" id="bottom" position={Position.Bottom} style={{ opacity: 0 }}/>
        </>
    );
});

AnchorNode.displayName = 'AnchorNode';

export default AnchorNode;