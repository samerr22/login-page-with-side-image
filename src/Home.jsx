import React from "react";
import Letter from "/image/letter.png";
import Screen from "/image/screen.png";

function ghome() {
  return (
    <div className="">
      <img
        className="absolute w-[30px] mt-[40px] ml-[30px] lg:ml-[55px]"
        src={Letter}
      />
      <h1 className=" absolute font-semibold text-[30px] mt-[29px] ml-[70px] lg:ml-[100px]">
        maze
      </h1>
      <h1 className=" absolute font-bold mt-[100px] ml-[30px] text-2xl  lg:ml-[55px]">
        Hi there! Have we met before?
      </h1>

      <label
        className=" absolute font-semibold text-[16px] mt-[170px] text-gray-800   ml-[30px]  lg:ml-[55px]"
        htmlFor=""
      >
        Email*
      </label>
      <input
        className="absolute w-[450px] h-[45px] mt-[200px] ml-[30px]   border-2   rounded-lg shadow-sm hover:border-red-100 focus:outline-sky-700 focus:h-[45px]  lg:ml-[55px]"
        type="text"
      />

      <label
        className=" absolute font-semibold text-[16px] mt-[270px] text-gray-800  ml-[30px]  lg:ml-[60px] "
        htmlFor=""
      >
        Password*
      </label>
      <input
        className="absolute w-[450px] h-[45px] mt-[300px] ml-[30px]   border-2  rounded-lg shadow-sm hover:border-red-100 focus:outline-sky-700 focus:h-[45px] lg:ml-[55px]"
        type="text"
      />

      <button className="absolute w-[450px] h-[50px] mt-[390px] ml-[30px]   border-2  rounded-lg bg-slate-200 hover:bg-indigo-300 font-bold text-gray-500 hover:text-white lg:ml-[55px]">
        Log in
      </button>

      <hr className=" absolute w-[200px]  mt-[473px] ml-[35px] bg-red-600 lg:ml-[55px]" />

      <p className=" absolute mt-[460px] ml-[240px] text-gray-500 lg:ml-[262px]">
        OR
      </p>
      <hr className=" absolute w-[200px]  mt-[473px]  ml-[270px] lg:ml-[290px] " />
      <button className="absolute w-[450px] h-[50px] mt-[510px] ml-[30px]   border-2 border-gray-950  rounded-lg hover:bg-black hover:text-slate-100 font-semibold  lg:ml-[55px] ">
        Log in with Google
      </button>
      <p className="absolute mt-[580px] ml-[30px]  text-blue-700 underline  cursor-pointer lg:ml-[55px] lg:mt-[620px]">
        Forgot my password
      </p>
      <h1 className="absolute mt-[610px] ml-[30px] font-medium lg:ml-[55px] lg:mt-[650px]">
        Don't have an account?
      </h1>
      <h1 className="absolute mt-[610px] ml-[200px] font-serif text-blue-600 cursor-pointer underline lg:mt-[650px] lg:ml-[230px]">
        Sign up
      </h1>
      <h1 className="absolute mt-[610px] ml-[365px] text-blue-600 underline cursor-pointer lg:mt-[650px] lg:ml-[390px]">
        Log in with SSO
      </h1>
      <img
        className="hidden lg:block absolute h-screen w-[975px] ml-[560px]"
        src={Screen}
      />
    </div>
  );
}
export default ghome;
