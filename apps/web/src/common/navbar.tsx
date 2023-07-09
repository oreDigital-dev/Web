/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Hamburger from "../../assets/vectors/hamburger-solid.svg";
import BlackLogo from "../../assets/vectors/LogoBlackLogo.svg"
import { Logo } from "./logo";
import {  useState, useEffect } from 'react'
// import { Fade as Hamburger } from 'hamburger-react'
// import { link } from "fs"

// const navLinks: string[] = ['home', 'services', 'blog', 'about us', 'contact us', 'request workspace']
const navObs: { name: string; path: string }[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/",
  },
  {
    name: "blog",
    path: "/",
  },
  {
    name: "blog",
    path: "/",
  },
  {
    name: "about us",
    path: "/",
  },
  {
    name: "contact us",
    path: "/",
  },
  {
    name: "request workspace",
    path: "/request_workspace",
  },
];
export default function Navbar() {

  const [showNav, setShowNav] = useState(false);

  const handleScreenResize = () => {
    window.addEventListener('resize', () => {
      console.log(window.screenX)
      if(window.screenX >= 768) {
        setShowNav(true)
      }
    })
  }

  useEffect(() => {
    handleScreenResize();
  }, [])
  


  return (
    <div>
      <nav className="top-[0px] md:h-[8rem] md:px-28 msm:px-4 py-6 md:flex items-center justify-between msm:bg-white msm:shadow-lg msm:shadow-slate-200  md:shadow-none  md:bg-gradient-to-b from-black via-black/70 to-black/0 absolute msm:h-fit w-full z-30 ">
        <div className="flex items-center justify-between  py-4">
          <div className="hidden md:block"><Logo/></div>  <img src={BlackLogo.src} alt="" className="block md:hidden" />
          <img src={Hamburger.src} alt="" height={20} width={20} className="block md:hidden float-right cursor-pointer" onClick={() => setShowNav(!showNav)}></img>
        </div>
        {
          showNav &&

        <div className="flex msm:flex-col md:flex-row msm:gap-6 md:gap-2 items-center gap-4 w-full">
          {navObs.map((link, index) => (
            <Link href={link.path} key={index} passHref>
              <span className="md:text-white msm:text-black capitalize hover:text-brand cursor-pointer" onClick={() => setShowNav(false)}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        }
        <div className="msm:hidden md:block">

          <Link href="/login" passHref>
            <button className="text-black hover:opacity-90 py-3 px-6 rounded-full bg-brand">
              Sign&nbsp;in
            </button>
          </Link>
        </div>
      </nav>

      {/* small devices */}
      {/* <nav className="fixed top-[40px] right-[100px] cursor-pointer block md:hidden lg:hidden ">
        <div className="fixed w-[100px] h-screen  justify-center items-center hidden" id="links">
          {navObs.map((link, index) => (
            <Link href={link.path} key={index} passHref>
              <span className="text-white capitalize hover:text-brand cursor-pointer">
                {" "}
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </nav> */}

    </div>
  );
}
