import React, { Component } from 'react'
import album from '../images/And_Justice_for_All.jpg'

export default class Music extends Component {
  render() {
    return (
      <div className='Music-item'>
        <div className='Music-number'>
          <p>{this.props.index}</p>
        </div>

        <div className='Music-image'>
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

        <div className='Music-album'>
          <p>{this.props.album}</p>
        </div>

        <div className='Music-duration'>
          <p>{this.props.duration}</p>
        </div>
      </div>
    )
  }
}
/*
        <div className='Playlist-item'>
            <div className='Playlist-image'>
                <img src={album} alt=''></img>
            </div>
            <div className='Playlist-infos'>
                <div className='Playlist-title'>
                    <p>{this.props.title}</p>
                </div>
                <div className='Playlist-type'>
                    <p>{this.props.type} . {this.props.author}</p>
                </div>
            </div>
        </div>
*/
