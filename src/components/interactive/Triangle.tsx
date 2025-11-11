// src/components/interactive/Triangle.tsx
import { Box } from '@mantine/core'
import { InteractiveShape } from '@/components/interactive/InteractiveShape'

export const Triangle: React.FC<{ maxScale?: number; color?: string }> = ({
  maxScale = 0.12,
  color = 'rgba(255, 34, 34, 0.82)',
}) => (
  <InteractiveShape baseSize={250}>
    {({ normalized, direction }) => {
      const scale = 1 + normalized.y * maxScale * (direction.y >= 0 ? 1 : 0.6)
      const skewX = normalized.x * 6
      return (
        <Box
            style={{
            width: '100%',
            height: '100%',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: color,
            transform: `scale(${scale}) skewX(${skewX}deg)`,
            transition: 'transform 0.22s cubic-bezier(.2,.8,.2,1)',
            }}
        />
      )
    }}
  </InteractiveShape>
)