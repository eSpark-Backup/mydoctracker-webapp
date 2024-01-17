"use client"

import { deviceSettingNotfications } from '@/app/constant'
import { Switch } from 'antd'
import React, { useState } from 'react'

const NotificationSettings = () => {

  const [ settingNotfications, setSettingNotfications ] = useState([...deviceSettingNotfications])
  const handleSetting = (value, id) => {
    setSettingNotfications(settingNotfications.map(item => {if (item.id === id) {return { ...item, isActive : value }} return item}))
  }

  return (
    <div className='flex flex-col gap-4'>
    {settingNotfications.map((eachNotification, index) => (
        <div className='flex flex-col border-b-2 gap-4 px-3 py-6 border-greyBorder' key={index}>
            <div className='flex justify-between flex-wrap'>
                <h2 className='text-base font-medium text-[#424242]'>{eachNotification.heading}</h2>
                <Switch checked={eachNotification.isActive} onChange={(value) => handleSetting(value, eachNotification.id)} style={{ backgroundColor : eachNotification.isActive ? '#FCBF4A' : "#E4E4E4" }} />
            </div>
            <p className='text-xs text-greydark'>{eachNotification.description}</p>
        </div>
    ))}
</div>
  )
}

export default NotificationSettings