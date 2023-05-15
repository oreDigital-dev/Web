import ButtonComp from "./LoginComponents/buttonComp";
import GeneralComp from "./LoginComponents/generalComp";
import InputComp from "./LoginComponents/inputComp";

const CompanyDetails = () => {
    return(
        <div className="flex flex-col w-screen h-screen">
            <form className="m-auto">
                <GeneralComp number={1} title="Company Details" />
                <InputComp title="Company name" inputType="text" />
                <InputComp title="Email address" inputType="email" />
                <InputComp title="Headquarters location" inputType="text" />
                <InputComp title="Telephone number" inputType="text" />
                <ButtonComp text="Next" />
            </form>
            
        </div>
    )
}

export default CompanyDetails;