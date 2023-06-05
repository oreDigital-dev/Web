/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// import ArrowDownComp from "./arrowDown"
// import MenuDropdown from "./menu"
import ArrowDown from '../../../assets/vectors/Framearrow_down.svg'
import Menu from '../../../assets/vectors/Vectormenu_like.svg'



const Dropdown = ({title}) => {
    return(
        <div className="border border-[#E3E3E3] rounded-md p-2 flex space-x-2">
            <img src={Menu.src} />
            <p> {title} </p>
            <img src={ArrowDown.src} />
        </div>
    )
}

export default Dropdown;