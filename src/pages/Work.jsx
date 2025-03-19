import React from "react";

const Work = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10">
        <div className="featured flex gap-3">
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
          <h3 className="capitalize text-lg">Featured projects</h3>
        </div>
        <h2 className="text-6xl my-5">Work</h2>
        <p className="leading-6 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-10">
          <div className="video w-full h-[104vw] relative">
            <img
              className="object-cover w-full h-full hidden sm:block"
              src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
              alt=""
            />
            <video
              className="block sm:hidden w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]"
              src="https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1742380150~exp=1742394550~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=a615ac42e9b46d253464082b1fbc3d2ecf84be02e029c04fccb422dce65fc97a&r=dXMtd2VzdDE%3D"
              autoPlay
              muted
              loop
              type="video/mp4"
            ></video>
          </div>
          <div className="mt-5">
            <h3 className="font-regular tracking-wider">Ottografie</h3>
            <h4 className="text-zinc-600 tracking-wider opacity-40">
              Seamless Photographic Journey
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
