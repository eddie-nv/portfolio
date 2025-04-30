'use client'
import { useState } from 'react'
import type { MouseEvent } from 'react'

type Color = { r: number; g: number; b: number }
type RGBA = Color & { a: number }
type TransitionType = 'instant' | 'smooth'

const defaultGradientColors: Color[] = [
  { r: 255, g: 0, b: 0 },     // red
  { r: 0, g: 255, b: 255 },   // cyan
  { r: 0, g: 255, b: 0 },     // green
  { r: 255, g: 255, b: 0 },   // yellow
  { r: 55, g: 0, b: 255 },   // purple
  { r: 0, g: 51, b: 255 }, // blue 
  { r: 255, g: 119, b: 0 },   // orange
]

const interpolateColor = (colors: Color[], percentage: number): RGBA => {
  const idx = Math.floor(percentage * (colors.length - 1))
  const nextIdx = Math.min(idx + 1, colors.length - 1)
  const ratio = (percentage * (colors.length - 1)) - idx
  const { r: r1, g: g1, b: b1 } = colors[idx]
  const { r: r2, g: g2, b: b2 } = colors[nextIdx]
  return {
    r: Math.round(r1 + (r2 - r1) * ratio),
    g: Math.round(g1 + (g2 - g1) * ratio),
    b: Math.round(b1 + (b2 - b1) * ratio),
    a: 0.8,
  }
}

export const useGradientColor = (initialColors: Color[] = defaultGradientColors) => {
  const [currentColor, setCurrentColor] = useState<RGBA>({ r: 0, g: 0, b: 0, a: 0.8 })
  const [transitionType, setTransitionType] = useState<TransitionType>('smooth')

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setTransitionType('smooth')
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - left
    const percentage = Math.min(Math.max(x / width, 0), 1)
    setCurrentColor(interpolateColor(initialColors, percentage))
  }
  
  const handleOnHover = (index: number) => {
    setTransitionType('instant')
    setCurrentColor({ ...initialColors[index], a: 0.8 })
  }
  
  const handleOnLeave = () => {
    setTransitionType('smooth')
    setCurrentColor({ r: 0, g: 0, b: 0, a: 0.8 })
  }

  return {
    currentColor,
    transitionType,
    handleMouseMove,
    handleOnHover,
    handleOnLeave,
  }
}

export type { Color, RGBA, TransitionType }
