"use client"

import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Pagination } from 'antd';

const Table = ({ currentPage, handlePagination, data, columns }) => {

  const onChange = (page) => {
    handlePagination('pageNo', page)
  }

  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center'>
      <div className="ag-theme-quartz max-h-[500px] w-[100%] max-w-[1200px] overflow-y-auto !rounded-b-none" style={{ height: `${48 + 43 * data.length}px`}}>
        <AgGridReact rowData={data} columnDefs={columns} />
      </div>
      <Pagination className='md:!mt-5 mt-3 mb-4' current={currentPage} onChange={onChange} total={data.length} />
    </div>
  )
}

export default Table