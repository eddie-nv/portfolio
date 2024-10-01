import { Container, Stack } from '@mantine/core';
import Hero from '@/layouts/home/Hero'
import Projects from '@/layouts/home/Projects';
import About from '@/layouts/home/About';

function Home() {
  return (
    <>
      <Container mt={100}>
        <Stack gap={100}>
          <Hero />
          <Projects />
          <About />  
        </Stack>
      </Container>
    </>
  );
}

export default Home