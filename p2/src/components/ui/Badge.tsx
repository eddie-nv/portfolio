import React from 'react'
import { Badge as MantineBadge, BadgeProps, useMantineTheme } from '@mantine/core'

const Badge = ({ children, color, name }: BadgeProps & { name: string }) => {
    const theme = useMantineTheme()
    return (
        <MantineBadge key={name} color={color} radius='sm' variant='light' bg={theme.colors?.[color as keyof typeof theme.colors]?.[0]}>{children}</MantineBadge>
    )
}

export default Badge