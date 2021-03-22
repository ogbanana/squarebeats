import Head from 'next/head'
import React from 'react'
import SoundSelector from '../components/SoundSelector'

export default function Home() {
  return (
    <>
      <Head>
        <title>SquareBeats</title>
      </Head> 
      <div>
        <SoundSelector/>
      </div>
    </>

  )
}
