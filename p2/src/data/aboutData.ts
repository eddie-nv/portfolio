export const aboutData = {
    images: [
        {
            src: '/images/about/1.jpg',
            alt: 'About Image 1',
            bg: 'red',
            ratio: 12/9,
            width: '200px',
            rotation: -10,
            translateX: 5,
            translateY: 0,
        },
        {
            src: '/images/about/2.jpg',
            alt: 'About Image 2',
            bg: 'blue',
            ratio: 9/12,
            width: '110px', 
            rotation: 10,
            translateX: 0,
            translateY: -12,
        },
        {
            src: '/images/about/3.jpg',
            alt: 'About Image 3',
            bg: 'green',
            ratio: 12/8.5,
            width: '160px',
            rotation: 0,
            translateX: -12,
            translateY: 30,
        },
        {
            src: '/images/about/4.jpg',
            alt: 'About Image 4',
            bg: 'yellow',
            ratio: 9/11,
            width: '115px',
            rotation: 3,
            translateX: -17,
            translateY: 0,
        },
    ],
    infoItems: [
        {
            title: 'About Me',
            id: 'about-me',
            content: [
                'paragraph 1 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'paragraph 2 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'paragraph 3 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            ],
        },
        {
            title: 'Connect',
            id: 'connect',
            content: [
                {
                    label: 'Email',
                    href: 'mailto:ed.nava.valencia@gmail.com',
                    color: 'white'
                },
                {
                    label: 'Phone',
                    href: 'tel:+52 993 123 4567',
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
                }   
            ],
        },
        {
            title: 'Experience',
            id: 'experience',
            content: [
                {
                    position: 'Software Engineer',
                    company: 'Google',
                    timeWorked: '2021-Current',
                    companyUrl: 'https://www.google.com'
                },
                {
                    position: 'Software Engineer',
                    company: 'Google',
                    timeWorked: '2021-Current',
                    companyUrl: 'https://www.google.com'
                }
            ],
        },
        {
            title: 'Contributions',
            id: 'contributions',
            content: [
                {
                    company: 'Contribution 1',
                    tagline: 'Contribution 1',
                    viewContribution: 'https://github.com/edunava/contribution1',
                    companyUrl: 'https://www.google.com'
                },
                {
                    company: 'Contribution 2',
                    tagline: 'Contribution 2',
                    viewContribution: 'https://github.com/edunava/contribution2',
                    companyUrl: 'https://www.google.com'
                }
            ],
        }
    ],
}