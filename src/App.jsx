import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import QRGenerator from "./pages/QRGenerator";
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
            <Route path="/qr-generator" element={<QRGenerator />} />
            <Route path="/link" element={<LinkTree />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
