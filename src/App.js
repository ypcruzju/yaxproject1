import NavBar from './NavBar';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home/>
      </header>
    </div>
  );
}

export default App;
