import React, { useState } from 'react'

// components
import Input from './Input'

// contexts
import { useListsUpdate } from '../Contexts/ListsContext'

export default function NewListForm() {
  const updateLists = useListsUpdate()

  // want the inputs to clear upon submit so using state to clear
  const [title, setTitle] = useState('')

  // onChange function for the form
  // prevents the page reload and runs the state update function for lists
  // sets the state for the input 'title' back to empty string to clear the input
  const handleSubmit = (e) => {
    e.preventDefault()
    updateLists({ title: title })
    setTitle('')
  }

  return (
    <div className='new-list-div'>
      <h4>New List?</h4>
      <form 
        className='new-list-form'
        onSubmit={handleSubmit}
      >
        <Input 
          name='list_title'
          ph='List Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input 
          type='submit'
          value='Create List'
        />
      </form>
    </div>
  )
}