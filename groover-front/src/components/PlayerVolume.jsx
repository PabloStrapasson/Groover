import React, { Component } from 'react'
import mute from '../images/mute.png'
import volume from '../images/volume2.png'

export default class PlayerVolume extends Component {
  render() {
    return (
      <div id='Player-volume'>
        <div>
            {this.props.isMute
                ?<img src={mute} alt='play' className='Volume-icon' onClick={this.props.clickMute}></img>
                :<img src={volume} alt='play' className='Volume-icon' onClick={this.props.clickMute}></img>
            }
        </div>
        <div id='Volume-bar'>
            <input type='range' min='0' max='100' id='Slider' className='Volume-bar'></input>
        </div>
      </div>
    )
  }
}
