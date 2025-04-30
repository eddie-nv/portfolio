import React from 'react';
import { AspectRatio, Group, Image, Stack, Text } from '@mantine/core';

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
  return (
    <Stack justify='center' align='center' gap={0} >
        <Group gap={gap} wrap="nowrap" py='xl' style={{transform: 'translateX(10px)'}}>
            {images.map((image, index) => (
                <AspectRatio 
                    key={index}
                    ratio={image.ratio}
                    bg={image.bg}
                    w={image.width}
                    style={{
                        borderRadius: '5px',
                        overflow: 'hidden',
                        transform: `rotate(${image.rotation}deg) translateX(${image.translateX}px) translateY(${image.translateY}px)`,
                        zIndex: index % 2 === 0 ? 1 : 1,
                    }}
                >
                    <Image 
                        src={image.src} 
                        alt={image.alt} 
                        style={{ objectFit: 'cover' }}
                    />
                </AspectRatio>
            ))}
        </Group>
        <Text>Hello</Text>
    </Stack>
  );
};
