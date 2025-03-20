import React from "react";
import NavBar from "./layouts/NavBar";

// Import pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import Studio from "./pages/Studio";
import News from "./pages/News";

import Spread from "./pages/Spread";
import Contact from "./pages/Contact";
import WorkPage from "./pages/WorkPage";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <NavBar />
      <Home />

      <Work />
      <Studio />
      <News />
      <Spread />
      <Contact />
    </div>
  );
};

export default App;
