import React from "react";
import Image from "next/image";

const Alldatasethero = ({ detahero }) => {
  return (
    <>
      <div className="w-auto h-auto  flex justify-center">
        <div className="w-[80%] h-auto  mt-3 ">
          <div className="w-[300px] h-auto ">
            <div className="w-[100px] h-auto bg-[#FF9500] rounded-md text-center">
              <p className=" text-md font-bold">Rank {detahero.rank}</p>
            </div>

            <div className="w-auto h-auto mt-2 flex items-center gap-2">
              <Image
                className="w-[50px] h-[50px] "
                src={detahero.icon}
                width={100}
                height={100}
                alt="icon.png"
              />
              <h1 className="text-2xl font-bold">
                {detahero.name}{" "}
                <span className="text-sm text-gray-300">{detahero.symbol}</span>
              </h1>
              <div
                className={
                  detahero.priceChange1h < 0
                    ? "w-16 h-auto text-center bg-red-400 rounded-md"
                    : "w-16 h-auto text-center bg-green-400 rounded-md"
                }
              >
                <p
                  className={
                    detahero.priceChange1h < 0
                      ? "text-md font-bold text-red-800"
                      : "text-md font-bold text-green-800"
                  }
                >
                  {detahero.priceChange1h}%
                </p>
              </div>
            </div>
            <div className="w-auto h-auto ml-4 mt-2">
              <h1 className="text-2xl font-bold">
                ${Math.trunc(detahero.price)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alldatasethero;
