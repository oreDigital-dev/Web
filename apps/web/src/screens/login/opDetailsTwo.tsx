import ButtonComp from "./LoginComponents/buttonComp";
import GeneralComp from "./LoginComponents/generalComp";
import InputComp from "./LoginComponents/inputComp";

const OpDetailsTwo = () => {
    return(
        <div className="flex flex-col items-center content-center">
            <GeneralComp number={3} title="Operational details" />
            <InputComp title="Company CEO" inputType="text" />
            <InputComp title="Production capacity" inputType="number" />
            <InputComp title="Employee number" inputType="number" />
            <ButtonComp text="Next" />
        </div>
    )
}

export default OpDetailsTwo;