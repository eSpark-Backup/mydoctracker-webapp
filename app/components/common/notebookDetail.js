import React from 'react'

const NotebookDetail = ({ field, value }) => {
    return (
        <div className='w-full lg:w-[30%] min-w-[250px] justify-between pb-3 lg:justify-start flex gap-5'>

            <p className='text-[#666] text-[14px] lg:text-[16px] font-semibold w-[115px]'>{field}</p>


            <p className='text-primary text-[14px] lg:text-[16px] font-semibold '>{value}</p>

        </div>
    )
}

export default NotebookDetail