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
    <div className="px-32 flex flex-col">
      <div className="m-auto flex flex-col items-center w-[32%]">
        <p className="font-[700] text-4xl">Our Services</p>
        <p className="text-center">{paragraph}</p>
      </div>

      <div className="flex justify-between gap-24 mt-12 border">
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
      <div className="flex justify-between items-center mt-[8rem] mr-32">
          <Image src={Service1.src} alt="Telescope" height={500} width={600} className="w-1/2 object-cover rounded-lg" />
          <InstallComp
            title="We install high sensitivity tools at the mining site"
            content={paragraph}
          />
        </div>
        <div className="flex justify-between items-center ml-32">
        <InstallComp
            title="Every employee is now secure from calamities"
            content={paragraph}
          />
          <Image src={Service2.src} alt="Mine site" height={500} width={600} className="w-1/2 object-cover rounded-lg" />
          
        </div>
    </div>
  );
};

export default Services;
