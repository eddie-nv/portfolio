import React, { useRef, useState, useEffect } from 'react';
import { Grid, Box, rem } from '@mantine/core';

type GridParentProps = {
    numColumns?: number;
    numRows?: number;
    gap?: number;
    fill?: (props: { cellHeight: number; cellWidth: number; index: number }) => React.ReactNode;
};

function GridParent({ numColumns = 18, numRows = 18, gap = 0, fill }: GridParentProps) {
    const parentRef = useRef<HTMLDivElement>(null);
    const [cellHeight, setCellHeight] = useState<number | null>(null);
    const [cellWidth, setCellWidth] = useState<number | null>(null);
    useEffect(() => {
        const calculateCellHeight = (parentWidth: number) => {
            return (parentWidth - (gap * (numColumns + 1))) / numColumns;
        };
        const calculateCellWidth = (parentHeight: number) => {
            return (parentHeight - (gap * (numRows + 1))) / numRows;
        };
        if (!parentRef.current) return;
        const calculatedHeight = calculateCellHeight(parentRef.current.clientWidth);
        const calculatedWidth = calculateCellWidth(parentRef.current.clientHeight);
        console.log('parent: ', parentRef.current.clientHeight, parentRef.current.clientWidth)
        console.log('calculated: ', calculatedHeight, calculatedWidth)
        setCellHeight(calculatedHeight);
        setCellWidth(calculatedWidth);
    }, [parentRef, numColumns, numRows, gap]);

    return (
        <Box ref={parentRef} p={rem(gap)} w='100%' h='100%' pos='relative' >
            <Grid columns={numColumns} gutter={rem(gap)} style={cellHeight ? {borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray'} : {}}>
                {Array.from(Array(numColumns * numRows)).map((_, index) => (
                    <Grid.Col span={1} key={index} className='grid-box'>
                        {cellHeight && cellWidth && fill && 
                            fill({ cellHeight, cellWidth, index })
                        }
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
}

export default GridParent;