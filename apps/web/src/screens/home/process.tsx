/* eslint-disable react/no-unescaped-entities */
import ProcessComp from "./components/processComp";
const Process = () => {
  const text =
    "Here's  the services that we offer to you, to ensure both your company's products and employees security";
  return (
    <div
      className="bg-process bg-center w-full flex flex-col space-y-20"
      // style={{ backgroundImage: "url('../../../assets/process.png')" }}
    >
      <div className="w-[30%] text-center mx-auto mt-[12rem]">
        <p className="font-semibold text-3xl">The Process</p>
        <p className="text-[#3F3F3F]"> {text} </p>
      </div>

      <div className="flex justify-between mx-32">
        <ProcessComp number={1} title="Request a workspace" content={text} />
        <ProcessComp number={2} title="Installation step" content={text} />
        <ProcessComp number={3} title="Lifetime security" content={text} />
      </div>

      <p className="text-[#EFD183] text-semibold text-center">We offer you 2 months  trying our system for free</p>
    </div>
  )
}

export default Process;
