import React, { Component } from 'react'

export default class Playlist extends Component {
  render() {
    return (
        <div id='Music-item'>
            <div className='Music-image'>
                <img src='' alt='image'></img>
            </div>
            <div className='Music-infos'>
                <div>
                    titulo
                </div>
                <div>
                    <div>tipo</div>
                    <div>autor</div>
                </div>
            </div>
        </div>
    )
  }
}
