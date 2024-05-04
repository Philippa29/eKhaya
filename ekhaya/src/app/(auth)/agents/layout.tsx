'use client'
import React from 'react';

import { Layout as AntLayout } from 'antd';
import NavBar from '@/component/SideNavBar';
const { Header, Content } = AntLayout;

export default function Layout({ children }: { children: React.ReactNode }) {
    // Assuming dashStyles returns the styles object and cx function
    return (
        <AntLayout>
            <NavBar />
            <AntLayout>
                
                <Content>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};