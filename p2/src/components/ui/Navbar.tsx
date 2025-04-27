'use client'

import { Box, Container, Group, Text, UnstyledButton } from '@mantine/core'

type NavItem = {
  label: string
  href: string
  isCapitalized?: boolean
}

const BRAND_NAME = {
    label: 'Eduardo Nava',
    href: '/',
    isCapitalized: true,
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

const NavLink = ({ label, href, isCapitalized }: NavItem) => (
  <UnstyledButton
    component="a"
    href={href}
  >
    <Text c="white" size="sm" lts={1.8} tt={isCapitalized ? 'uppercase' : 'none'}>
      {label}
    </Text>
  </UnstyledButton>
)

const Navbar = () => {
  return (
    <Box pos="absolute" w="100vw" p={10} style={{ zIndex: 1000 }}>
      <Container size="lg">
        <Group justify="space-between">
          <NavLink key={BRAND_NAME.label} {...BRAND_NAME} />
          <Group gap={35}>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  )
}

export default Navbar