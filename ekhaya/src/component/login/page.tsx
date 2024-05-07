import { loginStyles } from "./style";
import { Form, Input, Button, Checkbox } from "antd";
import {
  IdcardOutlined,
  LockOutlined,
  PhoneFilled,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../../public/logo2.png"
import Image from "next/image";
import { useState } from "react";
import Register from "../register/page";
import { RegisterProvider } from "@/provider/register";
import { useAuthAction, useAuthState } from "@/provider/auth";
import { useRouter } from "next/navigation";
const Login = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    userNameOrEmailAddress: "",
    password: "",
  });
 const router = useRouter();
 

  const handleLogin = () => {
    // Perform login logic here
   

    // After successful login, retrieve the previous page's URL from session storage
    const previousPage = sessionStorage.getItem("previousPage");
    if (previousPage) {
        // Navigate back to the previous page
        router.push(previousPage);
    } else {
        // If there's no previous page, navigate to the default page (e.g., homepage)
        router.push("/");
    }
};



  const { login } = useAuthAction();
  const { styles } = loginStyles();

  const handleOpenRegistrationModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsModalVisible(false);
  };

  const onFinish = async () => {
    console.log("credentials: ", credentials);

    try{
      await login(credentials);

    }
    catch (error) {
      console.error("Error logging in", error);
      throw error;
    }

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
              onChange={(e) => setCredentials({ ...credentials, userNameOrEmailAddress: e.target.value })}
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
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginFormButton}
              // onClick={handleLogin}
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

        <RegisterProvider>
          <Register
            onClose={handleCloseRegistrationModal}
            open={isModalVisible}
          />
        </RegisterProvider>
      </div>
    </div>
  );
};

export default Login;
