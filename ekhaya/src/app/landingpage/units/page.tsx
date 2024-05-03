'use client'
import React from 'react';
import { GetServerSideProps } from 'next';
import { Card, Row, Col, Button, Carousel } from 'antd';
import Image from 'next/image'; // Import Next.js Image component
import { useViewUnitsState, useViewUnitsAction } from '@/provider/viewunits';
import { useEffect } from 'react';

// Define the UnitType enum
enum UnitType {
    "Bachelor" = 1,
    "One Bedroom" = 2,
    "Two Bedroom" = 3,
}

const Units: React.FC<{ propertyId: string }> = ({ propertyId }) => {
    const { getallunits } = useViewUnitsState();
    const { getAllUnitsPerProperty } = useViewUnitsAction();

    useEffect(() => {
        const id = localStorage.getItem('propertyId');
        if(!id)
        {

        }else
        {
            const response=  getAllUnitsPerProperty(id);
        }
    }, []);


    const renderImages = (images: string[] | undefined) => (
        <Carousel autoplay autoplaySpeed={3000} style={{ textAlign: 'center' }}>
            {images?.map((image, index) => (
                <div key={index}>
                    <Image src={`data:image/png;base64,${image}`} alt={`Image ${index + 1}`} width={300} height={200} />
                </div>
            ))}
        </Carousel>
    );

    const renderUnitCard = (unit: any) => (
        <Card style={{ width: '500px', margin: '20px auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    {renderImages(unit.base64Images)}
                </Col>
                <Col span={24}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        
                        <p>Unit Type: {UnitType[unit.unitType]}</p> {/* Convert unitType to string */}
                        <p>Amenities: {unit.amenities.join(', ')}</p>
                        {/* Add additional details or buttons as needed */}
                        <Button type="primary" onClick={() => console.log(unit)}>Apply</Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );

    return (
        <div>
            
            <Row gutter={[16, 16]}>
               
                {getallunits?.map((unit: any) => (
                    <Col key={unit.propertyId} span={24}>
                        {renderUnitCard(unit)}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Units;
