'use client'

import { useMemo } from 'react'
import { Box, Stack } from '@mantine/core'
import { Hero } from '@/components/home/Hero'
import Navbar from '@/components/ui/Navbar'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Footer from '@/components/ui/Footer'
import { useGradientColor } from '@/hooks/useGradientColor'
import { homeData } from '@/data/homeData'

const COLOR_CYCLE = ['red', 'blue', 'green', 'yellow']

function Home() {
  const { currentColor, handleOnHover, handleOnLeave } = useGradientColor()
  
  const projectsWithBadgeColors = useMemo(() => {
    let colorIndex = -1
    
    return homeData.projects.map(project => ({
      ...project,
      badgeColor: project.technologies.map(() => {
        colorIndex = (colorIndex + 1) % COLOR_CYCLE.length
        return COLOR_CYCLE[colorIndex]
      })
    }))
  }, [])

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
      <FeaturedProjects projects={projectsWithBadgeColors} />
      <Footer />
    </Stack>
  )
}

export default Home