import { deviceSettingNotfications } from '@/app/constant'
import { Switch } from 'antd'
import React from 'react'

const NotificationSettings = () => {
  return (
    <div className='flex flex-col gap-4'>
    {deviceSettingNotfications.map((eachNotification, index) => (
        <div className='flex flex-col border-b-2 gap-4 px-3 py-6 border-greyBorder' key={index}>
            <div className='flex justify-between flex-wrap'>
                <h2 className='text-base font-medium'>{eachNotification.heading}</h2>
                <Switch defaultChecked />
            </div>
            <p className='text-xs'>{eachNotification.description}</p>
        </div>
    ))}
</div>
  )
}

export default NotificationSettings