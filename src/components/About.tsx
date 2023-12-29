import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="w-full items-center flex sm:w-[85%] md:w-[95%] rounded-[20px] mx-auto border-2 border-color shadow-xl">
      <div className="w-full h-full bg-color bg-opacity-15 items-center rounded-[20px] px-4 sm:px-8 lg:px-28 py-5 lg:flex justify-center gap-x-5">
        <div className="lg:w-[50%] lg:h-[404px] xl:h-[300px] lg:max-w-[600px]">
          <Image
            alt=""
            src={"/image/typing.svg"}
            className="w-full h-full"
            width={320}
            height={320}
          />
        </div>
        <div className="lg:w-[50%]">
          <div>
            <h1 className="font-extrabold  text-2xl text-center md:text-start py-2">
              About Me
            </h1>
            <p className="font-semibold text-lg">
              Hello there! as you know I am Mursaleen, a passionate web designer
              and front-end developer with a flair for creating captivating
              digital experiences.
            </p>
          </div>
          <div>
            <h1 className="font-extrabold  text-2xl text-center md:text-start py-2">
              Crafting Digital Magic
            </h1>
            <p className="font-semibold text-lg">
              With a creative spark and a love for elegant design, I delve into
              the world of web development to bring ideas to life. I thrive on
              the intersection of aesthetics and functionality, meticulously
              crafting user-friendly interfaces that not only look stunning but
              also perform seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
