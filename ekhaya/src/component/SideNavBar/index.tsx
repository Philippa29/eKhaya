import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  ToolOutlined,
  MoneyCollectOutlined,
  PlusOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo2.png";
import { dashStyles } from "./styles";

const { Sider } = Layout;
const { Item: MenuItem } = Menu;

export interface LinkType {
  key: string;
  label: JSX.Element;
  icon: JSX.Element;
}

const NavBar: React.FC = () => {
  const { styles } = dashStyles();
  const token = localStorage.getItem("authToken");
  let role = "";

  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const decodedToken = JSON.parse(window.atob(base64));
    const roleKey = `http://schemas.microsoft.com/ws/2008/06/identity/claims/role`;
    role = decodedToken[roleKey]?.toLowerCase() || "";
  }

  const getLinksForRole = (role: string): LinkType[] => {
    switch (role) {
      case "propertymanager":
        return [
          {
            key: "1",
            label: <Link href="../propertymanager">Home</Link>,
            icon: <UserOutlined />,
          },
          {
            key: "2",
            label: (
              <Link href="../propertymanager/property">All Properties</Link>
            ),
            icon: <FileOutlined />,
          },
          {
            key: "3",
            label: <Link href="../propertymanager/agents">Agents</Link>,
            icon: <FileOutlined />,
          },
          {
            key: "4",
            label: (
              <Link href="../propertymanager/addproperty">Add Property</Link>
            ),
            icon: <PlusOutlined />,
          },
        ];
      case "agents":
        return [
          {
            key: "1",
            label: <Link href="../agents">Home</Link>,
            icon: <UserOutlined />,
          },
          {
            key: "2",
            label: <Link href="../agents/applications">Applications</Link>,
            icon: <FileOutlined />,
          },
          {
            key: "5",
            label: <Link href="../agents/units">Units</Link>,
            icon: <HomeOutlined/>,
          },
        ];
      case "residents":
        return [
          {
            key: "1",
            label: <Link href="../residents/lease">Lease</Link>,
            icon: <ToolOutlined />,
          },
        ];
      default:
        return [];
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role'); // Clear role as well, if needed
    
   
    window.location.href = "/";
  };

  const links = getLinksForRole(role);

  return (
    <div className={styles.container} style={{ height: "100%" }}>
      <div style={{ position: "fixed", height: "73vh" }}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} alt="logo" />
        </div>
        <Sider
          theme="light"
          className={styles.sidebar}
          style={{ backgroundColor: "#e4e2e6" }}
        >
          <Menu
            style={{ background: "inherit" }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            theme="light"
          >
            {links.map((link) => (
              <MenuItem
                key={link.key}
                icon={link.icon}
                className={styles.menuItemHover}
              >
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Sider>
        <div
          style={{
            marginTop: "auto",
          }}
        >
          <Menu
            style={{ background: "#e4e2e6", height: "100%" }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            theme="light"
          >
            <MenuItem
              className={styles.menuItemHover}
              style={{ marginTop: "100px", width: "180px" }}
            >
              <Link href="#" onClick={handleLogout}>
                Sign Out <LogoutOutlined />
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
