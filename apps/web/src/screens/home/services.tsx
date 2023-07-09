/* eslint-disable @next/next/no-img-element */
import ServiceComp from "./components/serviceComp";
import IncidentOne from "../../../assets/incident1.jpg";
import IncidentTwo from "../../../assets/incident2.jpg";
import IncidentThree from "../../../assets/incident3.jpg";
import Service1 from "../../../assets/service1.png";
import Service2 from "../../../assets/service2.png";
import InstallComp from "./components/installComp";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  const header = "Incident reporting system installation";
  const paragraph =
    "Here's the services that we offer to you, to ensure both your company's products and employees security";
  return (
    <div className="mt-[20rem] px-4 md:px-12 flex flex-col sm:mt-[20rem] items-center justify-center">
      <div className="m-auto flex flex-col items-center md:w-[65%] lg:w-[30%]">
        <p className="font-[700] text-4xl">Our Services</p>
        <p className="text-center">{paragraph}</p>
      </div>

      <div className="md:flex md:space-x-5 justify-between mt-12 space-y-12 md:space-y-0">
        <ServiceComp
          image={IncidentOne.src}
          title={header}
          content={paragraph}
        />
        <ServiceComp
          image={IncidentTwo.src}
          title={header}
          content={paragraph}
        />
        <ServiceComp
          image={IncidentThree.src}
          title={header}
          content={paragraph}
        />
      </div>

      <div className="md:flex mt-[8rem] items-center justify-between hidden">
        {/* large screens */}

          <img
            src={Service1.src}
            alt="Telescope"
            className="w-full md:w-[45%] object-cover rounded-lg mx-auto md:mx-0"

          />

        <InstallComp
          title="We install high sensitivity tools at the mining site"
          content={paragraph}
        />
      </div>

      {/* small screens */}
      <div className="mt-[8rem] md:hidden space-y-5">
        <InstallComp
          title="We install high sensitivity tools at the mining site"
          content={paragraph}
        />
          <img
            src={Service1.src}
            alt="Telescope"
            className="w-full md:w-[45%] object-cover rounded-lg mx-auto md:mx-0"
          />

      </div>

      {/* large screens */}
      <div className="md:flex justify-between mt-[5rem] items-center md:space-y-0 space-y-5">
        <InstallComp
          title="Every employee is now secure from calamities"
          content={paragraph}
        />
          <img
            src={Service2.src}
            alt="Mine site"
            className="w-full md:w-[45%] object-cover rounded-lg mx-auto md:mx-0"
          />
      </div>
    </div>
  );
};

export default Services;
