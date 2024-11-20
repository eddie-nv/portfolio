import React, { useState } from 'react';
import { Card, Table, Select, Badge } from 'antd';

const { Option } = Select;

type Transaction = {
  key: string;
  name: string;
  status: string;
  date: string;
  amount: number;
};

const transactionData: Transaction[] = [
  { key: '1', name: 'Robert Carter', status: 'Pending', date: 'June 14, 2023', amount: 2438.71 },
  { key: '2', name: 'Daniel Foster', status: 'Done', date: 'June 12, 2023', amount: -526.47 },
  // Add more transactions as needed
];

const statusColors: Record<string, string> = {
  Draft: 'red',
  Pending: 'yellow',
  Done: 'blue',
};

const Transactions: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const filteredData = transactionData.filter((transaction) => {
    if (filter === 'all') return true;
    return transaction.status === filter;
  });

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => (
        <Badge color={statusColors[status]} text={status} />
      ),
    },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { 
      title: 'Amount', 
      dataIndex: 'amount', 
      key: 'amount', 
      render: (amount: number) => (
        <span style={{ color: amount > 0 ? 'green' : 'red' }}>
          {amount > 0 ? `+ $${amount.toFixed(2)}` : `- $${Math.abs(amount).toFixed(2)}`}
        </span>
      ),
    },
  ];

  return (
    <Card title="Transactions" extra={
      <Select defaultValue="all" onChange={handleFilterChange}>
        <Option value="all">All Statuses</Option>
        <Option value="Draft">Draft</Option>
        <Option value="Pending">Pending</Option>
        <Option value="Done">Done</Option>
      </Select>
    }>
      <Table dataSource={filteredData} columns={columns} pagination={false} />
    </Card>
  );
};

export default Transactions;
