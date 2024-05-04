import React, { useState } from 'react';
import { Form, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



interface Step3FormProps {
  form: any; // Add this line to define the form prop
  onSubmit: (values: any) => Promise<void>;
  setIsNextEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Step3Form: React.FC<Step3FormProps> = ({ form, onSubmit, setIsNextEnabled }) => {
  

  const onFinish = (values: any) => {
    // You can handle form submission here if needed
    onSubmit(values);
  };

  const uploadProps = {
    beforeUpload: () => false, // Prevent default upload behavior
    maxCount: 1, // Allow only one file to be uploaded
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="idUpload"
        label="ID Upload"
        rules={[{ required: true, message: 'Please upload your ID' }]}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Upload ID</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="paySlipUpload"
        label="Pay Slip Upload"
        rules={[{ required: true, message: 'Please upload your pay slip' }]}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Upload Pay Slip</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="bankStatementUpload"
        label="Bank Statement Upload"
        rules={[{ required: true, message: 'Please upload your bank statement' }]}
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Upload Bank Statement</Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default Step3Form;
