'use client'

import { Box, Container, Group, Text, UnstyledButton, Burger, Drawer, Stack } from '@mantine/core'
import { useAnimateIn } from '@/hooks/animations/useAnimateIn'
import { useState } from 'react'

type NavItem = {
  label: string
  href: string
  isCapitalized?: boolean
  handleOnHover?: (index: number) => void
  handleOnLeave?: () => void
  colorIndex: number
  target?: string
}

const BRAND_NAME = {
    label: 'Eduardo Nava',
    href: '/',
    isCapitalized: true,
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about', handleOnHover: () => {}, handleOnLeave: () => {}, colorIndex: 0 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ed-nava-valencia/', handleOnHover: () => {}, handleOnLeave: () => {}, colorIndex: 1, target: '_blank' },
]

const NavLink = ({ label, href, isCapitalized, handleOnHover, handleOnLeave, colorIndex, target }: NavItem ) => (
  <UnstyledButton
    component="a"
    href={href}
    target={target ? target : '_self'}
    onMouseEnter={() => handleOnHover?.(colorIndex)}
    onMouseLeave={() => handleOnLeave?.()}
  >
    <Text c="white" size="sm" lts={1.8} tt={isCapitalized ? 'uppercase' : 'none'}>
      {label}
    </Text>
  </UnstyledButton>
)

const MobileNavLink = ({ label, href, isCapitalized, target, onClick }: NavItem & { onClick: () => void }) => (
  <UnstyledButton
    component="a"
    href={href}
    target={target ? target : '_self'}
    onClick={onClick}
    w="100%"
  >
    <Text c="white" size="lg" lts={1.8} tt={isCapitalized ? 'uppercase' : 'none'} ta="center">
      {label}
    </Text>
  </UnstyledButton>
)

const Navbar = ({ handleOnHover, handleOnLeave }: { handleOnHover?: (index: number) => void, handleOnLeave?: () => void }) => {
  const desktopNavbarRef = useAnimateIn<HTMLDivElement>({ variant: 'slideDown', options: { delay: 0.2 } })
  const mobileNavbarRef = useAnimateIn<HTMLDivElement>({ variant: 'slideDown', options: { delay: 0.2 } })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <Box pos="absolute" w="100%" p={10} opacity={0} style={{ zIndex: 1000 }} ref={desktopNavbarRef} visibleFrom="sm">
        <Container size="lg">
          <Group justify="space-between">
            <NavLink key={BRAND_NAME.label} {...BRAND_NAME} handleOnHover={handleOnHover} handleOnLeave={handleOnLeave} colorIndex={4}/>
            <Group gap={35}>
              {NAV_ITEMS.map((item, index) => (
                <NavLink key={item.label} {...item} handleOnHover={handleOnHover} handleOnLeave={handleOnLeave} colorIndex={index + 5}/>
              ))}
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Mobile Navbar */}
      <Box pos="absolute" w="100%" p={10} opacity={0} style={{ zIndex: 1000 }} ref={mobileNavbarRef} hiddenFrom="sm">
        <Container size="lg">
          <Group justify="space-between">
            <NavLink key={BRAND_NAME.label} {...BRAND_NAME} handleOnHover={handleOnHover} handleOnLeave={handleOnLeave} colorIndex={4}/>
            <Burger
              opened={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              color="white"
              size="sm"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer
        opened={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        position="right"
        size="70%"
        styles={{
          content: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
          },
          header: {
            backgroundColor: 'transparent',
          },
          close: {
            color: 'white',
          },
        }}
        zIndex={1001}
      >
        <Stack gap="xl" mt="xl" align="center">
          {NAV_ITEMS.map((item) => (
            <MobileNavLink
              key={item.label}
              {...item}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
        </Stack>
      </Drawer>
    </>
  )
}

export default Navbar