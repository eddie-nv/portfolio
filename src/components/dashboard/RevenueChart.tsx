'use client';
import React, { useEffect, useState } from 'react';
import { Card, Select, Typography, Spin } from 'antd';
import { AgCharts } from 'ag-charts-react';
import { AgChartOptions, AgBarSeriesOptions } from 'ag-charts-community';
import { useTheme } from '@/utils/context/ThemeContext';

const { Title } = Typography;

const RevenueChart: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState<'month' | 'day'>('month');
  const [options, setOptions] = useState<AgChartOptions>({
    data: chartData,
    theme: isDarkMode ? 'ag-default-dark' : 'ag-default',
    series: [
      {
        type: 'bar',
        xKey: 'label',
        yKey: 'revenue',
        fill: '#4c8bf5',
        cornerRadius: 7
      } as AgBarSeriesOptions
    ],
    background: {
      fill: 'transparent',
    },
    axes: [{
      type: 'category',
      position: 'bottom'
    }, {
      type: 'number',
      position: 'left',
    }]
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (type: 'month' | 'day') => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/chart?type=${type}`);
      const data = await response.json();
      setChartData(type === 'day' ? data.revenueByDay : data.revenueByMonth);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(chartType);
  }, [chartType]);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      data: chartData,
    }));
  }, [chartData]);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      theme: isDarkMode ? 'ag-default-dark' : 'ag-default',
    }));
  }, [isDarkMode]);

  const handleChange = (value: 'month' | 'day') => {
    setChartType(value);
    fetchData(value);
  };

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={5} style={{ margin: 0 }}>Revenue Chart</Title>
        <Select
          value={chartType}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'month', label: 'This Year' },
            { value: 'day', label: 'This Week' },
          ]}
        />
      </div>
      <Spin spinning={isLoading}>
        <AgCharts options={options} />
      </Spin>
    </Card>
  );
};

export default RevenueChart;
