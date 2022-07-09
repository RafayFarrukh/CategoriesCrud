import React from "react";
import AuthCheck from "./AuthCheck";
import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import Navbar from "../pages/Navbar";
import SingleCategory from "./SingleCategory";
const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const getData = () => {
    axiosInstance
      .get("http://localhost:5000/api/categories")
      .then((res) => {
        setCategories(res.data);
        // window.location.reload();

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();

        // setHasError(true);
        console.log("error in showing");
      });
  };
  useEffect(function () {
    // console.log("Sending Ajax call");
    getData();
  }, []);

  return (
    <AuthCheck>
      <div>
        <Navbar />
        {categories.map?.((p) => (
          // <SingleCategory />
          <SingleCategory category={p} key={p._id} onDelete={getData} />
        ))}
      </div>
    </AuthCheck>
  );
};

export default AllCategories;
