import React, { Component } from 'react'
import album from '../images/Dark_Side_of_the_Moon.png'

export default class Playlist extends Component {
  render() {
    return (
        <div className='Playlist-item'>
            <div className='Playlist-image'>
                <img src={album}></img>
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
    )
  }
}
