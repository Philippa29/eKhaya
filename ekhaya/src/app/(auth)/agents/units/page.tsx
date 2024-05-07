'use client'
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Unit Number',
    dataIndex: 'unitNumber',
    key: 'unitNumber',
  },
  {
    title: 'Floor',
    dataIndex: 'floor',
    key: 'floor',
  },
  {
    title: 'Size (sqft)',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Rooms',
    dataIndex: 'rooms',
    key: 'rooms',
  },
  {
    title: 'Rent',
    dataIndex: 'rent',
    key: 'rent',
    render: (text : string ) => `$${text}`,
  },
];

const data = [
  {
    key: '1',
    unitNumber: 'A101',
    floor: '1st',
    size: 800,
    rooms: 2,
    rent: 1200,
  },
  {
    key: '2',
    unitNumber: 'B205',
    floor: '2nd',
    size: 1000,
    rooms: 3,
    rent: 1500,
  },
  {
    key: '3',
    unitNumber: 'C301',
    floor: '3rd',
    size: 1200,
    rooms: 4,
    rent: 1800,
  },
];

const ApartmentsUnitsTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default ApartmentsUnitsTable;
