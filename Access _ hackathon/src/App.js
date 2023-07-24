import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import FourOFour from "./Pages/FourOFour";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Feedback from "./Pages/Feedback";
import AboutUs from "./Pages/AboutUs";
import Header from "./Pages/Header";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Resources from "./Pages/Resources";
import PetitionStatistics from "./components/PetitionStatistics";
import PopularPetitions from "./components/PopularPetition";
import FileaPetition from "./components/FileaPetition";
import CityCouncil from "./components/CityCouncil";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petition" element={<FileaPetition />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/council" element={<CityCouncil />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
