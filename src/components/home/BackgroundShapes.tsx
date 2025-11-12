import { MouseMotionProvider } from '@/hooks/useMouseMotion'
import { Square } from '@/components/interactive/Square'
import { Triangle } from '@/components/interactive/Triangle'
import { Box } from '@mantine/core'

const BackgroundShapes = () => (
  <MouseMotionProvider>
    <Box pos="absolute" inset={0} style={{ pointerEvents: 'none' }}> 
      <Box 
        pos='absolute' 
        bottom={0}
        style={{ 
            mixBlendMode: 'overlay', 
            // filter: 'blur(2px)', 
            zIndex: 1
        }}
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
      >
        <Triangle />
      </Box>
    </Box>
  </MouseMotionProvider>
)

export default BackgroundShapes