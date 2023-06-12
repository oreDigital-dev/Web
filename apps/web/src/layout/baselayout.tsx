import { useEffect, useState } from "react";
import Navbar from "../common/navbar";
import { useRouter } from "next/router";
export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const [showNav, setShowNav] = useState(true)
    const router = useRouter()
    console.log(router.pathname)
    useEffect(() => {
        if (router.pathname == '/notifications') {
            setShowNav(false)
        }
    }, [router])
    return (
        <div className="text-sm">
            {showNav && <Navbar />}
            {children}
        </div>
    )
}