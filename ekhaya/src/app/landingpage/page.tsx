'use client'
import React, { useEffect } from 'react';
import { Card, Layout, Image, Spin, Space } from 'antd';
import { landingPageStyle } from './style';
import { useViewPropertyState } from '@/provider/property';
import { useViewPropertyAction } from '@/provider/property';
import { SmileOutlined, HeartOutlined , BellOutlined} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
const { Content } = Layout;

const LandingPage: React.FC = () => {
    const { styles } = landingPageStyle();
    const { viewproperty, viewproperty_loading } = useViewPropertyState();
    const { getAllProperties } = useViewPropertyAction();
    useEffect(() => {
        const response = getAllProperties();
        console.log("response in front", viewproperty.length);
    }, []);

    const amenityIcons: { [key: string]: JSX.Element } = {
        Gym: <FontAwesomeIcon icon={faDumbbell} />,
        SwimmingPool: <HeartOutlined />,
        // Add more amenities and their corresponding icons here
    };


    if (viewproperty_loading) {
        return <Spin size="large" />;
    }
    console.log("response in front", viewproperty);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '50px', textAlign: 'center' }}>
                {viewproperty.map((property: any, index: number) => (
                    <Card key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.imageContainer}>
                                <Image alt="" src={`data:image/png;base64,${property.base64Image}`} />
                            </div>
                            <div className={styles.textContainer}>
                                <h2>{property.propertyName}</h2>
                                <p>{property.description}</p>
                                <ul>
                                {property.amenities.map((amenity: string, amenityIndex: number) => (
                                <li key={amenityIndex}>
                                    <Space>
                                    {amenityIcons[amenity]}
                                    {amenity}
                                    </Space>
                                </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </Card>
                ))}
            </Content>
        </Layout>
    );
};

export default LandingPage;
