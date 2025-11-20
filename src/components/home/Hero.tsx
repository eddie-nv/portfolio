'use client'

import { Box, Center, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import type { FC } from 'react'
import { useHeroAnimation } from '@/hooks/animations/useHeroAnimation'

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
  const { desktop, mobile } = useHeroAnimation()

  return (
    <>
      {/* Desktop */}
      <Box pos="relative" h="100%" w="100%" style={{ overflow: 'hidden' }} visibleFrom='xs'>
        <Center pos="absolute" inset={0} >
          <Stack align="center" justify="center" gap={30} >
            <Stack align='center' gap={0}>
              <Text tt="uppercase" ref={desktop.jobTitleRef} fw={600} lts={2.5} opacity={0}>
                {jobTitle}
              </Text>
              <Text size="xl" fw={500} ff={theme.fontFamilyMonospace} ref={desktop.titleRef} opacity={0} ta='center'>
                {title}
              </Text>
              <Text size="sm" fw={400} ref={desktop.subtitleRef} maw={400} ta='center' c='gray' opacity={0}>
                {subtitle}
              </Text>
            </Stack>
            <Group gap="sm" ref={desktop.linksRef} >
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
      {/* Mobile */}
      <Box hiddenFrom='xs' pos="relative" h="100%" w="100%" style={{ overflow: 'hidden' }}>
        <Stack
          align="center"
          justify="center"
          gap={24}
          h="100%"
          px="md"
          py="xl"
        >
          <Stack align="center" justify="center" gap={4}>
            <Text tt="uppercase" ref={mobile.jobTitleRef} fw={600} lts={2.5} opacity={0} ta='center'>
              {jobTitle}
            </Text>
            <Text size="lg" fw={500} ff={theme.fontFamilyMonospace} ref={mobile.titleRef} opacity={0} ta='center'>
              {title}
            </Text>
            <Text size="sm" fw={400} ref={mobile.subtitleRef} maw={400} ta='center' c='gray' opacity={0}>
              {subtitle}
            </Text>
          </Stack>
          <Group
            align="center"
            justify="center"
            ref={mobile.linksRef}
            gap="xs"
          >
            {contactLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                size="sm"
                opacity={0}
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        </Stack>
      </Box>
    </>
  )
}