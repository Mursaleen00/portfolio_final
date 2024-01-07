import React from "react";
import Button from "./Button";
import { HiMenu } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <div className="flex justify-between px-14 md:justify-around border-b-2 rounded-b-full border-color py-1 items-center bg-color bg-opacity-15">
        <div className="">
          <h1 className="lg:text-[28px] text-[20px] font-semibold cursor-pointer">
            <span className="text-color lg:text-[32px] text-[24px]">M</span>
            ursaleen
          </h1>
        </div>

        <div className="md:block hidden scroll-smooth">
          <ul className="flex gap-x-5 font-semibold text-base lg:text-lg">
            <Link href={"#skill"} className="scroll-smooth">
              <li className="cursor-pointer hover:text-color">Skill</li>
            </Link>
            <Link href={"#about"} className="scroll-smooth">
              <li className="cursor-pointer hover:text-color">About</li>
            </Link>
            <Link href={"#portfolio"} className="scroll-smooth">
              <li className="cursor-pointer hover:text-color">Portfolio</li>
            </Link>
            <Link href={"#contact"} className="scroll-smooth">
              <li className="cursor-pointer hover:text-color">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:block hidden">
          <Button title="Download CV" outline={true} />
        </div>
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <HiMenu className="w-10 cursor-pointer h-7 text-color hover:text-black" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-color bg-opacity-25 backdrop-blur-sm border-2 border-color mt-4 mr-4 md:hidden rounded-xl">
              <Link href={"#skill"}>
                <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                  Skill
                </DropdownMenuItem>
              </Link>
              <Link href={"#about"}>
                <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                  About
                </DropdownMenuItem>
              </Link>
              <Link href={"#portfolio"}>
                <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                  Portfolio
                </DropdownMenuItem>
              </Link>
              <Link href={"#contact"}>
                <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                  Contact
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                <Button title="Download CV" outline={false} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
