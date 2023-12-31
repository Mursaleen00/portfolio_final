import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-around border-t-2 rounded-t-3xl md:rounded-t-full border-color py-2 items-center bg-color bg-opacity-15">
      <h1 className="font-bold text-5xl text-center">
        <span className="text-color"> M</span>ursaleen
        <span className="text-color"> A</span>nsari
      </h1>
      <div className="text-center  text-4xl rounded-lg py-2 text-color flex gap-x-10 justify-center sm:justify-start">
        <FaFacebookSquare className="cursor-pointer" />
        <RiInstagramFill className="cursor-pointer" />
        <FaLinkedin className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
