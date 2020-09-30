import React, { useState, useContext, createContext } from 'react'
import { v1 } from 'uuid'

// once above is done and app is working, use effect or grab the localStorage hook from previous project and implement it here to store in localStorage

const ListsContext = createContext()
const ListsUpdateContext = createContext()

export function useLists() {
  return useContext(ListsContext)
}

export function useListsUpdate() {
  return useContext(ListsUpdateContext)
}

export function ListsContextProvider({ children }) {
  const [lists, setLists] = useState([])

  const updateLists = (data) => {
    setLists(lists => [
      ...lists,
      {
        [data.title]: {
          title: data.title,
          id: v1(),
          items: []
        }
      }
    ])
  }

  return (
    <ListsContext.Provider value={lists}>
      <ListsUpdateContext.Provider value={updateLists}>
        { children }
      </ListsUpdateContext.Provider>
    </ListsContext.Provider>
  )
}