'use client';
import React from 'react';
import { Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

export const ThemeToggle = ({ isDarkMode, onToggle }: ThemeToggleProps) => {
  return (
    <Switch
      checked={isDarkMode}
      onChange={onToggle}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
    />
  );
};
