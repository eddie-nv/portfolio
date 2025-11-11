// src/components/interactive/Square.tsx
import { Box } from '@mantine/core'
import { InteractiveShape } from './InteractiveShape'

export const Square: React.FC<{ color?: string }> = ({
  color = 'rgba(242, 98, 255, 0.91)',
}) => (
  <InteractiveShape baseSize={250}>
    {({ normalized }) => {
      const translateX = normalized.x * -100
      const translateY = normalized.y
      const rotate = normalized.x * 50
      return (
        <Box
            style={{
            width: '100%',
            height: '100%',
            borderRadius: 12,
            background: color,
            transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`,
            transition: 'transform 0.25s ease-out',
            }}
        />
      )
    }}
  </InteractiveShape>
)