'use client'
import React, { useState } from 'react'
import { Box, Center, Stack, Text } from '@mantine/core'
import { useMantineTheme } from '@mantine/core'
import type { FC, MouseEvent } from 'react'
import HeroVideo from './HeroVideo'

type Color = { r: number; g: number; b: number }
type RGBA = Color & { a: number }

type HeroProps = {
  jobTitle: string
  title: string
  subtitle: string
  gradientColors?: Color[]
}

const defaultGradientColors: Color[] = [
  { r: 255, g: 0, b: 0 },     // red
  { r: 0, g: 255, b: 255 },   // cyan
  { r: 0, g: 255, b: 0 },     // green
  { r: 255, g: 255, b: 0 },   // yellow
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

export const Hero: FC<HeroProps> = ({
  jobTitle,
  title,
  subtitle,
  gradientColors = defaultGradientColors,
}) => {
  const theme = useMantineTheme()
  const [currentColor, setCurrentColor] = useState<RGBA>({ ...gradientColors[0], a: 0.8 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - left
    const percentage = Math.min(Math.max(x / width, 0), 1)
    setCurrentColor(interpolateColor(gradientColors, percentage))
  }

  return (
    <Box pos="relative" h="100vh" w="100vw" onMouseMove={handleMouseMove}>
      <HeroVideo overlayColor={`rgba(${currentColor.r},${currentColor.g},${currentColor.b},${currentColor.a})`} />
      <Center pos="absolute" inset={0}>
        <Stack align="center" justify="center" gap={0}>
          <Text c="white" tt="uppercase" lts={1.8}>
            {jobTitle}
          </Text>
          <Text size="xl" c="white" fw={500} ff={theme.fontFamilyMonospace}>
            {title}
          </Text>
          <Text c="white" lts={1.8} size="sm">
            {subtitle}
          </Text>
        </Stack>
      </Center>
    </Box>
  )
}