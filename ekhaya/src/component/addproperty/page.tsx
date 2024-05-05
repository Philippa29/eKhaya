import React, { useState } from 'react';
import { Steps } from 'antd';
import AddAmenityStep from './step1';


const { Step } = Steps;

const AddPropertyPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // Start from 0 index

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log('Form values:', values);
  };

  return (
    <div>
      <Steps current={currentStep}>
        <Step title="Add Amenity" />
        <Step title="Fill Property Details" />
        <Step title="Select Amenities & Agents" />
      </Steps>
      
      <div>
    {currentStep === 0 && (
      <AddAmenityStep onNext={handleNextStep} visible={true} onClose={() => {}} />
    )}
  </div>
    </div>
  );
};

export default AddPropertyPage;
