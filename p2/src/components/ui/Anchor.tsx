'use client'
import React from 'react'
import { Anchor as MantineAnchor, Box, type AnchorProps as MantineAnchorProps } from '@mantine/core'
import type { FC, ReactNode } from 'react'

type AnchorProps = MantineAnchorProps & {
  underlineColor?: string
  children: ReactNode
  href: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const Anchor: FC<AnchorProps> = ({ 
  underlineColor, 
  children, 
  c = "white",
  td = 'none',
  variant = "default",
  size = "md",
  onMouseEnter,
  onMouseLeave,
  href,
  ...props 
}) => {
  return (
    <MantineAnchor
      variant={variant}
      size={size}
      component='a'
      c={c}
      td={td}
      href={href}
      target='_blank'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <Box style={{ borderBottom: `1px solid ${underlineColor || 'currentColor'}` }}>
        {children}
      </Box>
    </MantineAnchor>
  )
}

export default Anchor