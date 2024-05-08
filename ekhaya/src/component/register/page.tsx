import { Form, Input, Button } from "antd";
import { useState } from "react";
import { message } from "antd";
import { Modal } from "antd";
import { useRegisterAction , useRegisterState} from "@/provider/register";
import { RegisterState } from "@/provider/register/interface";

interface RegisterProps {
  onClose?: () => void;
  open: boolean;
}

const Register: React.FC<RegisterProps> = ({ onClose, open }) => {
  const [form] = Form.useForm();
  const { registeruser } = useRegisterAction();
  //const { register } = useRegisterState();
  const [registerState, setRegisterState] = useState<RegisterState>({
    
    applicantId: "",
    name: "",
    surname: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    roleNames: [],
  });

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onFinish = async () => {
   
    if (registerState.password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }
    try {
      await registeruser(registerState);
      //message.success("Register successful");
    }
    catch (error) {
      console.error("Error creating Applicant", error);
      throw error;
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
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              placeholder="Name"
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
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
              placeholder="Surname"
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  surname: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
           name="applicantId"
          rules={[
              { required: true, message: "Please input your ID Number!" },
              {
                len: 13,
                message: "ID Number must be exactly 13 digits long!",
              },
              {
                pattern: /^[0-9]+$/,
                message: "ID Number must only contain digits!",
              },
            ]}
          >
            <Input
              placeholder="ID Number"
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  applicantId: e.target.value,
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
              placeholder="Phone Number"
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
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
              placeholder="Email"
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
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
              placeholder="Password"
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  password: e.target.value,
                })
              }
            />
          </Form.Item>
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
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
