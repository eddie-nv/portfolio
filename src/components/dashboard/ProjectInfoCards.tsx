'use client';
import React from 'react';
import { Col, Card, Typography, Space } from 'antd';
import { ProjectOutlined, CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

type ProjectCardProps = {
  icon: React.ReactNode;
  title: string;
  count: number;
  subtitle: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  icon, 
  title, 
  count, 
  subtitle, 
}) => (
  <Col xs={24} sm={8}>
    <Card 
      style={{ 
        borderRadius: '12px',
        height: '100%'
      }}
    >
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Space align="start" size='middle'>
          {icon}
          <Space direction='vertical'>
            <Text style={{ 
                fontSize: '16px'
            }}>
                {title}
            </Text> 
            <Title 
                level={2} 
                style={{ 
                    margin: '8px 0', 
                    fontSize: '28px'
                }}
            >
                {count.toLocaleString()}
            </Title>
            <Text 
                type={"secondary"} 
                style={{ 
                    fontSize: '14px'
                }}
            >
                {subtitle}
            </Text>
          </Space>
        </Space>
        
      </Space>
    </Card>
  </Col>
);

export const ProjectInfoCards: React.FC = () => {
  return (
    <>
      <ProjectCard
        icon={<ProjectOutlined style={{ fontSize: '24px' }} />}
        title="Total Projects"
        count={10724}
        subtitle="All running & completed projects"
      />
      <ProjectCard
        icon={<CheckCircleOutlined style={{ fontSize: '24px' }} />}
        title="Completed Projects"
        count={9801}
        subtitle="+1.4% Completion rate this month"
      />
      <ProjectCard
        icon={<SyncOutlined style={{ fontSize: '24px' }} />}
        title="Running Projects"
        count={923}
        subtitle="+4.3% Running projects increases"
      />
    </>
  );
};

export default ProjectInfoCards;
