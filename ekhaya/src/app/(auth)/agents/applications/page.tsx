'use client'
import { Table } from 'antd';
import Link from 'next/link';
import { useApplicationAction, useApplicationState } from '@/provider/application';


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
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Links',
    dataIndex: 'links',
    key: 'links',
    render: (text: any , record : any) => (
      <>
        <Link href={`/base64page?id=${record.id}&data=${btoa('YourBase64StringHere')}`}>
          Link 1
        </Link>
        <br />
        <Link href={`/base64page?id=${record.id}&data=${btoa('YourBase64StringHere')}`}>
          Link 2
        </Link>
        <br />
        <Link href={`/base64page?id=${record.id}&data=${btoa('YourBase64StringHere')}`}>
          Link 3
        </Link>
      </>
    ),
  },
];

const data = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Doe',
    email: 'jane.doe@example.com',
  },
  // Add more data as needed
];

const ApplicantsTable = () => {
    const {applications} = useApplicationState(); 
    const {getAllApplications} = useApplicationAction(); 
    
  return <Table columns={columns} dataSource={data} />;
};

export default ApplicantsTable;
