'use client'
import React from 'react';
import TopNavBar from '@/component/TopNavBar';
import { Layout as AntLayout } from 'antd';
import NavBar from '@/component/SideNavBar';
const { Header, Content } = AntLayout;

export default function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <AntLayout>
            <NavBar/>
            <AntLayout>
                
                <Content>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};