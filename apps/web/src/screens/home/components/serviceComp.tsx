import Image from "next/image";
const ServiceComp = (props) =>{

    // test comment

    return(
        <div>
            <Image src={props.image} alt="Incident Repoting" className=""  height={200} width={200} />
            <div>
                <p className="font-[700]"> {props.title} </p>
                <p> {props.content} </p>
                <button className="rounded-md">Learn more</button>
            </div>
        </div>
    )
}

export default ServiceComp;