import React, { useState } from 'react';
import { Steps, Button } from 'antd';
import AddAmenityStep from './step1';
import FillUnitDetailsStep from './step2';
import UploadStep from './step3';


const { Step } = Steps;

const AddPropertyPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // Start from 0 index

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

 

  return (
    <div style={{ marginTop: '24px', marginRight: '10px' }}>
      <Steps current={currentStep}>
        <Step title="Property" />
        <Step title="Units" />
        <Step title="Upload" />
      </Steps>
      
      <div style={{ marginTop: '24px' }}>

      <>
  {currentStep === 0 && (
    <>
    <Button type="primary" onClick={handleNextStep} style={{ marginRight: '8px' }}>Next</Button>
      <AddAmenityStep onNext={handleNextStep} visible={true} onClose={() => {}} />
      
    </>
  )}
  {currentStep === 1 && (
    <> 
    <Button style={{ marginRight: '8px' }} onClick={handlePrevStep}>Previous</Button>
      <Button type="primary" onClick={handleNextStep}>Next</Button> 
      <FillUnitDetailsStep onNext={handleNextStep} visible={true} onClose={() => {}} />
     
    </>
  )}
  {currentStep === 2 && (
    <>
      <Button style={{ marginRight: '8px' }} onClick={handlePrevStep}>Previous</Button>
      
      <UploadStep onNext={handleNextStep} visible={true} onClose={() => {}}/>
    </>
  )}
</>
      </div>
    </div>
  );
};

export default AddPropertyPage;
