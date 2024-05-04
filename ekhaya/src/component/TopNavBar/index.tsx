import React, { useState } from "react";
import { Menu, Layout, Image } from "antd";
import Link from "next/link"; // Import Link from Next.js
import { HomeOutlined, EnvironmentOutlined, LogoutOutlined } from "@ant-design/icons";

import { navstyles } from './style';
import { MenuProps } from "antd/lib/menu"; // Import MenuProps from antd

const { Header } = Layout;

interface MenuItem {
    key: string;
    label: string;
    link: string;
    icon: JSX.Element;
}

const TopNavBar: React.FC = () => {
    const [current, setCurrent] = useState('home');
    const { styles } = navstyles();
    
    let items: MenuItem[] = [];


    const token = localStorage.getItem('authToken');
        if(token) {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(window.atob(base64));
            const roleKey = `http://schemas.microsoft.com/ws/2008/06/identity/claims/role`;
           
            let role : string = decodedToken[roleKey];
            role = role.toLowerCase();
            localStorage.setItem('role', role);
        }
    
        let role = localStorage.getItem('role'); 
    switch(role) {
        case 'applicants':
            items = [
                {
                    key: 'home',
                    label: 'Home',
                    link: '/landingpage',
                    icon: <HomeOutlined />,
                },
                {
                    key: 'nearbyProperties',
                    label: 'Nearby Properties',
                    link: '/landingpage/nearby',
                    icon: <EnvironmentOutlined/>,
                },
                {
                    key: 'signout',
                    label: 'Sign Out',
                    link: '/',
                    icon: <LogoutOutlined/>,
                },
            ];
            break;
        default:
            items = [
                {
                    key: 'home',
                    label: 'Home',
                    link: '/landingpage',
                    icon: <HomeOutlined />,
                },
                {
                    key: 'nearbyProperties',
                    label: 'Nearby Properties',
                    link: '/landingpage/nearby',
                    icon: <EnvironmentOutlined/>,
                },
            ];
            break;
    }

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        console.log('Clicked:', e.key);
    };

    return (
        <Header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src="/logo2.png" alt="Logo" width={100}  className={styles.logo} />
            </div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className={styles.menu}>
                {items.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link href={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    );
};

export default TopNavBar;
