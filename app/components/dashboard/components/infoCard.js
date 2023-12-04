import React from 'react'
import DocButton from '../../common/docButton'
import Image from 'next/image'
import Link from 'next/link'

const InfoCard = ({ icon, title, description, mdwidth, leftBorder, buttonTitle }) => {
    return (
        <div className={`xl:w-4/12 ${mdwidth} ${leftBorder && "xl:border-r-2 border-b-2"} md:border-b-0  w-full flex flex-col items-center xl:px-3  px-0 py-6`}>
            <div className='w-4/6 '>
                <div className='pb-4'>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <Image className='w-[44px]' src={`/icons/${icon}`} width={50} height={50} />
                        </div>
                        <div>
                            <p className='text-black font-semibold md:text-xl text-sm'>{title}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-grey py-3'>{description}</p>
                    </div>
                </div>

                <div className='flex flex-col gap-y-2'>
                    {
                        title === "Document" && 
                        <Link  href="/dashboard/devices/user/view-doc">
                        <DocButton text={"View Document"} className={"text-sm w-full bg-transparent border-2 border-primary text-primary"} />
                        </Link>
                    }
                    <DocButton text={buttonTitle} className={"text-sm w-full bg-transparent border-2 border-primary"} />
                </div>
            </div>
        </div>
    )
}

export default InfoCard