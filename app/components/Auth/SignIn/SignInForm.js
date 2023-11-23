import React from 'react'
import DocButton from '../../common/docButton'

const SignInForm = () => {
  return (
    <div className='py-3'>
        <div className='px-12'>
          <p>Please select your role:</p>
          <div>
                   
          </div>
        </div>
       

        <div>
        
        <DocButton className={"bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign In"}/>
        </div>
      
    </div>
  )
}

export default SignInForm