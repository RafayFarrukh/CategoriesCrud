import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import axiosInstance from "../axiosInstance";

const SingleCategory = (props) => {
  const ImageLink = "http://localhost:5000/images/";

  let product = props.category;
  return (
    // <AuthCheck>
    <div>
      {/* <Navbar /> */}
      {/* <p>{product.name}</p> */}

      <div className="my-1 px-1 w-full md:w-1/2 lg:my-12 lg:px-20 lg:w-1/2 lg:h-1/2 container  mx-auto px-4 md:px-12">
        <div className="Posts overflow-hidden rounded-lg shadow-lg">
          <span className="title no-underline  text-black text-lg ">
            <p>
              {/* {product.name} */}
              <div className="float-right">
                <button class="bg-teal-800 hover:bg-teal-500 text-white font-bold py-1 px-3 rounded-full">
                  <Link to={"/products/edit/" + product._id}>Edit</Link>
                </button>
                <button
                  class="bg-teal-800 hover:bg-teal-500 text-white font-bold py-1 px-3 rounded-full"
                  onClick={() => {
                    axiosInstance
                      .delete(
                        "http://localhost:5000/api/categories/" + product._id
                      )
                      .then((res) => {
                        console.log("Deleted");
                        props.onDelete();
                      });
                  }}
                >
                  Delete
                </button>
              </div>
              <Link to={"/categories/details/" + product._id}>
                <b>Name :</b>
                {product.name}
              </Link>{" "}
            </p>
            <p>
              {" "}
              <b>Description :</b>
              {product.description}
            </p>
            {/* {product.image} */}
            {product.image && (
              <img
                className="postImage"
                src={ImageLink + product.image}
                // src={product.image}
                alt="postImage"
              />
            )}
          </span>
          <span className="postDate flex items-center justify-between leading-tight  md:p-4 float-right">
            <b> Created at :</b>
            {new Date(product.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <hr />
    </div>
    // </AuthCheck>
  );
};

export default SingleCategory;
