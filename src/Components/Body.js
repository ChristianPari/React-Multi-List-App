import React from 'react'

// components
import ListContainer from './ListContainer'
import NewListForm from './NewListForm'

export default function Body() {
  return (
    <div className='app-body'>
      <ListContainer />
      <NewListForm />
    </div>
  )
}