"use client"

import React, { useState } from 'react'
import { Footer, LandingDrawer, Navbar } from "../components";

export default function Landinglayout({ children }) {
  const [ activeTab, setActiveTab ] = useState("Home")
  const [ open, setOpen ] = useState(false)

  const openDrawer = () => {
    setOpen(!open)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleActiveTab = (value) => {
    setActiveTab(value)
  }

  return (
    <>
      <Navbar openDrawer={openDrawer} />
      {children}
      <LandingDrawer
        open={open}
        onClose={onClose}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
      <Footer />
    </>
  )
}