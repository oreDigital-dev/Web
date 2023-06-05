/* eslint-disable @next/next/no-img-element */
const SiteComp = ({pic,siteName,district,province,statusCode}) => {
    let color=""
    let status = ""
    switch (statusCode) {
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
    return(
        <div className="w-[30%] space-y-4 border border-[#F5F5F5] px-4 py-6 rounded-md">
            <div className="flex focus:border-b-2 focus:border-b-[#FFDF8B] focus:rounded-b-none space-x-4 items-center">
                <img src={pic} alt="site" className="w-24"></img>
                <div>
                    <p className="text-xl font-medium text-[#393939]"> {siteName}. </p>
                    <p className="text-[16px] text-[#D9D9D9] italic"> {district}, {province} </p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div style={{backgroundColor:color}} className="rounded-full h-2 w-2"></div>
                <p style={{color:color}} className="font-medium"> {status} </p>
            </div>
        </div>
    )
}

export default SiteComp;