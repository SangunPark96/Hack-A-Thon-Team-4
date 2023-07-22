import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <Router>
          <NavBar/>
          <Routes>
            
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
