import React  from 'react'
import './Input.css'

const input = (props) => {
  return (
    <input
      type='text'
      autoComplete={props.autotype}
      className={props.className}
      disabled={props.isDisabled}
      edit={props.edit}
      name={props.name}
      placeholder={props.placeholder}
      source={props.source}
      readOnly={true}
      value={props.value} />

  )
}

export default input
