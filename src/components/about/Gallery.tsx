'use client'

import { AspectRatio, Group, Image, Stack, Text } from '@mantine/core';
import { useStaggerAnimation } from '@/hooks/animations/useStaggerAnimation';

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
  const galleryAndTitleRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'slideUpFadeIn', 
    options: { delay: 0.2, staggerAmount: 0.3 } 
  });
  
  const galleryRef = useStaggerAnimation<HTMLDivElement>({ 
    variant: 'fadeIn',
    options: { 
      delay: 0.2, 
      staggerAmount: 0.3,
    } 
  });
  
  return (
    <Stack justify='center' align='center' gap={0} ref={galleryAndTitleRef} opacity={0}>
        <Group gap={gap} wrap="nowrap" py='xl' style={{transform: 'translateX(10px)'}} ref={galleryRef} opacity={0}>
            {images.map((image, index) => (
                <AspectRatio 
                    key={crypto.randomUUID()}
                    ratio={image.ratio}
                    // bg={image.bg}
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
  );
};
