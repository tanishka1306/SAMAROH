import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Model from "../components/Model";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

function Login() {
  // pop-up
  // const [openModel, setOpenModel] = useState(false);

  let navigate = useNavigate();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/loginUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        location: userData.location,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", userData.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    } else {
      alert("enter valid credentials");
    }
  };
  const handleChange = (event) => {
    setuserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 relative h-screen w-full ">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="./Images/login1.jpg"
            alt=""
          />
        </div>
        <div className="bg-[#c9bca7] flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto bg-[#b3a692] p-8 px-8 rounded-lg"
          >
            <h1 className="text-4xl font-bold text-center">Login </h1>
            <div className="flex flex-col py-2 ">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="rounded-lg bg-gray-800 mt-2 p-2 focus:bg-gray-500 focused:outline-none"
              />
            </div>
            <div className="flex flex-col py-2 ">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="rounded-lg bg-gray-800 mt-2 p-2 focus:bg-gray-500 focused:outline-none"
              />
            </div>
            <div className="flex gap-[20px] mt-[30px] ">
              <button
                className=" hover:bg-stone-600 duration-700"
                type="submit"
              >
                LOGIN
              </button>
              {/* <button
                onClick={() => setOpenModel(true)}
                className="hover:bg-stone-600 duration-700"
              >
                {" "}
                Reservation{" "}
              </button> */}
            </div>
          </form>
        </div>
        {/* <Model open={openModel} onClose={() => setOpenModel(false)}  /> */}
      </div>
    </div>
  );
}

export default Login;
