import Link from "next/link"
import { Button } from "ui"
import { Logo } from "./logo"
import React from "react"

const navLinks: string[] = ['home', 'services', 'blog', 'about us', 'contact us', 'request workspace']
export default function Navbar() {
    return (
        <nav className="px-28 py-6 flex items-center justify-between bg-gradient-to-b from-black via-black/70 to-black/0 absolute w-full z-30">
            <Logo />
            <div className="flex items-center gap-4">
                {
                    navLinks.map((link, index) => (
                        <Link href={'#'} key={index} passHref><span className="text-white capitalize hover:text-brand cursor-pointer"> {link}</span></Link>
                    ))
                }
            </div>
            <button className="text-black hover:opacity-90 py-3 px-6 rounded-full bg-brand">Sign&nbsp;in</button>
        </nav>
    )
}