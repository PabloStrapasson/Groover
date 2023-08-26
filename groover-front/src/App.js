import './styles/App.css';
import './styles/Logo.css';
import './styles/Menu.css';
import './styles/Player.css';
import './styles/Playlist.css';
import './styles/Music.css';
import lib from './images/lib.png';
//import Logo from './components/Logo';
import Menu from './components/Menu';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Music from './components/Music';

var cont = 1
const music_list = await loadJSON('musics.json')
const playlist_list = await loadJSON('playlists.json')
//console.log('music: '+ music_list)
//console.log('playlist: '+playlist_list[0].name)

async function loadJSON(file){
  const res = await fetch(`./${file}`);
  const json = await res.json();
  return json;
}

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Menu/>
        <div id='Library'>
          <div id='Library-title'>
            <img src={lib} alt=''></img>
            <p>Sua Biblioteca</p>
          </div>
          <div id='Library-playlist'>
            {playlist_list.map((playlist) => {
                return <Playlist title={playlist.name} type={playlist.type} author={playlist.autor}/>
            })}
          </div>
        </div>
      </div>
      <div className="Main">
        <div id='Main-header'>
            <h1>Músicas Curtidas</h1>
        </div>
        <div id='Music-list'>
          {music_list.map((musics) => {
              return <Music name={musics.name} artist={musics.artist} album={musics.album} duration={musics.duration}/>
          })}
        </div>
      </div>
      <Player name={music_list[2].name} artist={music_list[2].artist} album={music_list[2].album} duration={music_list[2].duration}/>
    </div>
  );
}

export default App;
