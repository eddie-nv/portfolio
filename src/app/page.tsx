'use client'
import { Container, Stack } from '@mantine/core';
import { useState, useEffect } from 'react';
import Hero from '@/layouts/home/Hero';
import Projects from '@/layouts/home/Projects';
import About from '@/layouts/home/About';
import MyStack from '@/layouts/home/MyStack';
import IntroAnimation from '@/components/IntroAnimation';

function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <>
      {showIntro && <IntroAnimation 
        onComplete={() => {
          setShowIntro(false)
        }} 
        position={position}
      />}
      <Container mt={100} style={{ 
        opacity: 1,
        transition: 'opacity 5s ease-in'
      }}>
        <Stack gap={100}>
          <Hero setPosition={setPosition}/>
          <MyStack />
          <Projects />
          <About />  
        </Stack>
      </Container>
    </>
  );
}

export default Home