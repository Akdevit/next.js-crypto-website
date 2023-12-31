import React from "react";

const Alldatamarketdata = ({ detahero }) => {
  return (
    <>
      <div className="w-auto h-auto flex justify-center mt-24  ">
        <div className="xl:w-[80%] md:w-[80%] sm:w-[80%] w-[90%] h-auto gridflex">
          <div className="xl:w-[250px] w-[250px]  h-auto mt-10">
            <div className="w-auto h-auto">
              <h1 className="xl:text-2xl  text-gray-500">Market cap</h1>
              <h1 className="xl:text-2xl font-bold mt-2">
                ${Math.trunc(detahero.marketCap)}
              </h1>
            </div>

            <div className="w-auto h-auto mt-14">
              <h1 className="xl:text-2xl  text-gray-500">Volume 24H</h1>
              <h1 className="xl:text-2xl font-bold mt-2">
                ${Math.trunc(detahero.volume)}
              </h1>
            </div>
          </div>

          <div className="xl:w-[250px] w-[250px] h-auto mt-10">
            <div className="w-auto h-auto">
              <h1 className="xl:text-2xl  text-gray-500">Price change (1h)</h1>
              <div
                className={
                  detahero.priceChange1h < 0
                    ? "w-16 h-auto bg-red-300 rounded-md text-center mt-3"
                    : "w-16 h-auto bg-green-300 rounded-md text-center mt-3"
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

            <div className="xl:w-auto h-auto mt-14" >
              <h1 className="xl:text-2xl  text-gray-500">Price change(1w)</h1>
              <div
                className={
                  detahero.priceChange1w < 0
                    ? "w-16 h-auto bg-red-300 rounded-md text-center mt-3"
                    : "w-16 h-auto bg-green-300 rounded-md text-center mt-3"
                }
              >
                <p
                  className={
                    detahero.priceChange1w < 0
                      ? "text-md font-bold text-red-800"
                      : "text-md font-bold text-green-800"
                  }
                >
                  {detahero.priceChange1w}%
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[250px] w-[250px] h-auto mt-10">
            <div className="w-auto h-auto">
              <h1 className="xl:text-2xl  text-gray-500">totale supply</h1>
              <h1 className="xl:text-2xl font-bold mt-2">
                ${Math.trunc(detahero.totalSupply)}
              </h1>
            </div>

            <div className="w-auto h-auto mt-14">
              <h1 className="xl:text-2xl  text-gray-500">Price change(1d)</h1>
              <div
                className={
                  detahero.priceChange1d < 0
                    ? "w-16 h-auto bg-red-300 rounded-md text-center mt-3"
                    : "w-16 h-auto bg-green-300 rounded-md text-center mt-3"
                }
              >
                <p
                  className={
                    detahero.priceChange1d < 0
                      ? "text-md font-bold text-red-800"
                      : "text-md font-bold text-green-800"
                  }
                >
                  {detahero.priceChange1d}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alldatamarketdata;
