import { Box, Text } from '@mantine/core';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';


const SubNode = memo(({ data }: { data: { label: string } }) => {

    return (
        <>
            <Box  p='10px 20px' 
                style={{ 
                    borderRadius: '3px', 
                    border: '2px solid #000', 
                    boxShadow: '6px 6px 0 1px rgba(0, 0, 0, 0.7)'
                }}
            >
                <Text fw={600}>
                    {data.label}
                </Text>
            </Box>
            <Handle type="target" id="left" position={Position.Left} style={{ opacity: 0 }}/>
            <Handle type="target" id="right" position={Position.Right} style={{ opacity: 0 }}/>
            <Handle type="target" id="bottom" position={Position.Bottom} style={{ opacity: 0 }}/>
            <Handle type="target" id="top" position={Position.Top} style={{ opacity: 0 }}/>
        </>
    );
});

SubNode.displayName = 'SubNode';

export default SubNode;