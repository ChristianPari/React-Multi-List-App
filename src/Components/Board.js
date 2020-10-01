import React from 'react'

// components
import CardContainer from './CardContainer'
import NewCard from './NewCard'

export default function Body() {
  return (
    <div className='app-body'>
      <CardContainer />
      <NewCard />
    </div>
  )
}