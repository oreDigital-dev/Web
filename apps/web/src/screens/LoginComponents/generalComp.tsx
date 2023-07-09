/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../../../assets/loginBg.png";

const GeneralComp = ({ number, title }) => {
  return (
    <div className="flex flex-col md:justify-center md:contents-center md:items-center">
      <div className="flex">
        <div className="text-white text-bold text-center flex justify-center items-center h-8 w-8 rounded-full bg-[#FFBC10] mr-4">
          {number}
        </div>
        <div className="font-bold text-xl">{title}</div>
      </div>

      <p className="mt-3">
        Don't have a workspace? <a href="#" className="text-[#E4A400]">Request one</a>
      </p>
    </div>
  );
};

export default GeneralComp;
