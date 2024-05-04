// Step1Form.tsx
import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

interface Step1FormProps {
    form: any; // Add this line to define the form prop
    onSubmit: (values: any) => Promise<void>;
    setIsNextEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Step1Form: React.FC<Step1FormProps> = ({ form, onSubmit, setIsNextEnabled }) => {
  

  return (
    <Form
      form={form}
      onFinish={(values) => onSubmit(values)}
      layout="vertical"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Surname"
        rules={[{ required: true, message: 'Please enter your surname' }]}
      >
        <Input />
      </Form.Item>
      {/* Add more fields as needed */}
    </Form>
  );
};

export default Step1Form;
