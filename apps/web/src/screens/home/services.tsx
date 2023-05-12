import ServiceComp from "./components/serviceComp";
import IncidentOne from '../../../assets/incident1.jpg'
import IncidentTwo from '../../../assets/incident2.jpg'
import IncidentThree from '../../../assets/incident3.jpg'

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
    const header = "Incident reporting system installation"
    const paragraph = "Here's the services that we offer to you, to ensure both your company's products and employees security"
  return (
    <div className="px-24">
      <p className="font-[700px] text-xl text-center">Our Services</p>
      <p className="text-center">
        {paragraph}
      </p>
      <div className="flex">
        <ServiceComp image={IncidentOne.src} title={header} content={paragraph} />
        <ServiceComp image={IncidentTwo.src} title={header} content={paragraph} />
        <ServiceComp image={IncidentThree.src} title={header} content={paragraph} />
      </div>
    </div>
  );
};

export default Services;
