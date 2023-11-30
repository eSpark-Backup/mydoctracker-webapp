import { Dashboard, NoteBookDetail } from '@/app/components'
import React from 'react'

const User = () => {
    return (
        <div className="flex flex-col min-h-screen p-3 sm:p-0 bg-[#F7F7F7]">
            <div className="w-[100%] mx-auto sm:w-[85%] h-[100%] ">
                <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex px-14 py-5 flex-col">
                    <h6 className='text-black font-semibold pb-5'>My Note Book</h6>
                    <div className='flex flex-col gap-y-5'>
                        <div className='flex justify-between items-center flex-wrap'>
                            <NoteBookDetail field={"Tracker ID:"} value={"XYZ456789"} />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
