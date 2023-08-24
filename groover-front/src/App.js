import './styles/App.css';
import './styles/Logo.css';
import './styles/Menu.css';
import './styles/Player.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Menu/>
      </div>
      <div className="Main">
        <Logo/>
      </div>
      <Player/>
    </div>
  );
}

export default App;
