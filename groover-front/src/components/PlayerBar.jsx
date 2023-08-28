import React, { Component } from 'react'
import play from '../images/play.png'
import pause from '../images/pause.png'
import next from '../images/next.png'
import previous from '../images/previous.png'

export default class PlayerBar extends Component {
  render() {
    return (
      <div id='Player-bar'>
        <div id='Control-Play-bar'>
            <img src={previous} alt='previous' className='Next-Previous-button'></img>
            {this.props.itsPlaying
                ?<img src={pause} alt='play' className='Play-Pause-button'></img>
                :<img src={play} alt='play' className='Play-Pause-button'></img>
            }
            <img src={next} alt='next' className='Next-Previous-button'></img>
        </div>
        <div id='Progress-bar'>
            <div className='Music-time'>0:00</div>
            <div id='Bar'></div>
            <div className='Music-time'>4:29</div>
        </div>
      </div>
    )
  }
}
