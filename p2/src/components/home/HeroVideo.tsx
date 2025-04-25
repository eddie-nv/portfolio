import { Box } from '@mantine/core'
import React from 'react'

const HeroVideo = ({ overlayColor }: { overlayColor: string }) => {
  return (
    <Box w='100%' h='100vh' pos='relative' style={{overflow: 'hidden'}}>
      <video 
        src={'/media/future_shadows.mp4'} 
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
      <Box pos='absolute' top='0' left='0' right='0' bottom='0' style={{ backgroundColor: overlayColor, mixBlendMode: 'overlay'}}/>
      <Box pos='absolute' top='0' left='0' right='0' bottom='0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)'}}/>
    </Box>
  )
}

export default HeroVideo