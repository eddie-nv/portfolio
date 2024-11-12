'use client'
import { AspectRatio, Flex } from '@mantine/core'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import GridParent from './GridParent'
import BackgroundFiller from './BackgroundFiller'
import { useRef } from 'react'

const IntroAnimation = ({ 
    onComplete, 
    position: { x, y } 
}: { 
    onComplete: () => void, 
    position: { x: number, y: number } 
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const gridElement = containerRef.current.querySelector('.grid-container');
        const initialRect = gridElement?.getBoundingClientRect();
        
        if (!initialRect) return;

        const deltaX = x - initialRect.left;
        const deltaY = y - initialRect.top;

        const tl = gsap.timeline({
            onComplete
        });

        tl.to('.intro-container', {
            backgroundColor: 'white',
            duration: 3,
            ease: 'expo.out',
            delay: 0.5
        })
        .to('.grid-container', {
            x: deltaX,
            y: deltaY,
            duration: 3,
            ease: 'power2.inOut'
        })
        .to('.intro-container', {
            backgroundColor: 'transparent',
            duration: 3,
            ease: 'power2.inOut'
        });
    }, [x, y]);

    return (
        <Flex 
            ref={containerRef}
            className="intro-container"
            h="100vh" 
            bg="black"
            pos='absolute'
            justify='center'
            align='center'
            style={{
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}
        >
            <AspectRatio w={500} h={500} className="grid-container">
                <GridParent 
                    fill={({ cellHeight, cellWidth, index }) => (
                        <BackgroundFiller 
                            cellHeight={cellHeight} 
                            cellWidth={cellWidth} 
                            index={index} 
                        />
                    )}
                    type='fixed'
                />
            </AspectRatio>
        </Flex>
    );
}

export default IntroAnimation 