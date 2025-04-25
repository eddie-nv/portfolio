'use client'
import React, { useState } from 'react'
import { Box, Center, Stack, Text } from '@mantine/core'
import HeroVideo from './HeroVideo'

// Define our gradient colors for easy reference

const gradientColors = [
    { r: 255, g: 0, b: 0 }, // red
    { r: 0, g: 255, b: 255 }, // blue
    { r: 0, g: 255, b: 0 }, // green
    { r: 255, g: 255, b: 0 }, // yellow
]

// const gradientColors = [
//   { r: 255, g: 0, b: 0 },      // red
//   { r: 255, g: 128, b: 0 },    // orange
//   { r: 255, g: 255, b: 0 },    // yellow
//   { r: 0, g: 255, b: 0 },      // green
//   { r: 0, g: 255, b: 255 },    // cyan
//   { r: 0, g: 0, b: 255 },      // blue
//   { r: 128, g: 0, b: 128 },    // purple
//   { r: 255, g: 0, b: 255 }     // pink
// ]

const Hero = () => {
  const [currentColor, setCurrentColor] = useState({ r: 255, g: 0, b: 0, a: 0.8 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width

    // Find the two colors to interpolate between
    const colorIndex = Math.floor(percentage * (gradientColors.length - 1))
    const nextColorIndex = Math.min(colorIndex + 1, gradientColors.length - 1)
    
    const colorRatio = (percentage * (gradientColors.length - 1)) - colorIndex

    // Interpolate between the two colors
    const color1 = gradientColors[colorIndex]
    const color2 = gradientColors[nextColorIndex]

    const r = Math.round(color1.r + (color2.r - color1.r) * colorRatio)
    const g = Math.round(color1.g + (color2.g - color1.g) * colorRatio)
    const b = Math.round(color1.b + (color2.b - color1.b) * colorRatio)

    setCurrentColor({ r, g, b, a: 0.8 })
  }

  return (
    <Box pos='relative' h='100vh' w='100vw' onMouseMove={handleMouseMove}>
      <HeroVideo overlayColor={`rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a})`}/>
      {/* <Box 
        pos='absolute' 
        bottom='0' 
        left='0' 
        right='0' 
        h={2} 
        style={{
          background: 'linear-gradient(to right,rgba(255, 0, 0, 0.8),rgba(255, 128, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 255, 255, 0.8), rgba(0, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8))'
        }}
      /> */}
      <Center pos='absolute' bottom='0' left='0' right='0' top='0'>
        <Stack align='center' justify='center' gap='0'>
            <Text  c='white' tt='uppercase' fw={700}>
                Frontend Software Engineer
            </Text>
            <Text size="xl" c='white' fw={700}>
                Eduardo Nava
            </Text>    
        </Stack>
      </Center>
    </Box>
  )
}

export default Hero