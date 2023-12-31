import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <div className="w-full sm:w-[85%] md:w-[95%] rounded-[20px] bg-bg2 mx-auto bg-cover  border-2 border-color shadow-xl">
      <div className="w-full h-full bg-color bg-opacity-15 rounded-[20px] px-4 sm:px-8 lg:px-28 py-5 lg:flex justify-between">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold lg:text-xl text-base italic inline">
            <span className="bg-color text-white px-2 not-italic rounded-xl">
              Hello!
            </span>
            I am
          </h2>
          <h1 className="font-bold lg:text-5xl text-2xl sm:text-3xl md:text-4xl">
            <span className="text-color"> M</span>ursaleen
            <span className="text-color"> A</span>nsari
          </h1>
          <h1 className="font-semibold lg:text-2xl sm:text-xl text-lg">
            Front-End Developer
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center ">
              <FaLocationDot className="lg:text-lg text-sm sm:text-base text-color" />
              <p className="lg:text-lg text-sm sm:text-base font-semibold">
                Orangi Town, Karachi, Pakistan
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <IoCall className="lg:text-lg text-sm sm:text-base text-color" />
              <Link href={"tel:+92 3147064365"}>
                <p className="lg:text-lg text-sm sm:text-base font-semibold">
                  +92 3147064365
                </p>
              </Link>
            </div>
            <div className="flex gap-2 items-center ">
              <IoMail className="lg:text-lg text-sm sm:text-base text-color" />
              <Link href={"mailto:m.mursaleen3456@gmail.com"}>
                <p className="lg:text-lg text-sm sm:text-base font-semibold">
                  m.mursaleen3456@gmail.com
                </p>
              </Link>
            </div>
            <div className="flex gap-2 items-center ">
              <RiWhatsappFill className="lg:text-lg text-sm sm:text-base text-color" />
              <p className="lg:text-lg text-sm sm:text-base font-semibold">
                <Link href={"https://wa.link/etnyy6"} target="_blank">
                  +92 3147064365
                </Link>
                /
                <Link href={"https://wa.link/hqwoyz"} target="_blank">
                  +92 3360200164
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center lg:text-4xl text-xl sm:text-2xl rounded-lg py-2 text-color flex gap-x-10 justify-center sm:justify-start">
            <Link
              href={
                "https://www.facebook.com/mursaleen.ansari.75457?mibextid=eHce3h"
              }
              target="_blank"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={
                "https://www.instagram.com/mursaleen_ansari00?igsh=enUzZG1qMmV3Yjhy"
              }
              target="_blank"
            >
              <RiInstagramFill />
            </Link>
            <FaLinkedin />
          </div>
        </div>

        <div className="lg:w-[41%] lg:h-[304px] lg:max-w-[400px]">
          <Image
            alt="Coding"
            src={"/image/Coding.svg"}
            className="w-full h-full"
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
