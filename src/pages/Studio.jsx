import gsap from "gsap/all";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Studio = () => {
  const containerRef = useRef();
  const videoRef = useRef();
  const playHeadingRef = useRef();
  const reelHeadingRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      videoRef.current,
      {
        width: "100%",
        height: "100%",
        ease: "power4.inOut",
      },
      "a"
    );

    tl.to(
      playHeadingRef.current,
      {
        x: "-210%",
        ease: "power4.inOut",
        scale: 2,
      },
      "a"
    );

    tl.to(
      reelHeadingRef.current,
      {
        x: "210%",
        ease: "power4.inOut",
        scale: 2,
      },
      "a"
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden relative  bg-black "
    >
      <div
        ref={videoRef}
        className="w-40 h-40 sm:w-[140rem] sm:h-[20rem] overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full scale-[1.2]"
          src="https://cdn.dribbble.com/userupload/11487206/file/original-ad078b91ade3733dc66e4ba14ee9577d.mp4"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full text-white  flex flex-col justify-between py-18 ">
        <div className="w-full flex items-center justify-center gap-3">
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
          <h3 className="text-xl capitalize">Work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center gap-32 sm:gap-96 items-center">
          <div
            ref={playHeadingRef}
            className="text-4xl sm:text-7xl tracking-wide"
          >
            Play
          </div>
          <div
            ref={reelHeadingRef}
            className="text-4xl sm:text-7xl tracking-wide"
          >
            Reel
          </div>
        </h1>

        <p className="text-center px-10 text-lg opacity-35">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
      </div>
    </div>
  );
};

export default Studio;
