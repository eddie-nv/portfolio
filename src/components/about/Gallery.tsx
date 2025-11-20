'use client'

import { AspectRatio, Group, Image, Stack, Text } from '@mantine/core';
import { useStaggerAnimation } from '@/hooks/animations/useStaggerAnimation';
import { PhotoCarousel } from './PhotoCarousel';

type ImageItem = {
  src: string;
  alt: string;
  ratio: number;
  bg: string;
  width: string;
  rotation: number;
  translateX: number;
  translateY: number;
};

type GalleryProps = {
  images: ImageItem[];
  gap?: number;
};

export const Gallery = ({ images, gap = 5 }: GalleryProps) => {
  // Desktop refs
  const desktopGalleryAndTitleRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'slideUpFadeIn', 
    options: { delay: 0.2, staggerAmount: 0.3 } 
  });
  
  const desktopGalleryRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'fadeIn',
    options: { 
      delay: 0.2, 
      staggerAmount: 0.3,
    } 
  });

  // Mobile refs
  const mobileGalleryAndTitleRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'slideUpFadeIn', 
    options: { delay: 0.2, staggerAmount: 0.3 } 
  });
  
  return (
    <>
      {/* Desktop */}
      <Stack justify='center' align='center' gap={0} ref={desktopGalleryAndTitleRef} opacity={0} visibleFrom="sm">
          <Group gap={gap} wrap="nowrap" py='xl' style={{transform: 'translateX(10px)'}} ref={desktopGalleryRef} opacity={0}>
              {images.map((image, index) => (
                  <AspectRatio 
                      key={crypto.randomUUID()}
                      ratio={image.ratio}
                      w={image.width}
                      style={{
                          borderRadius: '5px',
                          overflow: 'hidden',
                          transform: `rotate(${image.rotation}deg) translateX(${image.translateX}px) translateY(${image.translateY}px)`,
                          zIndex: index % 2 === 0 ? 1 : 1,
                          opacity: 0,
                      }}
                  >
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        style={{scale: 1.4}}
                      />
                  </AspectRatio>
              ))}
          </Group>
          <Text opacity={0}>Hello</Text>
      </Stack>

      {/* Mobile */}
      <Stack justify='center' align='center' gap="md" ref={mobileGalleryAndTitleRef} opacity={0} hiddenFrom="sm" py="md">
          <PhotoCarousel images={images.map(img => ({ src: img.src, alt: img.alt }))} />
          <Text opacity={0} ta="center">Hello</Text>
      </Stack>
    </>
  );
};
