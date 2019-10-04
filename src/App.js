import React, { Component } from 'react'
import {connect}            from 'react-redux'
import Home                 from './components/Home/Home'
import './App.css'
class App extends Component {
  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      const script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-134422298-1'
      script.async = true
      const script2 = document.createElement('script')
      const windowStr = `
        //Global site tag (gtag.js) - Google Analytics
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date())
        gtag('config', 'UA-134422298-1')
      `
      script2.append(windowStr)
      document.body.appendChild(script)
      document.body.appendChild(script2)
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='heading'>bia<span className='version'> v1.0</span></h1>
        <Home />
      </div>
    )
  }
}
export default connect(null, null)(App)
