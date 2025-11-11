'use client'

import { Box, Center, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import BackgroundShapes from './BackgroundShapes'
import type { FC } from 'react'
import { useAnimateIn } from '@/hooks/animations/useAnimateIn'
import { useStaggerAnimation } from '@/hooks/animations/useStaggerAnimation'

type HeroProps = {
  jobTitle: string
  title: string
  subtitle: string
  contactLinks: {
    label: string
    href: string
    color: string
  }[]
}

export const Hero: FC<HeroProps> = ({
  jobTitle,
  title,
  subtitle,
  contactLinks,
}) => {
  const theme = useMantineTheme()
  
  // Animation refs
  const jobTitleRef = useAnimateIn<HTMLParagraphElement>({ variant: 'slideUpFadeIn', options: { delay: 0.4 } })
  const titleRef = useAnimateIn<HTMLParagraphElement>({ variant: 'slideUpFadeIn', options: { delay: 0.4 } })
  const subtitleRef = useAnimateIn<HTMLParagraphElement>({ variant: 'slideUpFadeIn', options: { delay: 0.4 } })
  const linksRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'slideUpFadeIn', 
    options: { delay: 0.58, staggerAmount: 0.2 } 
  })

  return (
    <Box pos="relative" h="100%" w="100%" style={{ overflow: 'hidden' }}>
      <BackgroundShapes />
      <Center pos="absolute" inset={0} >
        <Stack align="center" justify="center" gap={30} >
          <Stack align='center' gap={0}>
            <Text tt="uppercase" ref={jobTitleRef} fw={600} lts={2.5} opacity={0}>
              {jobTitle}
            </Text>
            <Text size="xl" fw={500} ff={theme.fontFamilyMonospace} ref={titleRef} opacity={0}>
              {title}
            </Text>
            <Text size="sm" fw={400} ref={subtitleRef} maw={400} ta='center' c='gray' opacity={0}>
              {subtitle}
            </Text>  
          </Stack>
          <Group gap="sm" ref={linksRef} >
            {contactLinks.map((link) => (
                <Anchor 
                    key={link.label}
                    href={link.href}
                    size='sm'
                    opacity={0}
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