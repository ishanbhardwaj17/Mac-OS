import React from 'react'
import Dock from './components/Dock'
import "./app.scss"
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <main>
        <Dock/>
        <Nav/>
      </main>
    </div>
  )
}

export default App