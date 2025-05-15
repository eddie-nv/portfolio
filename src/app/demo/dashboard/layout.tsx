'use client';
import React from 'react';
import { ConfigProvider, Flex, Layout, theme, Typography, Spin } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeToggle } from '@/components/dashboard/ThemeToggle';
import { Search } from '@/components/dashboard/Search';
import { Notifications } from '@/components/dashboard/Notifications';
import { UserDisplay } from '@/components/dashboard/UserDisplay';
import { SidebarLinks } from '@/components/dashboard/SidebarLinks';
import { UserProvider, useUser } from '@/components/dashboard/UserProvider';
import { ThemeProvider, useTheme } from '@/components/dashboard/ThemeContext';

const { Header, Sider, Content } = Layout;

const DemoLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return (
      <Flex style={{ height: '100vh' }} align="center" justify="center">
        <Spin size="large" />
      </Flex>
    );
  }

  if (error || !user) {
    return (
      <Flex style={{ height: '100vh' }} align="center" justify="center">
        <Typography.Text type="danger">
          {error?.message || 'Unable to load user data'}
        </Typography.Text>
      </Flex>
    );
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ height: '100vh' }} hasSider>
        <Sider width={200} theme={isDarkMode ? 'dark' : 'light'} style={{height: '100vh', position: 'fixed'}}>
          <Flex align='center' vertical gap={20} style={{height: '100%', paddingTop: '21px'}} >
            <UserDisplay />
            <SidebarLinks />
          </Flex>
        </Sider>
        <Layout style={{marginLeft: 200}}>
          <Header style={{backgroundColor: 'transparent'}}>
            <Flex justify='space-between' align='center' style={{height: '100%'}}>
              <Typography.Text style={{fontSize: '25px'}}>
                Dashboard
              </Typography.Text>
              <Flex gap={10} align='center'>
                <Search/>
                <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
                <Notifications />
                <UserDisplay />
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
  );
};

const DemoLayout = ({ children }: React.PropsWithChildren) => (
  <UserProvider>
    <ThemeProvider>
      <DemoLayoutContent>{children}</DemoLayoutContent>
    </ThemeProvider>
  </UserProvider>
);

export default DemoLayout;