import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div
      id="footer"
      className="flex flex-col sm:flex-row justify-around border-t-2 rounded-t-3xl md:rounded-t-full border-color py-2 items-center bg-color bg-opacity-15"
    >
      <h1 className="font-bold lg:text-5xl text-3xl text-center">
        <span className="text-color"> M</span>ursaleen
        <span className="text-color"> A</span>nsari
      </h1>
      <div className="text-center lg:text-4xl text-xl rounded-lg py-2 text-color flex gap-x-10 justify-center sm:justify-start ">
        <Link
          href={
            "https://www.facebook.com/mursaleen.ansari.75457?mibextid=eHce3h"
          }
          target="_blank"
        >
          <FaFacebookSquare className="cursor-pointer" />
        </Link>
        <Link
          href={
            "https://www.instagram.com/mursaleen_ansari00?igsh=enUzZG1qMmV3Yjhy"
          }
          target="_blank"
        >
          <RiInstagramFill className="cursor-pointer" />
        </Link>
        <FaLinkedin className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
