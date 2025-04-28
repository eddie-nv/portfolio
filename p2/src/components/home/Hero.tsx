'use client'
import React from 'react'
import { Box, Center, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import HeroVideo from './HeroVideo'
import type { RGBA } from '@/hooks/useGradientColor'
import type { FC } from 'react'

type HeroProps = {
  jobTitle: string
  title: string
  subtitle: string
  contactLinks: {
    label: string
    href: string
    color: string
  }[]
  currentColor: RGBA
  handleOnHover: (index: number) => void
  handleOnLeave: () => void
}

export const Hero: FC<HeroProps> = ({
  jobTitle,
  title,
  subtitle,
  contactLinks,
  currentColor,
  handleOnHover,
  handleOnLeave,
}) => {
  const theme = useMantineTheme()

  return (
    <Box pos="relative" h="100vh" w="100vw">
      <HeroVideo overlayColor={`rgba(${currentColor.r},${currentColor.g},${currentColor.b},${currentColor.a})`} />
      <Center pos="absolute" inset={0}>
        <Stack align="center" justify="center" gap={16}>
          <Text tt="uppercase" >
            {jobTitle}
          </Text>
          <Text size="xl" fw={500} ff={theme.fontFamilyMonospace}>
            {title}
          </Text>
          <Text size="sm" fw={300}>
            {subtitle}
          </Text>
          <Group gap="sm" >
            {contactLinks.map((link, index) => (
                <Anchor 
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => handleOnHover(index)}
                    onMouseLeave={handleOnLeave}
                >
                    {link.label}
                </Anchor>
            ))}
          </Group>
        </Stack>
      </Center>
    </Box>
  )
}