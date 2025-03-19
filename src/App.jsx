import React from "react";
import NavBar from "./layouts/NavBar";

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
      <Home />
      <Work />
      <Studio />
      <News />
      <Contact />
    </div>
  );
};

export default App;
