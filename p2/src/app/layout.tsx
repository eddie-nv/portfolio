import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/ui/Navbar";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo's Portfolio",
  description: "Made with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
