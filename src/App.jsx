import React from 'react'
import Dock from './components/Dock'
import "./app.scss"
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'

const App = () => {
  return (
    <div>
      <main>
        <Dock/>
        <Nav/>
        <MacWindow><h1>Ishan</h1></MacWindow>
      </main>
    </div>
  )
}

export default App