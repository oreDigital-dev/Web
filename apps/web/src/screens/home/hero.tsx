/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { Button } from "ui";
import { ArrowIcon } from "../../common/icons";
import HeroBg from "../../../assets/00001.png";
import DotTexture from "../../../assets/dotTexture.svg";
import NotificationCenter from "../../../assets/notificationCenter.png";
import Link from "next/link";
import Check from "../../../assets/vectors/CheckCircle.svg";

export default function Hero() {
  return (
    <div>
      <div
        className="h-[100vh] bg-black-40  pt-52 bg-cover bg-no-repeat relative bg-black/90 hidden md:block"
        style={{ backgroundImage: `url(${HeroBg.src})` }}
      >
        <h1 className="text-6xl text-center text-white font-extrabold ">
          All your mining company&apos;s <br /> struggles on our head
        </h1>
        <div className="w-fit mx-auto my-10 flex gap-6">
          <div className="bg-white p-3     rounded-full">
            <input
              type="text"
              name=""
              className="px-6 outline-none"
              id=""
              placeholder="Company email address"
            />
            <Link href={"/companyDetails"}>
              <Button text="Request workspace" />
            </Link>
          </div>
          <button className="text-black hover:opacity-90 py-3 px-10 rounded-full bg-white ">
            Watch&nbsp;demo
          </button>
        </div>
        <img
          src={DotTexture.src}
          alt=""
          className="float-right absolute right-0 z-10"
        />
        <img
          src={NotificationCenter.src}
          alt=""
          className="float-right relative -mt-12 z-20"
        />
      </div>

      {/* small devices */}
      <div className="h-[100vh] pt-52 md:hidden sm:flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold leading-tight">
          All your mining company&apos;s struggles on our head
        </h1>
        <div className="mt-20 space-y-6 pl-2">
          <div className="flex gap-2">
            <img src={Check.src} alt="" />
            <p>Ahead of time incident reporting</p>
          </div>

          <div className="flex gap-2">
            <img src={Check.src} alt="" />
            <p>Trace your mining products from the site to the border</p>
          </div>

          <div className="flex gap-2">
            <img src={Check.src} alt="" />
            <p>Highly secured transactions by blockchain developer</p>
          </div>
        </div>

        <Link href={"/companyDetails"}>
          <button className="bg-[#EFD183] mx-auto mt-20 flex items-center text-white rounded-full px-12 py-6 gap-2">
            Request account <ArrowIcon />{" "}
          </button>
        </Link>

        <button className="mx-auto flex items-center px-8 py-3 text-black hover:opacity-90 mt-8 rounded-full bg-white border border-[#3F3F3F]">
          Watch Demo
        </button>
      </div>
    </div>
  );
}
