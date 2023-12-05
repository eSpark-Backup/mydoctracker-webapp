import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoreBox = ({ heading, title, icon, link }) => {
    return (
        <Link  href={link}>
            <div className='bg-black w-[134px] h-[50px] flex justify-center items-center rounded'>
                <div>
                    <Image
                        className="w-[22.75px] mr-3"
                        src={`/icons/${icon}`}
                        alt="logo"
                        width={10}
                        height={10}
                    />
                </div>

                <div>
                    <p className='text-[10px] text-white'>{heading}</p>
                    <p className='text-sm text-white'>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default StoreBox