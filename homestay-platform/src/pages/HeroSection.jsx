import React from "react";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <section className="flex relative flex-col items-end px-20 pt-10 pb-20 w-full text-black min-h-[722px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6c91fd2b1e3627880113d163d83e229458e2eecc0f9c6a066f343871b1e3ef?placeholderIfAbsent=true&apiKey=071437e89f684ce89111d5fb1c92ec34" alt="" className="object-cover absolute inset-0 size-full" />
      <HeroContent />
    </section>
  );
}

export default HeroSection;