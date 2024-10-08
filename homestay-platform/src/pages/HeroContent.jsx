import React from "react";

function HeroContent() {
  return (
    <div className="flex relative flex-col px-16 pt-24 pb-14 max-w-full bg-zinc-300 rounded-[50px] w-[504px] max-md:px-5">
      <h1 className="text-5xl leading-[60px] max-md:mr-1.5 max-md:text-4xl max-md:leading-[59px]">
        Unveil the world's wonders
      </h1>
      <p className="mt-14 text-4xl max-md:mt-10 max-md:ml-0.5">
        Welcome to Discoveria, where every adventure begins with curiosity!
      </p>
      <button className="self-center px-11 py-6 mt-20 max-w-full text-4xl leading-loose text-white bg-stone-700 rounded-[50px] w-[252px] max-md:px-5 max-md:mt-10">
        start now
      </button>
    </div>
  );
}

export default HeroContent;