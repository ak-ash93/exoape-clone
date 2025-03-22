import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Studio from "./pages/Studio";
import News from "./pages/News";
import Spread from "./pages/Spread";
import Contact from "./pages/Contact";

// Import Locomotive Scroll CSS
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  // Create a reference for the scroll container
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-scrolling", // Add a custom class when scrolling
    });

    // Cleanup the scroll instance when the component unmounts
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full h-screen bg-zinc-900"
    >
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
