import { TimePicker } from 'antd'
import Image from 'next/image'
import React from 'react'

const DocTimePicker = ({ className, onChange }) => {

  const handleChange = (e) => {
    onChange(e)
  };


  return (
    <TimePicker onChange={handleChange} placeholder="00:00" className={`border-2 border-grey-100 h-[40px] rounded-[5px] ${className}`} suffixIcon={<Image src={"/icons/Time.svg"} width={30} height={30} alt="Calender" />} />
  )
}

export default DocTimePicker