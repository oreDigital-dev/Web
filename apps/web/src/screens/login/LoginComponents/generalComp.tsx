/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../../../../assets/loginBg.png";
import Navbar from "../../../common/navbar";

const GeneralComp = ({number,title}) => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };
  return <div className="w-screen" style={styles}>
    <Navbar/>
    <span className="tex-white p-4 rounded-full bg-[#FFBC10]"> {number} </span>
    <span className="font-bold">{title}</span>
    <p>Don't have a workspace? <a className="text-[#E4A400]">Request one</a></p>

  </div>;
};

export default GeneralComp;