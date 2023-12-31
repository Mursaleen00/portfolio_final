import React from "react";

function Map() {
  return (
    <>
      <div className="w-full md:w-[50%]"> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d904.3499048985722!2d67.00682656959833!3d24.952514914540043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU3JzA5LjEiTiA2N8KwMDAnMjYuOSJF!5e0!3m2!1sen!2s!4v1704042267158!5m2!1sen!2s"
          loading="lazy"
          className="border-2 border-color rounded-xl w-full h-full"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
