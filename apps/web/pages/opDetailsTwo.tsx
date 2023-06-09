import ButtonComp from "../src/screens/LoginComponents/buttonComp";
import GeneralComp from "../src/screens/LoginComponents/generalComp";
import InputComp from "../src/screens/LoginComponents/inputComp";
import backgroundImage from "../assets/loginBg.png"

const OpDetailsTwo = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center" style={styles}>
      <form className="rounded-lg w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
      <GeneralComp number={3} title="Operational details" />
      <InputComp title="Company CEO" inputType="text" />
      <InputComp title="Production capacity" inputType="number" />
      <InputComp title="Employee number" inputType="number" />
      <ButtonComp text="Next" />
    </form>
    </div>
  );
};

export default OpDetailsTwo;
