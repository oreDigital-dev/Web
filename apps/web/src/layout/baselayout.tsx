import { useEffect, useState } from "react";
import Navbar from "../common/navbar";
import { useRouter } from "next/router";
export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const [showNav, setShowNav] = useState(true)
    const router = useRouter()
    console.log(router.pathname)



    useEffect(() => {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                new Notification('Oredigital notifications', {
                    data: "Hi! Thanks for allowing us to alert you in emergencies."
                })
            }
        }).catch((error) => {
            console.error('Permission for Notifications was denied');
        })
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