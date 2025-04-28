import type { Metadata } from "next";
import { Box, MantineProvider } from "@mantine/core"; 
import { theme, globalTheme } from "./theme";
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
          <Box style={{...globalTheme.dark, ...globalTheme.common}}>
            {children}
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
