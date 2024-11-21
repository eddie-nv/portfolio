'use client';
import { Avatar, Flex, Typography } from 'antd';
import { useUser } from './UserProvider';

export const UserDisplay = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Flex align='center' gap={10}>Loading...</Flex>;
  }

  if (!user) {
    return null;
  }

  return (
    <Flex align='center' gap={10}>
      <Avatar 
        src={user.imageUrl} 
        size="small"
        style={{ backgroundColor: !user.imageUrl ? '#87d068' : undefined }}
      >
        {!user.imageUrl ? user.name.charAt(0) : null}
      </Avatar>
      <Typography.Text>{user.name}</Typography.Text>
    </Flex>
  );
};
