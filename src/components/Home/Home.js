import React, {Component} from 'react'
import InitialInput       from '../InitialInput/InitialInput'
import ItemList           from '../ItemList/ItemList'
import './Home.css'
class Home extends Component {
  state = {}
  render () {
    return (
      <div className='home'>
        <InitialInput />
        <ItemList />
      </div>
    )
  }
}
export default Home
