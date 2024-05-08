import React , {useState} from "react";
import { Form, Input, Select, Button , Modal} from "antd";
import { FormStyles } from "./style";
import { useAmenitiesState, useAmenitiesAction } from "@/provider/amenities";
import { useEffect } from "react";
import { useUnitsAction, useUnitsState } from "@/provider/units";
import { useAgentAction, useAgentState } from "@/provider/agents";
import { useViewPropertyState } from "@/provider/property";


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

  const { getallAmenities , createAmenities} = useAmenitiesAction();
  const [amenityForm] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const { amenities } = useAmenitiesState();
 const { createUnits } = useUnitsAction();
  const { agents } = useAgentState();
  const { getAllAgents } = useAgentAction();
  const { units } = useUnitsState();
  const { property } = useViewPropertyState();
  useEffect(() => {
    getallAmenities();
    getAllAgents();
  }, []);
  
  const onFinish =async (values: any) => {
    const { rangeupper, rangelower, quantity } = values;
  
    
    const upper = parseInt(rangeupper);
    const lower = parseInt(rangelower);
    const qty = parseInt(quantity);
  
    if (upper - lower !== qty - 1) {
      
      console.error("Invalid range for the given quantity");
      return; 
    }
    
        let property = localStorage.getItem('propertyid'); 
        const updatedValues = { ...values, propertyid: property, availability : true,};
        
        await createUnits(updatedValues); 
      
    
    
  
   
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
  const { styles } = FormStyles();

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
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="size"
          label="Size"
          rules={[
            { required: true, message: "Please enter the size of the unit" },
          ]}
        >
          <Input type="number" placeholder="Enter size" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Unit Type"
          rules={[{ required: true, message: "Please select a unit type" }]}
        >
          <Select placeholder="Select unit type">
            <Option value={1}>1 Bedroom</Option>
            <Option value={2}>Bachelor</Option>
            <Option value={3}>2 Bedroom</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="agentid"
          label="Agent ID"
          rules={[{ required: true, message: 'Please enter the agent ID' }]}
        >
          <Select placeholder="Select agent">
            {agents.map((agent) => (
                <Option key={agent.id} value={agent.id}>
                  {agent.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="level"
          label="Level"
          rules={[
            { required: true, message: "Please enter the level of the unit" },
          ]}
        >
          <Input type="number" placeholder="Enter level" />
        </Form.Item>
        
        <Form.Item
          name="amenityids"
          label="Amenities"
          rules={[
            { required: true, message: "Please enter the amenity IDs" },
          ]}
        >
          <Select mode="multiple" placeholder="Select amenities">
            {amenities
              .filter((amenity) => amenity.type === 1)
              .map((amenity) => (
                <Option key={amenity.id} value={amenity.id}>
                  {amenity.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="rangeupper"
          label="Range Upper"
          rules={[
            { required: true, message: "Please enter the upper range" },
          ]}
        >
          <Input type="number" placeholder="Enter upper range" />
        </Form.Item>
        <Form.Item
          name="rangelower"
          label="Range Lower"
          rules={[
            { required: true, message: "Please enter the lower range" },
          ]}
        >
          <Input type="number" placeholder="Enter lower range" />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: "Please enter the quantity" }]}
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
