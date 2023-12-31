import Image from "next/image";
import React from "react";

function Banner() {
  const data = [
    { img: "/icon/html.svg", name: "HTML" },
    { img: "/icon/css.svg", name: "CSS" },
    { img: "/icon/git.svg", name: "Git" },
    { img: "/icon/github.svg", name: "Github" },
    { img: "/icon/bootstrap.svg", name: "Bootstrap" },
    { img: "/icon/tailwind.svg", name: "Tailwind" },
    { img: "/icon/javascript.svg", name: "Javascript" },
    { img: "/icon/typescript.svg", name: "Typescript" },
    { img: "/icon/firebase.svg", name: "Firebase" },
    { img: "/icon/react.svg", name: "React" },
    { img: "/icon/next.svg", name: "Next.js" },
    { img: "/icon/figma.svg", name: "Figma" },
    { img: "/icon/photoshop.svg", name: "Photoshop" },
    { img: "/icon/illustrator.svg", name: "Illustrator" },
    { img: "/icon/blender.svg", name: "Blender" },
  ];
  return (
    <div className="w-full sm:w-[85%] md:w-[95%] rounded-[20px] mx-auto bg-color bg-opacity-15 border-2 border-color shadow-xl">
      <div className="overflow-x-hidden">
        <h1 className="font-extrabold text-center text-2xl  pt-5">~~~ Skills ~~~</h1>
        <div className="py-3 flex flex-wrap gap-5 justify-center px-5">
          {data.map((item: any, index: number) => {
            return (
              <div className="flex flex-col justify-center items-center" key={index}>
                <Image src={item.img} alt="" width={50} height={50} />
                <h3 className="font-semibold text-lg text-center ">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
//animate-marquee

export default Banner;
