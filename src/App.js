import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home /> {/* Call use home page (Home.js) */}
      </header>
    </div>
  );
}

export default App;
