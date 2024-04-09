import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Homepage from "./components/MainTest";
import LoginPage from "./components/LoginPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SomethingElse from "./components/SomethingElse";
import Technology1 from "./components/Technology";
import SoftwareTechnology from "./components/SoftwareTechnology";
import HardwareTechnology from "./components/HardwareTechnology";
import BusinessEntrepreneurship from "./components/BusinessEntrepreneurship";
import Art from "./components/Art";
import Science from "./components/Science";
import Sport from "./components/Sport";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/somethingelse" element={<SomethingElse />} />
        <Route path="/technology" element={<Technology1 />} />
        <Route path="/software" element={<SoftwareTechnology />} />
        <Route path="/hardware" element={<HardwareTechnology />} />
        <Route path="/business" element={<BusinessEntrepreneurship />} />
        <Route path="/art" element={<Art />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
    </Router>
  );
}

export default App;
