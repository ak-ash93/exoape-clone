import React, { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const NavBar = () => {
  const navlinks = ["Home", "Work", "Studio", "News", "Contact"];

  useEffect(() => {
    // Create a GSAP timeline for the animations
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power4.out" } });

    // Animate the logo to move from the top to its position
    tl.from(".logo", { y: -100, opacity: 0 });

    // Animate the links to move from the top to their position after the logo
    tl.from(".links", { y: -100, opacity: 0 }, "-=1.5"); // Start 1.5 seconds after logo

    // Animate the menu icon to move from the top after the links
    tl.from(".menu-icon", { y: -100, opacity: 0 }, "-=1"); // Start 1 second after links animation
  }, []);

  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-6 sm:py-10 flex items-center justify-between text-white ">
        {/* Logo */}
        <div className="logo">
          <svg
            viewBox="0 0 95 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="wordmark-icon w-25"
          >
            <path
              d="M7.70542 17.0085C10.8808 17.2469 13.8123 15.2096 14.8524 12.0415H11.0216C10.4531 13.3929 9.1325 14.2151 7.73401 14.0885C5.56111 14.1223 3.7654 12.3119 3.7031 10.0246H15.1383V9.42253C15.1383 4.45554 12.9656 0.391646 7.64824 0.391646C5.56968 0.342653 3.56563 1.20734 2.11735 2.77806C0.66907 4.34878 -0.0925972 6.48364 0.0152567 8.66995C-0.119195 10.8796 0.639738 13.0461 2.10466 14.6345C3.56958 16.223 5.60394 17.0852 7.70542 17.0085ZM11.4473 7.22456H3.69995V7.16435C3.85008 4.98837 5.57318 3.30544 7.64509 3.31117C8.64896 3.27405 9.62348 3.67141 10.3418 4.41075C11.0601 5.15009 11.4596 6.16692 11.4473 7.22456Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.3124 16.5562L19.8584 8.45855L14.7412 0.932817H18.9436L21.8024 5.56867L24.6612 0.932817H28.8065L23.6892 8.45855L29.3496 16.5562H25.0615L21.7738 11.3183L18.6006 16.5562H14.3124Z"
              fill="currentColor"
            ></path>
            <path
              d="M30.5951 14.603C32.0722 16.1756 34.1067 17.0258 36.206 16.9477C38.3052 17.0258 40.3397 16.1756 41.8169 14.603C43.294 13.0304 44.0791 10.8789 43.9819 8.66942C44.0791 6.45993 43.294 4.30839 41.8169 2.73582C40.3397 1.16325 38.3052 0.313055 36.206 0.391113C34.1067 0.313055 32.0722 1.16325 30.5951 2.73582C29.118 4.30839 28.3329 6.45993 28.4301 8.66942C28.3329 10.8789 29.118 13.0304 30.5951 14.603ZM40.4945 8.66941C40.4945 11.2282 39.208 13.9374 36.2063 13.9374C33.2045 13.9374 31.9181 11.2282 31.9181 8.66941C31.9181 6.11066 33.1474 3.4014 36.2063 3.4014C39.2652 3.4014 40.4945 6.11066 40.4945 8.66941Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* Menu Icon */}
        <span className="menu-icon md:hidden">
          <IoMenu className="text-xl" />
        </span>

        {/* Links */}
        <div className="links hidden md:flex space-x-6 ">
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase()}`}
              className="text-xl font-light"
            >
              {link}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
