import React from "react";
import Navbar from "../pages/Navbar";
import AuthCheck from "./AuthCheck";

const Dashboard = () => {
  return (
    <div>
      <AuthCheck>
        <Navbar />
        <h1 className="text-teal-900">Hi i am dashboard</h1>
      </AuthCheck>
    </div>
  );
};

export default Dashboard;
