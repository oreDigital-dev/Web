/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// import BellComp from "./bell";
// import DangerComp from "./danger";
import Profile from "../../../assets/bts.png";
import SiteComp from "./siteComponent";
import Site1 from "../../../assets/mashyuzaSite.png";
import Site2 from "../../../assets/gihangaSite.png";
import Site3 from "../../../assets/kibitoki.png";
import Dropdown from "./dropdown";
import Logs from "./logs";
import SiteBarRight from "./siteBarRight";
import Bell from "../../../assets/vectors/Vectorbell.svg";
import Danger from "../../../assets/vectors/Vectordanger.svg";

const NotificationsComp = ({ company }) => {
  const date = "Mon 23 Jan 2023 11:00 AM";
  return (
    <div className="flex w-screen h-screen ">
      <div className="w-[20%] h-screen p-8 border-r border-r-[#E3E3E3]">
        <p style={{ color: "#E4A400" }} className="font-semibold">
          {" "}
          {company}{" "}
        </p>
        <div className="flex mt-11 space-x-4 items-center">
          <img src={Danger.src} />
          <p className="font-[450]">Notification center</p>
        </div>
      </div>

      <div className="w-[80%] h-screen space-y-6 mt-auto">
        <div className="flex justify-between border-b border-b-[#E3E3E3] py-4 px-6 w-full h-[8%]">
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
              <SiteComp
                pic={Site1.src}
                siteName="Mashyuza site"
                district="Muhanga"
                province="South"
                statusCode={1}
              />
              <SiteComp
                pic={Site2.src}
                siteName="Gihanga site"
                district="Muhanga"
                province="South"
                statusCode={2}
              />
              <SiteComp
                pic={Site3.src}
                siteName="Kibitoki site"
                district="Muhanga"
                province="South"
                statusCode={3}
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">System logs</p>
              <div className="flex space-x-2">
                <Dropdown title="Temperature" />
                <Dropdown title="Latest logs" />
              </div>
            </div>
            <div className="bg-black py-5 font-mono">
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={2} />
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={3} />
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={1} />
              <Logs datetime={date} celcius={20} statusCode={1} />
            </div>
          </div>
          <div className="w-[30%]">
            <SiteBarRight />
          </div>
        </div>
        <div className="border-t-[#E3E3E3] border-t py-2 h-[5.7%]">
          <div className="float-right pr-6 flex items-center h-full">
            <p>Having a problem? </p>
            <a href="#" className="text-[#E4A400]">
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsComp;
