"use client";

import { useState, useEffect } from 'react'
import { usePathname  } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { activeForSidebar } from '@/app/utils'

const SiderbarRoutes = ({ title, link, icon }) => {
    const pathname = usePathname ()
    const [active, setActive] = useState('')

    useEffect(()=>{
        setActive(activeForSidebar(pathname, link))
    },[pathname, link])
    return (
        <Link href={link}>
        <div className={`flex rounded-lg items-center gap-5 p-3 ${!active && 'hover:bg-opacity-50 hover:bg-gray-800'} ${active ? 'bg-white' : 'text-primary'}`}>
            <div>
                <Image style={{filter: active && 'brightness(0) saturate(100%) invert(14%) sepia(18%) saturate(4898%) hue-rotate(172deg) brightness(98%) contrast(100%)'}} src={`/icons/${icon}`} className='w-[30px]' width={50} height={50} alt='icon' />
            </div>
            <div>
                <h2 className={`text-sm ${active ? 'text-primary' : 'text-white'}`}>{title}</h2>
            </div>
        </div>
        </Link>
    )
}

export default SiderbarRoutes
