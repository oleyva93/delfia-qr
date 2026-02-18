import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import QRGenerator from "./pages/QRGenerator";
import QRBamaGenerator from "./pages/QRBamaGenerator";
import QRAnyGenerator from "./pages/QRAnyGenerator";

import LinkTree from "./pages/LinkTree";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qr-delfia-generator" element={<QRGenerator />} />
            <Route path="/qr-bama-generator" element={<QRBamaGenerator />} />
            <Route path="/qr-any-generator" element={<QRAnyGenerator />} />
            <Route path="/link" element={<LinkTree />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
