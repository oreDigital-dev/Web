/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../../../assets/loginBg.png";

const GeneralComp = ({ number, title }) => {
  return (
    <div className="flex flex-col justify-center contents-center items-center">
      <div>
        <span className="text-white text-bold text-center py-1 px-3 rounded-full bg-[#FFBC10] mr-4">
          {number}
        </span>
        <span className="font-bold text-xl">{title}</span>
      </div>

      <p className="mt-3">
        Don't have a workspace? <a href="#" className="text-[#E4A400]">Request one</a>
      </p>
    </div>
  );
};

export default GeneralComp;
