import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core"; 
// import { theme, globalTheme } from "./theme";
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
      {/* <body style={{...globalTheme.dark, ...globalTheme.common}}> */}
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
