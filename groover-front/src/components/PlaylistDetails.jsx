import React, { Component } from 'react'
import Music from './Music';

export default class PlaylistDetails extends Component {
  render() {
    return (
      <>
        <div id='Playlist_Name' className='Playlist-name'>
            <h1>{this.props.playlist_title}</h1>
        </div>
        <div id='Playlist_Music_List' className='Playlist-musics'>
          {this.props.musics.map((music) => {
              return <Music name={music.name} artist={music.artist} album={music.album} duration={music.duration}/>
          })}
        </div>
      </>
    )
  }
}
