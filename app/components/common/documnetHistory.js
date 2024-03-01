"use client"
import { documentsHistoryData } from '@/app/constant'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FieldView from './fieldView'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDocuments } from '@/app/redux/store/slices/documents'
import useGetEMployeeAllDocuments from '@/app/hooks/documents/getEmployeeDocuments'
import { getDate, getMonthDate, getTime } from '@/app/utils'
import { Pagination } from 'antd'
import LoadingScreen from './loadingScreen'
import { usePathname } from 'next/navigation'

const DocumnetHistory = () => {
    const dispatch = useDispatch();
    const { documents } = useSelector((state => state.documents))
    const [activeItem, setActive] = useState(null)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(1)
    const [limit] = useState(10)
    const pathname = usePathname();
    const id = pathname.split("/")[4]
    console.log(id, "PATH")



    const { mutate: getEmployeeAllDocuments, isLoading } = useGetEMployeeAllDocuments()
    const fetchingDocuments = () => {
        const paramsObj = {
            id: id,
            page,
            limit,
        }
        getEmployeeAllDocuments(paramsObj, {
            onSuccess: (fetchedSuccess) => {
                dispatch(fetchDocuments(fetchedSuccess?.data))
                console.log(documents, "DOCS")
            },
            onError: (error) => {
                notification.error({
                    message: 'Error',
                    description: getErrorFromApi(error),
                })
            }
        })
    }

    useEffect(() => {
        fetchingDocuments()
    }, [])
    return (
        <div>
            {isLoading ? <div className='flex flex-row items-center justify-center h-[50vh] text-[20px]'><LoadingScreen /></div> : <div className='flex flex-col md:flex-row gap-4 h-[100%] px-2 sm:px-8'>

                <div className='w-[100%] md:w-[30%] border-[#E4E4E4] border-r-0 md:border-r-2 h-[100%] lg:h-[70vh] no-scrollbar overflow-y-scroll'>
                    {documents?.items.map((item, index) => {
                        const { title, creationDate, createdAt } = item;

                        return (
                            <div className='px-8 py-6 border-[#E4E4E4] border-b-2 cursor-pointer' key={index} onClick={() => setActive(item)}>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className='text-[#002F49] font-semibold text-sm md:w-[60%] xl:w-auto'>{`${getMonthDate(creationDate)} ${index === 0 ? "(Current version)" : ""}`}</p>
                                    <p className='text-[#666666] font-semibold text-[10px]'>{getTime(createdAt)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center mt-2'>
                                    <div className='cursor-pointer'>
                                        <p className='text-[#424242] font-semibold text-base'>{title}</p>
                                        <p className='text-[#666666] text-xs'>Saved by: You</p>
                                    </div>
                                    {/* <Image className='cursor-pointer' src="/icons/vertical-ellipse.svg" width={20} height={20} alt="vertical-ellipse" /> */}
                                </div>
                            </div>
                        );
                    })}
                    <div className='h-[20%] flex items-center justify-center p-2'>
                        <Pagination size={{ xs: "medium", md: "small" }} siblingCount={2} boundaryCount={2} current={page} onChange={(e) => setPage(e)} total={(total * 10) / limit} />
                    </div>
                </div>


                <div className='w-[100%] md:w-[70%] py-0 md:py-5 px-3 md:px-6'>
                    {activeItem !== null ? <div className='flex flex-col lg:flex-row gap-5'>
                        <div className='lg:w-[35%] ml-6'>
                            <div className='flex flex-col gap-4'>
                                <div className=" flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Title:</label>
                                    <FieldView text={activeItem?.title} />
                                </div>
                                <div className="  flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Date:</label>
                                    <FieldView text={getDate(activeItem?.creationDate)} />
                                </div>
                                <div className="  flex flex-col">
                                    <label className="text-[#666] text-sm pb-1">Time</label>
                                    <FieldView text={getTime(activeItem?.createdAt)} />
                                </div>
                                {activeItem?.meta !== null && activeItem?.meta?.fields?.length > 0 ? activeItem?.meta?.fields.map((item, index) => {
                                    <div className="  flex flex-col" key={index}>
                                        <label className="text-[#666] text-sm pb-1">{item?.name}:</label>
                                        <FieldView text={item?.value} />
                                    </div>
                                }) : null}
                            </div>
                        </div>
                        <div className='lg:w-[65%]'>
                            <div className='flex justify-center'>
                                <Image src={activeItem?.file} className='lg:w-[70%] w-[80%]' width={500} height={500} alt="document-image" />
                            </div>
                        </div>
                    </div> : null}
                </div>

            </div>}
        </div>
    )
}

export default DocumnetHistory
