'use client'

import { useState } from 'react'
import { Box, Stack, Group, ActionIcon, AspectRatio, Image } from '@mantine/core'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

type ImageItem = {
  src: string
  alt: string
}

type PhotoCarouselProps = {
  images: ImageItem[]
}

export const PhotoCarousel = ({ images }: PhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <Stack gap="md" w="100%">
      <Box
        pos="relative"
        w="100%"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Container */}
        <AspectRatio ratio={1} w="100%">
          <Box
            w="100%"
            h="100%"
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </AspectRatio>

        {/* Navigation Arrows */}
        <ActionIcon
          pos="absolute"
          left={10}
          top="50%"
          style={{ transform: 'translateY(-50%)' }}
          size="lg"
          variant="filled"
          color="dark"
          onClick={goToPrevious}
          radius="xl"
        >
          <ArrowLeft size={20} />
        </ActionIcon>

        <ActionIcon
          pos="absolute"
          right={10}
          top="50%"
          style={{ transform: 'translateY(-50%)' }}
          size="lg"
          variant="filled"
          color="dark"
          onClick={goToNext}
          radius="xl"
        >
          <ArrowRight size={20} />
        </ActionIcon>
      </Box>

      {/* Dots Indicator */}
      <Group justify="center" gap="xs">
        {images.map((_, index) => (
          <Box
            key={crypto.randomUUID()}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: currentIndex === index ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Group>
    </Stack>
  )
}

