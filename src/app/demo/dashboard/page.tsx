'use client';
import React from 'react';
import { Button, Space} from 'antd';

const DashboardPage: React.FC = () => {

  return (
      <Space direction="vertical" style={{ width: '100%', padding: '20px' }}>
        <Button >
          Switch 
        </Button>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard page!</p>
        </div>
      </Space>
  );
};

export default DashboardPage;
