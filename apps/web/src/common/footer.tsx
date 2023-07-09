/* eslint-disable @next/next/no-img-element */
import WhiteLogo from "../../assets/vectors/LogoWhiteLogo.svg";
import Facebook from "../../assets/vectors/Vectorfb.svg";
import Twitter from "../../assets/vectors/Vectortwitter.svg";
import Linkedin from "../../assets/vectors/Vectorin.svg";
import BlackLogo from "../../assets/vectors/LogoBlackLogo.svg"

const Footer = () => {
  return (
    <div className="md:bg-[#241D1D] md:text-white md:flex md:px-32 sm:px-12 justify-between pt-8 pb-20 relative bottom-0 w-full ">
      <div className="md:w-[20%] sm:w-[40%]">
        <img src={WhiteLogo.src} alt="" className="sm:hidden" />
        <img src={BlackLogo.src} alt="" className="md:hidden" />
        <p className="mt-8 mb-5">Beware of risk, increase security and productivity</p>
        <div className="flex gap-4">
          <a href="#">
            <img src={Facebook.src} alt=""></img>
          </a>
          <a href="#">
            <img src={Twitter.src} alt=""></img>
          </a>
          <a href="#">
            <img src={Linkedin.src} alt=""></img>
          </a>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-semibold">Useful links</p>
        <div className="flex flex-col space-y-2 mt-4">
          <a href="#">Homepage</a>
          <a href="#">Services</a>
          <a href="#">Accomodations</a>
          <a href="#">Car rentals</a>
          <a href="#">Restaurants</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-semibold">Support</p>
        <div className="flex flex-col space-y-2 mt-4">
          <a href="#">FAQs</a>
          <a href="#">Support Center</a>
          <a href="#">Security</a>
        </div>
      </div>
      <div className="mt-12">
        <p className="font-semibold">Contact Us</p>
        <div className="flex flex-col space-y-2 mt-4">
            <a href="#">+234- 70-1449-8006</a>
            <a href="#">info@murwiza.rw</a>
            <a href="#">23, Mukamira , Musanze-Rubavu road</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
