'use client'
import React, { useState } from 'react';
import { Table } from 'antd';

const Agents: React.FC = () => {
    // Sample agent data (replace with actual data)
    const [agentData, setAgentData] = useState<any[]>([
        { id: 1, name: 'Agent 1', email: 'agent1@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Agent 2', email: 'agent2@example.com', phone: '987-654-3210' },
        { id: 3, name: 'Agent 3', email: 'agent3@example.com', phone: '555-555-5555' },
        { id: 4, name: 'Agent 4', email: 'agent4@example.com', phone: '777-777-7777' },
    ]);

    // Columns configuration for the table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
    ];

    return (
        <div>
            <h1>Agents</h1>
            <Table dataSource={agentData} columns={columns} />
        </div>
    );
};

export default Agents;
