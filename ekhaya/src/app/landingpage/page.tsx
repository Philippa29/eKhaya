"use client";
import React, { useEffect } from "react";
import { Card, Layout, Image, Spin, Space, Button } from "antd";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { landingPageStyle } from "./style";
import { useViewPropertyState } from "@/provider/property";
import { useViewPropertyAction } from "@/provider/property";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { useViewUnitsAction, useViewUnitsState } from "@/provider/viewunits";

const { Content } = Layout;

const LandingPage: React.FC = () => {
  const router = useRouter(); // Initialize useRouter hook
  const { styles } = landingPageStyle();
  const { viewproperty, viewproperty_loading } = useViewPropertyState();
  const { getAllProperties } = useViewPropertyAction();

  const { getAllUnitsPerProperty } = useViewUnitsAction();

  useEffect(() => {
    const response = getAllProperties();
    
  }, []);

 

  const handleUnitsButtonClick = (propertyId: string) => {
    
    localStorage.setItem("propertyId", "here"); 
    let local = localStorage.getItem("propertyId"); 
    
    getAllUnitsPerProperty(propertyId);
    router.push(`/landingpage/units`);
  };

  if (viewproperty_loading) {
    return <Spin size="large" />;
  }
  
  return (
    <Layout style={{ minHeight: "91.5vh", backgroundColor: "#e4e2e6;" }}>
      <Content style={{ padding: "60px", textAlign: "center" }}>
      {viewproperty.map((property: any, index: number) => (
  <Card key={index} className={styles.card}>
    <div className={styles.cardContent}>
      <div className={styles.imageContainer}>
        <Image
          alt=""
          src={`data:image/png;base64,${property.base64Image}`}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{property.propertyName}</h2>
        <p>{property.description}</p>
        <ul style={{ marginLeft: 0, paddingLeft: '1.5em' }}>
          {property.amenities.map(
            (amenity: string, amenityIndex: number) => (
              <li key={amenityIndex} style={{ marginBottom: '0.5em' }}>
                <Space>{amenity}</Space>
              </li>
            )
          )}
        </ul>
        <Button
          style={{ backgroundColor: '#2596be', color: '#fff' }}
          onClick={() => handleUnitsButtonClick(property.propertyId)}
        >
          Units
        </Button>
      </div>
    </div>
  </Card>
))}
      </Content>
    </Layout>
  );
};

export default LandingPage;
