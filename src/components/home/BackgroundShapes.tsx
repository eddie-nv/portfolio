'use client'

import { MouseMotionProvider } from '@/hooks/useMouseMotion'
import { Square } from '@/components/interactive/Square'
import { Triangle } from '@/components/interactive/Triangle'
import { Box } from '@mantine/core'
import { useStaggerAnimation } from '@/hooks/animations/useStaggerAnimation'

const BackgroundShapes = () => {
  const shapesRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'fadeIn', 
    options: { delay: 0.2, staggerAmount: 0.15 } 
  })

  return (
    <MouseMotionProvider>
      <Box pos="absolute" inset={0} style={{ pointerEvents: 'none' }} ref={shapesRef}> 
        <Box 
          pos='absolute' 
          bottom={0}
          style={{ 
              mixBlendMode: 'overlay', 
              // filter: 'blur(2px)', 
              zIndex: 1
          }}
          opacity={0}
         >
          <Square />
        </Box>
        <Box 
          pos='absolute'
          bottom={0}
          style={{ 
              mixBlendMode: 'difference', 
              // filter: 'blur(5px)', 
              zIndex: 10
          }}
          opacity={0}
        >
          <Triangle />
        </Box>
      </Box>
    </MouseMotionProvider>
  )
}

export default BackgroundShapes