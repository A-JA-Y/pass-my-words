import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

function Manager() {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const toggleShowPass = (e) => {
    const pass = e.target.previousElementSibling;
    if (pass.type === "password") {
      toast("showing password");
      pass.type = "text";
      e.target.textContent = "Hide";
    } else {
      pass.type = "password";
      e.target.textContent = "Show";
    }
  };

  const handleCopy = (e) => {
    let index = e.target.parentElement.rowIndex - 1;
    let password = passwordArray[index];
    navigator.clipboard.writeText(password.password);
    toast("Password Copied to Clipboard");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const savePassword = () => {
    if (form.site === "" || form.username === "" || form.password === "") {
      toast("Please fill all the fields");

      return;
    } else {
      setPasswordArray([...passwordArray, {...form, id:uuidv4()}]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, {...form, id:uuidv4()}])
      );

      toast("Password Saved");
      setForm({ site: "", username: "", password: "" });
    }
  };
  const handleDelete = (id) => {
    setPasswordArray(passwordArray.filter((password) => password.id !== id));
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((password) => password.id !== id)));
    toast("Password Deleted");
    

     };
  const handleEdit = (id) => {
    let password = passwordArray.find((password) => password.id === id);
    setForm(password);
    setPasswordArray(passwordArray.filter((password) => password.id !== id));
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((password) => password.id !== id))); 
    toast("Password Edited");
  }

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  return (
    <>
      <div className="min-w-full min-h-screen dark:bg-zinc-800 dark:text-white bg-slate-300">
        <div className="text-center flex flex-col items-center justify-center py-10 drop-shadow-2xl">
          <input
            type="text"
            className="w-11/12 sm:w-1/2 p-2 m-2 rounded-xl drop-shadow-lg shadow-sm shadow-green-700 text-black border-green-700 border-b-2"
            onChange={handleChange}
            placeholder="Enter website URL"
            value={form.site}
            name="site"
          />
          <div className="w-11/12 sm:w-1/2 grid lg:grid-cols-2 sm:grid-cols-1 gap-3 text-black">
            <input
              type="text"
              className="p-2 w-full rounded-xl drop-shadow-lg shadow-sm shadow-green-700 border-green-700 border-b-2"
              onChange={handleChange}
              placeholder="Enter the Username"
              value={form.username}
              name="username"
            />
            <div className="relative">
              <input
                type="password"
                className="p-2 w-full rounded-xl drop-shadow-lg shadow-sm shadow-green-700 border-green-700 border-b-2"
                placeholder="Enter the Password"
                onChange={handleChange}
                value={form.password}
                name="password"
              />
              <span
                className="absolute top-2 right-1 text-black cursor-pointer"
                onClick={toggleShowPass}
              >
                Show
              </span>
              <ToastContainer />
            </div>
          </div>
          <button
            className="p-2 m-2 bg-zinc-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full border-green-700 hover:border-green-300 border-b-2"
            onClick={savePassword}
          >
            Add Password
          </button>
          <ToastContainer />
        </div>
        <div className="flex flex-col items-center justify-center px-2 sm:px-14">
          <h2 className="text-2xl font-bold">Saved Passwords</h2>
          {passwordArray.length === 0 ? (
            <h1 className="text-2xl drop-shadow-lg shadow-red-600">
              No Passwords Saved yet!!
            </h1>
          ) : (
            <table className="min-w-full bg-white dark:bg-zinc-800 dark:text-white">
              <thead>
                <tr>
                  <th className="py-2 px-0 sm:px-4 border-b">Website</th>
                  <th className="py-2 px-0 sm:px-4 border-b">Username</th>
                  <th className="py-2 px-0 sm:px-4 border-b">Password</th>
                  <th className="py-2 px-0 sm:px-4 border-b">Actions</th>
                  <th className="py-2 px-0 sm:px-4 border-b">Copy</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((password, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-2 px-0 sm:px-4 border-b">
                      <a href={password.site} target="_blank">
                        {password.site}
                      </a>
                    </td>
                    <td className="py-2 px-0 sm:px-4 border-b">
                      {password.username}
                    </td>
                    <td className="py-2 px-0 sm:px-4 border-b">
                      {password.password}
                    </td>
                    <td
                      className="py-2 px-0  sm:px-4 border-b cursor-pointer"
                      
                    >
                    <span onClick={() => handleDelete(password.id)}>

                      🗑️
                    </span>
                    <ToastContainer />
                    <span onClick={() => handleEdit(password.id)}>

                      🖊️
                    </span>
                    <ToastContainer />
                    </td>

                    <td
                      className="py-2 px-0 sm:px-4 border-b cursor-pointer"
                      onClick={handleCopy}
                    >
                      📋
                    </td>
                    <ToastContainer />
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
