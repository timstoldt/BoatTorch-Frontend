// App.js

import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Contract from "./pages/Contract";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contract" element={<Contract />} />
          {/* Old addresses keep working. */}
          <Route path="fleet" element={<Navigate to="/#fleet" replace />} />
          <Route path="policy" element={<Navigate to="/faq" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
