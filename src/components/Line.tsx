import React from "react";
interface LineProps {
  evenly: boolean;
}
function Line(props: LineProps) {
  const { evenly } = props;
  return (
    <div
      className={`relative flex ${
        evenly ? "justify-evenly" : "justify-around"
      }`}
    >
      <div className="bg-color w-2 h-10"></div>
      <div className="bg-color w-2 h-10"></div>
    </div>
  );
}

export default Line;
