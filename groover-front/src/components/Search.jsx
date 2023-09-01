import React from 'react'
import search from '../images/search_white.png';

export default function Search() {
    
        return (
        <>
            <div className='Search-bar'>
                <input type='text' id='search_song' placeholder=' Pesquisar'></input>
            </div>
            <div className='Playlist-musics'></div>
        </>
        )
    
}
