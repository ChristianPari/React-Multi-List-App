import React from 'react'

// components
import ListElement from './ListElement'
//? not sure if i'll need the below component
// import ListItem from './ListItem'

// contexts
import { useLists } from '../Contexts/ListsContext'

export default function ListContainer() {
  const lists = useLists()

  return (
    <div className='list-container'>
      {lists.map((list, i) => {
        return (
          <ListElement 
            data={list}
            key={i}
          />
        )
      })}
    </div>
  )
}