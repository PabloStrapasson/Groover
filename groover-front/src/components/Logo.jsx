import React, { Component } from 'react'
//import logo from '../images/logo.png'
import icon from '../images/cd_icon2.png'

export default class Logo extends Component {
  render() {
    return (
      <div id='logo'>
        <img src={icon} alt="Logo"/>
        <h1><strong>Groover</strong></h1>
      </div>
    )
  }
}
/*
      <div id='logo'>
        <img src={logo} alt="Logo"/>
      </div>
*/