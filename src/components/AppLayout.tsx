'use client'
import { MantineProvider, AppShell, AppShellMain } from '@mantine/core';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { theme } from '@/app/theme';
import { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 75 }}>
        <Header />
        <AppShellMain>
          {children}
        </AppShellMain>
        <Footer />
      </AppShell>
    </MantineProvider>
  );
};
