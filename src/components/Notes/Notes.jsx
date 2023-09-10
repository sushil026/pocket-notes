import React from 'react'
import notes from './Notes.module.css'
// import SplashScreen from './SplashScreen/SplashScreen'
import Notepad from './Notepad/Notepad'

export default function Notes() {
  return (
    <div className={notes.app}>
      {/* <SplashScreen/> */}
      <Notepad/>
    </div>
  )
}
