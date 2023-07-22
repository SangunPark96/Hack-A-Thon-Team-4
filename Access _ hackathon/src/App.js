import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes></Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
