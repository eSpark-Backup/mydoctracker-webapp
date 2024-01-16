"use client"

import { Switch } from "antd"
import Image from "next/image"

export const columns = ({ gotoDetail, handleSwitch }) => {

   const onChange = (id, value) => {
    handleSwitch(id, value)
   }

    return [
    { width: 200, resizable : false, field: "name", sortable: false, cellRenderer: ({value,data})=>{
        return(
            <div onClick={() => gotoDetail(data.id)} className='cursor-pointer flex flex-row items-center justify-center gap-5'>
                <Image src={data.image} width={30} height={30} alt="user"/>
                <div style={{ color: '#1677ff' }}>{value}</div>
            </div>
        )
    }},
    { width: 200, resizable : false, field: "trackerID", sortable: false },
    { width: 200, resizable : false, field: "type", sortable: false },
    { width: 200, resizable : false, field: "requests", sortable: false },
    { width: 200, resizable : false, field: "location", sortable: false, cellRenderer: ({value})=>{
        return(
            <a className='underline' href={value} alt="location" target='_blank'>View</a>
        )
    }},
    { width: 198, resizable : false, field: "status", sortable: false, cellRenderer: ({value,data})=>{
        return(
            <Switch onChange={(value) => onChange(data.id, value)} style={{ backgroundColor : value ? '#FCBF4A' : "#E4E4E4" }} defaultChecked={value} />
        )
    }},
]}