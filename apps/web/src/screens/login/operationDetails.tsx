import ButtonComp from "./LoginComponents/buttonComp";
import GeneralComp from "./LoginComponents/generalComp";
import InputComp from "./LoginComponents/inputComp";

const OperationDetails = () => {
    return(
        <div className="flex flex-col items-center content-center w-screen h-screen">
            <GeneralComp number={2} title="Operational details" />
            <InputComp title="Mining Licence Number" inputType="text" />
            <InputComp title="Type of mineral" inputType="text" />
            <InputComp title="Type of ownership" inputType="text" />
            <ButtonComp text="Next" />
        </div>
    )
}

export default OperationDetails;