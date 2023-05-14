import { FC } from "react"

interface ImpactProps {
    title: string,
    desc: string,
    image: string
}


const ImpactCard: FC<ImpactProps> = (props: ImpactProps) => {
    return (
        <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-md shadow-slate-200">
            <img src={props.image} alt="" />
            <h6>{props.title}</h6>
            <p>{props.desc}</p>
        </div>
    )
}

export  default ImpactCard ;