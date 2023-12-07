"use client"

import React from 'react'
import Image from 'next/image'
import { Input } from 'antd'
import debounce from 'lodash.debounce'

const SearchBar = ({ className, placeholder, handleChange }) => {

 const handleSearch = (e) => {
  handleChange(e.target.value)
 }

 const handleDebounce = debounce(handleSearch, 500)

  return (
    <Input
      prefix={<Image src='/icons/search.svg' width={20} height={20} alt="search" />}
      className={`border-2 border-grey-100 h-[40px] !rounded-[20px] ${className}`} 
      placeholder={placeholder}
      onChange={handleDebounce}
    />
  )
}

export default SearchBar