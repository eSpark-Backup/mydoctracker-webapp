import { GIFBanner, SignContainer, SingUpForm } from '@/app/components'
import React from 'react'


const SignUp = () => {
  return (
    <div className='flex min-h-screen' >
      <div className='w-7/12' >
        <GIFBanner/>
      </div>
      <div className='w-5/12'>
        <SignContainer> 
          <SingUpForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default SignUp