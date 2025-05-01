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
          href: 'https://x.com/e_nava_valencia',
          color: 'white'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/e-nava-valencia/',
          color: 'white'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/eddie-nv',
          color: 'white'
        },
      ],
    },
    projects: [
      {
        title: 'Yes Chef',
        description: 'An AI-powered recipe generator and meal planner',
        image: 'https://via.placeholder.com/150',
        timeWorked: 'Mar. 2025 - Present',
        technologies: ['Nextjs', 'Supabase'],
        link: '/projects/project1'
      },
      {
        title: 'Connect for Purpose',
        description: 'A platform for nonprofits to connect with volunteers',
        image: 'https://via.placeholder.com/150',
        timeWorked: 'Sept. 2024 - Mar. 2025',
        technologies: ['React', 'CI/CD'],
        link: '/projects/project2'
      },
      {
        title: 'Wrap and Tint My Ride',
        description: 'A call to action for a local car wrap and tint shop',
        image: 'https://via.placeholder.com/150',
        timeWorked: 'Jan. 2024 - Sept. 2024',
        technologies: ['Webflow', 'Figma'],
        link: '/projects/project3'
      },
      {
        title: 'TouchStone Inc',
        description: 'STD testing and verification service',
        image: 'https://via.placeholder.com/150',
        timeWorked: 'Oct. 2023 - Jan. 2024',
        technologies: ['React Native', 'Expo'],
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