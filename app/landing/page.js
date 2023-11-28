import React from 'react'
import { About, Intro, Options } from '../components'

export const metadata = {
  title: 'My Doc Tracker',
  description: '...',
}
 

const Landing = () => {
  return (
    <>
    <main>
      <Intro />
      <Options />
      <About/>
    </main>
    </>
  )
}

export default Landing