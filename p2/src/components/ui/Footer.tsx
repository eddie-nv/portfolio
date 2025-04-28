import { Box, Center, Group, Stack, Text } from '@mantine/core'
import { Anchor } from '@/components/ui/Anchor'
import React from 'react'

const Footer = () => {
  return (
    <Box pt={1} bg='linear-gradient(to right, transparent 20%, #BCBCBC 50%, transparent 80%)'>
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
                        {['Resume', 'Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                            <Anchor key={social} href={`https://${social.toLowerCase()}.com/ednava`}>
                                {social}
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