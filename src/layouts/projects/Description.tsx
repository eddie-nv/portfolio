import { Stack, Title, Text, Flex } from '@mantine/core'
import Link from 'next/link'

type DescriptionProps = {
  project: {
    title: string
    info: string[]
    link: string
  }
}

const Description = ({ project }: DescriptionProps) => {
  return (
    <Stack gap={70}>
      <Title order={3} mt={50}>
        {project.title}
      </Title>
      <Flex justify='end'>
        <Stack maw={720}>
          {project.info.map((text, i) => (
            <Text key={text}>
              {text}
              {i === 2 && (
                <Link href={project.link} target='_blank' style={{ color: 'purple' }}>
                  here
                </Link>
              )}
            </Text>
          ))}
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Description
