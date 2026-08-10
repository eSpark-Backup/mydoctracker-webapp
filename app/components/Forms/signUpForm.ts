"use client";

import React, { useState } from 'react'
import RoleBox from '../common/roleBox'
import { signUpRoles } from '@/app/constant';
import { CorporateSignup, SingleUserSignUp } from '..';

const SignUpForm = () => {
  const [currentRole, setCurrentRole] = useState(1);
  const [showRole, setShowRole] = useState(true);
  const HideHandler = () => {
    setShowRole(false);
  }


  return (
    <div className='py-3 h-full flex flex-col justify-between '>
      <div className=' flex flex-col h-full'>
        <div>
          <div className='flex justify-center pb-4'>
            <div className='flex text-3xl text-secondary font-semibold w-fit'>
              <h6 className="border-b-4 border-secondary pb-1">Sign </h6>  &nbsp; <span> Up</span>
            </div>
          </div>
          {showRole?<div className='lg:px-2'>
            <p className='text-greydark text-center'>Please select your role:</p>
            <div className='flex justify-center gap-5 py-3'>
              {signUpRoles?.map((role, key) => (
                <RoleBox key={key} role={role} onClick={() => setCurrentRole(role.id)} currentRole={currentRole} />
              ))}
            </div>
          </div>:null}
        </div>

        <div className='flex-1'>
          {
            currentRole === 1 ? <SingleUserSignUp /> : currentRole === 2 ? <CorporateSignup HideHandler={HideHandler} /> : <SingleUserSignUp />
          }
        </div>


      </div>


    </div>
  )
}

export default SignUpForm