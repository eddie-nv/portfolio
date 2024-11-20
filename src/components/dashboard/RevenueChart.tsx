'use client';
import React, { useState } from 'react';
import { Card, Select, Typography } from 'antd';

const { Title } = Typography;

type TimeRange = 'This Year' | 'This Week';

const RevenueChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('This Year');

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={5} style={{ margin: 0 }}>Revenue Chart</Title>
        <Select
          value={timeRange}
          style={{ width: 120 }}
          onChange={(value: TimeRange) => setTimeRange(value)}
          options={[
            { value: 'This Year', label: 'This Year' },
            { value: 'This Week', label: 'This Week' },
          ]}
        />
      </div>
    </Card>
  );
};

export default RevenueChart;
