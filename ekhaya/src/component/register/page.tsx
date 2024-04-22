import { Form, Input, Button } from "antd";
import {
  IdcardOutlined,
  LockOutlined,
  PhoneFilled,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { message } from "antd";
import { Modal } from "antd";

interface RegisterCredentials {
  name: string;
  surname: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProps {
  onClose?: () => void;
  open: boolean;
}

const Register: React.FC<RegisterProps> = ({ onClose, open }) => {
  const [form] = Form.useForm();
  const [registerCredentials, setRegisterCredentials] =
    useState<RegisterCredentials>({
      name: "",
      surname: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "", // Added confirmPassword field
    });

  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] =
    useState(true);

  const handleFieldsChange = () => {
    form.validateFields().then((values) => {
      const isAllFieldsValid = Object.values(values).every(
        (field) => field !== undefined,
      );
      setIsRegisterButtonDisabled(!isAllFieldsValid);
    });
  };

  const onFinish = async () => {
    if (registerCredentials.password !== registerCredentials.confirmPassword) {
      message.error("Passwords do not match");
      return;
    }
  };

  return (
    <>
      <Modal
        title="Register"
        open={open}
        onCancel={onClose}
        onOk={form.submit}
        okText="Register"
        cancelButtonProps={{ danger: true }}
        okButtonProps={{ type: "primary" }}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFieldsChange={handleFieldsChange}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Name"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
                  name: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="surname"
            rules={[{ required: true, message: "Please input your surname!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Surname"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
                  surname: e.target.value,
                })
              }
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Phone Number"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
                  phoneNumber: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please input a valid email address!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
                  emailAddress: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
                  password: e.target.value,
                })
              }
            />
          </Form.Item>
          {/* Add confirmPassword field */}
          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!"),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
              onChange={(e) =>
                setRegisterCredentials({
                  ...registerCredentials,
                  confirmPassword: e.target.value,
                })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
