import { ArrowIcon } from "../../../common/icons";

const InstallComp = (props) => {
    return(
        <div className="md:w-[35%] space-y-8 sm:mb-12">
            <p className="text-3xl font-bold"> {props.title} </p>
            <p className="text-[#3F3F3F]"> {props.content} </p>
            <button className="bg-[#EFD183] flex items-center text-white rounded-full px-5 py-3 gap-2">Learn more <ArrowIcon/> </button>
        </div>
    )
}

export default InstallComp;