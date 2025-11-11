// src/components/interactive/InteractiveShape.tsx
import { Box } from '@mantine/core'
import { useMouseMotion } from '@/hooks/useMouseMotion'

type InteractiveShapeProps = {
  baseSize?: number
  children: (motion: ReturnType<typeof useMouseMotion>) => React.ReactNode
}

export const InteractiveShape: React.FC<InteractiveShapeProps> = ({ baseSize = 160, children }) => {
  const motion = useMouseMotion()
  return (
    <Box style={{ width: baseSize, height: baseSize, pointerEvents: 'none' }}>
      {children(motion)}
    </Box>
  )
}