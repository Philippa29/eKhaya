import { Upload, Button, Form, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { FormStyles } from "./style";
import {
  ViewPropertyProvider,
  useViewPropertyAction,
  useViewPropertyState,
} from "@/provider/property";
import { useImageActions, useImageState } from "@/provider/image";

const { Option } = Select;

interface UploadStepProps {
  onNext: () => void;
  visible: boolean;
  onClose: () => void;
}

const UploadStep: React.FC<UploadStepProps> = ({
  onNext,
  visible,
  onClose,
}) => {
  const [imageform] = Form.useForm();
  const { styles } = FormStyles();
  const { viewproperty } = useViewPropertyState();
  const { getAllProperties } = useViewPropertyAction();
  const { createImage } = useImageActions();
  const { image } = useImageState();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    getAllProperties();
    console.log(viewproperty);
  }, []);

  const onFinish = async () => {
    try {
      const values = await imageform.validateFields();
      const { propertyId, imageType } = values;
  
      // Check if propertyId is undefined
      if (!propertyId) {
        console.error("Property ID is required.");
        return;
      }
  
      // Check if a file is selected
      if (!selectedFile) {
        console.error("No file selected.");
        return;
      }
  
      // Create FormData object for the current file
      const formData = new FormData();
      formData.append("ownerId", propertyId);
      formData.append("imageType", imageType);
      formData.append("file", selectedFile);
  
      await createImage(formData);
      setSelectedFile(null); // Clear selected file after upload
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };
  
  const beforeUpload = (file: File) => {
    setSelectedFile(file); // Update selected file when a file is uploaded
    return false; // Prevent default upload behavior
  };

  return (
    <>
      <div className={styles.container}>
        <Form form={imageform} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="propertyId"
            label="Property"
            rules={[{ required: true, message: "Please select a property" }]}
          >
            <Select placeholder="Select property">
              {viewproperty.map((property, index) => (
                <Option
                  key={property.propertyId}
                  value={property.propertyId}
                >
                  {property.propertyName}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="imageType"
            label="Image Type"
            rules={[{ required: true, message: "Please select an image type" }]}
          >
            <Select placeholder="Select unit type">
              <Option value={3}>1 Bedroom</Option>{" "}
              <Option value={2}>Bachelor</Option>{" "}
              <Option value={4}>2 Bedroom</Option>{" "}
              <Option value={1}>Property</Option>{" "}
            </Select>
          </Form.Item>

          <Form.Item
            name="file"
            label="Uploads"
          >
            <Upload beforeUpload={beforeUpload}>
              <Button icon={<UploadOutlined />}>Upload Images</Button>
            </Upload>
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

export default UploadStep;
