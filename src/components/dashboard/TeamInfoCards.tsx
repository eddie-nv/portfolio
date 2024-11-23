'use client';
import React from 'react';
import { Card, Avatar, Typography, Button, Space, Row, Col } from 'antd';
import { UserOutlined, LinkOutlined } from '@ant-design/icons';
import { AgCharts } from 'ag-charts-react';
import { AgChartOptions, AgBarSeriesOptions } from 'ag-charts-community';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

const TeamInfoCards: React.FC = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [chartOptions, setChartOptions] = useState<AgChartOptions>({
    data: performanceData,
    series: [{
      type: 'bar',
      xKey: 'label',
      yKey: 'performance',
      stroke: '#1890ff',
      marker: {
        enabled: true,
        fill: '#1890ff',
      }
    } as AgBarSeriesOptions],
    background: {
      fill: 'transparent',
    },
    axes: [{
      type: 'category',
      position: 'bottom',
    }, {
      type: 'number',
      position: 'left',
    }],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/team');
      const data = await response.json();
      setPerformanceData(data);
      setChartOptions(prev => ({
        ...prev,
        data: data,
      }));
    };
    fetchData();
  }, []);

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Card>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text type="secondary">Team Review</Text>
            <Title level={4} style={{ margin: '8px 0' }}>Oxish Project Team</Title>
            <Space style={{ marginBottom: 16 }}>
              <Text type="secondary">14, 10, 2023</Text>
              <Text type="secondary">•</Text>
              <Text type="secondary">15 Members</Text>
            </Space>
            <Space align="center" style={{ justifyContent: 'space-between', width: '100%' }}>
              <Button type="primary">Notion File</Button>
              <Avatar.Group>
                <Avatar icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
              </Avatar.Group>
            </Space>
          </Space>
        </Card>
      </Col>

      <Col span={24}>
        <Card>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text type="secondary">Meeting</Text>
            <Title level={4} style={{ margin: '8px 0' }}>Upcoming Event Planning Discussion</Title>
            <Text type="secondary">Don&apos;t forget our next team project</Text>
            <Text type="secondary">planning discussion!</Text>
            <Space style={{ marginTop: 16 }}>
              <Text>16th Oct</Text>
              <Text type="secondary">11:00 - 12:00</Text>
            </Space>
            <Button type="primary" icon={<LinkOutlined />}>Meeting Zoom Link</Button>
          </Space>
        </Card>
      </Col>

      <Col span={24}>
        <Card>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text type="secondary">Team Performance</Text>
            <Text type="secondary">Last 4 months</Text>
            <AgCharts options={chartOptions} />
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default TeamInfoCards;
