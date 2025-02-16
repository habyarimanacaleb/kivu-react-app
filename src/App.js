import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ExploreRwanda from "./pages/ExploreRwanda";
import { Navbar } from "./components/Navbar";
import { Join } from "./components/Join";
import Contacts from "./pages/Contacts";
import { Footer } from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import { SignIn } from "./components/SignIn";
import { UserProvider } from "./context/UserContext";
import ConfirmEmail from "./server/VerifyEmail";
function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="/explore-more-to-Rwanda" element={<ExploreRwanda />} />
          <Route path="/parks" element={<h1>National Parks....</h1>} />
          <Route path="/culture" element={<h1>Culture & Heritage...</h1>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/api/confirm-email" element={<ConfirmEmail />} />
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
    </UserProvider>
  );
}

export default App;
