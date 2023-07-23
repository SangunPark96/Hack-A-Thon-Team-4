import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import FourOFour from "./Pages/FourOFour";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

// import Pharma from "./Components/Pharma";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <Router>
          <SignIn />
          <SignUp />
          <NavBar />
          <Routes>
            {/* <Route path="/pharma" element={ <Pharma/>}/> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
