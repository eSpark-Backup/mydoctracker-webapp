import { GIFBanner, SignContainer, SignInForm } from '@/app/components'
import React from 'react'


export const metadata = {
  title: 'My Doc Tracker - Sign In',
  description: '...',
}

const SignIn = () => {
  return (
    <div className='flex lg:flex-row flex-col min-h-screen' >
      <div className='lg:w-7/12 w-full' >
        <GIFBanner buttonTitle={"Sign Up"} redirect={"signup"}/>
      </div>
      <div className='lg:w-5/12 w-full'>
        <SignContainer> 
          <SignInForm/>
        </SignContainer>
      </div>
    </div>
  )
}

export default SignIn