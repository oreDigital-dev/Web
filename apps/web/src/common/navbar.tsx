import Link from "next/link"
import { Button } from "ui"
import { Logo } from "./logo"
// import { link } from "fs"

// const navLinks: string[] = ['home', 'services', 'blog', 'about us', 'contact us', 'request workspace']
const navObs:{name:string, path:string}[] = [
    {
        name:'home',
        path: '/'
    },
    {
        name:'services',
        path: '/'
    },
    {
        name:'blog',
        path: '/'
    },
    {
        name:'blog',
        path: '/'
    },
    {
        name:'about us',
        path: '/'
    },
    {
        name:'contact us',
        path: '/'
    },
    {
        name:'request workspace',
        path: '/request_workspace'
    }
    
]
export default function Navbar() {
    return (
        <nav className="px-28 py-6 flex items-center justify-between bg-gradient-to-b from-black via-black/70 to-black/0 absolute w-full z-30">
            <Logo />
            <div className="flex items-center gap-4">
                {/* {
                    navLinks.map((link, index) => (
                        <Link href={'#'} key={index} passHref><span className="text-white capitalize hover:text-brand cursor-pointer"> {link}</span></Link>
                    ))
                } */}
                {
                    navObs.map((link, index) => (
                        <Link href={link.path} key={index} passHref><span className="text-white capitalize hover:text-brand cursor-pointer"> {link.name}</span></Link>
                    ))
                }
            </div>
            <Link href="/login" passHref>
            <button className="text-black hover:opacity-90 py-3 px-6 rounded-full bg-brand">Sign&nbsp;in</button>
            </Link>
        </nav>
    )
}