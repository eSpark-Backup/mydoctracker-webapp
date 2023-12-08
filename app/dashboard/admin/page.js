"use client"

import { changeRole } from '@/app/redux/store/slices/authSlice'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import Image from 'next/image';
import { DocButton, SearchBar, Table, HeadContent, DocDropdown } from '@/app/components';
import { columns } from '@/app/columns/allUser';
import { allUsers } from '@/app/constant';
import AddEmployeeModal from '@/app/components/modals/addEmployeeModal';
import AddSubsidiaryModal from '@/app/components/modals/addSubsidiaryModal'

const Admin = () => {
    const router = useRouter();
    const options = [{ label: 'Group 1', value: 'Group 1' }, { label: 'Group 2', value: 'Group 2' }]
    const [ data, setData ] = useState([...allUsers])
    const [ openModal, setOpenModal ] = useState(false)
    const [ openSubsidiaryModal, setOpenSubsidiaryModal ] = useState(false)
    const [filter, setFilter] = useState({
        search: "",
        select: "",
        pageNo: 1,
    })

    const handleFilter = (key, value) => {
        setFilter({
            ...filter,
            [key] : value
        })
    }

    const gotoDetail = (rowId) => {
        // navigation to detail page
        console.log(rowId)
    }

    const handleSwitch = (id, value) => {
        data.map((user)=>{if(user.id === id) user.status = value})
        setData([...data])
    }

    const handleAddSubsidiary = () => {
        ///Adding Subsidiary Api Logic 
        setOpenSubsidiaryModal(false)
    }

    const dispatch = useDispatch()

    // change role
    dispatch(changeRole("admin"))
    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
            <HeadContent
              mainHeading="Admin Panel"
              paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
            />
            </div>
            <div className="w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4 p-3 md:p-8">
                <div>
                    <div className='flex flex-col md:flex-row items-start bd:items-center justify-between gap-3'>
                       <SearchBar handleChange={(value) => handleFilter('search', value)} className='!w-[100%] md:!w-[300px]' placeholder="Search by employee name" />
                        <div className='flex flex-row items-center justify-start md:justify-center gap-1 md:gap-3'>
                           <DocDropdown onChange={(value) => handleFilter('select', value.value)} className={"w-[100%] md:w-40"} options={options} placeholder="Group 1" />
                           <Image src="/icons/tabs-Image.svg" width={40} height={40} alt="tabs-image" />
                           <DocButton onClick={() => setOpenModal(true)} prefix={<Image className="mr-2" src={"/icons/AddWhite.svg"} width={15} height={15} alt="plus" />} className={"rounded-md bg-primary text-white h-[100%] px-4 w-4/12 md:w-6/12"} text="Add" />
                        </div>
                    </div>
                    <div className='mt-5 p-0 md:p-10 flex items-center justify-center h-[50vh] md:h-[55vh]'>
                       <Table
                          data={data}
                          columns={columns({ gotoDetail, handleSwitch })}
                          currentPage={filter.pageNo}
                          handlePagination={handleFilter}
                        />
                    </div>
                </div>
            </div>
            <AddEmployeeModal
                showModal={openModal}
                onCalcel={() => setOpenModal(false)}
                onSuccess={(type) => {
                    setOpenModal(false)
                    if(type === "Subsidiary"){
                        setOpenSubsidiaryModal(type)
                    } else {
                        router.push('/dashboard/admin/add-employee')
                    }
                }}
            />
            <AddSubsidiaryModal
                showModal={openSubsidiaryModal}
                onCalcel={() => setOpenSubsidiaryModal(false)}
                onSuccess={handleAddSubsidiary}
            />
        </div>
    )
}

export default Admin
