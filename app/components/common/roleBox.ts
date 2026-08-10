import Image from 'next/image'
import React from 'react'

const RoleBox = ({role, onClick, currentRole}) => {
    const {id, title, icon, iconfill} = role
    const isRole = currentRole === id;
    return (
        <div onClick={onClick} className={`flex flex-col justify-between items-center p-2 border xl:min-w-[100px] rounded max-w-[33%] md:max-w-max h-[80px] shadow-lg  
        cursor-pointer ${isRole ? "border-secondary": "border-grey"} `}>
            <div>
                <Image src={`/icons/${isRole ? iconfill : icon}`}  width={26} height={26} alt='doctor' />
            </div>
            <div>
                <p className={`text-[14px] text-center ${isRole ? "text-secondary": "text-grey"}`}>{title}</p>
            </div>
        </div>
    )
}

export default RoleBox