"use client"

import { useState } from 'react';
import { Tabs } from 'antd'
import HeadContent from '@/app/components/common/headContent'
import { employeeData, subsidiaryData } from '@/app/constant';
import ManagementList from '../../../components/common/management'

const Manage = () => {

    const [filter, setFilter] = useState({
        search: "",
        select: ""
    })

    const handleFilter = (key, value) => {
        setFilter({
            ...filter,
            [key] : value
        })
    }

    const onDelete = (id) => {
        //delete api configure
        console.log(id)
    }

    const tabs = [
        {
          key: '1',
          label: 'Subsidiary',
          children: <ManagementList handleFilter={handleFilter} onDelete={onDelete} type="subsidiary" data={subsidiaryData} />,
        },
        {
          key: '2',
          label: 'Employee',
          children: <ManagementList handleFilter={handleFilter} onDelete={onDelete} type="employee" data={employeeData} />,
        },
    ];

    return (
        <div>
            <div className="w-[100%] sm:w-[75%] flex items-end mt:0 sm:mt-10">
            <HeadContent
              mainHeading="Management"
              paragraph="Lorem ipsum dolor sit amet consectetur. Cursus cras aliquam amet malesuada iaculis habitant. Aliquam faucibus ultricies tincidunt mattis vitae nec nulla sit. A molestie "
            />
            </div>
            <div className="w-[100%] drop-shadow-lg rounded-lg h-[65vh] bg-white my-4">
                <div className='manage-tabs pt-2 h-[100%]'>
                   <Tabs centered defaultActiveKey="1" items={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Manage
