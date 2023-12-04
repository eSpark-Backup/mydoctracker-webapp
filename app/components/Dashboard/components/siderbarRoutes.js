import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SiderbarRoutes = ({ title, link, icon }) => {
    return (
        <Link href={link}>
        <div className='flex items-center gap-5 p-3 hover:bg-opacity-50 hover:bg-gray-800'>
            <div>
                <Image src={`/icons/${icon}`} className='w-[30px]' width={50} height={50} alt='icon' />
            </div>
            <div>
                <h2 className='text-sm text-white'>{title}</h2>
            </div>
        </div>
        </Link>
    )
}

export default SiderbarRoutes
