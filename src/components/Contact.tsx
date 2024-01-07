import React from "react";
import Button from "./Button";
import Map from "./Map";

function Contact() {
  return (
    <div
      id="contact"
      className="scroll-mt-10 w-full sm:w-[85%] md:w-[95%] bg-color bg-opacity-15 rounded-[20px] mx-auto border-2 border-color shadow-xl"
    >
      <h1 className="font-extrabold text-center text-2xl pt-5">
        ~~~ Contact ~~~
      </h1>
      <div className="rounded-[20px] px-4 sm:px-8 lg:px-28 py-5 flex flex-col md:flex-row justify-between gap-3">
        <div className="flex flex-col md:w-[50%] gap-3 justify-between">
          <div className="flex gap-3 flex-col lg:flex-row">
            <input
              required
              type="text"
              className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
              placeholder="First Name"
            />
            <input
              required
              type="text"
              className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
              placeholder="Last Name"
            />
          </div>

          <input
            required
            type="email"
            className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
            placeholder="Your Email"
          />

          <textarea
            required
            name=""
            id=""
            cols={30}
            rows={10}
            className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
            placeholder="Your Message"
          ></textarea>

          <Button title="Send Message" outline={false} />
        </div>

        <Map />
      </div>
    </div>
  );
}

export default Contact;

<div className="flex flex-col w-full gap-3 justify-between">
  <div className="flex gap-3 flex-col sm:flex-row">
    <input
      required
      type="text"
      className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
      placeholder="First Name"
    />
    <input
      required
      type="text"
      className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
      placeholder="Last Name"
    />
  </div>

  <input
    required
    type="email"
    className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
    placeholder="Your Email"
  />

  <textarea
    required
    name=""
    id=""
    cols={30}
    rows={10}
    className="outline-none border-2 border-color rounded-xl w-full bg-transparent p-2 flex items-center justify-center font-semibold"
    placeholder="Your Message"
  ></textarea>

  <Button title="Send Message" outline={false} />
</div>;
