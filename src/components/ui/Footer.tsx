import { Box, Center, Group, Stack, Text } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import React from 'react'

const FOOTER_LINKS = [
    {
        label: 'Resume',
        href: 'https://www.linkedin.com/in/ed-nava-valencia/',
    },
    {
        label: 'X',
        href: 'https://x.com/e_nava_valencia',
    },
    {
        label: 'GitHub',
        href: 'https://www.github.com/eddie-nv',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ed-nava-valencia/',
    },
]

const Footer = () => {

    return (
        <Box pt={1} bg='linear-gradient(to right, transparent 20%, #BCBCBC 50%, transparent 80%)' w='100%'>
            <Box bg='black' py='xl'>
                <Center>
                    <Stack>
                        <Group gap='xs'>
                            <Text>
                                Drop me an email
                            </Text>
                            <Anchor href='mailto:ed.nava.valencia@gmail.com'>
                                ed.nava.valencia@gmail.com
                            </Anchor>
                        </Group>
                        <Group gap='lg' align='center' justify='center' >
                            {FOOTER_LINKS.map((link) => (
                                <Anchor key={link.label} href={link.href}>
                                    {link.label}
                                </Anchor>
                            ))}
                        </Group>
                    </Stack>
                </Center>
            </Box>
        </Box>
    )
}

export default Footer