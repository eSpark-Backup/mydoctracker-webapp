"use client";

import React, { useState } from 'react'
import RoleBox from '../common/roleBox'
import {signUpRoles } from '@/app/constant';
import SingleUserSignUp from '../../forms/signUp/singleUserSignup';
import CorporateSignup from '../../forms/signUp/corporateSignup';

const SignUpForm = () => {
  const [currentRole, setCurrentRole] = useState(1);
  

  return (
    <div className='py-3 h-full flex flex-col justify-between '>
      <div className=' flex flex-col h-full'>
        <div>
          <div className='flex justify-center pb-4'>
            <div className='flex text-3xl text-secondary font-semibold w-fit'>
              <h6 className="border-b-4 border-secondary pb-1">Sign </h6>  &nbsp; <span> Up</span>
            </div>
          </div>
          <div className='lg:px-2'>
            <p className='text-greydark text-center'>Please select your role:</p>
            <div className='flex justify-center gap-5 py-3 flex-wrap'>
              {signUpRoles?.map((role, key) => (
                <RoleBox key={key} role={role} onClick={() => setCurrentRole(role.id)} currentRole={currentRole} />
              ))}
            </div>
          </div>
        </div>

        <div className='flex-1'>
          {
            currentRole === 1 ? <SingleUserSignUp /> : currentRole === 2 ? <CorporateSignup  /> : <SingleUserSignUp /> 
          }
        </div>


      </div>


    </div>
  )
}

export default SignUpForm