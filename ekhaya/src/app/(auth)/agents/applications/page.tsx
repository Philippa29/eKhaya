'use client'
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Dropdown, Menu } from 'antd';
import { useApplicationAction, useApplicationState } from '@/provider/application';
import { GetApplications, Application} from '@/provider/application/interface';
import { useFileActions, useFileState } from '@/provider/file';

enum ApplicationStatus {
  Pending = 1,
  UnderReview = 2,
  Approved = 3,
  Rejected = 4,
}

enum MaritalStatus 
{
    Single = 1,
    Married = 2,
    Divorced = 3,
    Widowed = 4,
}

enum CommunityType 
{
    InCommunity = 1,
    OutCommunity = 2,
    None = 3,
}

const ApplicationTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatus>(ApplicationStatus.Pending);
  const { getapplications } = useApplicationState();
  const { getAllApplications, updateApplication} = useApplicationAction();
  const { GetAllFiles } = useFileActions();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const { files } = useFileState();
  const [updatedApplication, setUpdatedApplication] = useState<Application | null>(null);

  const [selectedApplication, setSelectedApplication] = useState<GetApplications | null>(null);

  useEffect(() => {
    getAllApplications();
  },[]);

  const handleRenderBase64 = async (id: string) => {
    await GetAllFiles(id);
    
    const relevantFiles = files.filter(file => {
      return file.fileName.includes('ID') || file.fileName.includes('Payslip') || file.fileName.includes('BankStatement');
    });

    const urls: string[] = [];
    relevantFiles.forEach(file => {
      const dataUrl = `data:${file.fileType};base64,${file.base64}`;
      urls.push(dataUrl);
    });

    setFileUrls(urls);
    setModalVisible(true);
  };

  const handleShowDetails = (application: GetApplications) => {
    setSelectedApplication(application);
    setModalVisible(true);
  };

  const handleStatusChange = async (record: GetApplications, status: ApplicationStatus) => {
    console.log('record', record);
    console.log('status', status);
    
    // Construct the request body with all the details of the selected application
    const updatedApp : Application= {
      id: record.id,
      name: record.name,
      surname: record.surname,
      applicant: record.applicant,
      property: record.property,
      applicationstatus: status,
      maritalstatus: record.maritalStatus,
      communitytype: record.communityType,
      companyname: record.companyName,
      companyaddress: record.companyAddress,
      companycontactnumber: record.companyContactNumber,
      occupation: record.occupation,
      salary: record.salary,
      monthsworked: record.monthsWorked,
      createddate: record.createddate,
      insolvent: record.insolvent,
      evicted: record.evicted,
      unittype: record.unitType,
      applicationtype: record.applicationtype,
    };
    
    setUpdatedApplication(updatedApp);
    console.log('updatedApp', updatedApp);
    await updateApplication(updatedApp);
  };

  const renderMaritalStatus = (status: MaritalStatus) => {
    switch (status) {
      case MaritalStatus.Single:
        return 'Single';
      case MaritalStatus.Married:
        return 'Married';
      case MaritalStatus.Divorced:
        return 'Divorced';
      case MaritalStatus.Widowed:
        return 'Widowed';
      default:
        return '';
    }
  };

  const renderCommunityType = (type: CommunityType) => {
    switch (type) {
      case CommunityType.InCommunity:
        return 'In Community';
      case CommunityType.OutCommunity:
        return 'Out Community';
      case CommunityType.None:
        return 'None';
      default:
        return '';
    }
  };

  const renderUnitType = (unitType: number) => {
    switch (unitType) {
      case 1:
        return 'Bachelor';
      case 2:
        return 'One Bedroom';
      case 3:
        return 'Two Bedroom';
      default:
        return '';
    }
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
          <Button style={{ color: '#0071BC' }} onClick={() => handleShowDetails(record)}>View Details</Button>

          <Dropdown
            overlay={
              <Menu onClick={({ key }) => handleStatusChange(record , parseInt(key))}>
                <Menu.Item key={ApplicationStatus.Pending}>Pending</Menu.Item>
                <Menu.Item key={ApplicationStatus.UnderReview}>Under Review</Menu.Item>
                <Menu.Item key={ApplicationStatus.Approved}>Approved</Menu.Item>
                <Menu.Item key={ApplicationStatus.Rejected}>Rejected</Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <Button style={{ color: '#0071BC' }}>Change Status</Button>
          </Dropdown>

          <Button style={{ color: '#0071BC' }} onClick={() => handleRenderBase64(record.id)}>Open Document</Button>

        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={getapplications}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

<Modal
        title="Application Details"
        open={!!(modalVisible && (fileUrls.length > 0 || selectedApplication))}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button
            style={{ color: '#0071BC' }}
            key="close"
            onClick={() => setModalVisible(false)}
          >
            Close
          </Button>
        ]}
      >
        {selectedApplication && (
          <div>

            <p>Name: {selectedApplication.name}</p>
            <p>Surname: {selectedApplication.surname}</p>
            <p>Unity Type: {renderUnitType(selectedApplication.unitType)}</p>
            <p>Marital Status: {renderMaritalStatus(selectedApplication.maritalStatus)}</p>
            <p>Community Type: {renderCommunityType(selectedApplication.communityType)}</p>
            <p>Company Name: {selectedApplication.companyName}</p>
            <p>Company Address: {selectedApplication.companyAddress}</p>
            <p>Company Contact Number: {selectedApplication.companyContactNumber}</p>
            <p>Occupation: {selectedApplication.occupation}</p>
            <p>Salary: {selectedApplication.salary}</p>

          </div>
        )}
        {fileUrls.map((url, index) => (
          <div key={index}>
            <iframe src={url} style={{ width: '100%', height: '500px' }} />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default ApplicationTable;

