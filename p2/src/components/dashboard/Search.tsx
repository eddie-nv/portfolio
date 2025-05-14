'use client';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const Search = () => {
  return (
    <Input
      placeholder="Search"
      prefix={<SearchOutlined />}
      style={{
        borderRadius: '20px',
        backgroundColor: 'rgba(0,0,0,0.04)',
        border: 'none',
        width: '200px',
      }}
    />
  );
};
