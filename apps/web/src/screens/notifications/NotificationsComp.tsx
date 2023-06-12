/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// import BellComp from "./bell";
// import DangerComp from "./danger";
import Profile from "../../../assets/bts.png";
import SiteComp from "./siteComponent";
import Dropdown from "./dropdown";
import Logs from "./logs";
import { useState } from 'react'
import Bell from "../../../assets/vectors/Vectorbell.svg";
import Danger from "../../../assets/vectors/Vectordanger.svg";
import { CompanyI } from "../../../@types";
import data from "../../../data/data";
import CompanySiteDetails from "./companySiteDetails";

const NotificationsComp = (company  : CompanyI) => {

  const date = "Mon 23 Jan 2023 11:00 AM";
  const sites = data.sites.filter(site => site.company_id === company.id)
  const[selectedSite,setSelectedSite] = useState(sites[0].id)

  return (
    <div className="flex h-[100vh]  bg-slate-50">
      <div className="w-[20%]  p-8 border-r  h-full fixed top-0 bg-white border-r-[#E3E3E3]">
        <p style={{ color: "#E4A400" }} className="font-semibold">
          {company.name}
        </p>
        <div className="flex mt-11 space-x-4 items-center">
          <img src={Danger.src} />
          <p className="font-[450]">Notification center</p>
        </div>
      </div>

      <div className="w-[80%] ml-[20%] h-screen space-y-6 mt-auto">
        <div className="flex justify-between border-b border-b-[#E3E3E3] sticky top-0 z-20 bg-white backdrop-blur-md py-4 px-6 w-full h-[8%]">
          <p className="font-semibold text-2xl">Notification Center</p>
          <div className="flex space-x-5 items-center">
            <img src={Bell.src} className="h-6 w-6" />
            <img
              src={Profile.src}
              alt="profile"
              className="rounded-full h-8 w-8"
            ></img>
          </div>
        </div>

        <div className="flex">
          <div className="w-[70%] space-y-8 px-4">
            <div className="flex justify-between">

              {
                sites.map((site,index) => <SiteComp isActive={selectedSite == site.id} data={site} onClick={() => setSelectedSite(site.id)} />  )
              }
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">System logs</p>
              <div className="flex space-x-2">
                <Dropdown title="Temperature" />
                <Dropdown title="Latest logs" />
              </div>
            </div>
            <div className="py-5 font-mono overflow-y-scroll bg-black p-10 rounded-lg max-h-[52vh] scrollable">
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={2} />
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={3} />
              <Logs datetime={date} celcius={20} statusCode={3} />
              <Logs datetime={date} celcius={20} statusCode={3} />
              <Logs datetime={date} celcius={20} statusCode={3} />
              <Logs datetime={date} celcius={20} statusCode={1} />
            </div>
          </div>
          <div className="w-[30%]">
            <CompanySiteDetails siteId={selectedSite}/>
          </div>
        </div>
        {/* <div className="border-t-[#E3E3E3] border-t py-2 h-[5.7%]">
          <div className="float-right pr-6 flex items-center h-full">
            <p>Having a problem? </p>
            <a href="#" className="text-[#E4A400]">
              Contact support
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NotificationsComp;
