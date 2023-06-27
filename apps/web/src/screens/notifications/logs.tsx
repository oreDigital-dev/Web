import { Log } from "../../../@types";
import data from "../../../data/data";


const Logs = ({ props, selected }: { props: Log, selected: 'atmosphere' | 'temperature' | 'illegal_motion' }) => {
    const farenheight = Math.ceil(9 / 5 * props.temperature + 32)
    const kelvin = Math.ceil(props.temperature + 273.15);
    let status = ""
    let color = ""
    const statusCode = props.temperature > 30 ? 3 : props.temperature > 20 ? 2 : 1;
    // if (statusCode == 1) {
    //     new Notification(`⚠️ Temperature rize at ${data.sites.find(site => site.id == props.site_id)?.name}`, {
    //         data: `Temperature rize at ${data.sites.find(site => site.id == props.site_id)?.name} to ${props.temperature}°C`
    //     })
    // }
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
        <div className="bg-black text-white flex justify-between px-8 py-4 font-['Fira_Mono']" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }} >
            <p> {props.time.toDateString()} </p>
            <p> {props.temperature} <sup>o</sup> C </p>
            <p> {farenheight}  <sup>o</sup> F  </p>
            <p> {kelvin} K </p>
            <p style={{ color: color }}> {status} </p>
        </div>
    )
}

export default Logs;