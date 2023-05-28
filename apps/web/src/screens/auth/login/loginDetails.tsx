import React from "react";

export const loginHome = [
    {
        step:"Welcome back!",
        option:"Don't have a workspace?",
        requestWorkspace:"Request one",
        formlabel:[
            {
                label:"Company name",
                holder:"sail-miner33",
                type:"text"
            },
            {
                label:"Email address",
                holder:"sail-miner33@gmail.com",
                type:"email"
            },
            {
                label:"Password",
                holder:"sail",
                type:"password"
            }
        ],
        button:"Login",
        href: { pathname: "", query: { type: "companyDetails" } }

    }
]
export const companyDetails = [
    {
        stepNumber: <div className="h-6 w-6 text-white font-bold text-2xl rounded-full text-center">1</div>,
        step:"Company Details",
        option:"Don't have a workspace?",
        requestWorkspace:"Request one",
        formlabel:[
            {
                label:"Company name",
                holder:"sail-miner33",
                type:"text"
            },
            {
                label:"Email address",
                holder:"sail-miner33@gmail.com",
                type:"email"
            },
             {
                label:"Headquarters location",
                holder:"Kigali,Rwanda",
                type:"text"
             },
             {
                label:"Telephone number",
                holder:"Kigali,Rwanda",
                type:"tel"
             }

        ],
        button:"Next",
        href: { pathname: "", query: { type: "operationalDetails" } }

    }
]
export const operationalDetails = [

    { 
        stepNumber: <div className="h-6 w-6 text-white font-bold text-2xl rounded-full text-center">1</div>,
        step:"Operational Details",
        option:"Don't have a workspace?",
        requestWorkspace:"Request one",
        formlabel:[
            {
                label:"Mining License Number",
                holder:"sail-miner33",
                type:"text"
            },
            {
                label:"Type of mineral",
                holder:"sail-miner33@gmail.com",
                type:"text"
            },
            {
                label:"Type of Ownership",
                holder:"Not that",
                type:"text"
            }
        ],
        button:"Next",
        href: { pathname: "", query: { type: "operationDetails" } }

    }
]
export const operationDetails = [
    {
        step:"Operational Details",
        option:"Don't have a workspace?",
        requestWorkspace:"Request one",
        formlabel:[
            {
                label:"Company CEO",
                holder:"sail-miner33",
                type:"text"
            },
            {
                label:"Production capacity",
                holder:"sail-miner33@gmail.com",
                type:"text"
            },
            {
                label:"Employee number",
                holder:"Not that",
                type:"text"
            }
        ],
        button:"Next",
        


    }
]