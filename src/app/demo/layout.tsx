'use client';
import React, { useState } from 'react';
import { ConfigProvider, Flex, Layout, theme, Typography } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeToggle } from '@/components/dashboard/ThemeToggle';
import { Search } from '@/components/dashboard/Search';
import { Notifications } from '@/components/dashboard/Notifications';
import { UserDisplay } from '@/components/dashboard/UserDisplay';
import { SidebarLinks } from '@/components/dashboard/SidebarLinks';

const { Header, Sider, Content } = Layout;

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
        >
          <Layout style={{ height: '100vh' }} hasSider>
            <Sider width={200} theme={`${isDarkMode ? 'dark' : 'light'}`} style={{height: '100vh', position: 'fixed'}}>
              <Flex align='center' vertical  gap={20} style={{height: '100%', paddingTop: '21px'}} >
                <UserDisplay name="John Smith"/>
                <SidebarLinks />
              </Flex>
            </Sider>
            <Layout style={{marginLeft: 200}}>
              <Header style={{backgroundColor: 'transparent'}}>
                <Flex justify='space-between' align='center' style={{height: '100%'}}>
                  <Typography.Text>
                    Dashboard
                  </Typography.Text>
                  <Flex gap={10} align='center'>
                    <Search/>
                    <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
                    <Notifications />
                    <UserDisplay name="John Smith"/>
                  </Flex>
                </Flex>
              </Header>
              <Content>
                <AntdRegistry>
                  {children}
                </AntdRegistry>
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
};

export default RootLayout;