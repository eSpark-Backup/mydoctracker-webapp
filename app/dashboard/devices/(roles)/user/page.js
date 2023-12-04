import { DocButton, InfoCard, NotebookDetail } from '@/app/components'
import Image from 'next/image'
import React from 'react'

const User = () => {
    return (
        <>
                <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 px-3 py-7 flex-col">
                    <h6 className='text-black font-semibold text-sm sm:text-xl pb-5'>My Note Book</h6>

                    {/* <NoteBookDetails /> */}
                    <div>
                        <div className='flex justify-between flex-wrap'>
                            <NotebookDetail field='Tracker ID:' value='XYZ456789' />
                            <NotebookDetail field='Email:' value='johndoe_123@gmail.com' />
                            <NotebookDetail field='Last Activity:' value='25m ago' />

                        </div>
                        <div className='flex justify-between flex-wrap'>
                            <NotebookDetail field='Owners Name:' value='John Doe' />
                            <NotebookDetail field='Contact:' value='123456789' />
                            <NotebookDetail field='Battery:' value='98% remaining' />
                        </div>
                    </div>


                    <div>
                        <Image className='w-full' src='/images/googleMap.svg' width={500} height={500} alt="map" />
                    </div>

                </div>

                <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 px-3 py-7 flex-col">
                    <div className='flex flex-wrap'>
                        <InfoCard title={"Document"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet."} icon={"dashboardDocument.svg"} leftBorder={true} mdwidth={"md:w-6/12"} buttonTitle={"Document History"} />
                        <InfoCard title={"Share Location"} description={"You can share your location by creating link. Also, can manage who can see it."} icon={"dashboardLocation.svg"} leftBorder={true} mdwidth={"md:w-6/12"} buttonTitle={"Create Link"} />
                        <InfoCard title={"Geofence"} description={"Set Geofencing around your preferred area and you will get notify when your device gets out of the range you restricted."} icon={"dashboardGefence.svg"} leftBorder={false} mdwidth={"md:w-12/12"} buttonTitle={"Set"}/>

                    </div>
                </div>
                </>
            // </div>
        // </div>
    )
}

export default User
