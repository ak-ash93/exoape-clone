import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Spread = () => {
  const parent = useRef();
  const headingFirst = useRef();
  const headingSecond = useRef();
  const headingThird = useRef();
  const paraRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    gsap.registerPlugin("ScrollTrigger");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top bottom", // Start when the top of the parent hits the bottom of the viewport
        end: "bottom top", // End when the bottom of the parent hits the top of the viewport
        scrub: 1, // Smooth scrubbing
      },
    });

    // Animation for each element coming from below
    tl.to(headingFirst.current, {
      y: -100, // Move the first heading from below
      opacity: 1, // Fade in the element
      duration: 1,
      ease: "power4.out",
    })
      .to(
        headingSecond.current,
        {
          y: -100, // Move the second heading from below
          opacity: 1, // Fade in the element
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8"
      ) // Slightly overlap the second heading with the first
      .to(
        headingThird.current,
        {
          y: -100, // Move the third heading from below
          opacity: 1, // Fade in the element
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8"
      ) // Slightly overlap the third heading with the second
      .to(
        paraRef.current,
        {
          y: -100, // Move the paragraph from below
          opacity: 1, // Fade in the paragraph
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      ) // Slightly overlap with the heading animations
      .to(
        linkRef.current,
        {
          y: -100, // Move the link from below
          opacity: 1, // Fade in the link
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      ); // Slightly overlap with the paragraph animation
  });

  return (
    <div ref={parent} className="w-full h-[50vh]  bg-white py-15  ">
      <div className="max-w-screen-2xl h-50 mx-auto px-5 sm:px-10">
        <div
          ref={headingFirst}
          className="flex items-center justify-center gap-2"
        >
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="capitalize">In the media</h2>
        </div>

        <div className="heading text-center mt-5">
          <h3
            ref={headingSecond}
            className="capitalize text-6xl sm:text-8xl sm:font-light "
          >
            Spread{" "}
          </h3>
          <h3
            ref={headingThird}
            className="capitalize text-6xl sm:text-8xl sm:font-light "
          >
            the news
          </h3>
          <p
            ref={paraRef}
            className="text-sm sm:text-2xl tracking-tighter mx-auto w-2/3 mt-5 sm:mt-10 opacity-50 leading-5"
          >
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            ref={linkRef}
            className="border-b-[1px] border-b-zinc-500 text-sm sm:text-lg sm:mt-10 font-light mt-3 inline-block"
            href="#"
          >
            Browse all news
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
