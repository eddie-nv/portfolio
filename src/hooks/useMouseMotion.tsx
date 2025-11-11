// src/hooks/useMouseMotion.ts
'use client'

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

type MotionState = {
  normalized: { x: number; y: number }
  velocity: { x: number; y: number }
  direction: { x: 1 | -1 | 0; y: 1 | -1 | 0 }
}

const MouseMotionContext = createContext<MotionState | null>(null)

export const MouseMotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<MotionState>({
    normalized: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    direction: { x: 0, y: 0 },
  })

  const last = useRef({ x: 0, y: 0, t: performance.now() })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window
      const x = innerWidth ? (event.clientX / innerWidth) * 2 - 1 : 0
      const y = innerHeight ? (event.clientY / innerHeight) * 2 - 1 : 0

      const now = performance.now()
      const dt = Math.max(now - last.current.t, 16)

      const vx = (x - last.current.x) / dt
      const vy = (y - last.current.y) / dt

      setState({
        normalized: { x, y },
        velocity: { x: vx, y: vy },
        direction: {
          x: vx === 0 ? 0 : vx > 0 ? 1 : -1,
          y: vy === 0 ? 0 : vy > 0 ? 1 : -1,
        },
      })

      last.current = { x, y, t: now }
    }

    const handlePointerLeave = () => {
      setState((prev) => ({
        normalized: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
        direction: { x: 0, y: 0 },
      }))
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  const value = useMemo(() => state, [state])
  return <MouseMotionContext.Provider value={value}>{children}</MouseMotionContext.Provider>
}

export const useMouseMotion = () => {
  const ctx = useContext(MouseMotionContext)
  if (!ctx) throw new Error('useMouseMotion must be used inside MouseMotionProvider')
  return ctx
}