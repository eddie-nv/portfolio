import { Hero } from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'

function Home() {
  return (
    <>
      <Hero jobTitle="Frontend Engineer" title="Eduardo Nava" subtitle="I'm a Bay Area based Frontend Engineer and contributor to @mantine" />
      <FeaturedProjects />
    </>
  );
}

export default Home;