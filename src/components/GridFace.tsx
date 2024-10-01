import React, { useRef, useState, useEffect } from 'react';
import { Grid, Box, rem } from '@mantine/core';


function GridFace() {
    const numColumns = 18;
    const gap = 2;

    const parent = useRef<HTMLDivElement>(null);
    const [hieght, setHieght] = useState(0);

    useEffect(() => {
        if (!parent.current) return;
        const h = (parent.current.clientWidth - (gap * (numColumns + 1))) / numColumns;
        setHieght(h);
    }, [parent, gap, numColumns]);

    return (
        <Box ref={parent} p={rem(gap)} w='100%' h='100%'>
            <Grid columns={numColumns} gutter={rem(gap)}>
                {Array.from(Array(numColumns * 18)).map((_, index) => {
                    return (
                        <Grid.Col span={1} key={index}>
                            <Box w='100%' h={rem(hieght)} style={{ borderTop: '1px solid black', borderLeft: '1px solid black', borderRadius: rem(2) }}/>
                        </Grid.Col>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default GridFace;
