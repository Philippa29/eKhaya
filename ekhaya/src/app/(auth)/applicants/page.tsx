'use client'
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useApplicationAction, useApplicationState } from '@/provider/application';

const unitTypeMap = {
    1: 'Bachelor',
    2: 'One Bedroom',
    3: 'Two Bedroom',
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'Application Status',
    dataIndex: 'applicationStatus',
    key: 'applicationstatus',
    render: (applicationStatus: number) => {
      switch (applicationStatus) {
        case 1:
          return 'Pending';
        case 2:
          return 'Approved';
        case 3:
          return 'Rejected';
        default:
          return 'Unknown';
      }
    },
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    key: 'createdDate',
    render: (createdDate: Date) => {
      const formattedDate = new Date(createdDate).toISOString().split('T')[0]; // Format date to YYYY-MM-DD
      return formattedDate;
    },
  },
  {
    title: 'Property Name',
    dataIndex: 'propertyName',
    key: 'propertyname',
  },
];

const ApplicationTable: React.FC = () => {
    const { getapplications } = useApplicationState(); 
    const { getApplicationForApplicant } = useApplicationAction(); 

    useEffect (()=>{
        getApplicationForApplicant(); 
    }, []);

    return (
      
        <Table dataSource={getapplications} columns={columns} />
    );
};

export default ApplicationTable;
