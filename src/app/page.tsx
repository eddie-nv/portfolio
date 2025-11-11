'use client'

import { MantineProvider, Stack } from '@mantine/core'
import { Hero } from '@/components/home/Hero'
import Navbar from '@/components/ui/Navbar'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Footer from '@/components/ui/Footer'
import { homeData } from '@/data/homeData'
import { useScrollAnimation } from '@/hooks/animations/useScrollAnimation'
import { theme } from './theme'

function Home() {
  const heroRef = useScrollAnimation<HTMLDivElement>({ variant: 'shrinkWithBorder', options: { scrub: true, start: '50px', end: 'bottom top' } })

  return (
    
    <MantineProvider theme={theme}>
    <Stack gap={100} justify='center' align='center' w='100%'>
      <Stack ref={heroRef} h='100vh' w='100%' style={{ overflow: 'hidden' }}>
        <Navbar />
        <Hero {...homeData.hero}  />
      </Stack>
      <FeaturedProjects projects={homeData.projects} />
      <Footer />
    </Stack>
    </MantineProvider>
  )
}

export default Home