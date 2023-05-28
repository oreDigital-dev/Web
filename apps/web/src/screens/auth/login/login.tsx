import React from "react";
import { Button } from "ui";
import LoginBg from "../../../../assets/loginbg.png";
import { loginHome, companyDetails, operationDetails, operationalDetails } from "./loginDetails";
import { useRouter } from "next/router";
export function LoginScreen() {

  const router = useRouter();
const {type} = router.query;

  return (
    <div className="h-[100vh] pt-52  bg-cover bg-no-repeat relative bg-black/90 " style={{ backgroundImage: `url(${LoginBg.src})` }}>
      {/* {type == "loginHome" || type == "companyDetails" || type == "operationalDetails" || type == "operationDetails" && ( */}
      <div className="flex justify-evenly items-center">
        <div className="w-1/4">
          <h1 className="text-white text-5xl font-bold">Login to your account</h1>
          <p className="text-white pt-8">We aim at making your company develop by maximizing security for both employees and the products</p>
        </div>
        {loginHome.map((data) => (
          <div className="h-auto w-1/3 bg-white rounded-lg">
            <div className="text-center pt-12">
              
              <h1 className="text-3xl font-bold">{data.step}</h1>
              <p className="pt-4 text-sm">{data.option}<span className="text-brand">{data.requestWorkspace}</span></p>
            </div>
            <div>
            {data.formlabel.map((value) => (
              <form action="" className="pl-12 pr-10 mt-6 block ">
                
                <label htmlFor="" className="pt-4 text-sm pl-8 font-bold">{value.label}</label>
                <input type={value.type} name="" id="" placeholder={value.holder} className="w-full mt-2 h-12 border solid border-[1px] border-gray-200 rounded-md pl-4" />
                <div className="mt-10 float-right mb-[15%]">
                 
                </div>
              </form>
            ))}
            <div className="float-right pr-10 mt-8 mb-12">
             <Button text={data.button} />
             </div>
            </div>
          </div>
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
