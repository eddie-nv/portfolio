const initialHomeData = {
    hero: {
      jobTitle: 'Frontend Engineer',
      title: 'Eduardo Nava',
      subtitle: "I'm a Bay Area based Frontend Engineer and contributor to @mantine",
      contactLinks: [
        {
          label: 'Email',
          href: 'mailto:ed.nava.valencia@gmail.com',
          color: 'white'
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
        technologies: ['React', 'CI/CD'],
        link: '/projects/project1'
      },
      {
        title: 'Project 2',
        description: 'Description 2',
        image: 'https://via.placeholder.com/150',
        timeWorked: '2020-2021',
        technologies: ['React', 'Next.js'],
        link: '/projects/project2'
      },
      {
        title: 'Project 3',
        description: 'Description 3',
        image: 'https://via.placeholder.com/150',
        timeWorked: '2019-2020',
        technologies: ['React', 'TypeScript'],
        link: '/projects/project3'
      },
      {
        title: 'Project 4',
        description: 'Description 4',
        image: 'https://via.placeholder.com/150',
        timeWorked: '2018-2019',
        technologies: ['React', 'Next.js'],
        link: '/projects/project4'
      },
    ]
}

const COLOR_CYCLE = ['red', 'blue', 'green', 'yellow']

const homeDataWithProjectsBadgeColors = (homeData: typeof initialHomeData) => {
  let colorIndex = -1
  const projects = homeData.projects

  const projectsWithBadgeColors = projects.map(project => ({
    ...project,
    badgeColor: project.technologies.map(() => {
      colorIndex = (colorIndex + 1) % COLOR_CYCLE.length
      return COLOR_CYCLE[colorIndex]
    })
  }))

  return {
    ...homeData,
    projects: projectsWithBadgeColors
  }
}

export const homeData = homeDataWithProjectsBadgeColors(initialHomeData)