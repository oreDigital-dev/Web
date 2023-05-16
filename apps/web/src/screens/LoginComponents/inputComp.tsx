const InputComp = ({title, inputType}) => {
    let placeholder;
    switch (inputType) {
        case "email":
            placeholder = "johndoe@domain.com";
            break;
        case "number":
            placeholder = 123456789;
            break;
    
        default:
            placeholder = "Enter information";
            break;
    }
    return(
        <div>
            <p className="font-medium ml-2"> {title} </p>
            <input type={inputType} placeholder={placeholder} className="placeholder-[#D3D1DD] border border-[#D3D1DD] w-[100%] p-2 rounded-md"></input>
        </div>
    )

}

export default InputComp;