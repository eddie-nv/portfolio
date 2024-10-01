import { AspectRatio, Box, Flex, Stack, Title } from '@mantine/core'
import React from 'react'

const Approach = ({ project } : { project: String }) => {
  return (
    <Stack gap={50}>
        <Flex justify='end'>
            <Title order={2}>
                My Approach
            </Title>
        </Flex>
        <AspectRatio bg='gray'>
            <Box />
        </AspectRatio>
    </Stack>
  )
}

export default Approach