import React from 'react'

// components
import ListItem from './ListItem'

export default function ListElement(props) {
  let title;
  let id;
  let items;
  for (const name in props.data) {
    title = name
    id = props.data[name].id
    items = props.data[name].items
  }

  return (
    <div
      className='list-divs'
      key={id}
    >
      <h2>{title}</h2>
      {
        items.length ? 
          <ul>
            {items.map(item => {
              return (
              <ListItem />
              )
            })}
          </ul> :
          <p>Add some items!</p>
      }
      <button>
        {/* TODO make ability for item to be created */}
        Add Item
      </button>
    </div>
  )
}