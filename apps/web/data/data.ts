import { CompanyI, CompanySiteI, Log, OverallDataI } from "../@types"
import Site1 from "../assets/mashyuzaSite.png";
import Site2 from "../assets/gihangaSite.png";
import Site3 from "../assets/kibitoki.png";

const companies: CompanyI[] = [
    {
        id: 1,
        name: 'Zuba miners',
        tin_number: '123456789',
    },
    {
        id: 2,
        name: 'Mashyuza miners',
        tin_number: '123456789',

    }
]



const sites: CompanySiteI[] = [
    {
        pic : Site1.src,
        name: 'Mashyuza site',
        id: 11,
        company_id: 1,
        district: 'Muhanga',
        province: 'South',
        statusCode: 1
    },
    {
        pic : Site2.src,
        name: 'Gihanga site site',
        id: 12,
        company_id: 1,
        district: 'Rubavu',
        province: 'West',
        statusCode: 2
    },
    {
        pic : Site3.src,
        name: 'Kibitoki site',
        id: 13,
        company_id: 1,
        district: 'Gicumbi',
        province: 'North',
        statusCode: 3
    },
]

const overallData: OverallDataI[] = [
    {
        id: 21,
        company_id: 1,
        site_id: 11,
        temperature: 20,
        air_pressure: 750,
        illegal_motion: false
    },
    {
        id: 22,
        company_id: 1,
        site_id: 12,
        temperature: 30,
        air_pressure: 240,
        illegal_motion: true
    },
    {
        id: 22,
        company_id: 1,
        site_id: 13,
        temperature: 50,
        air_pressure: 240,
        illegal_motion: true
    },

]


const logs   : Log[] = [
    {
      air_pressure : 120 ,
      illegal_motion: false ,
      site_id : 22 , 
      temperature : 20,
      time : new Date(12,4,12,23,55,0,0)  
    },
    {
      air_pressure : 200 ,
      illegal_motion: true ,
      site_id : 22 , 
      temperature : 20,
      time : new Date(12,4,12,23,55,0,0)  
    },
    {
      air_pressure : 120 ,
      illegal_motion: false ,
      site_id : 22 , 
      temperature : 20,
      time : new Date(12,4,12,23,55,0,0)  
    },
    {
      air_pressure : 200 ,
      illegal_motion: true ,
      site_id : 22 , 
      temperature : 20,
      time : new Date(12,4,12,23,55,0,0)  
    },
    
]


export default {
    logs,
    companies,
        sites,
    overallData

}