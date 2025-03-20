import React from "react";

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

  return (
    <div className="w-full text-zinc-800 text-center py-20 px-6 md:px-12 mt-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Work Section Title */}
        <h2 className="text-5xl md:text-[10rem] tracking-wider font-light mb-10 text-center">
          Work
        </h2>

        {/* Featured Projects Section */}
        <div className="featured flex flex-col items-center gap-3 mb-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
          {elem.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group ${
                index % 3 === 0 ? "col-span-2 row-span-2" : ""
              } ${index === 0 ? "col-span-3 h-[100vh]" : ""} ${
                index === elem.length - 1 ? "col-span-4 h-[30vh]" : ""
              }`}
            >
              {/* Video on Hover */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={item.videoUrl}
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Static Image */}
              <img
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
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
