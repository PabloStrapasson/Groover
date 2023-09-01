import React, { Component } from 'react'
import Playlist from './Playlist'
import lib from '../images/lib.png'

export default class Library extends Component {
  render() {
    return (
      <div id='Library'>
        <div id='Library-title'>
            <img src={lib}></img>
            <p>Sua Biblioteca</p>
        </div>
        <Playlist/>
      </div>
    )
  }
}
