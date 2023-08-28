import React, { Component } from 'react'
import PlayerBar from './PlayerBar'
import PlayerVolume from './PlayerVolume'
import album from '../images/By_the_Way.jpg'

export default class Player extends Component {
  render() {
    return (
      <div id='Player'>
        <div id='Player-music'>
          <div className='Player-music-image'>
            <img src={album} alt=''></img>
          </div>

          <div className='Music-infos'>
            <div className='Music-name'>
              <spam>{this.props.name}</spam>
            </div>
            <div className='Music-artist'>
              <spam>{this.props.artist}</spam>
            </div>
          </div>
        </div>

        <PlayerBar/>
        
        <PlayerVolume/>
      </div>
    )
  }
}
