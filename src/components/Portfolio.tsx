import React from "react";
import Button from "./Button";

function Portfolio() {
  const portfolioData = [
    { name: "Airbnb" },
    { name: "Text Converter" },
    { name: "E_Comers" },
    { name: "Calculator" },
    { name: "Movie" },
    { name: "Quiz App" },
    { name: "Weather App" },
    { name: "Budget App" },
    { name: "Todo App" },
    { name: "Counter" },
    { name: "MS Word" },
    { name: "Digital Watch" },
    { name: "Clock" },
    { name: "Unique Paint" },
  ];
  return (
    <div className="w-full py-3 sm:w-[85%] md:w-[95%] bg-color bg-opacity-15 rounded-[20px] mx-auto border-2 border-color shadow-xl flex flex-col gap-3">
      <h1 className="font-extrabold text-center text-2xl">~~~ Portfolio ~~~</h1>
      <div className="flex flex-wrap p-2 gap-3 justify-center">
        {portfolioData.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="border-2 border-color rounded-xl p-2 w-full sm:w-[46%] lg:w-[20%]"
            >
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <p className="text-base font-medium my-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis unde reprehenderit consequatur.
              </p>
              <div className="flex justify-center"> 
                <Button outline={false} title="Check it out" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
