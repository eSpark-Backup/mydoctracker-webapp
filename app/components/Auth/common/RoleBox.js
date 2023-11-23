import Image from 'next/image'
import React from 'react'

const RoleBox = ({role}) => {
    const {name, icon, iconfill} = role
    return (
        <div className='flex flex-col justify-between items-center p-2 border border-black rounded min-w-[100px] h-[80px] cursor-pointer'>
            <div>
                <Image src={`/icons/${icon}`} className='text-red-400' width={26} height={26} alt='doctor' />
            </div>
            <div>
                <p className='text-[14px]'>{name}</p>
            </div>
        </div>
    )
}

export default RoleBox