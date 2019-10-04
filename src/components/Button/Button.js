import React from 'react'
import './Button.css'

const Button = (props) => (
  <button
    type='button'
    className={props.className}
    disabled={props.isDisabled}
    onClick={props.clicked}>{props.children}</button>
)

export default Button







//     <div class="container">
//       <div class="container__item">
//         <form class="form">
//           <input type="text" class="form__field" placeholder="Type in item to add" />
//           <button type="button" class="btn btn--primary btn--inside uppercase">Add</button>
//         </form>
//       </div>
//     </div>
