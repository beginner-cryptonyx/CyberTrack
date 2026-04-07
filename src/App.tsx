import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Nav from "./components/Nav";
import ReachUs from "./pages/ReachUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="bg-cyber-navy-2 min-h-screen text-white">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/reach-us" element={<ReachUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App