import React from "react";
import Image from "next/image";
import Wimage from "../Images/26857154_7176674.jpg";
const Homewallet = () => {
  return (
    <>
      <div className="w-auto h-auto flex justify-center  mt-9">
        <div className=" flex flex-col w-[90%] sm:w-[90%] sm:flex-row sm:gap-12 sm:justify-between xl:justify-around h-auto gap-9 ">
          <Image
            className="w-full sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] h-[500px] xl:w-[600px] xl:h-[500px]"
            width={200}
            height={200}
            src={Wimage}
            alt="profit&lost.gif"
          />

          <div className="w-auto h-auto sm:w-72  sm:h-72 sm:flex sm:flex-col sm:items-cente sm:justify-center md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] ">
            <h1 className="text-3xl md:text-4xl font-bold xl:text-6xl ">
              Get Your Easy-To-Use CryptoPulse Wallet
            </h1>
            <p className="text-md text-gray-400 xl:mt-3">
              Buy, swap, and earn on your crypto quickly and securely on 5+
              chains with CryptoPulse Wallet.
            </p>
            <div className="w-auto h-auto flex justify-start mt-4">
              <button className="w-[200px] h-[50px] rounded-md bg-[#FF9332] text-white font-bold">
                Wallet -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homewallet;
