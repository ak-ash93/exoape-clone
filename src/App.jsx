import React from "react";
import NavBar from "./layouts/NavBar";

import { Route, Routes } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Studio from "./pages/Studio";
import News from "./pages/News";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
