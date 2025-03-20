import React from "react";

const News = () => {
  return (
    <div className="w-full h-[70vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] h-1/2 relative">
        <div className="absolute w-20 h-[7rem] bg-red-400 -right-1/3 top-6">
          <img
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute w-[10rem] aspect-video bg-red-400 -left-[80%] top-1/3">
          <video
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div className="absolute w-[9rem] aspect-video -left-[70%] -bottom-9">
          <img
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute w-[12rem] aspect-[1.2/1] -right-[80%] -bottom-[45%]">
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
