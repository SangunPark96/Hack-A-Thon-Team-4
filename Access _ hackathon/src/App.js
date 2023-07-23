import logo from "./Assets/EcoLogo.ico"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import FourOFour from "./Pages/FourOFour";
// import Pharma from "./Components/Pharma";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <Router>
          <NavBar/>
            <Routes>
              {/* <Route path="/pharma" element={ <Pharma/>}/> */}
              <Route path="*" element={<FourOFour/>} />
            </Routes>
          <Footer/>
        </Router>
      </header>
    </div>
  );
}

export default App;
