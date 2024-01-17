"use client"


import { HeadContent, RadioFilterPopup, SearchBar, Table } from '@/app/components'
import React, { useRef, useState } from 'react'
import { allUsers } from '@/app/constant';
import { columns } from '@/app/columns/allUser';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useOutsideClick } from '@/app/utils';

const Subordinates = () => {
    const router = useRouter()


    const [data, setData] = useState([...allUsers])
    const [openRadioFilterModal, setOpenRadioFilterModal] = useState(false)


    const [filter, setFilter] = useState({
        search: "",
        select: "",
        type: "",
        requests: "",
        devices: "",
        pageNo: 1,
    })

    const handleFilter = (key, value) => {
        setFilter({
            ...filter,
            [key]: value
        })
    }

    const gotoDetail = (rowId) => {
        router.push('/dashboard/employee-as-admin/employee-details')
    }

    const handleSwitch = (id, value) => {
        data.map((user) => { if (user.id === id) user.status = value })
        setData([...data])
    }

    const filterModal = useRef(null);
    useOutsideClick(filterModal, () => setOpenRadioFilterModal(false))

    return (
        <>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0">
                <HeadContent
                    mainHeading="Subordinates"
                    paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie"
                />
            </div>
            {/* <div className="w-[100%] mx-auto sm:w-[75%] h-[100%] "> */}
            <div className="w-[100%] border-[1px] borderColor-[#E4E4E4] rounded-lg h-[65vh] bg-white my-4 p-3 md:p-8">
                <div>
                    <div className='flex flex-col md:flex-row items-end bd:items-center justify-between gap-3 px-0 py-0 md:px-10 '>
                        <SearchBar handleChange={(value) => handleFilter('search', value)} className='!w-[100%] md:!w-[300px]' placeholder="Search by name or tracker ID..." />
                        <div className='relative flex flex-row items-center justify-start md:justify-center gap-1 md:gap-3'>
                            <Image className='cursor-pointer' onClick={()=>setOpenRadioFilterModal(!openRadioFilterModal)}  src="/icons/tabs-Image.svg" width={40} height={40} alt="tabs-image" />
                            {openRadioFilterModal && <RadioFilterPopup className="!right-0" forwardedRef={filterModal} filter={filter} handleFilter={handleFilter} />}
                        </div>
                    </div>
                    <div className='mt-5 p-0 pb-3 md:p-10 flex items-center justify-center h-[50vh] md:h-[55vh]'>
                        <Table
                            data={data}
                            columns={columns({ gotoDetail, handleSwitch })}
                            currentPage={filter.pageNo}
                            handlePagination={handleFilter}
                        />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Subordinates