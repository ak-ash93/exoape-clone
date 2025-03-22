import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const elem = [
    {
      heading: "Ottografie",
      subHeading: "Seamless Photographic Journey",
      videoUrl:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1742441404~exp=1742455804...",
      imageUrl:
        "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Amaterasu",
      subHeading: "Frontier Health Innovation",
      videoUrl:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/be1179ab-5aaa-4f63-a9a7-f40c70ae895e/96953878?__token__=st=1742441482~exp=1742455882...",
      imageUrl:
        "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
    },
    {
      heading: "Columbia Pictures",
      subHeading: "Celebrating a Century of Cinema",
      videoUrl:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1742439750~exp=1742454150...",
      imageUrl:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Cambium",
      subHeading: "Pioneering Sustainable Solutions",
      videoUrl:
        "https://download-video-ak.vimeocdn.com/v3-1/playback/c8169bff-def9-46a0-ab51-a3079dd79927/babd849a?__token__=st=1742439855~exp=1742454255...",
      imageUrl:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
    },
  ];
  const containerRef = useRef();
  const headingRef = useRef();
  const introRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: -100, opacity: 0 }, // Start from below, rotated, and hidden
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current, // Trigger on heading itself
            start: "top 80%", // Animation starts when the heading reaches the bottom of the viewport
            end: "bottom top", // Ends when the heading reaches the top of the viewport
            scrub: true,
            once: true, // Ensure the animation happens only once when the heading is first in view
          },
        }
      );
      gsap.fromTo(
        introRef.current,
        { y: -100, opacity: 0 }, // Start from below, rotated, and hidden
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current, // Trigger on heading itself
            start: "top 50%", // Animation starts when the heading reaches the bottom of the viewport
            end: "bottom top", // Ends when the heading reaches the top of the viewport
            scrub: true,
            once: true, // Ensure the animation happens only once when the heading is first in view
          },
        }
      );

      gsap.fromTo(
        ".card:not(:first-child)",
        { y: 1000, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center", // Animation starts when the top of the section reaches the center of the viewport
            end: "bottom top", // Ends when the bottom of the section reaches the top of the viewport
            scrub: true, // Smooth scroll effect
            pin: true, // Pins the section during scroll
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="work-section w-full text-zinc-800 text-center  pb-50 px-6 md:px-12 mt-40 ">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        {/* Work Section Title */}
        <h2
          ref={headingRef}
          className="text-5xl md:text-[10rem] tracking-wider font-light mb-10 text-center"
        >
          Work
        </h2>

        {/* Featured Projects Section */}
        <div
          ref={introRef}
          className="featured flex flex-col items-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 text-yellow-400"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            <h3 className="capitalize text-2xl font-semibold">
              Featured projects
            </h3>
          </div>
          <p className="leading-6 text-xl mt-5 text-black opacity-45">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={containerRef}
          className=" relative w-full h-[700px] flex text-white"
        >
          {elem.map((item, index) => (
            <div
              key={index}
              className=" card absolute top-0 left-1/2 -translate-x-1/2 h-full w-[80rem] group rounded-2xl"
            >
              {/* Video on Hover */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={item.videoUrl}
                muted
                playsInline
                loop
                ref={(el) => {
                  if (el) {
                    el.onmouseenter = () => el.play();
                    el.onmouseleave = () => el.pause();
                  }
                }}
              />

              {/* Static Image */}
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 transform group-hover:scale-105 rounded-2xl"
                src={item.imageUrl}
                alt={item.heading}
              />

              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <p className="text-gray-300 text-sm">{item.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
