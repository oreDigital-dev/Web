import ButtonComp from "../src/screens/LoginComponents/buttonComp";
import GeneralComp from "../src/screens/LoginComponents/generalComp";
import InputComp from "../src/screens/LoginComponents/inputComp";
import backgroundImage from "../assets/loginBg.png";

const CompanyDetails = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center content-center items-center"
      style={styles}
    >
      <form className="rounded-lg w-[30%] bg-white space-y-4 flex flex-col justify-center content-center py-20 px-12">
        <GeneralComp number={1} title="Company Details" />
        <InputComp title="Company name" inputType="text" />
        <InputComp title="Email address" inputType="email" />
        <InputComp title="Headquarters location" inputType="text" />
        <InputComp title="Telephone number" inputType="text" />
        <ButtonComp text="Next" />
      </form>
    </div>
  );
};

export default CompanyDetails;
