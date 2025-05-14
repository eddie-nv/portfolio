'use client';
import React, { useEffect, useState } from 'react';
import { Col, Card, Typography, Space, Spin, Row } from 'antd';
import { ProjectOutlined, CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

type ProjectsResponse = {
  totalProjects: number;
  completedProjects: number;
  completionRate: number;
  runningProjects: number;
  runningRate: number;
  runningRateSentence: string;
};

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
  const [data, setData] = useState<ProjectsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects');
        const result: ProjectsResponse = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
        <Row 
            justify="center" 
            align="middle" 
            style={{ width: '100%' }}
        >
            <Col>
                <Spin />
            </Col>
        </Row>
    );
  }

  if (!data) {
    return <Text type="danger">Failed to load project data.</Text>;
  }

  return (
    <>
      <ProjectCard
        icon={<ProjectOutlined style={{ fontSize: '24px' }} />}
        title="Total Projects"
        count={data.totalProjects}
        subtitle="All running & completed projects"
      />
      <ProjectCard
        icon={<CheckCircleOutlined style={{ fontSize: '24px' }} />}
        title="Completed Projects"
        count={data.completedProjects}
        subtitle={`${data.completionRate}% Completion rate this month`}
      />
      <ProjectCard
        icon={<SyncOutlined style={{ fontSize: '24px' }} />}
        title="Running Projects"
        count={data.runningProjects}
        subtitle={`${data.runningRate}% ${data.runningRateSentence}`}
      />
    </>
  );
};

export default ProjectInfoCards;
