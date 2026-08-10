"use client"

import { Avatar, Switch } from "antd"

export const columns = ({ gotoDetail, handleSwitch, gotoLocation }) => {

   const onChange = (id, value) => {
    handleSwitch(id, value)
   }

    return [
    { width: 200, resizable : false, field: "name", sortable: false, cellRenderer: ({_,data})=>{
        return(
            <div onClick={() => gotoDetail(data?.id)} className='cursor-pointer flex flex-row items-center justify-center gap-5'>
            {data?.assignee?.profilePicture ? (
              <Avatar
                width={30}
                height={30}
                src={data?.assignee?.profilePicture}
              />
            ) : (
              <Avatar
                style={{ backgroundColor: "#002f49", width: 30, height: 30 }}
              >
                {data?.assignee?.firstName[0]} {data?.assignee?.lastName[0]}
              </Avatar>
            )}
            <div style={{ color: '#126FAA' }}>{data?.assignee?.firstName} {data?.assignee?.lastName}</div>
            </div>
        )
    }},
    { width: 200, resizable : false, field: "trackerID", sortable: false, cellRenderer:({_,data})=>{
        return(
            <div style={{color:"#666666"}} className="w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis">{data?.tracker?.id}</div>
        )
    } },
    { width: 200, resizable : false, field: "type", sortable: false, cellRenderer:({_,data})=>{
        return(
            <div style={{color:"#666666"}}>{data?.type}</div>
        )
    }  },
    { width: 200, resizable : false, field: "location", sortable: false, cellRenderer: ({_, data})=>{
        return(
            <a className='underline text-[#126FAA]' onClick={() => gotoLocation(data?.id)} alt="location" target='_blank' >View</a>
        )
    }},
    { width: 198, resizable : false, field: "status", sortable: false, cellRenderer: ({_,data})=>{
        return(
            <Switch onChange={(value) => onChange(data.id, value)} style={{ backgroundColor: data?.enabled ? '#FCBF4A' : "#E4E4E4" }} defaultChecked={data?.enabled} />
        )
    }},
]}