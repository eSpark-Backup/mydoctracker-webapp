"use client"

import { Switch } from "antd"
import Image from "next/image"

export const columns = ({ gotoDetail, handleSwitch }) => {

   const onChange = (id, value) => {
    handleSwitch(id, value)
   }

    return [
    { width: 200, resizable : false, field: "name", cellRenderer: ({value,data})=>{
        return(
            <div onClick={() => gotoDetail(data.id)} className='cursor-pointer flex flex-row items-center justify-center gap-5'>
                <Image src={data.image} width={30} height={30} alt="user"/>
                <div style={{ color: '#126FAA' }}>{value}</div>
            </div>
        )
    }},
    { width: 200, resizable : false, field: "trackerID",cellRenderer:({value})=>{
        return(
            <div className="text-[#666666]">{value}</div>
        )
    } },
    { width: 200, resizable : false, field: "type" },
    { width: 200, resizable : false, field: "requests" },
    { width: 200, resizable : false, field: "location", cellRenderer: ({value})=>{
        return(
            <a className='underline text-[#126FAA]' href={value} alt="location" target='_blank' >View</a>
        )
    }},
    { width: 198, resizable : false, field: "status", cellRenderer: ({value,data})=>{
        return(
            <Switch onChange={(value) => onChange(data.id, value)} style={{ backgroundColor : value ? '#FCBF4A' : "#E4E4E4" }} defaultChecked={value} />
        )
    }},
]}