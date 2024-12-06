'use client'
import { AspectRatio } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'

type HeaderProps = {
  project: {
    title: string
    pic?: StaticImageData
  }
}

const Header = ({ project }: HeaderProps) => {
  return (
    <AspectRatio ratio={3.5} style={{ borderRadius: '5px', overflow: 'hidden' }}>
      <Image 
        src={project.pic || ''} 
        alt={project.title} 
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </AspectRatio>
  )
}

export default Header
