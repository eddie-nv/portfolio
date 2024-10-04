import React, { useRef, useState, useEffect } from 'react';
import { Grid, Box, rem } from '@mantine/core';


function GridFace() {
    const numColumns = 18;
    const gap = 0;

    const parent = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        if (!parent.current) return;
        const h = (parent.current.clientWidth - (gap * (numColumns + 1))) / numColumns;
        setHeight(h);
    }, [parent, gap, numColumns]);

    const blackFill = new Set([57, 59, 66, 68, 76, 85, 93, 95, 102, 104, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 202, 204, 206, 220, 222, 224, 238, 242, 257, 258, 259]);
    const redFill = new Set([203, 205, 221, 223, 239, 240, 241]);

    const getDirectionKey = (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const { width, height, top, left } = node.getBoundingClientRect();
        const l = ev.pageX - (left + window.scrollX);
        const t = ev.pageY - (top + window.scrollY);
        const x = (l - (width / 2) * (width > height ? (height / width) : 1));
        const y = (t - (height / 2) * (height > width ? (width / height) : 1));
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    const handleMouseOver = (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const direction = getDirectionKey(ev, node);
        node.classList.remove('in-top', 'in-right', 'in-bottom', 'in-left', 'out-top', 'out-right', 'out-bottom', 'out-left');
        node.classList.add(`in-${['top', 'right', 'bottom', 'left'][direction]}`);

        const infoDiv = node.querySelector('.info') as HTMLDivElement;
        if (infoDiv) {
            infoDiv.style.backgroundColor = 'white';
        }
    };

    const handleMouseOut = (ev: React.MouseEvent<HTMLDivElement>, node: HTMLDivElement) => {
        const direction = getDirectionKey(ev, node);
        node.classList.remove('in-top', 'in-right', 'in-bottom', 'in-left', 'out-top', 'out-right', 'out-bottom', 'out-left');
        node.classList.add(`out-${['top', 'right', 'bottom', 'left'][direction]}`);
    };

    return (
        <Box ref={parent} p={rem(gap)} w='100%' h='100%'>
            <Grid columns={numColumns} gutter={rem(gap)} style={height ? {borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray'} : {}}>
                {Array.from(Array(numColumns * 18)).map((_, index) => {
                    let backgroundColor = 'white';
                    if (blackFill.has(index)) {
                        backgroundColor = 'black';
                    } else if (redFill.has(index)) {
                        backgroundColor = 'red';
                    }
                    return (
                        <Grid.Col span={1} key={index} className='grid-box'>
                            {height && 
                                <Box 
                                w='100%' 
                                h={rem(height)} 
                                style={{ backgroundColor, borderTop: '1px solid lightgray', borderLeft: '1px solid lightgray', borderRadius: rem(2) }}
                                onMouseOver={(ev: React.MouseEvent<HTMLDivElement>) => handleMouseOver(ev, ev.currentTarget)}
                                onMouseOut={(ev: React.MouseEvent<HTMLDivElement>) => handleMouseOut(ev, ev.currentTarget)}
                            >
                                <div className="info"/>   
                            </Box>}
                        </Grid.Col>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default GridFace;
