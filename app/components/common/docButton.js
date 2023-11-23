import React from 'react'

const DocButton = ({className, text, onClick}) => {
  return (
     <button onClick={onClick} className={`bg-primary text-white rounded-[50px] text-[18px] px-4 h-[40px] ${className}`} type='primary'>
        {text}
     </button>
  )
}

export default DocButton