/* eslint-disable @next/next/no-img-element */
import WhiteLogo from "../../assets/vectors/LogoWhiteLogo.svg";
import Facebook from "../../assets/vectors/Vectorfb.svg";
import Twitter from "../../assets/vectors/Vectortwitter.svg";
import Linkedin from "../../assets/vectors/Vectorin.svg";
const Footer = () => {
  return (
    <div className="bg-[#241D1D] text-white flex px-32 justify-between pt-8 pb-20 relative bottom-0 w-full ">
      <div className="w-[20%]">
        <img src={WhiteLogo.src} alt="" />
        <p className="mt-8 mb-5">Beware of risk, increase security and productivity</p>
        <div className="flex gap-4">
          <a>
            <img src={Facebook.src} alt=""></img>
          </a>
          <a>
            <img src={Twitter.src} alt=""></img>
          </a>
          <a>
            <img src={Linkedin.src} alt=""></img>
          </a>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-semibold">Useful links</p>
        <div className="flex flex-col space-y-2 mt-4">
          <a>Homepage</a>
          <a>Services</a>
          <a>Accomodations</a>
          <a>Car rentals</a>
          <a>Restaurants</a>
          <a>Sitemap</a>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-semibold">Support</p>
        <div className="flex flex-col space-y-2 mt-4">
          <a>FAQs</a>
          <a>Support Center</a>
          <a>Security</a>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-semibold">Contact Us</p>
        <div className="flex flex-col space-y-2 mt-4">
            <a>+234- 70-1449-8006</a>
            <a>info@murwiza.rw</a>
            <a>23, Mukamira , Musanze-Rubavu road</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
