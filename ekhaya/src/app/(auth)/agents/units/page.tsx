'use client'
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useUnitsAction , useUnitsState } from '@/provider/units';
const ApartmentsUnitsTable = () => {

  const { agentunits } = useUnitsState();
  const { getallUnitsAgent} = useUnitsAction();

  useEffect(() => {
    getallUnitsAgent();
  }, []);

  // Define columns for the table
  const columns = [
    {
      title: 'Unit Number',
      dataIndex: 'unitNumber',
      key: 'unitNumber',
    },
    {
      title: 'Floor',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Size (sqft)',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Availability',
      dataIndex: 'availability',
      key: 'availability',
      render: (text: any) => (text ? 'Available' : 'Not Available'),
    },
  ];

  return <Table columns={columns} dataSource={agentunits} />;
};

export default ApartmentsUnitsTable;
