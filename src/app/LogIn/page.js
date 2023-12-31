import React from "react";
import Image from "next/image";
import Googleicon from "../Images/search.png";
import facebook from "../Images/facebook.png";
import Footer from "../Commponent/Footer";
const page = () => {
  return (
    <>
      <div className="w-auto h-auto flex justify-center mt-6">
        <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[40%] h-[90vh] md:h-[600px] bg-gray-100 rounded-md ">
          <h1 className="text-2xl font-bold mt-2 ml-2">Welcome back !</h1>
          <p className="text-md ml-2">
            Start your website in seconds. Don’t have an account?{" "}
            <span className="text-blue-700 ">Sign up</span>.
          </p>

          <div className="w-auto h-auto flex justify-center mt-5 ">
            <div className="w-[300px] h-auto  flex-col ">
              <div className="w-auto h-[40px]  rounded-md flex gap-4 justify-center items-center border-2 border-solid border-gray-200">
                <Image
                  src={Googleicon}
                  width={30}
                  height={30}
                  alt="google.png"
                />
                <p className="text-md ">Login with google</p>
              </div>

              <div className="w-auto h-[40px] mt-2 rounded-md flex gap-4 justify-center items-center border-2 border-solid border-gray-200">
                <Image
                  src={facebook}
                  width={30}
                  height={30}
                  alt="facebook.png"
                />
                <p className="text-md ">Login with facebook</p>
              </div>
            </div>
          </div>

          <div className="w-auto h-auto flex justify-center items-center gap-2 mt-6">
            <hr className="w-40" />
            <p>or</p>
            <hr className="w-40" />
          </div>

          <div className="w-auto h-auto flex justify-center mt-5">
            <div className="w-auto h-auto">
              <div className="w-[300px]  ">
                <p className="text-md"> Enter email</p>
                <input
                  className="mt-2 w-[300px] h-[40px] bg-transparent border-2 border-solid border-gray-200 rounded-md outline-none"
                  type="email"
                  placeholder="name@gmail.com"
                />
              </div>

              <div className="w-[300px] mt-3">
                <p className="text-md"> Enter password</p>
                <input
                  className="mt-2 w-[300px] h-[40px] bg-transparent border-2 border-solid border-gray-200 rounded-md outline-none"
                  type="email"
                  placeholder="password"
                />
              </div>
            </div>
          </div>

          <div className="w-auto h-auto  flex justify-center">
            <div className="w-[300px] h-auto flex justify-end mt-2">
              <p className="text-md text-blue-800 cursor-pointer">
                forget passsword
              </p>
            </div>
          </div>

          <div className="w-auto h-auto flex justify-center mt-9">
            <button className="w-[250px] h-[40px] rounded-md bg-orange-500 text-xl font-bold">
              Log In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
