import './styles/App.css';
import './styles/Logo.css';
import './styles/Menu.css';
import './styles/Player.css';
import './styles/Playlist.css';
import lib from './images/lib.png';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Player from './components/Player';
import Playlist from './components/Playlist';

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
            <img src={lib}></img>
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
        <Logo/>
      </div>
      <Player/>
    </div>
  );
}

export default App;
