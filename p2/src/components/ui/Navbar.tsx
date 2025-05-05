'use client'

import { Box, Container, Group, Text, UnstyledButton } from '@mantine/core'
import { useAnimateIn } from '@/hooks/animations/useAnimateIn'

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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/e-nava-valencia/', handleOnHover: () => {}, handleOnLeave: () => {}, colorIndex: 1, target: '_blank' },
]

const NavLink = ({ label, href, isCapitalized, handleOnHover, handleOnLeave, colorIndex, target }: NavItem ) => (
  <UnstyledButton
    component="a"
    href={href}
    target={target ? target : '_self'}
    onMouseEnter={() => handleOnHover && handleOnHover(colorIndex)}
    onMouseLeave={() => handleOnLeave && handleOnLeave()}
  >
    <Text c="white" size="sm" lts={1.8} tt={isCapitalized ? 'uppercase' : 'none'}>
      {label}
    </Text>
  </UnstyledButton>
)

const Navbar = ({ handleOnHover, handleOnLeave }: { handleOnHover?: (index: number) => void, handleOnLeave?: () => void }) => {
  const navbarRef = useAnimateIn<HTMLDivElement>({ variant: 'slideDown', options: { delay: 0.2 } })
  return (
    <Box pos="absolute" w="100%" p={10} opacity={0} style={{ zIndex: 1000 }} ref={navbarRef}>
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
  )
}

export default Navbar