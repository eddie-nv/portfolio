'use client'
import React from 'react'
import { 
    AppShellHeader, 
    Box, 
    Container, 
    Group, 
    Text,
    useMatches
} from '@mantine/core'
import Link from 'next/link'

const Header = () => {
    const nameBP = useMatches({
        base: 'md',
        md: 'lg',
    });
    const projectBP = useMatches({
        base: 'sm',
        md: 'md'
    });
    return (
        <AppShellHeader bd='none' pt={10}>
            <Container>
                <Group justify='space-between'>
                    <Box component={Link} href='/'>
                        <Text size={nameBP} fw={500}>
                            Eduardo Nava Valencia
                        </Text>
                    </Box>
                    <Box component={Link} href='/projects/dashboard'>
                        <Text size={projectBP} fw={400}>
                            Projects
                        </Text>
                    </Box>
                </Group>
            </Container>
        </AppShellHeader>
    )
}

export default Header