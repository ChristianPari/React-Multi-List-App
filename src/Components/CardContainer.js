import React from 'react'

// components
import Card from './Card'
//? not sure if i'll need the below component
// import ListItem from './ListItem'

// contexts
import { useLists } from '../Contexts/ListsContext'

export default function CardContainer() {
  const lists = useLists()

  return (
    <div className='list-container'>
      {lists.map((list, i) => {
        return (
          <Card 
            data={list}
            key={i}
          />
        )
      })}
    </div>
  )
}