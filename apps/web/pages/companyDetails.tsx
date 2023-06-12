import { useState } from 'react';
import CompanyOne from '../src/screens/LoginComponents/companyOne';
import CompanyTwo from '../src/screens/LoginComponents/companyTwo';
import CompanyThree from '../src/screens/LoginComponents/companyThree';

const CompanyDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextButtonClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center">
      {currentStep === 1 && <CompanyOne onNext={handleNextButtonClick} />}
      {currentStep === 2 && <CompanyTwo onNext={handleNextButtonClick} />}
      {currentStep === 3 && <CompanyThree onNext={handleNextButtonClick} />}
    </div>
  );
};

export default CompanyDetails;
