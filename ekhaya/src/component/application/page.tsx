import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload, Radio, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  useApplicationAction,
  useApplicationState,
} from "@/provider/application";
import { applicationStyles } from "./style";
import WithAuth from "@/provider/auth/requireauth";
import { Application } from "@/provider/application/interface";

const { Option } = Select; // Correct import for Option component

const ApplicationComponent: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [localApplication, setLocalApplication] = useState<Application>(() => ({
    id: "",
    name: "",
    surname: "",
    applicationstatus: 0,
    applicant: "",
    unittype: 0,
    maritalstatus: 0,
    communitytype: 0,
    companyname: "",
    companyaddress: "",
    property: localStorage.getItem("propertyId") || "",
    companycontactnumber: "",
    occupation: "",
    salary: 0,
    monthsworked: 0,
    createddate: new Date(),
    insolvent: false,
    evicted: false,
    applicationtype: 1,
  }));
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { application } = useApplicationState();
  const { createApplication, updateApplication } = useApplicationAction();

  const initialState: Application = {
    id: "",
    name: "",
    surname: "",
    applicationstatus: 0,
    applicant: "",
    unittype: 0,
    maritalstatus: 0,
    communitytype: 0,
    companyname: "",
    companyaddress: "",
    property: localStorage.getItem("propertyId") || "",
    companycontactnumber: "",
    occupation: "",
    salary: 0,
    monthsworked: 0,
    createddate: new Date(),
    insolvent: false,
    evicted: false,
    applicationtype: 1,
  };

  const { styles } = applicationStyles();
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        console.log(localStorage.getItem("propertyId")); // Check if the value is correct
        const response = await createApplication(initialState);
        console.log("after the call ", response);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const handleFormSubmit = async () => {
    try {
      await form.validateFields();
  
      // Populate localApplication state with form values
      if(application)
        {
          setLocalApplication({
            ...localApplication,
            id: application?.id,
            applicant: application?.applicant,
            property: application?.property,
            occupation: form.getFieldValue('occupation'),
            name: form.getFieldValue('name'),
            surname: form.getFieldValue('surname'),
            companyname: form.getFieldValue('companyName'),
            companyaddress: form.getFieldValue('companyaddress'),
            companycontactnumber: form.getFieldValue('companycontactnumber'),
            salary: form.getFieldValue('salary'),
            monthsworked: form.getFieldValue('monthsworked'),
            insolvent: form.getFieldValue('insolvent'),
            evicted: form.getFieldValue('evicted'),
            maritalstatus: form.getFieldValue('maritalstatus'),
            communitytype: form.getFieldValue('communitytype'),
          });
          
        }
      
  
      console.log(localApplication);
  
      // Update application on the server
      await updateApplication(localApplication);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };
  
  

  const uploadProps = {
    beforeUpload: () => false,
    maxCount: 1,
  };

  return (
    <div className={styles.formContainer}>
      {/* <div className={styles.heading}>
      <h1>Application</h1>
    </div> */}
      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        className={styles.form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: "Please enter your surname" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Marital Status"
          name="maritalstatus"
          rules={[
            { required: true, message: "Please select your marital status" },
          ]}
        >
          <Select>
            <Option value={1}>Single</Option>
            <Option value={2}>Married</Option>
            <Option value={3}>Divorced</Option>
            <Option value={4}>Widowed</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Community Type"
          name="communitytype"
          rules={[
            { required: true, message: "Please select the community type" },
          ]}
        >
          <Select>
            <Option value={1}>In Community</Option>
            <Option value={2}>Out Community</Option>
            <Option value={3}>None</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company Address"
          name="companyaddress"
          rules={[{ required: true, message: "Please enter company address" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Company Contact number"
          name="companycontactnumber"
          rules={[
            { required: true, message: "Please enter company contact number" },
            {
              validator: (_, value) => {
                if (!value || value.length === 10) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Company contact number must be 10 digits")
                );
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Occupation"
          name="occupation"
          rules={[{ required: true, message: "Occupation" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Salary"
          name="salary"
          rules={[{ required: true, message: "Salary" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Months Worked"
          name="monthsworked"
          rules={[{ required: true, message: "Months Worked" }]}
        >
          <Input />
        </Form.Item>

        <div className={styles.centeredFormItem}>
          <Form.Item
            label="Insolvent"
            name="insolvent"
            rules={[
              {
                required: true,
                message: "Please select whether you are insolvent",
              },
            ]}
          >
            <Select>
              <Select.Option value={true}>True</Select.Option>
              <Select.Option value={false}>False</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div className={styles.centeredFormItem}>
          <Form.Item
            label="Evicted"
            name="evicted"
            rules={[
              {
                required: true,
                message: "Please select whether you have been evicted",
              },
            ]}
          >
            <Select>
              <Select.Option value={true}>True</Select.Option>
              <Select.Option value={false}>False</Select.Option>
            </Select>
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default WithAuth(ApplicationComponent);
