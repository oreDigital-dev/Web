import Image from "next/image";
import { ArrowIcon } from "../../../common/icons";

const ServiceComp = (props) =>{

    return(
        <div className="rounded-lg  w-full border border-b-[#F0F0F0]">
            <Image src={props.image} alt="Incident Repoting" height={400} width={800} layout="responsive"  className="w-full object-cover"/>
            <div className="px-8 py-4 space-y-4">
                <p className="font-[600] text-xl leading-relaxed"> {props.title} </p>
                <p className="text-[#3F3F3F]"> {props.content} </p>
                <button className="flex items-center gap-2 rounded-md bg-[#F5F5F5] px-8 py-2 hover:bg-black hover:text-white">Learn more <ArrowIcon /> </button>
            </div>
        </div>
    )
}

export default ServiceComp;