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
function Navbar() {
  return (
    <>
      <div className="flex justify-between px-14 md:justify-around border-b-2 rounded-b-full border-color py-1 items-center bg-color bg-opacity-15">
        <div className="">
          <h1 className="text-[28px] font-semibold cursor-pointer">
            <span className="text-color text-[32px]">M</span>ursaleen
          </h1>
        </div>

        <div className="md:block hidden">
          <ul className="flex gap-x-5 font-semibold text-lg">
            <li className="cursor-pointer  hover:text-color">About</li>
            <li className="cursor-pointer  hover:text-color">Portfolio</li>
            <li className="cursor-pointer  hover:text-color">Contact</li>
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
            <DropdownMenuContent className="bg-color bg-opacity-15 border-2 border-color mt-5 md:hidden rounded-xl">
              <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                About
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                Portfolio
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer font-semibold hover:text-color">
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
