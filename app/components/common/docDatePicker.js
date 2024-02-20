import { DatePicker } from 'antd'
import dayjs from 'dayjs';
import Image from 'next/image'
import React from 'react'

const DocDatePicker = ({ defaultValue, onChange, className, open, handleDatePickerOpen }) => {

  const handleChange = (e, dateString) => {
    onChange(e, dateString)
  };
  const dateFormat = 'YYYY-MM-DD';

  return (
    <DatePicker dateFormat={dateFormat} defaultValue={dayjs(defaultValue, dateFormat)} open={open} onOpenChange={handleDatePickerOpen} onChange={handleChange} placeholder={"DD--MM--YYY"} className={`${className} border-2 border-grey-100 h-[40px] rounded-[5px]`} suffixIcon={<Image src={"/icons/Calender.svg"} width={30} height={30} alt="Calender" />} />
  )
}

export default DocDatePicker