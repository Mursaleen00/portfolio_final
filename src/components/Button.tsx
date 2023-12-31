import React from "react";

interface ButtonProps {
  title: string;
  outline: boolean;
}

function Button(props: ButtonProps) {
  const { title, outline } = props;
  return (
    <>
      <button
        className={`lg:px-6 px-4 lg:py-2 py-1 ${
          outline
            ? "border-color border-2 text-color bg-transparent"
            : "bg-color text-white"
        }  font-semibold outline-none rounded-3xl`}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
