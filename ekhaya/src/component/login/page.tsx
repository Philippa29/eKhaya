import { loginStyles } from "./style";
import { Form, Input, Button, Checkbox } from "antd";
import {
  IdcardOutlined,
  LockOutlined,
  PhoneFilled,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../../public/logo-no-background.png";
import Image from "next/image";
import { useState } from "react";
import Register from "../register/page";

const Login = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { styles } = loginStyles();

  const handleOpenRegistrationModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsModalVisible(false);
  };

  const onFinish = async () => {
    //console.log('credentials: ', credentials);
    // try {
    //   await login(credentials);
    //   console.log("trying...")
    //   authToken = localStorage.getItem('authToken');
    //   console.log('authToken', authToken);
    //   if (authToken) {
    //     message.success('Login successful');
    //     const firstLetter = credentials.userNameOrEmailAddress.trim().charAt(0).toLowerCase();
    //     // Redirect based on the first letter
    //     if (firstLetter === 's') {
    //       router.push('/dashboard'); // Redirect to dashboard if the first letter is 's'
    //     } else if (firstLetter === 'u') {
    //       router.push('/landingpage'); // Redirect to landingpage if the first letter is 'u'
    //     }
    //   } else {
    //     message.error('Wrong password or username');
    //   }
    // } catch (error) {
    //   message.error('An error occurred while logging in');
    // }
  };

  return (
    <div className={styles.body}>
      <div className={styles.image}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.outerbox}>
        <div className={styles.signin}>
          <h1 className={styles.h1}>Sign in</h1>
        </div>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish} // Handle form submission
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              //   onChange={(e) => setCredentials({ ...credentials, userNameOrEmailAddress: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              //   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginFormButton}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
        
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleOpenRegistrationModal}
        >
          Dont have an account? Register
        </span>

        <Register
          onClose={handleCloseRegistrationModal}
          open={isModalVisible}
        />
      </div>
    </div>
  );
};

export default Login;
