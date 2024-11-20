'use client';
import { Avatar, Flex, Typography } from 'antd';
import React from 'react';

type UserDisplayProps = {
  name: string;
  avatarUrl?: string;
};

export const UserDisplay = ({ name, avatarUrl }: UserDisplayProps) => {
  return (
    <Flex align='center' gap={10}>
      <Avatar 
        src={avatarUrl} 
        size="small"
        style={{ backgroundColor: !avatarUrl ? '#87d068' : undefined }}
      >
        {!avatarUrl ? name.charAt(0) : null}
      </Avatar>
      <Typography.Text>{name}</Typography.Text>
    </Flex>
  );
};
