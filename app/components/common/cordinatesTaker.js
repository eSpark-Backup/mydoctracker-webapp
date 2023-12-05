import React from 'react'
import DocInput from './docInput'

const CordinatesTaker = () => {
    return (
        <div className='flex md:w-5/12 w-full justify-between gap-4 '>
            <div className='flex items-center gap-2'>
                <p>1.</p>
                <div className='flex items-center gap-2'>
                    <p className="text-greydark text-sm">Lat</p>
                    <DocInput type={"text"} className={"h-[30px]"} />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <p className="text-greydark text-sm">Long</p>
                    <DocInput type={"text"} className={"h-[30px]"} />
                </div>
            </div>
        </div>
    )
}

export default CordinatesTaker