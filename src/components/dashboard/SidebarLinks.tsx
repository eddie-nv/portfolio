'use client';
import { Flex, Menu } from 'antd';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  AppstoreOutlined,
  ProjectOutlined,
  TransactionOutlined,
  TeamOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { type MenuProps } from 'antd';

const topMenuItems: MenuProps['items'] = [
  {
    key: '/demo/dashboard',
    icon: <AppstoreOutlined />,
    label: <Link href="/demo/dashboard">Dashboard</Link>,
  },
  {
    key: '/demo/projects',
    icon: <ProjectOutlined />,
    label: <Link href="/demo/projects">Projects</Link>,
  },
  {
    key: '/demo/transaction',
    icon: <TransactionOutlined />,
    label: <Link href="/demo/transaction">Transaction</Link>,
  },
  {
    key: '/demo/my-team',
    icon: <TeamOutlined />,
    label: <Link href="/demo/my-team">My Team</Link>,
  },
  {
    key: '/demo/research-data',
    icon: <DatabaseOutlined />,
    label: <Link href="/demo/research-data">Research Data</Link>,
  },
  {
    key: '/demo/reports',
    icon: <FileTextOutlined />,
    label: <Link href="/demo/reports">Reports</Link>,
  },
  {
    key: '/demo/settings',
    icon: <SettingOutlined />,
    label: <Link href="/demo/settings">Settings</Link>,
  },
  {
    key: '/demo/help',
    icon: <QuestionCircleOutlined />,
    label: <Link href="/demo/help">Help</Link>,
  },
];

const bottomMenuItem: MenuProps['items'] = [
  {
    key: '/',
    icon: <LogoutOutlined />,
    label: <Link href="/">Log Out</Link>,
  },
];

export const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <Flex vertical style={{height: '100%'}}>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        items={topMenuItems}
        style={{
          border: 'none',
          backgroundColor: 'transparent',
        }}
      />
      <Menu
        mode="inline"
        items={bottomMenuItem}
        style={{
          marginTop: 'auto',
          border: 'none',
          backgroundColor: 'transparent',
        }}
      />
    </Flex>
  );
};