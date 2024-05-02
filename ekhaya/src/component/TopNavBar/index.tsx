import React, { useState } from "react";
import { Menu, Layout, Image } from "antd";
import Link from "next/link"; // Import Link from Next.js
import { HomeOutlined, EnvironmentOutlined } from "@ant-design/icons";

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
    const role = 'applicants'; // If you're testing, you can set the role directly
    let items: MenuItem[] = [];

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
            ];
            break;
        default:
            items = [];
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
