import { Stack, Title, Group, AspectRatio, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import React from 'react'
import eduardo from '/public/images/pro_pic.png'

const About = () => {
    const isTablet = useMediaQuery('(max-width: 53em)')
  return (
    <Stack pb={90} mt={200} gap={100} >
        <Title order={2} >
            ABOUT
        </Title>
        <Group w='100%' justify='space-around' pt={50} wrap='wrap-reverse' gap={isTablet ? 50 : 0}>
            <Stack>
                <Text size='lg'>
                    Hello, I&apos;m Eduardo
                </Text>
                <Text size='sm' maw={410} >
                    I&apos;m a new resident of North Beach SF, and I&apos;m here to be surrounded by the best in the world. I set out to learn programming 3 years ago and in that time I gained a deep understanding of frontend techniques. 
                </Text>
            </Stack>
            <AspectRatio ratio={0.76} w={330} bg='gray' style={{borderRadius: 5, overflow: 'hidden'}}>
                <Image src={eduardo} alt='Eduardo' style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
            </AspectRatio>
        </Group>
    </Stack>
  )
}

export default About
