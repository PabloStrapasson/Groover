import React, { Component } from 'react'
import album from '../images/Dark_Side_of_the_Moon.png'

export default class Playlist extends Component {
  render() {
    return (
        <div className='Playlist-item'>
            <div className='Playlist-image'>
                <img src={album} alt=''></img>
            </div>
            <div className='Playlist-infos'>
                <div className='Playlist-title'>
                    <spam>{this.props.title}</spam>
                </div>
                <div className='Playlist-type'>
                    <spam>{this.props.type} . {this.props.author}</spam>
                </div>
            </div>
        </div>
    )
  }
}
