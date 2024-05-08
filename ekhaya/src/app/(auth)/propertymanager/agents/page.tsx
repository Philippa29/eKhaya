'use client'
import React, { useEffect } from 'react'; // Import useEffect from React
import { Table } from 'antd';
import { useAgentState } from '@/provider/agents';
import { useAgentAction } from '@/provider/agents';

const Agents: React.FC = () => {
    const { agents } = useAgentState(); 
    const { getAllAgents } = useAgentAction(); 

    // Columns configuration for the table
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Email Address',
            dataIndex: 'emailaddress',
            key: 'emailaddress',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phonenumber',
            key: 'phonenumber',
        },
    ];

    useEffect(() => {
        // Call getAllAgents when component mounts
        getAllAgents(); 
        
    }, []); // Empty dependency array to run the effect only once when component mounts

    // Map out agent details for table dataSource
    const agentData = agents.map(agent => ({
        key: agent.id,
        name: agent.name,
        surname: agent.surname,
        emailaddress: agent.emailAddress,
        phonenumber: agent.phoneNumber,
    }));

    return (
        <div>
            <h1>Agents</h1>
            <Table dataSource={agentData} columns={columns} />
        </div>
    );
};

export default Agents;
