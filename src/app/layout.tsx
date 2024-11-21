import type { Metadata } from "next";
import 'reactflow/dist/style.css';
import './global.css';
import '@mantine/core/styles.css';
import { UserProvider } from "@/components/dashboard/UserProvider";

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
        <UserProvider>
          {children}  
        </UserProvider>
      </body>
    </html>
  );
}

export default RootLayout;
