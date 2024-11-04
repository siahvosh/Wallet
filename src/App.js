import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Routers} from './Routers/Routers'
import Axios from "axios"



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
