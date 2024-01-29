"use client"

import { useDispatch, useSelector } from 'react-redux'
import { InfoCard, NotebookDetail } from '@/app/components'
import { info, notebookDetails } from '@/app/constant'
import { containerStyleSm } from '@/app/constant'
import TrackingMap from '@/app/utils/TrackingMap'
import React, { useEffect } from 'react'
import { useGetDocumentById } from '@/app/hooks/documents'
import { getErrorFromApi } from '@/app/utils'
import { notification } from 'antd'
import { fetchCurrentDocument } from '@/app/redux/store/slices/documents'
import { usePathname } from 'next/navigation'

const User = () => {
    const { role } = useSelector(state=>state.auth)
    const pathname = usePathname();
    const id = pathname.split('/')[3]
    const filteredInfo = role === "employee" ? info(id).filter(item=>item.title !== "Geofence") : info(id)

    const dispatch = useDispatch();


    const { mutate: getDocumentById } = useGetDocumentById();
    useEffect(() => {
        getDocumentById(id, {
            onSuccess: (fetchedSuccess) => {
                dispatch(fetchCurrentDocument(fetchedSuccess?.data))
            },
            onError: (error) => {
                notification.error({
                    message: 'Error',
                    description: getErrorFromApi(error),
                })
            }
        })
    }, [])
    return (
        <>
            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 px-3 py-7 flex-col">
                <h6 className='text-black text-center lg:text-left font-semibold text-lg md:text-xl pb-5'>My Note Book</h6>
                {/* <NoteBookDetails /> */}
                <div>
                    <div className='flex justify-between flex-wrap'>
                        {notebookDetails.map((item)=>{
                            return <NotebookDetail key={item.id} field={`${item.field}:`} value={item.value} />
                        })}
                    </div>
                </div>


                <div>
                    <TrackingMap centerButton containerStyle={containerStyleSm} />
                </div>

            </div>

            <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex lg:px-14 px-3 py-7 flex-col">
                <div className='flex flex-col md:flex-row justify-center'>
                    {filteredInfo.map((item, index) => {
                        return <InfoCard id={id} length={filteredInfo.length} key={item.id} title={item.title} description={item.description} icon={item.icon} index={index} mdwidth={item.mdWidth} buttonTitle={item.buttonTitle} buttonLink={item.buttonLink} />
                    })}
                </div>
            </div>
        </>
    )
}

export default User
