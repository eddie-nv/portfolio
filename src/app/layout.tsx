import type { Metadata } from "next";
import { MantineProvider, AppShell, AppShellMain } from '@mantine/core';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { theme } from './theme';
import 'reactflow/dist/style.css';
import './global.css';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: "Eduardo Nava",
  description: "Software Engineer",
};


function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <AppShell header={{height: 75}}>
            <Header/>
            <AppShellMain>
              {children}  
            </AppShellMain>
            <Footer/>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout;
