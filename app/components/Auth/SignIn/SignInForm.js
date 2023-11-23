"use client";

import React, { useState } from 'react'
import RoleBox from '../common/RoleBox'
import { signInRoles } from '@/app/constant';
import SingleUserSignIn from '../../Forms/SignIn/SingleUserSignIn';

const SignInForm = () => {
 const [currentRole, setCurrentRole] = useState(1)
 
  return (
    <div className='py-3 h-full'>
      <div className='px-12'>
        <p className='text-greydark'>Please select your role:</p>
        <div className='flex justify-center gap-5 py-3 flex-wrap'>
        {signInRoles?.map((role, key) => (
          <RoleBox key={key} role={role} onClick={() => setCurrentRole(role.id)} currentRole={currentRole} />
        ))} 
        </div>
      </div>
      <div>
         <SingleUserSignIn/>
      </div>

    </div>
  )
}

export default SignInForm