'use client'

import { Hero } from '@/components/home/Hero'
import Navbar from '@/components/ui/Navbar'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import { Box, Stack } from '@mantine/core'
import { useGradientColor } from '@/hooks/useGradientColor'
import Footer from '@/components/ui/Footer'
const HOME_DATA = {
  hero: {
    jobTitle: 'Frontend Engineer',
    title: 'Eduardo Nava',
    subtitle: "I'm a Bay Area based Frontend Engineer and contributor to @mantine",
    contactLinks: [
      {
        label: 'Email',
        href: 'mailto:edunava@gmail.com',
        color: ''
      },
      {
        label: 'Twitter',
        href: 'https://x.com/edunava',
        color: 'white'
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/edunava/',
        color: 'white'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/edunava',
        color: 'white'
      },
    ],
  },
  projects: [
    {
      title: 'Project 1',
      description: 'Description 1',
      image: 'https://via.placeholder.com/150',
      timeWorked: '2021-Current',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://project1.com'
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      image: 'https://via.placeholder.com/150',
      timeWorked: '2020-2021',
      technologies: ['React', 'Next.js', ],
      link: 'https://project2.com'
    },
    {
      title: 'Project 3',
      description: 'Description 3',
      image: 'https://via.placeholder.com/150',
      timeWorked: '2019-2020',
      technologies: ['React', 'Next.js', 'TypeScript', ],
      link: 'https://project3.com'
    },
    {
      title: 'Project 4',
      description: 'Description 4',
      image: 'https://via.placeholder.com/150',
      timeWorked: '2018-2019',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://project4.com'
    },
  ]
}

function Home() {
  const { currentColor, handleOnHover, handleOnLeave } = useGradientColor()
  return (
    <Stack gap={150}>
      <Box >
        <Navbar />
        <Hero {...HOME_DATA.hero} currentColor={{...currentColor, a: 0.8}} handleOnHover={handleOnHover} handleOnLeave={handleOnLeave}/>
      </Box>
      <FeaturedProjects projects={HOME_DATA.projects} />
      <Footer />
    </Stack>
  );
}

export default Home;