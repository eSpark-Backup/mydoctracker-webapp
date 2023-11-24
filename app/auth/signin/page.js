import { GIFBanner, SignContainer, SignInForm } from '@/app/components'
import React from 'react'


const SignIn = () => {
  return (
    <div className='flex w-10/12 border-2 border-black' style={{ height: 'calc(100vh - 15vh)' }} >
      <div className='w-7/12' >
        <GIFBanner/>
      </div>
      <div className='w-5/12'>
        <SignContainer> 
          <SignInForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default SignIn