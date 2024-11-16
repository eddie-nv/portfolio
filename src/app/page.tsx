'use client'
import { Container, Stack, MantineProvider, AppShell, AppShellMain } from '@mantine/core';
import { useState, useEffect } from 'react';
import Hero from '@/layouts/home/Hero';
import Projects from '@/layouts/home/Projects';
import About from '@/layouts/home/About';
import MyStack from '@/layouts/home/MyStack';
import IntroAnimation from '@/components/IntroAnimation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { theme } from './theme';

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{height: 75}}>
        <Header />
        <AppShellMain>
          <IntroAnimation 
            onComplete={() => {
              document.body.style.overflow = 'unset';
            }} 
            position={position}
          />
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
        </AppShellMain>
        <Footer />
      </AppShell>
    </MantineProvider>
  );
}

export default Home;