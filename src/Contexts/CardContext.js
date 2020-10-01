import React, { useState, useContext, createContext } from 'react'
import { v1 } from 'uuid'

// once above is done and app is working, use effect or grab the localStorage hook from previous project and implement it here to store in localStorage

const CardContext = createContext()
const CardContextUpdate = createContext()

export function useCards() {
  return useContext(CardContext)
}

export function useCardsUpdate() {
  return useContext(CardContextUpdate)
}

export function CardContextProvider({ children }) {
  const [cards, setCards] = useState([])

  const updateCards = (data) => {
    setCards(cards => [
      ...cards,
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
    <CardContext.Provider value={cards}>
      <CardContextUpdate.Provider value={updateCards}>
        { children }
      </CardContextUpdate.Provider>
    </CardContext.Provider>
  )
}