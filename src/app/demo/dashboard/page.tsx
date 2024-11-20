'use client';
import React from 'react';
import { Layout, Row, Col } from 'antd';
import ProjectInfoCards from '@/components/dashboard/ProjectInfoCards';
import TeamInfoCards from '@/components/dashboard/TeamInfoCards';
import RevenueChart from '@/components/dashboard/RevenueChart';
import Transactions from '@/components/dashboard/Transactions';

const DashboardPage: React.FC = () => {
  return (
    <Layout style={{ padding: '24px', minHeight: '100vh' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={17}>
          <Row gutter={[24, 24]}>
            <ProjectInfoCards />
          </Row>
          <Row style={{ marginTop: 24 }} gutter={[24, 24]}>
            <Col span={24}>
              <RevenueChart />
            </Col>
            <Col span={24}>
              <Transactions />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={7}>
          <TeamInfoCards />
        </Col>
      </Row>
    </Layout>
  );
};

export default DashboardPage;
