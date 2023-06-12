import { CompanySiteI } from "../../../@types"
import StatusBadge from "../../common/status"

/* eslint-disable @next/next/no-img-element */
const SiteComp = ({ data, isActive, onClick }: { data: CompanySiteI, isActive: boolean, onClick: () => void }) => {
    let color = ""
    let status = ""
    switch (data.statusCode) {
        case 1:
            color = "#00B860"
            status = "Healthy"
            break;
        case 2:
            color = "#FFBC10"
            status = "Warning"
            break;
        case 3:
            color = "#FF4949"
            status = "Danger"
    }
    return (
        <div className={`space-y-4  bg-white hover:bg-transparent  p-4 cursor-pointer hover:shadow shadow-sm rounded-lg ${isActive && 'border-b-4 rounded-b-none border-b-[#FFDF8B]'}`} onClick={onClick}>
            <div className="flex focus:border-b-2 focus:border-b-[#FFDF8B] focus:rounded-b-none space-x-4 items-center">
                <img src={data.pic} alt="site" className="w-24 object-contain h-24"></img>
                <div>
                    <p className=" font-bold text-[#393939]"> {data.name}. </p>
                    <p className=" text-[#D9D9D9] italic"> {data.district}, {data.province} </p>
                    <StatusBadge statusCode={data.statusCode} />
                </div>
            </div>
        </div>
    )
}

export default SiteComp;