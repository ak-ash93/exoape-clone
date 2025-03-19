import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh]">
      <div className="picture w-full h-full object-cover">
        <img
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0 ">
        <div className="max-w-screen-2xl h-full mx-auto px-15 sm:px-10 text-white">
          <div className="para  mt-70 sm:mt-[30rem]">
            <p className="text-sm leading-6 sm:text-3xl sm:leading-10 sm:tracking-wider ">
              {" "}
              Global digital design studio partnering
            </p>
            <p className="text-sm leading-6 sm:text-3xl sm:leading-10 sm:tracking-wider ">
              {" "}
              with brands and businesses that create
            </p>
            <p className="text-sm leading-6 sm:text-3xl sm:leading-10 sm:tracking-wider ">
              {" "}
              exceptional experiences where people
            </p>
            <p className="text-sm leading-6 sm:text-2xl sm:leading-10 sm:tracking-wider ">
              {" "}
              live,work and unwind.
            </p>
          </div>
          <div className="headings mt-5 sm:mt-10">
            <h1 className="text-7xl tracking-tighter leading-none capitalize sm:text-[12rem] font-light sm:tracking-wide ">
              {" "}
              digital
            </h1>
            <h1 className="text-7xl tracking-tighter leading-none capitalize sm:text-[12rem] font-light sm:tracking-wide ">
              design
            </h1>
            <h1 className="text-7xl tracking-tighter leading-none capitalize sm:text-[12rem] font-light sm:tracking-wide ">
              experience
            </h1>
          </div>
          <div className="para2 mt-5 sm:w-1/3 sm:mt-10">
            <p className="text-sm  sm:text-3xl sm:leading-10 sm:tracking-wider ">
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
