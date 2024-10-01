import { AspectRatio, Box, Stack, Title } from '@mantine/core'
import React from 'react'

const Showcase = ({ project } : { project: String }) => {
  return (
    <Stack>
        <Title order={2}>
            Showcase
        </Title>
        <AspectRatio bg='gray' ratio={1.8}>
            <Box/>
        </AspectRatio>
    </Stack>
  )
}

export default Showcase