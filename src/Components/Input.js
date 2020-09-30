import React from 'react'

export default function Input(props) {
  return (
    <input 
      type={props.type || 'text'} 
      name={props.name || ''} 
      placeholder={props.ph || ''}
      value={props.value || ''}
      onChange={props.onChange || null}
    />
  )
}