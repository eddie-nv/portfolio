'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { Container, MantineProvider, Stack } from '@mantine/core'
import { aboutData } from '@/data/aboutData'
import { Gallery } from '@/components/about/Gallery'
import { InfoGrid } from '@/components/about/InfoGrid'
import { useStaggerAnimation } from '@/hooks/animations/useStaggerAnimation'
import { theme } from '../theme'

export default function AboutPage() {
  const desktopPageRef = useStaggerAnimation<HTMLDivElement>({ variant: 'slideUpFadeIn', options: { staggerAmount: 0.6 } })
  const mobilePageRef = useStaggerAnimation<HTMLDivElement>({ variant: 'slideUpFadeIn', options: { staggerAmount: 0.6 } })
  
  return (
    <MantineProvider theme={theme}>
      <Navbar />
      {/* Desktop */}
      <Container size={750} py={120} visibleFrom="sm">
        <Stack gap={100} justify='center' align='center' ref={desktopPageRef}>
          <Gallery images={aboutData.images} />
          <InfoGrid items={aboutData.infoItems} />
        </Stack>
      </Container>
      {/* Mobile */}
      <Container size="lg" py={80} px="md" hiddenFrom="sm">
        <Stack gap={60} justify='center' align='center' ref={mobilePageRef}>
          <Gallery images={aboutData.images} />
          <InfoGrid items={aboutData.infoItems} />
        </Stack>
      </Container>
      <Footer />
    </MantineProvider>
  )
}