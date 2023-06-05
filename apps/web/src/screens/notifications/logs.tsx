const Logs = ({datetime, celcius, statusCode}) => {
    const farenheight = 9/5*celcius+32;
    const kelvin = celcius+273.15;
    let status = ""
    let color=""
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
        <div className="bg-black text-white flex justify-between px-8 py-4" style={{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}} >
            <p> {datetime} </p>
            <p> {celcius} <sup>o</sup> C </p>
            <p> {farenheight}  <sup>o</sup> F  </p>
            <p> {kelvin} K </p>
            <p style={{color: color}}> {status} </p>
        </div>
    )
}

export default Logs;