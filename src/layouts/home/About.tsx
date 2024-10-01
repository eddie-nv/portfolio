import { Stack, Title, Group, AspectRatio, Box, Text } from '@mantine/core'
import React from 'react'

const About = () => {
  return (
    <Stack pb={150} mt={200} gap={100}>
        <Title order={2} >
            ABOUT
        </Title>
        <Group w='100%' justify='space-around' pt={50}>
            <Stack>
                <Text size='lg'>
                    Hello, I'm Eduardo
                </Text>
                <Text size='sm' maw={410} >
                    I'm a new resident of North Beach SF, and I'm here to be surounded by the best in the world. I set out to learn programming 3 years ago and in that time I gained a deep understanding of frontend techniques. 
                </Text>
            </Stack>
            <AspectRatio ratio={0.7} w={200} bg='gray'>
                <Box>

                </Box>
            </AspectRatio>
        </Group>
    </Stack>
  )
}

export default About