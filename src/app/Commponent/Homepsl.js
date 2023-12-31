"use client";
import Image from "next/image";
import Imagepl from "../Images/12291142_Wavy_Tech-24_Single-12.jpg";
const Homepsl = () => {
  return (
    <>
      <div className="w-auto h-auto flex justify-center  mt-9">
        <div className=" flex flex-col w-[90%] sm:w-[90%] sm:flex-row sm:gap-12 sm:justify-between xl:justify-around h-auto gap-9 ">
          <Image
            className="w-full sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] h-[500px] xl:w-[600px] xl:h-[500px]"
            width={200}
            height={200}
            src={Imagepl}
            alt="profit&lost.gif"
          />

          <div className="w-auto h-auto sm:w-72  sm:h-72 sm:flex sm:flex-col sm:items-cente sm:justify-center md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] ">
            <h1 className="text-3xl md:text-4xl font-bold xl:text-6xl ">
              Get In-Depth Profit & Loss Analysis
            </h1>
            <p className="text-md text-gray-400 xl:mt-3">
              Connect your wallet to get 24h, daily, weekly and cumulative
              Profit & Loss analysis. Level up your crypto investing strategy.
            </p>
            <div className="w-auto h-auto flex justify-start mt-4">
              <button className="w-[200px] h-[50px] rounded-md bg-[#FF9332] text-white font-bold">
                Connect -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepsl;
