import React, { Component } from 'react'
import album from '../images/By_the_Way.jpg'

export default class PlayerMusic extends Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}
