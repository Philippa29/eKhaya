'use client'
import React from 'react';
import TopNavBar from '@/component/TopNavBar';
import { Layout as AntLayout } from 'antd';
const { Header, Content } = AntLayout;

export default function Layout({ children }: { children: React.ReactNode }) {
    // Assuming dashStyles returns the styles object and cx function
    return (
        <AntLayout>
            <TopNavBar />
            <AntLayout>
                
                <Content>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};