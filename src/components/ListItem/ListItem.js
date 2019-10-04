import React  from 'react'
import './ListItem.css'

const ListItem = (props) => {
  return (
    <li
      className='ListItem'
      onClick={props.clicked}>
      {props.children}
    </li>
  )
}

export default ListItem
