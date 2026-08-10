import Image from 'next/image'
import React from 'react'

const OptionsBox = ({ title, description, icon }) => {
    return (
        <div className='h-[200px] w-[220px] p-5 rounded-3xl flex flex-col justify-center items-center bg-white shadow-lg drop-shadow-md border-2 border-grey-50'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <Image src={`/icons/${icon}`} className='w-[40px] pb-3' width={40} height={40} alt='intro' />
                </div>

                <p className='pb-5 text-primary font-bold text-xl lg:text-[20px]'>{title}</p>
            </div>

            <p className='text-center text-greydark text-base lg:text-[16px]'>
                {description}
            </p>
        </div>
    )
}

export default OptionsBox