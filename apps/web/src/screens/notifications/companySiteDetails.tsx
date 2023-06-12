/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import MashyuzaBig from "../../../assets/mashyuzaBig.png";
import data from "../../../data/data";
import StatusBadge from "../../common/status";
const CompanySiteDetails = ( {  siteId }) => {

  const site = data.sites.find(site => site.id === siteId)
  const siteData  = data.overallData.find(site => site. site_id=== siteId)


  return (
    <div className="p-4  bg-white rounded-md ">
      <img src={site.pic} className=" w-full h-52  object-cover rounded-md"></img>
      <p className="text-xl bold pt-2 font-bold">{ site.name }</p>
      <p className="italic text-[#D9D9D9] text-[16px]">{site.district}, {site.province}</p>
      <div className="my-2">  
      <StatusBadge statusCode={site.statusCode} />
      </div>

      <div className="p-5 border-y space-y-2 border-y-[#FAFAFA] mt-8">
        <div className="flex items-center justify-between">
            <p className="font-bold ">Temperature</p>
            <div className="w-2 h-2  rounded-full bg-[#00B860]"></div>
        </div>
        <p>Optimal condition   - { siteData.temperature }°C</p>
      </div>

      <div className="p-5 border-y space-y-2 border-y-[#FAFAFA]">
        <div className="flex items-center justify-between">
            <p className="font-bold ">Air pressure</p>
            <div className="w-2 h-2  rounded-full bg-[#00B860]"></div>
        </div>
        <p>Very good   -  {siteData.air_pressure} mmhg </p>
      </div>

      <div className="p-5 border-y space-y-2 border-y-[#FAFAFA]">
        <div className="flex items-center justify-between">
            <p className="font-bold ">Illegal motion detection</p>
            <div className="w-2 h-2  rounded-full bg-[#00B860]"></div>
        </div>
        <p>{ siteData.illegal_motion ? 'Detected' : 'Peaceful'}</p>
      </div>

    </div>
  );
};

export default CompanySiteDetails;