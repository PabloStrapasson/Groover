import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class Logo extends Component {
  render() {
    return (
      <div id='logo'>
        <img src={logo} alt="Logo"/>
      </div>
    )
  }
}
