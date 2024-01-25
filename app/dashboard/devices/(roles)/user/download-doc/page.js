"use client"

import { FieldView, LoadingScreen, NavigatorHeader } from '@/app/components'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Pagination, notification } from 'antd'
import { useGetDocumentHistory } from '@/app/hooks/documents'
import { getDate, getErrorFromApi, getMonthDate, getTime } from '@/app/utils'
import { fetchDocumentHistory } from '@/app/redux/store/slices/documentHistory'
import { useDispatch, useSelector } from 'react-redux'

const DownloadDoc = () => {

  const [active, setActive] = useState()

  const { mutate: getDocumentHistory, isLoading } = useGetDocumentHistory();
  const pathname = usePathname();
  const id = pathname?.split('/')[2]
  const dispatch = useDispatch();
  const { documentsHistory } = useSelector(state => state.documentsHistory)

  console.log(id, "id") // this id will be device id coming from path and will be use as documentId
  const documentID = "9fb82f54-2e04-4cc3-a68b-f86ae7325a45"

  useEffect(() => {
    getDocumentHistory(documentID, {
      onSuccess: (fetchedSuccess) => {
        dispatch(fetchDocumentHistory(fetchedSuccess?.data))
        if (fetchedSuccess?.data.length > 0) {
          setActive(fetchedSuccess?.data[0])
        }
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
    <NavigatorHeader previousPage={["Dashboard"]} currentPage="Document History" />
    <div className="w-[100%] drop-shadow-lg rounded-lg bg-white my-4 flex flex-col">
            <div className='border-[#E4E4E4] border-b-2 py-8 px-8 pb-5'> 
                <h6 className='text-black font-semibold text-lg sm:text-xl'>History</h6>
            </div>
        {isLoading ? <div className='flex flex-row items-center justify-center h-[50vh] text-[20px]'><LoadingScreen /></div> :
            documentsHistory?.length > 0 ?
            <div className='flex flex-col md:flex-row gap-8 h-[100%]'>
              
              <div className='w-[100%] md:w-[35%] border-[#E4E4E4] border-r-0 md:border-r-2 h=[100%] lg:h-[70vh]'>
                <div className='h-[80%] no-scrollbar overflow-y-scroll'>
                {documentsHistory?.map((item, index)=>{
                  return(
                    <div onClick={() => setActive(item)} className='cursor-pointer px-8 pl-10 py-6 border-[#E4E4E4] border-b-2' key={index}>
                     <div className='flex flex-row justify-between items-center'>
                       <p className='text-[#002F49] font-semibold text-sm'>{getMonthDate(item?.creationDate)}</p>
                       <p className='text-[#666666] font-semibold text-[10px]'>{getTime(item?.creationDate)}</p>
                     </div>
                     <div className='flex flex-row justify-between items-center mt-2'>
                      <div className='cursor-pointer'>
                        <p className='text-[#424242] font-semibold text-base'>{item?.title}</p>
                        <p className='text-[#666666] text-[10px]'>Saved by: You</p>
                      </div>
                      <Image className='cursor-pointer' src="/icons/vertical-ellipse.svg" width={20} height={20} alt="vertical-ellipse" />
                     </div>
                    </div>
                  )
                })}
              </div>
              <div className='h-[20%] flex items-center justify-center p-2'>
                <Pagination size={{ xs: "medium", md: "small" }} siblingCount={2} boundaryCount={2} current={1} onChange={(e) => console.log(e)} total={50} />
              </div>
              </div>

              <div className='w-[100%] md:w-[65%] py-5 md:py-10 px-3 md:px-3'>
                <div className='flex flex-col lg:flex-row gap-5'>
                <div className='lg:w-[35%] mx-2'>
                    <div className='flex flex-col gap-4'>
                        <div className=" flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Title:</label>
                            <FieldView text={active?.title} />
                        </div>
                        <div className="  flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Date:</label>
                            <FieldView text={getDate(active?.creationDate)} />
                        </div>
                        <div className="  flex flex-col">
                            <label className="text-[#666] text-sm pb-1">Time:</label>
                            <FieldView text={getTime(active?.creationDate)} />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[65%]'>
                    <div className='flex justify-center'>
                      <Image src={active?.file} className='lg:w-[70%] w-[80%]' width={500} height={500} alt="document-image" />
                    </div>
                </div>
                </div>
              </div>

            </div>
            : <div className='flex flex-row items-center justify-center h-[50vh] text-[20px]'>No History Available</div>}
        </div> 
        </>
  )
}

export default DownloadDoc