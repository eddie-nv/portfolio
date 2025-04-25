import React from 'react'
import { Box, Container, Group, Text } from '@mantine/core'

const Navbar = () => {
  return (
    <Box pos='fixed' w='100vw' p={10} style={{zIndex: 1000}}>
        <Container size='lg'>
            <Group justify='space-between'>
                <Text c='white' tt='uppercase' size='sm'>
                    Eduardo Nava
                </Text>
                <Group gap={35}>
                    <Text c='white' size='sm'>
                        Work
                    </Text>
                    <Text c='white' size='sm'>
                        Play
                    </Text>
                    <Text c='white' size='sm'>
                        About
                    </Text>
                </Group>
            </Group>
        </Container>    
    </Box>
    
  )
}

export default Navbar