import { FC } from "react"

interface ReviewCardProps {
    image: string,
    name: string,
    title: string,
    review: string
}


const ReviewCard: FC<ReviewCardProps> = (props) => {
    return (
        <div className="min-w-[400px] bg-white p-6 rounded-lg flex flex-col gap-4 shadow-lg shadow-slate-100">
            <img src={props.image} alt="" className="w-14" />
            <h6 className="font-semibold text-gray-900">{props.name}</h6>
            <p className="text-sm mb-4 text-slate-600 font-italic">{props.title}</p>
            <p>{props.review}</p>
        </div>
    )
}


export default ReviewCard