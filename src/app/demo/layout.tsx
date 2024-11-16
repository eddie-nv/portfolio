'use client';
import React, { useState } from 'react';
import { ConfigProvider, Button, Layout, theme } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
          <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} theme={`${isDarkMode ? 'dark' : 'light'}`}>
            </Sider>
            <Layout>
              <Header style={{backgroundColor: 'transparent'}}>
                <Button onClick={toggleTheme}>
                  Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                </Button>
              </Header>
              <Content >
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