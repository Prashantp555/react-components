import logo from './logo.svg';
import './App.css';
import { Welcome } from './Components/Welcome';
import Refs from './Components/Refs';
import DiceGame from './Components/DiceGame1';
import Counter from './Components/Counter';
import CounterReducer from './Components/CounterReducer';
import Carausal from './Components/Carausal';
import Tag from './Components/Tag';
import GuessGame from './Components/GuessGame';
import RegistrationPage from './Components/RegistrationPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          
  {/* <Welcome name = 'Prashant' />
  <Refs /> */}
        {/* </a> */}
        {/* <DiceGame /> */}
        {/* <Counter /> */}
        {/* <Carausal />
        <Tag />
        <GuessGame /> */}
        <RegistrationPage />
      </header>
    </div>
  );
}

export default App;
