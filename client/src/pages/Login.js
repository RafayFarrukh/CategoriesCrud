import React from "react";
import Navbar from "./Navbar";
// import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    await axios
      .post("http://localhost:5000/api/user/login", {
        // .post("/api/user/login", {
        email: email,
        password: password,
      })
      .then((resp) => {
        localStorage.setItem("jwt_access_token", resp.data);
        navigate("/");

        console.log("logged in");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mt-24 ">
          <div className="w-full md:w-96 md:max-w-full mx-auto shadow-lg">
            <div className="p-6  border-gray-300 sm:rounded-md">
              <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800 mb-12 mr-20">
                {/* <img
                  className="h-16 w-16 inline mx-6 rounded-xl"
                  src={logo5}
                  alt=""
                /> */}
                Login
              </h1>
              <form method="POST" action="" onSubmit={handleSubmit}>
                <label className="block mb-6">
                  {/* <EmailIcon /> */}
                  <span className="text-gray-700 ml-2 font-bold">
                    {" "}
                    Email address
                  </span>
                  <input
                    name="email"
                    // ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
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
                  {/* <LockIcon /> */}
                  <span className="text-gray-700 ml-2 font-bold">Password</span>
                  <input
                    name="password"
                    type="password"
                    // ref={passwordRef}
                    value={password}
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
                    minLength="6"
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
                    Login
                  </button>
                  {/* {error && (
                    <label style={{ color: "red" }}>Wrong credentials ⚠️</label>
                  )} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
