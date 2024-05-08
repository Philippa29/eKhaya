import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Select, Button, Steps, message } from "antd";
import { FormStyles } from "./style";
import { useAmenitiesState, useAmenitiesAction } from "@/provider/amenities";
import { useAgentAction, useAgentState } from "@/provider/agents";
import { useViewPropertyState, useViewPropertyAction } from "@/provider/property";
import { Amenities } from "@/provider/amenities/interface";
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

const AddAmenityStep: React.FC<AddAmenityStepProps> = ({
  onNext,
  visible,
  onClose,
}) => {
  const { styles } = FormStyles();
  const [form] = Form.useForm();
  const [amenityForm] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const { getAllAgents } = useAgentAction();
  const { agents } = useAgentState();
  const { getallAmenities, createAmenities } = useAmenitiesAction();
  const { amenities, amenity } = useAmenitiesState();
  const {createProperty} = useViewPropertyAction(); 
  const {property} = useViewPropertyState();
  useEffect(() => {
    getAllAgents();
    getallAmenities();
  }, []);

  const handleProperty = async () => {
    try {
      const values = await form.validateFields();
      
      
      form.setFieldsValue(values); 
      await createProperty(values); 
      
      setModalVisible(false);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };


  const handleAmenities = async () => {
    try {
      const values = await amenityForm.validateFields(); // Validate only amenities form fields
      const amenityValues = { ...values, type: 2 }; // Add amenity type to the values
    
      await createAmenities(amenityValues);
      setModalVisible(false);
    } catch (error) {
      console.error("Amenities Validation failed:", error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setModalVisible(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Button onClick={() => setModalVisible(true)}>Add Amenity</Button>
      </div>
      <Modal
        title="Add Amenity"
        open={modalVisible}
        onOk={handleAmenities}
        onCancel={handleCancel}
      >
       <Form form={amenityForm} layout="vertical" >
          <Form.Item
            name="Name"
            label="Amenity Name"
            rules={[
              { required: true, message: "Please enter the amenity name" },
            ]}
          >
            <Input placeholder="Enter amenity name" />
          </Form.Item>
          
        </Form>
      </Modal>
      <div className={styles.container}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleProperty}
          className={styles.formContainer}
        >
          <Form.Item
            name="propertyName"
            label="Property Name"
            rules={[
              { required: true, message: "Please enter the property name" },
            ]}
          >
            <Input placeholder="Enter property name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please enter the property description",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter property description" />
          </Form.Item>
          <Form.Item
            name="addressLine1"
            label="Address Line 1"
            rules={[{ required: true, message: "Please enter address line 1" }]}
          >
            <Input placeholder="Enter address line 1" />
          </Form.Item>
          <Form.Item name="addressLine2" label="Address Line 2">
            <Input placeholder="Enter address line 2" />
          </Form.Item>
          <Form.Item name="addressLine3" label="Address Line 3">
            <Input placeholder="Enter address line 3" />
          </Form.Item>
          <Form.Item name="suburb" label="Suburb">
            <Input placeholder="Enter suburb" />
          </Form.Item>
          <Form.Item name="town" label="Town">
            <Input placeholder="Enter town" />
          </Form.Item>
          <Form.Item name="poBox" label="PO Box">
            <Input placeholder="Enter PO box" />
          </Form.Item>
          <Form.Item name="latitude" label="Latitude">
            <Input placeholder="Enter latitude" />
          </Form.Item>
          <Form.Item name="longitude" label="Longitude">
            <Input placeholder="Enter longitude" />
          </Form.Item>
          <Form.Item
            name="size"
            label="Size"
            rules={[{ required: true, message: "Please enter property size" }]}
          >
            <Input placeholder="Enter property size" />
          </Form.Item>

          <Form.Item name="agentIds" label="Agents">
            <Select mode="multiple" placeholder="Select agent IDs">
              {agents.map((agent) => (
                <Option key={agent.id} value={agent.id}>
                  {agent.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="amenityIds" label="Amenities">
            <Select mode="multiple" placeholder="Select amenity IDs">
              {amenities
                .filter((amenity) => amenity.type=== 2) // Filter amenities with type 1
                .map((amenity) => (
                  <Option key={amenity.id} value={amenity.id}>
                    {amenity.name}
                  </Option>
                ))}
            </Select>
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
export default AddAmenityStep;
