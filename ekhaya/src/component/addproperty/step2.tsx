import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { FormStyles } from './style';

const { Option } = Select;

interface FillUnitDetailsStepProps {
    onNext: () => void;
    visible: boolean; // Define visible prop
    onClose: () => void; // Define onClose prop
  }

const FillUnitDetailsStep: React.FC<FillUnitDetailsStepProps> = ({
    onNext,
    visible,
    onClose,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Unit Details:', values);
  };
const {styles} = FormStyles(); 
  return (
    <>
    <div className={styles.container}>

   
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="unitType" label="Unit Type" rules={[{ required: true, message: 'Please select a unit type' }]}>
        <Select placeholder="Select unit type">
          <Option value="1-bedroom">1 Bedroom</Option>
          <Option value="bachelor">Bachelor</Option>
          <Option value="2-bedroom">2 Bedroom</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[{ required: true, message: 'Please enter the quantity of units' }]}
      >
        <Input type="number" placeholder="Enter quantity" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
     </div>
    </>
  );
};

export default FillUnitDetailsStep;
