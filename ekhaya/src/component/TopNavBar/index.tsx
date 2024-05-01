import React, { useState } from "react";
import { Menu, Layout, Image } from "antd";
import { HomeOutlined, UserOutlined, LogoutOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { navstyles } from './style';
import { MenuProps } from "antd/lib/menu"; // Import MenuProps from antd


const { Header } = Layout;

const TopNavBar: React.FC = () => {
    const [current, setCurrent] = useState('home');
    const { styles } = navstyles();
    var role = localStorage.getItem('role'); 
    // The menu changes based on the role of the user
    role = 'applicants'; 
    let items: MenuProps['items']; // Define items variable outside the conditional block

    
        items = [
            {
              label: 'Home',
              key: 'home',
              icon: <HomeOutlined />,
            },
            {
              label: 'Nearby Properties',
              key: 'nearbyProperties',
              icon: <EnvironmentOutlined/>,
              
            },
            {
              label: 'Signout',
              key: 'signout',
              icon: <LogoutOutlined />,
            },
        ];
    
    

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        console.log('Clicked:', e.key);
    };

    return (
        <Header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src="/logo2.png" alt="Logo" width={100}  className={styles.logo} />
            </div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={styles.menu} />
        </Header>
    );
};

export default TopNavBar;
