import Navbar from "../common/navbar";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}