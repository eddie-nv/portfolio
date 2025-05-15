import { Box } from '@mantine/core'
import React from 'react'
import type { TransitionType } from '@/hooks/useGradientColor'

type HeroVideoProps = {
  overlayColor: string;
  transitionType?: TransitionType;
}

const HeroVideo = ({ overlayColor, transitionType = 'smooth' }: HeroVideoProps) => {
  // Set transition duration based on transition type
  const transitionDuration = transitionType === 'instant' ? '0.2s linear' : '1.5s ease-out'
  
  return (
    <Box w='100%' h='100vh' pos='relative' style={{overflow: 'hidden'}}>
      <video 
        src={'/media/future_inverted.mp4'} 
        autoPlay 
        muted 
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(15px)',
          transform: 'scale(1.1)',
        }}
      />
      <Box 
        pos='absolute' 
        top='0' 
        left='0' 
        right='0' 
        bottom='0' 
        style={{ 
          backgroundColor: overlayColor, 
          mixBlendMode: 'overlay',
          transition: `background-color ${transitionDuration} `
        }}
      />
      <Box pos='absolute' top='0' left='0' right='0' bottom='0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)'}}/>
    </Box>
  )
}

export default HeroVideo