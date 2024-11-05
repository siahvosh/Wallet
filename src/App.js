import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routers} from './Routers/Routers'


function App() {
    return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routers/>
        </Router>
      </header>
    </div>
  );
}

export default App;
