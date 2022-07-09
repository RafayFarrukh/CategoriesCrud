import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useState, useEffect } from "react";

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(function () {
    axiosInstance
      .get("http://localhost:5000/api/categories/" + params.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h4>
        <Link to={"/products/details/" + product._id}>{product.name}</Link>{" "}
      </h4>
      <p>
        <b>Name: </b>
        {product.name}
      </p>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default ProductDetails;
