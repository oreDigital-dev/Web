const StatusBadge = ({ statusCode }) =>  {
    let color = ""
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
    return (

        <div className="flex items-center space-x-3">
            <div style={{ backgroundColor: color }} className="rounded-full h-3 w-3"></div>
            <p style={{ color: color }} className="font-bold"> {status} </p>
        </div>
    )
}

export default StatusBadge;