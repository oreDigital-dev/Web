import backgroundImage from "../../../assets/loginBg.png";
import GeneralComp from "./generalComp";
import InputComp from "./inputComp";
import SmallBtnC from "./smallBtnC";

const CompanyTwo = ({ onNext }) => {
  const handleNextClick = () => {
    onNext(); // Call the onNext function to trigger the next step
  };
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center" style={styles}>
      <form className="rounded-lg w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
        <GeneralComp number={2} title="Operational details" />
        <InputComp title="Mining licence number" inputType="number" />
        <InputComp title="Type of mineral" inputType="text" />
        <InputComp title="Type of ownership" inputType="text" />
        <SmallBtnC text="Next" onNext={handleNextClick} />
      </form>
    </div>
  );
};

export default CompanyTwo;
