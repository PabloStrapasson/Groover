import './styles/App.css';
import './styles/Logo.css';
import './styles/Menu.css';
import './styles/Player.css';
import './styles/Playlist.css';
import './styles/Music.css';
import lib from './images/lib.png';
import Menu from './components/Menu';
import Player from './components/Player';
import Playlist from './components/Playlist';
import { useState, useEffect } from 'react';
import PlaylistDetails from './components/PlaylistDetails';
import Search from './components/Search'

var cont = 0
const music_list = await loadJSON('musics')
const playlist_list = await loadJSON('playlists')
const ex_playlist = await loadJSON('playlist6')
var main_content = null

async function loadJSON(file){
  const res = await fetch(`./${file}.json`);
  const json = await res.json();
  return json;
}

function App() {

  const [play, setPlay] = useState(false)
  const [mute, setMute] = useState(false)
  const [selected_playlist, setSelectedPlaylist] = useState(null)
  const [is_open_search, setOpenSearch] = useState(false)
  const [is_open_playlist, setOpenPlaylist] = useState(true)

  useEffect(()=> {
    console.log("atualizei")
  })

  if(is_open_playlist === true && is_open_search === false){
    if(selected_playlist === null){
      main_content = <PlaylistDetails playlist_title={ex_playlist.title} musics={ex_playlist.musics}/>
    } else {
      main_content = <PlaylistDetails playlist_title={selected_playlist.title} musics={selected_playlist.musics}/>
    }
  } else if(is_open_playlist === false && is_open_search === true) {
    main_content = <Search/>
  }

  return (
    <div className="App">
      <div className="Menu">
        <Menu setOpenSearch = {()=> {
                                setOpenPlaylist(false)
                                setOpenSearch(true)
                              }}
              clickInicial = {()=> {
                                setOpenSearch(false)
                                setOpenPlaylist(true)
                              }}/>
        <div id='Library'>
          <div id='Library-title'>
            <img src={lib} alt=''></img>
            <p>Sua Biblioteca</p>
          </div>
          <div id='Library-playlist'>
            {playlist_list.map((playlist) => {
                cont++
                console.log(cont)
                return <Playlist title={playlist.name} 
                                 type={playlist.type} 
                                 author={playlist.autor}
                                 playlist_id={'playlist' + cont}
                                 onClick={async (event)=>{
                                    let playlist_id = event.target.id
                                    console.log(playlist_id)
                                    try{
                                      let playlist = await loadJSON(playlist_id)
                                      setSelectedPlaylist(playlist)
                                    } catch{
                                      console.log("erro")
                                    }
                                 }} 
                                 />
            })}
          </div>
        </div>
      </div>
      <div className="Main">
        {/* {
          selected_playlist === null
            ?<PlaylistDetails is_open={is_open_playlist} playlist_title={ex_playlist.title} musics={ex_playlist.musics}/>
            :<PlaylistDetails is_open={is_open_playlist} playlist_title={selected_playlist.title} musics={selected_playlist.musics}/>
        }
        <Search is_open={is_open_search}/> */}
        {main_content}
      </div>
      <Player name={music_list[2].name} 
              artist={music_list[2].artist} 
              album={music_list[2].album} 
              duration={music_list[2].duration} 
              play={play} clickPlay={()=> setPlay(!play)}
              mute={mute} clickMute={()=> setMute(!mute)}
              />
    </div>
  );
}

export default App;
