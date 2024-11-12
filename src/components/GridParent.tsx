import React, { useRef, useState, useEffect } from 'react';
import { Grid, Box, rem } from '@mantine/core';

type GridParentProps = {
    gap?: number;
    type?: 'fixed' | 'dynamic';
    fill?: (props: { cellHeight: number; cellWidth: number; index: number }) => React.ReactNode;
};          

function GridParent({ gap = 0, fill, type = 'dynamic' }: GridParentProps) {
    const parentRef = useRef<HTMLDivElement>(null);
    const [columns, setColumns] = useState<number>(0);
    const [rows, setRows] = useState<number>(0);
    const [cellHeight, setCellHeight] = useState<number | null>(null);
    const [cellWidth, setCellWidth] = useState<number | null>(null);

    

    useEffect(() => {
        const calculateGridSize = () => {
            if (!parentRef.current) return;
            if (type === 'fixed') {
                const newColumns = 18;
                const newRows = 18;
                setColumns(newColumns);
                setRows(newRows);
                setCellHeight((parentRef.current.clientHeight - (gap * (newRows + 1))) / newRows);
                setCellWidth((parentRef.current.clientWidth - (gap * (newColumns + 1))) / newColumns);
            } else if (type === 'dynamic') {
                const size = 30
                const newColumns = Math.floor(parentRef.current.clientWidth / size);
                const newRows = Math.floor(parentRef.current.clientHeight / size);
                setColumns(newColumns);
                setRows(newRows);
                setCellHeight((parentRef.current.clientHeight - (gap * (newRows + 1))) / newRows);
                setCellWidth((parentRef.current.clientWidth - (gap * (newColumns + 1))) / newColumns);
            }
        };

        calculateGridSize();
        window.addEventListener('resize', calculateGridSize);
        return () => window.removeEventListener('resize', calculateGridSize);
    }, [gap]);

    return (
        <Box ref={parentRef} p={rem(gap)} h="100%" w="100%">
            <Grid 
                columns={columns} 
                gutter={rem(gap)} 
                style={{
                    height: '100%',
                    width: '100%',
                    borderBottom: cellHeight ? '1px solid lightgray' : 'none',
                    borderRight: cellHeight ? '1px solid lightgray' : 'none'
                }}
            >
                {Array.from(Array(columns * rows)).map((_, index) => (
                    <Grid.Col 
                        span={1} 
                        key={index} 
                        className='grid-box'
                        style={{ height: `${100 / rows}%` }}
                    >
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
