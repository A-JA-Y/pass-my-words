import React from "react";

function Manager() {
  return (
    <>
      <div className="  min-w-full min-h-screen dark:bg-zinc-800 dark:text-white bg-slate-300 ">
        <div className=" text-center flex flex-col items-center justify-center py-10">
          <input
            type="text"
            className="w-1/2 p-2 m-2 rounded-3xl drop-shadow-lg shadow-inner shadow-black "
            placeholder="Enter the website name"
          />
          <div className=" w-1/2 grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
            <input
              type="text"
              className="p-2 w-full rounded-3xl drop-shadow-lg shadow-inner shadow-black "
              placeholder="Enter the website name"
            />
            <input
              type="text"
              className="p-2 w-full rounded-3xl drop-shadow-lg shadow-inner shadow-black "
              placeholder="Enter the website name"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
