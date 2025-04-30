'use client'

import { Box, Stack } from '@mantine/core'
import { Hero } from '@/components/home/Hero'
import Navbar from '@/components/ui/Navbar'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Footer from '@/components/ui/Footer'
import { useGradientColor } from '@/hooks/useGradientColor'
import { homeData } from '@/data/homeData'

function Home() {
  const { currentColor, handleOnHover, handleOnLeave } = useGradientColor()

  return (
    <Stack gap={150}>
      <Box>
        <Navbar />
        <Hero 
          {...homeData.hero} 
          currentColor={{...currentColor, a: 0.8}} 
          handleOnHover={handleOnHover} 
          handleOnLeave={handleOnLeave}
        />
      </Box>
      <FeaturedProjects projects={homeData.projects} />
      <Footer />
    </Stack>
  )
}

export default Home