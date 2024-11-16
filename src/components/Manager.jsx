import React from "react";


function Manager() {

  const toggleShowPass = (e) => {
    const pass = e.target.previousElementSibling;
    if (pass.type === "password") {
      alert("showing password");
      pass.type = "text";
      e.target.textContent = "Hide";
    } else {
      pass.type = "password";
      e.target.textContent = "Show";
    }
    
  }
  return (
    <>
      <div className="  min-w-full min-h-screen dark:bg-zinc-800 dark:text-white bg-slate-300 ">
        <div className=" text-center flex flex-col items-center justify-center py-10 drop-shadow-2xl">
          <input
            type="text"
            className="w-1/2 p-2 m-2 rounded-xl drop-shadow-lg  shadow-sm shadow-green-700  border-green-700 border-b-2 "
            placeholder="Enter website URL"
          />
          <div className=" w-1/2 grid lg:grid-cols-2 sm:grid-cols-1 gap-3 text-black">
            <input
              type="text"
              className="p-2 w-full rounded-xl drop-shadow-lg  shadow-sm shadow-green-700 border-green-700 border-b-2 "
              placeholder="Enter the Username"
            />
            <div className="relative">

            <input
              type="password"
              className="p-2 w-full rounded-xl drop-shadow-lg  shadow-sm shadow-green-700 border-green-700 border-b-2 "
              placeholder="Enter the Password"
            />
            <span className="absolute top-2 right-1 text-black cursor-pointer" onClick={toggleShowPass}>Show</span>
            </div>

          </div>
          <button className="p-2  m-2 bg-zinc-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full border-green-700 hover:border-green-300 border-b-2">
            Add Password 
          </button>
        </div>
      </div>
    </>
  );
}

export default Manager;
