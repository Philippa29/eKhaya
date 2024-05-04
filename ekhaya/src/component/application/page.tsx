import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Upload, message, Modal, Radio } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { UploadOutlined } from '@ant-design/icons';
import { useApplicationAction , useApplicationState} from '@/provider/application';
import { applicationStyles } from './style';
import WithAuth from '@/provider/auth/requireauth'; 
import { initialState } from '@/provider/addresses/context';
import { Application } from '@/provider/application/interface';

const ApplicationComponent: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {application} = useApplicationState(); 
  const {createApplication , updateApplication} = useApplicationAction(); 

  const initialState: Application = {
    id: '',
    name: '',
    surname: '',
    applicationstatus: 0,
    applicant: '',
    unittype: 0,
    maritalstatus: 0,
    communitytype: 0,
    companyname: '',
    companyaddress: '',
    companycontactnumber: '',
    occupation: '',
    salary: 0,
    monthsworked: 0,
    createddate: new Date(),
    insolvent: false,
    evicted: false,
    applicationtype: 0,
  };


  const {styles} = applicationStyles(); 

  useEffect(() => {
    createApplication(initialState); 
    if (application) {
      form.setFieldsValue(application);
    }
  }, [application, form]);
  

  const handleFormSubmit = async (values: any) => {
    try {
      await form.validateFields();
      
      await updateApplication(values);
      console.log("application" , application ); 
      
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const uploadProps = {
    beforeUpload: () => false,
    maxCount: 1,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };
 

  return (
    <div className={styles.formContainer}>
      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        className={styles.form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: 'Please enter your surname' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[{ required: true, message: 'Please enter company name' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Company Address"
          name="companyaddress"
          rules={[{ required: true, message: 'Please enter company address' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Company Contact number"
          name="companycontactnumber"
          rules={[{ required: true, message: 'Please enter company contact number' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Occupation"
          name="occupation"
          rules={[{ required: true, message: 'Occupation' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Salary"
          name="salary"
          rules={[{ required: true, message: 'Salary' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Months Worked"
          name="monthsworked"
          rules={[{ required: true, message: 'Months Worked' }]}
        >
          <Input />
        </Form.Item>
  
        <div className={styles.centeredFormItem}>
  <Form.Item
    label="Insolvent"
    name="insolvent"
    rules={[{ required: true, message: 'Please select whether you are insolvent' }]}
  >
    <Radio.Group>
      <Radio value={true}>True</Radio>
      <Radio value={false}>False</Radio>
    </Radio.Group>
  </Form.Item>
</div>

<div className={styles.centeredFormItem}>
  <Form.Item
    label="Evicted"
    name="evicted"
    rules={[{ required: true, message: 'Please select whether you have been evicted' }]}
  >
    <Radio.Group>
      <Radio value={true}>True</Radio>
      <Radio value={false}>False</Radio>
    </Radio.Group>
  </Form.Item>
</div>

  
        <Form.Item>
          <div className={styles.centeredFormItem}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Upload ID</Button>
            </Upload>
          </div>
        </Form.Item>
  
        <Form.Item>
          <div className={styles.centeredFormItem}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Upload Pay Slip</Button>
            </Upload>
          </div>
        </Form.Item>
  
        <Form.Item>
          <div className={styles.centeredFormItem}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Upload Bank Statement</Button>
            </Upload>
          </div>
        </Form.Item>
  
        <Form.Item>
          <div className={styles.centeredFormItem}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </Form.Item>
  
      </Form>
    </div>
  );
  
};

export default WithAuth(ApplicationComponent);
