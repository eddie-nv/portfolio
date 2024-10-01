'use client'
import React from 'react'
import { 
    AppShellHeader, 
    Box, 
    Container, 
    Group, 
    Text
} from '@mantine/core'
import Link from 'next/link'

const Header = () => {
    return (
        <AppShellHeader bd='none' pt={10}>
            <Container>
                <Group justify='space-between'>
                    <Box component={Link} href='/'>
                        <Text size='lg' fw={500}>
                            Eduardo Nava Valencia
                        </Text>
                    </Box>
                    <Box component={Link} href='/projects/touchstone'>
                        <Text fw={400}>
                            Projects
                        </Text>
                    </Box>
                </Group>
            </Container>
        </AppShellHeader>
    )
}

export default Header