import type { Metadata } from "next";
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
        {children}  
      </body>
    </html>
  );
}

export default RootLayout;
