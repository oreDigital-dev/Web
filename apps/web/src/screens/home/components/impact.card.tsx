import { FC } from "react"

interface ImpactProps {
    title: string,
    desc: string,
    image: string
}


const ImpactCard: FC<ImpactProps> = (props: ImpactProps) => {
    return (
        <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-lg shadow-slate-100">
            <img src={props.image} alt="" className="w-24" />
            <h6 className="text-lg font-semibold text-gray-900">{props.title}</h6>
            <p>{props.desc}</p>
        </div>
    )
}

export  default ImpactCard ;