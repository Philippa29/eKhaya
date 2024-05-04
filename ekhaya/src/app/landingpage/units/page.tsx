"use client";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Carousel } from "antd";
import Image from "next/image";

import { useViewUnitsState, useViewUnitsAction } from "@/provider/viewunits";
import { unitsPageStyle } from "./style";
import { useRouter } from "next/navigation";

// Define the UnitType enum
enum UnitType {
  "Bachelor" = 1,
  "One Bedroom" = 2,
  "Two Bedroom" = 3,
}

const Units: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const { getallunits } = useViewUnitsState();
  const { getAllUnitsPerProperty } = useViewUnitsAction();
  const [selectedUnit, setSelectedUnit] = useState<any>(null); // Specify the type of selectedUnit
  const { styles } = unitsPageStyle();
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("propertyId");
    if (id) {
      getAllUnitsPerProperty(id);
    }
  }, []); // Add getAllUnitsPerProperty to the dependency array

  const handleApplyClick = (unit: any) => {
    // Specify the type of unit
    setSelectedUnit(unit);
    router.push(`/applicants`);
  };

  const handleModalCancel = () => {
    setSelectedUnit(null);
  };

  const renderImages = (images: string[] | undefined) => (
    <Carousel autoplay autoplaySpeed={3000} className={styles.carousel}>
      {" "}
      {/* Use the carousel style */}
      {images?.map((image, index) => (
        <div key={index}>
          <Image
            src={`data:image/png;base64,${image}`}
            alt={`Image ${index + 1}`}
            width={300}
            height={200}
          />
        </div>
      ))}
    </Carousel>
  );

  const renderUnitCard = (unit: any) => (
    <Card className={styles.card}>
      {" "}
      {/* Use the card style */}
      <Row gutter={[16, 16]}>
        <Col span={24}>{renderImages(unit.base64Images)}</Col>
        <Col span={24}>
          <div className={styles.unitDetails}>
            {" "}
            {/* Use the unitDetails style */}
            <p>Unit Type: {UnitType[unit.unitType]}</p>
            <p>Amenities: {unit.amenities.join(", ")}</p>
            <Button type="primary" onClick={() => handleApplyClick(unit)}>
              Apply
            </Button>
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
