import React, { useRef, useState, useEffect } from 'react';
import { Grid, Box, rem } from '@mantine/core';

const NUM_COLUMNS = 18;
const GAP = 0;
const BLACK_FILL_INDICES = new Set([57, 59, 66, 68, 76, 85, 93, 95, 102, 104, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 202, 204, 206, 220, 222, 224, 238, 242, 257, 258, 259]);
const RED_FILL_INDICES = new Set([203, 205, 221, 223, 239, 240, 241]);

function GridFace() {
    const parentRef = useRef<HTMLDivElement>(null);
    const [cellHeight, setCellHeight] = useState<number | null>(null);

    useEffect(() => {
        if (!parentRef.current) return;
        const calculatedHeight = calculateCellHeight(parentRef.current.clientWidth);
        setCellHeight(calculatedHeight);
    }, [parentRef]);

    const calculateCellHeight = (parentWidth: number) => {
        return (parentWidth - (GAP * (NUM_COLUMNS + 1))) / NUM_COLUMNS;
    };

    const getDirectionKey = (event: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const { width, height, top, left } = node.getBoundingClientRect();
        const offsetX = event.pageX - (left + window.scrollX);
        const offsetY = event.pageY - (top + window.scrollY);
        const x = (offsetX - (width / 2) * (width > height ? (height / width) : 1));
        const y = (offsetY - (height / 2) * (height > width ? (width / height) : 1));
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const direction = getDirectionKey(event, node);
        updateNodeClass(node, `in-${['top', 'right', 'bottom', 'left'][direction]}`);
        updateInfoBackgroundColor(node, 'white');
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const direction = getDirectionKey(event, node);
        updateNodeClass(node, `out-${['top', 'right', 'bottom', 'left'][direction]}`);
    };

    const updateNodeClass = (node: HTMLDivElement, newClass: string) => {
        node.classList.remove('in-top', 'in-right', 'in-bottom', 'in-left', 'out-top', 'out-right', 'out-bottom', 'out-left');
        node.classList.add(newClass);
    };

    const updateInfoBackgroundColor = (node: HTMLDivElement, color: string) => {
        const infoDiv = node.querySelector('.info') as HTMLDivElement;
        if (infoDiv) {
            infoDiv.style.backgroundColor = color;
        }
    };

    const getBackgroundColor = (index: number) => {
        if (BLACK_FILL_INDICES.has(index)) return 'black';
        if (RED_FILL_INDICES.has(index)) return 'red';
        return 'white';
    };

    return (
        <Box ref={parentRef} p={rem(GAP)} w='100%' h='100%'>
            <Grid columns={NUM_COLUMNS} gutter={rem(GAP)} style={cellHeight ? {borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray'} : {}}>
                {Array.from(Array(NUM_COLUMNS * 18)).map((_, index) => {
                    const backgroundColor = getBackgroundColor(index);
                    return (
                        <Grid.Col span={1} key={index} className='grid-box'>
                            {cellHeight && 
                                <Box 
                                    w='100%' 
                                    h={rem(cellHeight)} 
                                    onMouseOver={(ev) => handleMouseOver(ev, ev.currentTarget)}
                                    onMouseOut={(ev) => handleMouseOut(ev, ev.currentTarget)}
                                    style={{ 
                                        backgroundColor, 
                                        borderTop: '1px solid lightgray', 
                                        borderLeft: '1px solid lightgray', 
                                        borderRadius: rem(2) 
                                    }}
                                >
                                    <div className="info"/>   
                                </Box>
                            }
                        </Grid.Col>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default GridFace;
