/* eslint-disable @next/next/no-img-element */
import { Button } from 'ui'
import HeroBg from '../../../assets/00001.png'
import DotTexture from '../../../assets/dotTexture.svg'
import NotificationCenter from '../../../assets/notificationCenter.png'
import Link from 'next/link'
export default function Hero() {
    return (
        <div
            className="h-[100vh] bg-black-40  pt-52 bg-cover bg-no-repeat relative bg-black/90"
            style={{ backgroundImage: `url(${HeroBg.src})` }}
        >
            <h1 className='text-6xl text-center text-white font-extrabold '>All your mining company&apos;s <br /> struggles on our head</h1>
            <div className="w-fit mx-auto my-10 flex gap-6">
                <div className='bg-white p-3     rounded-full'>
                    <input type="text" name="" className='px-6 outline-none' id="" placeholder='Company email address' />
                   <Link href={'/companyDetails'}><Button text='Request workspace'/></Link>
                </div>
                <button className="text-black hover:opacity-90 py-3 px-10 rounded-full bg-white ">Watch&nbsp;demo</button>

            </div>
            <img src={DotTexture.src} alt="" className='float-right absolute right-0 z-10' />
            <img src={NotificationCenter.src} alt="" className='float-right relative -mt-12 z-20' />
        </div>
    )
}