// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Fleet from "./pages/Fleet";
import Policy from "./pages/Policy";
import Contract from "./pages/Contract";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contract" element={<Contract />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
