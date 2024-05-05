import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Steps } from 'antd';
import {FormStyles} from './style'; 

const { Step } = Steps;
const { Option } = Select;

interface AddAmenityStepProps {
  onNext: () => void;
}
interface AddAmenityStepProps {
  onNext: () => void;
  visible: boolean; // Define visible prop
  onClose: () => void; // Define onClose prop
}

const AddAmenityStep: React.FC<AddAmenityStepProps> = ({ onNext }) => {

    const {styles} = FormStyles(); 
  const [form] = Form.useForm();
  
  const [modalVisible, setModalVisible] = useState(false);

 

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      // You need to handle form submission here, perhaps by calling onNext
      console.log('Form values:', values);
      form.resetFields();
      setModalVisible(false); // Close the modal after form submission
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setModalVisible(false);

  }

   return (
    <>
    <div className={styles.container}>
      <Button onClick={() => setModalVisible(true)}>Add Amenity</Button>
      </div>
      <Modal
        title="Add Amenity"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        
        <Form form={form} layout="vertical" onFinish={handleOk}>
          <Form.Item
            name="amenityName"
            label="Amenity Name"
            rules={[{ required: true, message: 'Please enter the amenity name' }]}
          >
            <Input placeholder="Enter amenity name" />
          </Form.Item>
          
        </Form>
      </Modal>
<div className={styles.container}>
      <Form form={form} layout="vertical" onFinish={handleOk} className={styles.formContainer}>
          <Form.Item
            name="propertyName"
            label="Property Name"
            rules={[{ required: true, message: 'Please enter the property name' }]}
          >
            <Input placeholder="Enter property name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter the property description' }]}
          >
            <Input.TextArea placeholder="Enter property description" />
          </Form.Item>
          <Form.Item
            name="addressLine1"
            label="Address Line 1"
            rules={[{ required: true, message: 'Please enter address line 1' }]}
          >
            <Input placeholder="Enter address line 1" />
          </Form.Item>
          <Form.Item
            name="addressLine2"
            label="Address Line 2"
          >
            <Input placeholder="Enter address line 2" />
          </Form.Item>
          <Form.Item
            name="addressLine3"
            label="Address Line 3"
          >
            <Input placeholder="Enter address line 3" />
          </Form.Item>
          <Form.Item
            name="suburb"
            label="Suburb"
          >
            <Input placeholder="Enter suburb" />
          </Form.Item>
          <Form.Item
            name="town"
            label="Town"
          >
            <Input placeholder="Enter town" />
          </Form.Item>
          <Form.Item
            name="poBox"
            label="PO Box"
          >
            <Input placeholder="Enter PO box" />
          </Form.Item>
          <Form.Item
            name="latitude"
            label="Latitude"
          >
            <Input placeholder="Enter latitude" />
          </Form.Item>
          <Form.Item
            name="longitude"
            label="Longitude"
          >
            <Input placeholder="Enter longitude" />
          </Form.Item>
          <Form.Item
            name="size"
            label="Size"
            rules={[{ required: true, message: 'Please enter property size' }]}
          >
            <Input placeholder="Enter property size" />
          </Form.Item>
          <Form.Item
            name="propertyManagerId"
            label="Property Manager ID"
            rules={[{ required: true, message: 'Please enter property manager ID' }]}
          >
            <Input placeholder="Enter property manager ID" />
          </Form.Item>
          <Form.Item
            name="agentIds"
            label="Agent IDs"
          >
            <Select mode="multiple" placeholder="Select agent IDs">
              
            </Select>
          </Form.Item>
          <Form.Item
            name="amenityIds"
            label="Amenity IDs"
          >
            <Select mode="multiple" placeholder="Select amenity IDs">
              
            </Select>
          </Form.Item>
        </Form>
    </div> 
    </>
  );
   
      
      
   
  
};
export default AddAmenityStep; 


