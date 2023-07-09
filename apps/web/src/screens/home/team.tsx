/* eslint-disable @next/next/no-img-element */
import DotTexture from '../../../assets/dotTexture.svg'

export default function Team() {
    return (
        <div className="relative md:px-[20vw] text-center py-48 sm:px-12">
            <p className="text-6xl text-center font-bold hidden md:block">The team behind   </p>
            <p className="text-6xl text-center font-bold md:hidden ">Our team   </p>
            <p className="text-slate-300">Here’s  the services that we offer to you, to ensure both your company’s
                products and employees security</p>
            <p className="mt-10">
                We are a passionate team of developers, responsible sourcing professionals, business developers, operations specialists, and traders. We have team members across Switzerland, France, UK, Rwanda , Ghana, DRC and Burkina Faso and Nigeria.
                We are always looking for passionate and talented people to join our team.
                For information on vacancies please check our LinkedIn or contact <span className='font-bold text-[#EFD183]'>hello@oredigital.com</span>
            </p>
            <img src={DotTexture.src} alt="" className='float-left top-0 absolute left-0 -z-10' />

        </div>
    )
}