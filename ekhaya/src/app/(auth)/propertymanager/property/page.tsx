'use client'
import React, { useEffect } from 'react';
import { Table, Button, Modal, Image } from 'antd';
import { useViewPropertyAction, useViewPropertyState } from '@/provider/property';

const PropertyDashboard: React.FC = () => {
    const { viewproperty} = useViewPropertyState();
    const { getAllProperties } = useViewPropertyAction();

    useEffect(() => {
        getAllProperties();
    }, []);

    // Columns configuration for the table
    const columns = [
        
        {
            title: 'Property Name',
            dataIndex: 'propertyName',
            key: 'propertyname',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Amenities',
            dataIndex: 'amenities',
            key: 'amenities',
            render: (amenities: string[]) => amenities.join(', '), // Join array elements into a string
        },
        {
            title: 'Action',
            key: 'base64Image',
            render: (text: any, record: any) => (
                <Button onClick={() => handleViewImage(record)}>View</Button>
            ),
        },
    ];

    const handleViewImage = (property: any) => {
        // Display modal with property image
        console.log("property" , property); 
        Modal.info({
            title: property.propertyname,
            content: (
                <Image alt="" src={`data:image/png;base64,${property.base64Image}`}/>
            ),
        });
    };

    return (
        <div>
            <h1>Property Dashboard</h1>
            <Table dataSource={viewproperty} columns={columns}  />
        </div>
    );
};

export default PropertyDashboard;
