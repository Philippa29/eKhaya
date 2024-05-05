'use client'
import React, { useState } from 'react';
import { Table } from 'antd';

const PropertyDashboard: React.FC = () => {
    // Sample property data (replace with actual data)
    const [propertyData, setPropertyData] = useState<any[]>([
        { id: 1, name: 'Property 1', location: 'Location 1', price: 100000 },
        { id: 2, name: 'Property 2', location: 'Location 2', price: 150000 },
        { id: 3, name: 'Property 3', location: 'Location 3', price: 120000 },
        { id: 4, name: 'Property 4', location: 'Location 4', price: 180000 },
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
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => (
                <span>${price.toLocaleString()}</span> // Format price as currency
            ),
        },
    ];

    return (
        <div>
            <h1>Property Dashboard</h1>
            <Table dataSource={propertyData} columns={columns} />
        </div>
    );
};

export default PropertyDashboard;
