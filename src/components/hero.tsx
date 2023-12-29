import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
function Hero() {
  return (
    <div className="w-full sm:w-[85%] md:w-[95%] rounded-[20px] bg-bg2 mx-auto bg-cover  border-2 border-color shadow-xl">
      <div className="w-full h-full bg-color bg-opacity-15 rounded-[20px] px-4 sm:px-8 lg:px-28 py-5 lg:flex justify-between">
       
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-xl italic inline">
            <span className="bg-color text-white px-2 not-italic rounded-xl">
              Hello!
            </span>{" "}
            I am
          </h2>
          <h1 className="font-bold text-5xl">
            <span className="text-color"> M</span>ursaleen{" "}
            <span className="text-color"> A</span>nsari
          </h1>
          <h1 className="font-semibold text-2xl">Front-End Developer</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center ">
              <FaLocationDot className="text-lg text-color" />
              <p className="text-lg font-semibold">
                Orangi Town, Karachi, Pakistan
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <IoCall className="text-lg text-color" />
              <p className="text-lg font-semibold">+92 3147064365</p>
            </div>
            <div className="flex gap-2 items-center ">
              <IoMail className="text-lg text-color" />
              <p className="text-lg font-semibold">m.mursaleen3456@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center ">
              <RiWhatsappFill className="text-lg text-color" />
              <p className="text-lg font-semibold">
                +92 3147064365 / +92 3360200164
              </p>
            </div>
          </div>
          <div className="text-center  text-4xl rounded-lg py-2 text-color flex gap-x-10 justify-center sm:justify-start">
            <FaFacebookSquare />
            <RiInstagramFill />
            <FaLinkedin />
          </div>
        </div>

        <div className="lg:w-[41%] lg:h-[304px] lg:max-w-[400px]">
          <Image alt="Coding" src={"/image/Coding.png"} className="w-full h-full" width={320} height={320}/>
        </div>

      </div>
    </div>
  );
}

export default Hero;
