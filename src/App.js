import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ExploreRwanda from "./pages/ExploreRwanda";
import { Navbar } from "./components/Navbar";
import Contacts from "./pages/Contacts";
import MTBAdventure from "./pages/MTBAdventure";
import { Footer } from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore-more-to-Rwanda" element={<ExploreRwanda />} />
        <Route path="/parks" element={<h1>National Parks....</h1>} />
        <Route path="/culture" element={<h1>Culture & Heritage...</h1>} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/mtb-adventures" element={<MTBAdventure />} />
        <Route
          path="*"
          element={
            <div>
              <p className="p-12 text-3xl-bold">
                Page you Tried to Search With NOT FOUND!!
              </p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
