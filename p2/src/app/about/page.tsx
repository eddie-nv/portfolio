import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { Container, Stack } from '@mantine/core'
import { aboutData } from '@/data/aboutData'
import { Gallery } from '@/components/about/Gallery'
import { InfoGrid } from '@/components/about/InfoGrid'
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Container py={120}>
        <Stack gap={100} justify='center' align='center'>
          <Gallery images={aboutData.images} />
          <InfoGrid items={aboutData.infoItems} />
        </Stack>
      </Container>
      <Footer />
    </>
  )
}