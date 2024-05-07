'use client'
import { useEffect, useState } from 'react';
import { Table, Button , Modal} from 'antd';
import { useApplicationAction, useApplicationState } from '@/provider/application';
import { GetApplications } from '@/provider/application/interface';
import { useFileActions , useFileState } from '@/provider/file';
// Sample data for demonstration


enum ApplicationStatus {
  Pending = 1,
  UnderReview = 2,
  Approved = 3,
  Rejected = 4,
}

const ApplicationTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {getapplications} = useApplicationState(); 
  const {getAllApplications} = useApplicationAction(); 
  const { GetAllFiles} = useFileActions(); 
  const {files} = useFileState(); 
  
  const [selectedApplication, setSelectedApplication] = useState<GetApplications | null>(null);

  useEffect (()=> {
    getAllApplications(); 
  }, []

  )

  const handleRenderBase64 = (base64: string, fileType: string) => {
    // Create a data URL
    const dataUrl = `data:${fileType};base64,${base64}`;
    // Open the data URL in a new tab
    window.open(dataUrl, '_blank');
  };

  const handleShowDetails = (application: GetApplications) => {
    setSelectedApplication(application);
    setModalVisible(true);
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
      title: 'Email',
      dataIndex: 'applicantEmail',
      key: 'applicantEmail',
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Application Status',
      dataIndex: 'applicationStatus',
      key: 'applicationStatus',
      render: (status: ApplicationStatus) => {
        switch (status) {
          case ApplicationStatus.Pending:
            return 'Pending';
          case ApplicationStatus.UnderReview:
            return 'Under Review';
          case ApplicationStatus.Approved:
            return 'Approved';
          case ApplicationStatus.Rejected:
            return 'Rejected';
          default:
            return '';
        }
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: GetApplications) => (
        <div>
          <Button onClick={() => handleShowDetails(record)}>View Details</Button>
          
          {/* <Button onClick={() => handleRenderBase64(selectedFile.base64, selectedFile.fileType)}>Open Document</Button> */}

        </div>
      ),
    },
    // Add more columns as needed
  ];

  return (
    <div>
      <Table
        dataSource={getapplications}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <Button> Create Lease </Button>
      <Modal
        title="Application Details"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>Close</Button>
        ]}
      >
        {selectedApplication && (
    <div>
      <p> state : {} </p>
      <p>Name: {selectedApplication.name}</p>
      <p>Surname: {selectedApplication.surname}</p>
      <p>Applicant Email: {selectedApplication.applicantemail}</p>
      <p>Application Status: {selectedApplication.applicationStatus}</p>
      <p>Application Type: {selectedApplication.applicationtype}</p>
      <p>Community Type: {selectedApplication.communitytype}</p>
      <p>Company Address: {selectedApplication.companyaddress}</p>
      <p>Company Contact Number: {selectedApplication.companycontactnumber}</p>
      <p>Company Name: {selectedApplication.companyname}</p>
      <p>Evicted: {selectedApplication.evicted ? 'Yes' : 'No'}</p>
      <p>Insolvent: {selectedApplication.insolvent ? 'Yes' : 'No'}</p>
      <p>Marital Status: {selectedApplication.maritalstatus}</p>
      <p>Months Worked: {selectedApplication.monthsworked}</p>
      <p>Occupation: {selectedApplication.occupation}</p>
      <p>Property Name: {selectedApplication.propertyname}</p>
      <p>Salary: {selectedApplication.salary}</p>
      <p>Unit Type: {selectedApplication.unittype}</p>
    </div>
  )}
      </Modal>
    </div>
  );
};

export default ApplicationTable;
