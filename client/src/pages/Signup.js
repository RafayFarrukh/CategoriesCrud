import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", {
        // .post("/api/user/register", {
        name,
        email,
        password,
      })
      .then((resp) => setResp(resp))
      .then(navigate("/login"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mt-24 ">
          <div className="w-full md:w-96 md:max-w-full mx-auto shadow-lg">
            <div className="p-6  border-gray-300 sm:rounded-md">
              <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800 mb-12 mr-20">
                Signup
              </h1>
              <form method="POST" action="" onSubmit={handleSubmit}>
                <label className="block mb-6">
                  <span className="text-gray-700  ml-2 mt-10 font-bold">
                    User Name
                  </span>

                  <input
                    name="name"
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    minlength="5"
                    placeholder="User name"
                  />
                </label>

                <label className="block mb-6">
                  <span className="text-gray-700 ml-2 font-bold">
                    {" "}
                    Email address
                  </span>
                  <input
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700 ml-2 font-bold">Password</span>
                  <input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    minlength="6"
                    placeholder="Password"
                    required
                  />
                </label>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="
            h-10
            px-5
            text-indigo-100
            bg-teal-600
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-teal-400
            text-black
          "
                  >
                    Sign Up
                  </button>
                  {resp && (
                    <label style={{ color: "green" }}>
                      Registration Successful redirecting to Login page....
                    </label>
                  )}
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
