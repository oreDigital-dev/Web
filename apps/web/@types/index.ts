export interface CompanySiteI {
    pic? : string,
    name: string,
    id :  number ,
    company_id: number,
    district : string,
    province  : string
    statusCode : number
}


export interface CompanyI {
    id: number,
    name: string,
    tin_number: string,
}


export interface OverallDataI {
    id: number,
    company_id: number,
    site_id: number,
    temperature: number,
    air_pressure: number,
    illegal_motion: boolean
}


export interface Log {
    site_id : number ,
    time : Date ,
    temperature : number ,
    air_pressure : number ,
    illegal_motion : boolean,
}
