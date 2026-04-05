import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="bg-cyber-navy-2 min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App