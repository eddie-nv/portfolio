'use client';
import React from 'react';
import { Badge, Button, Dropdown, List, Space, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useTheme } from '@/utils/context/ThemeContext';

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
};

const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'New Message',
    description: 'You have a new message from John',
    time: '2 min ago'
  },
  {
    id: '2',
    title: 'System Update',
    description: 'System maintenance scheduled',
    time: '1 hour ago'
  }
];

export const Notifications = () => {
  const { isDarkMode } = useTheme();
  
  const notificationContent = (
    <List
      style={{ 
        width: 300, 
        padding: 10, 
        maxHeight: 400, 
        borderRadius: 10,
        overflow: 'auto', 
        boxShadow: isDarkMode ? '0 0 10px 0 rgba(255, 255, 255, 0.1)' : '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: isDarkMode ? '#111111' : '#ffffff' 
      }}
      dataSource={mockNotifications}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={
              <Space direction="vertical" size={0}>
                <Typography.Text>{item.description}</Typography.Text>
                <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                  {item.time}
                </Typography.Text>
              </Space>
            }
          />
        </List.Item>
      )}
    />
  );

  return (
    <Dropdown 
      dropdownRender={() => notificationContent}
      trigger={['click']}
      placement="bottomRight"
    >
      <Badge count={mockNotifications.length} size="small">
        <Button type="text" icon={<BellOutlined />} />
      </Badge>
    </Dropdown>
  );
};
