import Image from 'next/image'
import React from 'react'

const RoleBox = ({role, onClick, currentRole}) => {
    const {id, title, icon, iconfill} = role
    const isRole = currentRole === id;
    return (
        <div onClick={onClick} className={`flex flex-col justify-between items-center p-2 border  rounded min-w-[100px] h-[80px] shadow-2xl  
        cursor-pointer ${isRole ? "border-secondary": "border-grey"} `}>
            <div>
                <Image src={`/icons/${isRole ? iconfill : icon}`}  width={26} height={26} alt='doctor' />
            </div>
            <div>
                <p className={`text-[14px] ${isRole ? "text-secondary": "text-grey"}`}>{title}</p>
            </div>
        </div>
    )
}

export default RoleBox