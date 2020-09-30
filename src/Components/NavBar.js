import React from 'react'

// contexts
import { useLists } from '../Contexts/ListsContext'

export default function NavBar() {
  return (
    <nav>
      <div className='greeter'>
        <h1 className='heading'>Let's Make A List</h1>
        <p className='desc'>
          You have {useLists().length} lists
        </p>
      </div>
    </nav>
  )
}