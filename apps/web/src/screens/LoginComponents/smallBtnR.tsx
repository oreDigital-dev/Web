const SmallBtnR = ({ text, route }: { text: string; route?: string }) => {
    return(
        <div className="bg-[#FFDF8B] text-bold text-center px-6 py-2 w-[30%] rounded-full relative top-4" >
            <a href={route}>{text}</a>
        </div>
    )
}

export default SmallBtnR;