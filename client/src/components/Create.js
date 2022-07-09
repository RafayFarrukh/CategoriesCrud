import React from "react";
import Navbar from "../pages/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import AuthCheck from "./AuthCheck";
const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [file, setFile] = useState(null);
  const params = useParams();
  const id = params.id;
  const isEditing = id ? true : false;
  const [product, setProduct] = React.useState("");

  React.useEffect(function () {
    if (isEditing)
      axiosInstance
        .get("http://localhost:5000/api/categories" + params.id)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  const handlepost = async (e) => {
    e.preventDefault();

    const Post = {
      name: name,
      description: description,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      Post.image = fileName;
      await axiosInstance
        .post("http://localhost:5000/api/upload", data)
        .catch((err) => {
          console.log("error in upload");
        });
    }
    await axiosInstance
      .post("http://localhost:5000/api/categories", Post)
      // .post("/api/articles/create", newPost)
      // .then((res) => res.json())
      .then((data) => {
        // console.log(user.username);

        console.log(data);
        navigate("/allcategories");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <AuthCheck>
        {file && (
          <img
            className="uploadedImage h-96 w-96 mt-10 mr-10 float-right"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
        <div>
          <div class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
            <div class="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
              <div class="mb-4">
                <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">
                  Create Post
                </h1>
              </div>

              <div class="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
                <form
                  method="POST"
                  onSubmit={handlepost}
                  onChange={(e) => {
                    setProduct(e.target.value);
                  }}
                >
                  <div>
                    <label
                      class="block text-sm font-bold text-gray-700"
                      for="title"
                    >
                      Title
                    </label>

                    <input
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="email"
                      placeholder="180"
                    />
                  </div>
                  {/* <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={(e) => {
                      // setSending(true);
                      if (isEditing)
                        axiosInstance
                          .put("/api/products/" + params.id, {
                            onUploadProgress: (ProgressEvent) => {
                              let progress =
                                Math.round(
                                  (ProgressEvent.loaded / ProgressEvent.total) *
                                    100
                                ) + "%";
                              // setProgess(progress);
                            },
                          })
                          .then((res) => {
                            //   console.log(res.data);
                            // setSending(false);
                            navigate("/");
                          });
                    }}
                  >
                    {isEditing ? "Edit Product" : "Add Product"}
                    Button
                  </button> */}
                  <div class="mt-4">
                    <label
                      class="block text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      rows="4"
                      onChange={(e) => setdescription(e.target.value)}
                      placeholder="400"
                    ></textarea>
                  </div>
                  <div>
                    <label for="title" className="text-lx font-serif">
                      Image:
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={(e) => setFile(e.target.files[0])}
                      placeholder="file"
                      filename="articleImage"
                      // style={{ display: "none" }}
                      className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                    />
                  </div>

                  <div class="flex items-center justify-start mt-4 gap-x-2">
                    <button
                      type="submit"
                      class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AuthCheck>
    </>
  );
};

export default Create;
