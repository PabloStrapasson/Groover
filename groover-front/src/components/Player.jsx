import React, { Component } from 'react'
import PlayerBar from './PlayerBar'
import PlayerVolume from './PlayerVolume'
import PlayerMusic from './PlayerMusic'


export default class Player extends Component {
  
  render() {
    return (
      <div id='Player'>
        <div id='Player-music'>
          <PlayerMusic name={this.props.name} artist={this.props.artist}/>
        </div>

        <PlayerBar itsPlaying = {this.props.play} 
                   clickPlay={this.props.clickPlay}/>
        
        <PlayerVolume isMute = {this.props.mute}
                      clickMute = {this.props.clickMute}
        />
      </div>
    )
  }
}
