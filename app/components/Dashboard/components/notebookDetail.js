import React from 'react'

const NotebookDetail = ({ field, value }) => {
    return (
        <div className='w-full lg:w-fit min-w-[250px] justify-between pb-3 lg:justify-start flex gap-5'>

            <p className='text-grey font-semibold '>{field}</p>


            <p className='text-primary font-semibold '>{value}</p>

        </div>
    )
}

export default NotebookDetail