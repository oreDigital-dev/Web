// companyOne.jsx
import React from 'react';
import backgroundImage from "../../../assets/loginBg.png";
import GeneralComp from "./generalComp";
import InputComp from "./inputComp";
import SmallBtnC from './smallBtnC';

const CompanyOne = ({ onNext }) => {
  const handleNextClick = () => {
    onNext(); // Call the onNext function to trigger the next step
  };

  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center md:content-center md:items-center"
      style={styles}
    >
      <form className="rounded-lg w-full md:w-[50%] lg:w-[35%] bg-white space-y-4 flex flex-col md:justify-center md:content-center py-20 px-12">
        <GeneralComp number={1} title="Company Details" />
        <InputComp title="Company name" inputType="text" />
        <InputComp title="Email address" inputType="email" />
        <InputComp title="Headquarters location" inputType="text" />
        <InputComp title="Telephone number" inputType="text" />
        <SmallBtnC text="Next" onNext={handleNextClick} />
      </form>
    </div>
  );
};

export default CompanyOne;
