import { DatePicker } from 'antd'
import Image from 'next/image'
import React from 'react'

const DocDatePicker = () => {
  return (
    <DatePicker placeholder={"DD--MM--YYY"} className="border-2 border-grey-100 h-[40px] rounded-[5px] " suffixIcon={<Image src={"/icons/Calender.svg"} width={30} height={30} alt="Calender" />} />
  )
}

export default DocDatePicker