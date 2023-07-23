import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import FourOFour from "./Pages/FourOFour";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Feedback from "./Pages/Feedback";

// import Pharma from "./Components/Pharma";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path="/pharma" element={ <Pharma/>}/> */}
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
