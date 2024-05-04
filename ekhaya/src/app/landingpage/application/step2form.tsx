import React , {useState} from 'react';
import { Form, Input, Button, InputNumber, Checkbox , Modal} from 'antd';

interface Step2FormProps {
    form: any; // Add this line to define the form prop
    onSubmit: (values: any) => Promise<void>;
    onNext: () => Promise<void>;
    setIsNextEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const Step2Form: React.FC<Step2FormProps> = ({ form, onSubmit, onNext, setIsNextEnabled }) => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Custom validation function for phone number length
  const validatePhoneNumber = (_: any, value: string) => {
    if (!value || value.length === 10) {
      return Promise.resolve();
    }
    return Promise.reject('Phone number must be 10 digits');
  };

  // Custom validation function for address format
  const validateAddress = (_: any, value: string) => {
    // You can implement custom address validation logic here
    // For simplicity, let's assume any non-empty value is valid
    if (value) {
      return Promise.resolve();
    }
    return Promise.reject('Please enter a valid address');
  };

  const onFinish = (values: any) => {
    // Handle form submission
    onSubmit(values);
  };

  const handleNext = () => {
    // Proceed to the next step
    onNext();
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


  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="companyName"
        label="Company Name"
        rules={[{ required: true, message: 'Please enter company name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="companyAddress"
        label="Company Address"
        rules={[
          { required: true, message: 'Please enter company address' },
          { validator: validateAddress }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="companyContactNumber"
        label="Company Contact Number"
        rules={[
          { required: true, message: 'Please enter company contact number' },
          { validator: validatePhoneNumber }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="salary" label="Salary" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name="monthsWorked" label="Months Worked" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name="declaration" label="Declaration" rules={[{ required: true }]}>
        <Input.TextArea disabled={true} value="Your pre-filled declaration text here" /> 
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={showModal}>I agree to the terms and conditions</Checkbox>
      </Form.Item>
      
      <Modal title="Terms and Conditions" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        
        <p>This is the terms and conditions text.</p>
      </Modal>
    </Form>
  );
};

export default Step2Form;
