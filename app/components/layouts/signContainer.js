import React from 'react'

const SignContainer = ({children}) => {
  return (
    <div className='bg-white flex justify-center rounded-r-lg shadow-2xl h-full'>
    <div className='lg:w-9/12 md:w-9/12 w-11/12 py-8'>   
     {children}
    </div>
    </div>
  
  )
}

export default SignContainer