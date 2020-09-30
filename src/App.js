import React from 'react'

// components
import NavBar from './Components/NavBar'
import Body from './Components/Body'

// contexts
import {ListsContextProvider} from './Contexts/ListsContext'

export default function App() {
  return (
    <div className="App">
      <ListsContextProvider>
        <NavBar />
        <Body />
      </ListsContextProvider>
    </div>
  )
}