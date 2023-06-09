/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import MashyuzaBig from "../../../assets/mashyuzaBig.png";
const SiteBarRight = () => {
  return (
    <div className="pr-8 pl-4">
      <img src={MashyuzaBig.src} className="rounded-lg"></img>
      <p className="text-xl bold pt-2">Mashyuza Site.</p>
      <p className="italic text-[#D9D9D9] text-[16px]">Muhanga, South</p>
      <div className="flex items-center pt-4 space-x-2">
        <div className="w-2 h-2 rounded-full bg-[#00B860]"></div>
        <p className="text-[#00B860] text-[16px]">Healthy</p>
      </div>

      <div className="p-5 border-y space-y-2 border-y-[#FAFAFA] mt-8">
        <div className="flex items-center justify-between">
            <p className="font-medium ">Temperature</p>
            <div className="w-2 h-2  rounded-full bg-[#00B860]"></div>
        </div>
        <p>Optimal condition   -  20°C</p>
      </div>

      <div className="p-5 border-y space-y-2 border-y-[#FAFAFA]">
        <div className="flex items-center justify-between">
            <p className="font-medium ">Air pressure</p>
            <div className="w-2 h-2  rounded-full bg-[#00B860]"></div>
        </div>
        <p>Very good   -  750 mmhg </p>
      </div>

      <div className="p-5 border-y space-y-2 border-y-[#FAFAFA]">
        <div className="flex items-center justify-between">
            <p className="font-medium ">Face skanner</p>
            <div className="w-2 h-2  rounded-full bg-[#00B860]"></div>
        </div>
        <p>No stranger</p>
      </div>

    </div>
  );
};

export default SiteBarRight;