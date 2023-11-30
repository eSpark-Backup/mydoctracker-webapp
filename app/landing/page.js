import React from 'react'
import { About, Feature, Features, Intro, Options } from '../components'

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
      <Features/>
    </main>
    </>
  )
}

export default Landing