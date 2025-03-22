import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const sentence = [
    " Global digital design studio partnering",
    "with brands and businesses that create",
    " exceptional experiences where people",
    " live, work and unwind. ",
  ];

  const headings = ["Digital", "Design", "Experience"];

  // Create refs for each animated span
  const sentenceRefs = useRef([]);
  const headingsRefs = useRef([]);
  const paraRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // GSAP animation for each sentence
    sentenceRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        {
          y: 50, // Initial position: 50px below the final position
          opacity: 0, // Initial state: hidden
        },
        {
          y: 0, // Final position: move to the original position
          opacity: 1, // Fully visible
          duration: 0.4, // Animation duration
          delay: index * 0.05, // Delay between each sentence (staggered)
          ease: "cubic-bezier(0.22, 1, 0.36, 1)", // Easing for smooth animation
        }
      );
    });

    // After the sentence animations, animate the headings
    tl.to({}, { duration: 1 }) // Delay to ensure the sentence animations finish first
      .fromTo(
        headingsRefs.current,
        {
          rotate: 30,
          y: 50, // Initial position: 50px below the final position
          opacity: 0, // Initially hidden
        },
        {
          rotate: 0,
          y: 0, // Final position: move to the original position
          opacity: 1, // Fully visible
          duration: 0.4,
          stagger: 0.2, // Stagger delay between headings
          ease: "cubic-bezier(.22,1,.36,1)", // Easing for smooth animation
        }
      );

    tl.fromTo(
      paraRef.current,
      {
        y: 50, // Initial position: 50px below the final position
        opacity: 0, // Initial state: hidden
      },
      {
        y: 0, // Final position: move to the original position
        opacity: 1, // Fully visible
        duration: 0.4, // Animation duration
        delay: 0.1, // Delay between each sentence (staggered)
        ease: "cubic-bezier(0.22, 1, 0.36, 1)", // Easing for smooth animation
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="w-full h-[100vh] sm:h-[250vh] border-[2px] border-zinc-100">
      <div className="picture w-full h-full object-cover overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="max-w-screen-2xl h-full mx-auto px-15 sm:px-30 text-white">
          <div className="para  mt-70 sm:mt-[25rem] sm:opacity-80">
            {sentence.map((item, index) => (
              <p
                className="text-sm leading-6 sm:text-xl sm:leading-8  sm:tracking-wider"
                key={index}
                ref={(el) => (sentenceRefs.current[index] = el)} // Assigning refs to each sentence
              >
                {item}
              </p>
            ))}
          </div>

          <div className="headings mt-5 sm:mt-10">
            {headings.map((item, index) => {
              return (
                <h1
                  className="text-7xl tracking-tighter leading-none capitalize sm:text-[10rem] sm:font-light sm:tracking-wide"
                  key={index}
                  ref={(el) => (headingsRefs.current[index] = el)} // Assigning refs to each heading
                >
                  {item}
                </h1>
              );
            })}
          </div>

          <div className="para2 mt-5 sm:w-1/3 sm:mt-10">
            <p
              ref={paraRef}
              className="text-sm sm:text-xl sm:leading-10 sm:opacity-80 sm:tracking-wider "
            >
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[1px] border-zinc-100 pb-2 mt-3 inline-block"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
