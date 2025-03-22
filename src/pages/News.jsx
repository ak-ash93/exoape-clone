import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { useRef } from "react";

const News = () => {
  const parent = useRef();
  const first = useRef();
  const second = useRef();
  const firstVideo = useRef();
  const secondVideo = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(first.current, {
      x: "100%",
      y: "-50%",
      ease: "power4.inOut",
      scale: 1.2,
    });
    tl.to(firstVideo.current, {
      x: "-80%",
      y: "-50%",
      ease: "power4.inOut",
      scale: 1.2,
    });
    tl.to(second.current, {
      x: "-100%",
      ease: "power4.inOut",
      scale: 1.8,
    });

    tl.to(secondVideo.current, {
      x: "80%",
      ease: "power4.inOut",
      scale: 1.2,
    });
  });

  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[100vh] my-20  bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[60%] h-1/2 relative">
        <div
          ref={first}
          className="absolute w-20 sm:w-50 sm:h-[15rem] h-[7rem] bg-red-400 -right-1/3 top-6"
        >
          <img
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={firstVideo}
          className="absolute w-[12rem] sm:w-[25rem]  aspect-video bg-red-400 -left-[80%] sm:-left-[60%] top-1/3"
        >
          <video
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={second}
          className="absolute w-[9rem] sm:w-70 sm:h-[15rem] aspect-video -left-[70%] sm:-left-[50%] sm:-bottom-60  -bottom-9"
        >
          <img
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={secondVideo}
          className="absolute w-[12rem] sm:w-[25rem] aspect-[1.2/1] -right-[80%] sm:-right-[60%] -bottom-[45%]"
        >
          <video
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt="awwards-img"
        />
      </div>
    </div>
  );
};

export default News;
