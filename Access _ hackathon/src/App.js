import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <NavBar />
          <Routes></Routes>
        </Router>
      </header>
      <Footer />
    </div>
  );
}

export default App;
