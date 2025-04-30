'use client'

import { Stack } from '@mantine/core'
import { Hero } from '@/components/home/Hero'
import Navbar from '@/components/ui/Navbar'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Footer from '@/components/ui/Footer'
import { useGradientColor } from '@/hooks/useGradientColor'
import { homeData } from '@/data/homeData'
import { useScrollAnimation } from '@/hooks/animations/useScrollAnimation'

function Home() {
  const { currentColor, transitionType, handleOnHover, handleOnLeave } = useGradientColor()
  const heroRef = useScrollAnimation<HTMLDivElement>({ variant: 'shrinkWithBorder', options: { scrub: true, start: '50px', end: 'bottom top' } })

  return (
    <Stack gap={100} justify='center' align='center' w='100%'>
      <Stack ref={heroRef} h='100vh' w='100%' style={{ overflow: 'hidden' }}>
        <Navbar handleOnHover={handleOnHover} handleOnLeave={handleOnLeave}/>
        <Hero 
          {...homeData.hero} 
          currentColor={{...currentColor, a: 0.8}} 
          transitionType={transitionType}
          handleOnHover={handleOnHover} 
          handleOnLeave={handleOnLeave}
        />
      </Stack>
      <FeaturedProjects projects={homeData.projects} />
      <Footer />
    </Stack>
  )
}

export default Home