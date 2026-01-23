import React from 'react'
import Dock from './components/Dock'
import "./app.scss"
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'

const App = () => {
  return (
    <div>
      <main>
        <Dock/>
        <Nav/>
        {/* <Github/> */}
        <Note/>
        {/* <MacWindow><h1>Ishan</h1></MacWindow> */}
        <Resume/>
      </main>
    </div>
  )
}

export default App