import backgroundImage from "../../../assets/loginBg.png";
import GeneralComp from "./generalComp";
import InputComp from "./inputComp";
import SmallBtnR from "./smallBtnR";

const CompanyThree = ({ onNext }) => {
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center" style={styles}>
      <form className="rounded-lg w-full md:w-[50%] lg:w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
      <GeneralComp number={3} title="Operational details" />
      <InputComp title="Company CEO" inputType="text" />
      <InputComp title="Production capacity" inputType="number" />
      <InputComp title="Employee number" inputType="number" />
      <SmallBtnR text="Submit" route="/" />
    </form>
    </div>
  );
};

export default CompanyThree;
