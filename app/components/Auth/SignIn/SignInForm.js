"use client";

import React, { useState } from 'react'
import DocButton from '../../common/docButton'
import RoleBox from '../common/RoleBox'

const SignInForm = () => {
 const [currentRole, setCurrentRole] = useState("Single User")
 
  return (
    <div className='py-3'>
      <div className='px-12'>
        <p>Please select your role:</p>
        <div className='flex justify-center gap-5 py-3 flex-wrap'>
          <RoleBox role={{
            name: 'Single User',
            icon: 'SingleUser.svg',
            iconfill: "SingleUserfill.svg"
          }} />
          <RoleBox role={{
            name: 'Corporate',
            icon: 'corporate.svg',
            iconfill: "corporatefill.svg"
          }} />
          <RoleBox role={{
            name: 'Join Team',
            icon: 'team.svg',
            iconfill: "teamfill.svg"
          }} />
          
        </div>
      </div>


      <div>
       
        <DocButton className={"bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign In"} />
      </div>

    </div>
  )
}

export default SignInForm