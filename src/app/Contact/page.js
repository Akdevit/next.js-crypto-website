import React from "react";
import Image from "next/image";
import ContactImage from "../Images/contact1.png";
import Footer from "../Commponent/Footer";
const page = () => {
  return (
    <>
      <div className="w-auto h-auto xl:h-[100vh] flex justify-center xl:items-center mt-9">
        <div className=" flex flex-col w-[90%]  sm:w-[90%] sm:flex-row sm:gap-12 sm:justify-between xl:justify-around h-auto gap-9 ">
          <Image
            className="w-full sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] h-auto xl:w-[600px] xl:h-[500px] "
            width={200}
            height={200}
            src={ContactImage}
            alt="profit&lost.gif"
          />

          <div className="w-full h-[500px] flex justify-center">
            <div className="w-[300px]  sm:w-[300px] md:w-[400px] h-auto flex-col justify-center ">
              <h1 className="text-2xl font-bold text-center">Contact</h1>

              <input
                type="text"
                className="h-10 w-72 sm:w-72 md:w-80 xl:w-96 rounded-sm outline-none border-none mt-2 xl:mt-5 bg-gray-100"
                placeholder="Enter your full Name"
              />
              <input
                type="email"
                className="h-10 w-72 sm:w-72 md:w-80 xl:w-96 rounded-sm outline-none border-none  mt-2 xl:mt-5 bg-gray-100"
                placeholder="Enter your Email"
              />
              <textarea
                placeholder="Type your massage"
                className=" h-48 w-72 sm:w-72 md:w-80 resize-none mt-2 xl:w-96 bg-gray-100 xl:mt-5"
              ></textarea>

              <div className="w-auto h-auto flex justify-center mt-8">
                <button className="w-[200px] h-[40px] bg-orange-400 text-white rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
