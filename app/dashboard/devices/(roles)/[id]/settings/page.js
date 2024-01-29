"use client"

import { useState } from 'react'
import { AccountSettingsForm, DocButton, DocInput, NotificationSettings, TrackerSettings } from '@/app/components';
import { Tabs} from 'antd';

const Settings = () => {

    const items = [
        {
            key: '1',
            label: 'Tracker Settings',
            children: <TrackerSettings/>,
        },
        {
            key: '2',
            label: 'Notifications',
            children: <NotificationSettings/>,
        },
        {
            key: '3',
            label: 'Account Settings',
            children: <AccountSettingsForm/>,
        },
    ];

    return (
        <>
          <div className='ml bg-white w-full rounded-lg shadow-lg sm:p-8 p-2 mt-4 min-h-[800px]'>
            <Tabs size='large' defaultActiveKey="1" items={items} />
        </div>
        </>
    )
}

export default Settings
