'use client'
import { Container, Stack } from '@mantine/core';
import Hero from '@/layouts/home/Hero';
import Projects from '@/layouts/home/Projects';
import About from '@/layouts/home/About';
import MyStack from '@/layouts/home/MyStack';

function Home() {
  return (
    <>
      <Container mt={100}>
        <Stack gap={100}>
          <Hero />
          <MyStack />
          <Projects />
          <About />  
        </Stack>
      </Container>
    </>
  );
}

export default Home