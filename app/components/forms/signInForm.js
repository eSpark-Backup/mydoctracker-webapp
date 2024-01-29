"use client";

import React, { useState } from 'react'
import { signInRoles } from '@/app/constant';
import SingleUserSignIn from './singleUserSignIn';
import CorporateSignIn from './corporateSignIn';
import JoinTeamSignIn from './joinTeamSignIn';
import RoleBox from '../common/roleBox';



const SignInForm = () => {
  const [currentRole, setCurrentRole] = useState(1);

  return (
    <div className='py-3 h-full flex flex-col justify-between'>
      <div className=' flex flex-col h-full'>
        <div>
          <div className='flex justify-center pb-4'>
            <div className='flex text-3xl text-secondary font-semibold w-fit'>
              <h6 className="border-b-4 border-secondary pb-1">Sign </h6>  &nbsp; <span> In</span>
            </div>
          </div>
          <div className='lg:px-2'>
            <p className='text-greydark text-center'>Please select your role:</p>
            <div className='flex gap-x-3 justify-center sm:gap-5 sm:py-3 sm:flex-wrap'>
              {signInRoles?.map((role, key) => (
                <RoleBox key={key} role={role} onClick={() => setCurrentRole(role.id)} currentRole={currentRole} />
              ))}
            </div>
          </div>
        </div>

        <div className='flex-1'>
          {
            currentRole === 1 ? <SingleUserSignIn /> : currentRole === 2 ? <CorporateSignIn /> : currentRole === 3 ? <JoinTeamSignIn /> : <SingleUserSignIn />
          }
        </div>


      </div>


    </div>
  )
}

export default SignInForm