import "animate.css";
import React from "react";
import TopNav from "./TopNav";

function Login() {
  return (
    <>
<TopNav/>
<div className="flex flex-col items-center">
  <div className="flex">
 <div>  
    <img className="w-10 h-6 mr-3" src="./wallet-images.png"/>
    </div> 
    <div>
      <p className="text-center font-heading lg:text-xl lg:mb-7 text-gray-400">
        <span className="text-white">50+ wallets</span> checked and wrapped in
        last 1hr
      </p>
      <div className="flex flex-col justify-center items-center lg:overflow-hidden">
        <p className="font-heading lg:text-5xl text-3xl animate__animated animate__bounceInDown">
          Arbitrum Wrapped
          <br />
        </p>
        <span className="text-green-400 animate__animated animate__slideInLeft font-heading lg:text-6xl text-3xl">
          2023
        </span>
        </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full justify-center lg:items-start items-center">
        <input
          type="text"
          className=" bg-gray-700 mt-4 rounded-3xl lg:p-3 p-1 w-5/6 text-white"
          placeholder="Enter your Wallet ID"
        />
        {/* <Link to="/home"> */}
          <img
            src="./login.png"
            alt="Login Icon"
            className="animate__animated animate__shakeX lg:h-9 lg:w-9 h-7 w-7 mt-5 lg:ml-4 cursor-pointer"
          />
        {/* </Link> */}
      </div>
      <div className="flex items-center justify-center">
        <p className="font-heading text-green-400 mt-3">
          Add another wallet +{" "}
        </p>
      </div>
      </div>
      <div className="lg:fixed lg:bottom-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex  justify-between items-center w-full">
  <button className="bg-green-400 text-black text-sm px-5 py-2.5 mr-2 rounded-3xl ml-auto">
    Share Wrapped
  </button>
</div>



    </>
  );
}

export default Login;
