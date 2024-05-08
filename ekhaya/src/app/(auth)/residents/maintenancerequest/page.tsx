'use client'
import React from 'react';
import { Form, Input, Button } from 'antd';

const AgentsDashboard: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        
        // Handle form submission, e.g., send data to backend
    };

    return (
        <div>
            <h1>Create Maintenance Request</h1>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="Type" label="Type">
                    <Input />
                </Form.Item>
                <Form.Item name="Status" label="Status">
                    <Input />
                </Form.Item>
                <Form.Item name="CreatedDate" label="Created Date">
                    <Input />
                </Form.Item>
                <Form.Item name="DateCompleted" label="Date Completed">
                    <Input />
                </Form.Item>
                <Form.Item name="Tenant" label="Tenant">
                    <Input />
                </Form.Item>
                <Form.Item name="UnitID" label="Unit ID">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AgentsDashboard;
