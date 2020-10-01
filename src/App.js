import React from 'react'

// components
import NavBar from './Components/NavBar'
import Board from './Components/Board'

// contexts
import {CardContextProvider} from './Contexts/CardContext'

export default function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <NavBar />
        <Board />
      </CardContextProvider>
    </div>
  )
}