type ProjectContent = {
    type: 'title' | 'text' | 'image' | 'list'
    title?: string
    description?: string[]
    image?: string
    imageDescription?: string
    list?: string[]
}

type Project = {
    mainTitle: string
    hook: string
    titleLink: string
    description: string
    projectContent: ProjectContent[]
}

export const projectsData: Record<string, Project> = {
    'yes-chef': {
        mainTitle: 'Yes Chef',
        hook: 'An AI-powered home kitchen assistant',
        titleLink: 'https://yeschef.ai',
        description: 'Managing a home kitchen can feel like juggling a dozen spinning plates—tracking what’s in your pantry, planning meals, remembering what equipment you have, and finding time to cook. I wanted to see if AI could help turn this chaos into something closer to a professional chef’s workflow. That’s how "yes chef" was born: an app that lets you ask AI models to help you run your kitchen like a pro.',
        projectContent: [
            {
                type: 'title',
                title: 'How it works',
            },
            {
                type: 'text',
                description: [
                    'yes chef is a smart kitchen assistant that combines inventory tracking, equipment management, meal planning, and scheduling into a single, intuitive interface. Inspired by the efficiency of restaurant kitchens, it’s designed to help home cooks plan meals, avoid waste, and make the most of what they have—without the stress.',
                ]
            },
            {
                type: 'image',
                image: '/image/yes_chef.png',
                imageDescription: 'Shots of the chatbox in action',
            },
            {
                type: 'text',
                description: [
                    'Built with Next.js, Mantine UI, and TypeScript, yes chef brings together several key features:'
                ]
            },
            {
                type: 'list',
                list: [
                    'A chat box UI where you can ask the AI for recipe ideas, meal plans, or inventory suggestions.',
                    'A dynamic data table that displays your current pantry inventory and kitchen equipment, updating in real time as you add or use items.',
                    'A calendar view that shows upcoming meal events, letting you schedule and visualize your cooking plans.',
                    'Todo lists for prepping ingredients, shopping, or tracking kitchen tasks.',
                ]
            },
            {
                type: 'text',
                description: [
                    'I found that having all this information in one place, with AI suggestions just a message away, made meal planning and kitchen management much less overwhelming.'
                ]
            },
            {
                type: 'title',
                title: 'Functional bits',
            },
            {
                type: 'text',
                description: [
                    'The core of yes chef is its AI-powered chat interface. Users can ask for meal ideas based on what’s in their pantry, get step-by-step recipes, or request a week’s worth of meal plans. The app keeps track of inventory and equipment, so the AI can suggest only what’s possible with what you have.',
                    'Inventory and equipment are managed through a responsive data table, making it easy to add, remove, or update items. The calendar integrates with your meal plans, automatically generating events for each planned meal. Todo lists help break down complex recipes or prep tasks into manageable steps.',
                    'All UI components are built with Mantine for a clean, responsive experience, and state is managed efficiently to keep everything in sync.',
                ],
            },
            {
                type: 'text',
                description: [
                    'The project is still evolving, but it’s already made my kitchen feel a little more like a chef’s—and a lot less like a guessing game.'
                ]
            }
        ]
        
    },
    'connect-for-purpose': {
        mainTitle: 'Connect for Purpose',
        hook: 'A platform for connecting volunteers with organizations in need',
        titleLink: 'https://connectforpurpose.com',
        description: 'Non-profits thrive on the energy and commitment of volunteers, but too often, the process of signing up is a hurdle. I wanted to make it as easy as possible for people to step up and help. That’s how "Connect for Purpose" came to be—a focused, action-driven page designed to connect volunteers with non-profits in need.',
        projectContent: [
            {
                type: 'title',
                title: 'The Challenge',
            },
            {
                type: 'text',
                description: [
                    'Connect for Purpose is a streamlined web app that puts the call to action front and center. The goal: make it effortless for volunteers to sign up and get involved, while giving non-profits a simple way to reach out for help.',
                ]
            },
            {
                type: 'image',
                image: '/image/connect_for_purpose.png',
                imageDescription: 'A screenshot of the Connect for Purpose website',
            },
            {
                type: 'title',
                title: 'A look at the landing page and sign-up flow',
            },
            {
                type: 'text',
                description: [
                    'The project started with a clear vision: a single, compelling page that guides users from interest to action in just a few clicks. I chose Vite and React for their speed and developer experience, allowing rapid iteration and a snappy user interface.',
                ]
            },
            {
                type: 'title',
                title: 'Functional bits',
            },
            {
                type: 'text',
                description: [
                    'The app’s structure is simple but effective. I set up routing to handle different pages—landing, sign-up, and information—ensuring a smooth flow for users. Each page was built out in two focused code sprints, prioritizing clarity and responsiveness.',
                    'To make deployment seamless, I configured GitHub Actions for CI/CD. Every push to the main branch triggers a build and deploys the latest version to Hostinger automatically. This setup means updates are live within minutes, with no manual steps required.',
                ]
            },
            {
                type: 'title',
                title: 'A close-up of the deployment pipeline',
            },
            {
                type: 'text',
                description: [
                    'Setting up CI/CD was a key part of the project. Automating the build and deployment process not only saves time but also ensures that the site is always up-to-date and reliable. The GitHub Actions workflow handles everything from installing dependencies to pushing the finished build to the hosting provider.'
                ]
            },
            {
                type: 'title',
                title: 'Reflections',
            },
            {
                type: 'text',
                description: [
                    'Building Connect for Purpose was a lesson in focus: stripping away everything but the essentials to create a frictionless experience for volunteers. The automated deployment pipeline means the team can iterate quickly and keep the call to action fresh.',
                ]
            },
            {
                type: 'text',
                description: [
                    'The project is live and serving its purpose—helping non-profits connect with the people who want to make a difference.'
                ]
            }
            
        ]
    },
    'wrap-and-tint-my-ride': {
        mainTitle: 'Wrap and Tint My Ride',
        hook: 'A platform for connecting volunteers with organizations in need',
        titleLink: 'https://wrapandtintmyride.com',
        description: 'Car customization is an art, but learning how to wrap and tint vehicles can be intimidating for beginners. We wanted to create a site for a local car shop that not only promoted their services, but also offered hands-on classes—making the process approachable, professional, and fun.',
        projectContent: [
            {
                type: 'title',
                title: 'Laying the foundation',
            },
            {
                type: 'text',
                description: [
                    'To ensure the site was both maintainable and scalable, I built it in Webflow using the Client-First strategy by Finsweet. This approach provided a clear structure for class naming, spacing, and component organization, making collaboration with the designer seamless and future updates straightforward. The Client-First system also made it easy to keep the site responsive and accessible, with a consistent look and feel across all devices.'
                ],
            },
            {
                type: 'title',
                title: 'Collaborative workflow',
            },
            {
                type: 'text',
                description: [
                    'Working closely with the designer, we broke the project into three focused code sprints. Each sprint tackled a major section of the site: the landing page and call-to-action, the class information and sign-up flow, and the gallery/testimonials. We held regular stand-ups to review progress, surface blockers, and keep the project moving efficiently.'
                ],
            },
            {
                type: 'title',
                title: 'Arguing semantics',
            },
            {
                type: 'text',
                description: [
                    'Following the Client-First methodology, we used semantic HTML and organized folders for every section and component. This not only improved accessibility and SEO, but also made the site easy for the client to update—no more hunting through a tangle of unnamed divs.'
                ]
                    
            },
            {
                type: 'title',
                title: 'Looking further afield',
            },
            {
                type: 'text',
                description: [
                    'Building "Wrap and Tint My Ride" was a lesson in the power of process: by combining a robust design system (Client-First) with agile collaboration, we delivered a site that’s both beautiful and easy to maintain. The result is a call-to-action that’s as inviting as it is effective, helping more people discover the art of car customization.'
                ]
            }
        ]
    },
    'touchstone': {
        mainTitle: 'Touchstone',
        hook: 'STD testing and verification service',
        titleLink: 'https://touchstone.com',
        description: 'Touchstone is a platform for at-home STD testing and verification. It offers a range of tests, including HIV, syphilis, and chlamydia, and provides a digital verification service. The platform is designed to be user-friendly and accessible, with a focus on privacy and convenience.',
        projectContent: [
            {
                type: 'title',
                title: 'The gap',
            },
            {
                type: 'text',
                description: [
                    'Access to reliable, private STD testing and verification remains a challenge for many. While there are more options than ever, the process is often fragmented, inconvenient, or intimidating. Touchstone set out to close this gap by offering a platform for at-home tests, digital verification, and resources for safe practice—all in one place.'
                ]   
            },
            {
                type: 'title',
                title: 'Decisions',
            },
            {
                type: 'text',
                description: [
                    'For the initial mobile experience, I was tasked with building the first version of the Touchstone app using React Native. The goal was to deliver a fast, intuitive interface that would make it easy for users to access testing services, manage their results, and find information—no matter their device.'
                ]
            },
            {
                type: 'title',
                title: 'Limitations and workarounds',
            },
            {
                type: 'text',
                description: [
                    'Building a cross-platform app in React Native meant balancing native feel with rapid development. I focused on establishing a robust navigation structure from the start, implementing a bottom bar for quick access to the core features: Home, Tests, Verification, and Resources. This pattern is familiar to users and keeps the most important actions always within reach.',
                    'The initial build prioritized performance and accessibility, with careful attention to navigation state and screen transitions. I leveraged React Navigation for the bottom bar, ensuring smooth, native-like interactions and easy extensibility for future features.'
                ]
            },
            {
                type: 'image',
                image: '/image/touchstone.png',
                imageDescription: 'A look at the navigation',
            },
            {
                type: 'title',
                title: 'Still to come',
            },
            {
                type: 'text',
                description: [
                    'The foundation is in place, but there’s more to build before Touchstone is ready for public launch:'
                ]
            },
            {
                type: 'list',
                list: [
                    'User authentication and secure result storage',
                    'Test ordering and result submission flows',
                    'In-app notifications and reminders',
                    'Expanded educational resources',
                ]
            },
            {
                type: 'text',
                description: [
                    'Touchstone is already making it easier to take control of sexual health, and the groundwork laid in the initial React Native build will support a full suite of features as the platform grows.'
                ]
            }
        ]
    },
    'dashboard': {
        mainTitle: 'Dashboard',
        hook: 'An example dashboard for a fictional company',
        titleLink: '/demo/dashboard',
        description: 'Data overload is a real problem for businesses today. Teams have metrics spread across multiple platforms, making it difficult to spot trends and make informed decisions. I built this dashboard to tackle that challenge—bringing critical business metrics into a single, intuitive interface that updates in real-time.',
        projectContent: [
            {
                type: 'title',
                title: 'The challenge',
            },
            {
                type: 'text',
                description: [
                    'The goal was to create a dashboard that didn\'t just display data, but made it immediately understandable and actionable. The interface needed to be clean enough to avoid overwhelming users, while still providing deep insights across multiple business functions.'
                ]   
            },
            {
                type: 'image',
                image: '/image/dashboard.png',
                imageDescription: 'The dashboard showing key metrics with data visualization',
            },
            {
                type: 'title',
                title: 'Technical approach',
            },
            {
                type: 'text',
                description: [
                    'I built the dashboard using Next.js and TypeScript for a solid foundation, with Mantine UI providing the component library. For data visualization, I integrated Recharts to create responsive, interactive graphs that adapt to any screen size. The real-time updates are powered by Server-Sent Events (SSE), giving users live data without the overhead of WebSockets.'
                ]
            },
            {
                type: 'title',
                title: 'Core features',
            },
            {
                type: 'list',
                list: [
                    'Real-time KPI cards showing critical metrics with trend indicators',
                    'Interactive charts with customizable time ranges and comparison periods',
                    'Data tables with sorting, filtering, and export capabilities',
                    'User-configurable dashboard layouts using a drag-and-drop interface',
                    'Role-based access control for different data sensitivity levels'
                ]
            },
            {
                type: 'title',
                title: 'Performance considerations',
            },
            {
                type: 'text',
                description: [
                    'With dashboards, performance is everything—users expect data to load quickly and updates to happen instantly. I implemented several optimizations to ensure a smooth experience:',
                    'Charts render on the client side but use data prefetched at build time where possible. Live updates use efficient delta patching to minimize payload size. The entire UI is virtualized to handle large datasets without performance degradation, and React Query handles caching and background refreshes to keep everything snappy.'
                ]
            },
            {
                type: 'title',
                title: 'Lessons learned',
            },
            {
                type: 'text',
                description: [
                    'Building this dashboard reinforced how important it is to deeply understand user workflows before designing data visualizations. What looks impressive isn\'t always what\'s most useful. Through user testing and iteration, I found that simple, focused views with clear actions attached were far more valuable than complex, feature-rich displays.'
                ]
            },
            {
                type: 'text',
                description: [
                    'The project continues to evolve based on user feedback, with planned additions including predictive analytics and more customizable alert thresholds.'
                ]
            }
        ]
    }

}
