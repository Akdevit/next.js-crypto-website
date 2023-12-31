"use client";

import { useEffect, useState } from "react";

const Cryptohero = () => {
  const [btcDominance, setBtcDominance] = useState([""]);
  const [btcDominanceChange, setBtcDominanceChange] = useState([""]);
  const [marketCap, setMarketCap] = useState([""]);
  const [marketCapChange, setMarketCapChange] = useState([""]);
  const [volume, setVolume] = useState([""]);
  const [volumeChange, setVolumeChange] = useState([""]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "ttjSdxfaNuvIJkjnRv/JDv436WUcXfC/t+uRulBE6O8=",
      },
    };

    fetch("https://openapiv1.coinstats.app/markets", options)
      .then((response) => response.json())
      .then((mdata) => {
        setBtcDominance(mdata.btcDominance);
        setBtcDominanceChange(mdata.btcDominanceChange);
        setMarketCap(mdata.marketCap);
        setMarketCapChange(mdata.marketCapChange);
        setVolume(mdata.volume);
        setVolumeChange(mdata.volumeChange);
        // console.log(mdata);
      });
  }, []);

  return (
    <>
      <div className="w-auto h-auto  flex justify-center">
        <div className="w-[90%] h-auto  mt-6  ">
          <div className="w-auto h-auto flex justify-center ">
            <div className="sm:w-[80%] xl:w-[60%] w-full h-auto ">
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl">
                Best Coin Price Tracker on the Market
              </h1>
              <p className="text-center text-sm text-gray-500 md:text-md mt-3">
                With CryptoPulse, you can manage all your crypto assets from one
                interface.The global crypto market cap is ₹148T a 4.04 %
                increase over the last day.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* market data  */}
      <div className="w-auto h-auto flex justify-center">
        <div className="w-[90%] h-auto  mt-6 marketcard">
          <div
            className={
              marketCapChange < 0
                ? "w-[300px] h-[130px] bg-red-200 mt-2 rounded-md  xl:w-[400px]  md:w-[250px]  lg:w-[300px]"
                : "w-[300px] h-[130px] bg-green-200 mt-2 rounded-md  xl:w-[400px]  md:w-[250px]  lg:w-[300px]"
            }
          >
            <p className="text-xl text-gray-500 ml-2 pt-2"> Market cap</p>
            <h1 className="text-2xl font-bold mt-4 ml-2">${marketCap}</h1>
            <div className="w-auto h-auto mt-2 ml-2">
              <p
                className={
                  marketCapChange < 0
                    ? " w-16 h-8 bg-red-400 text-red-700 text-center text-md font-bold pt-1 rounded-md"
                    : "w-16 h-8 bg-green-400 text-green-700 text-center text-md font-bold pt-1 rounded-md"
                }
              >
                {marketCapChange}%
              </p>
            </div>
          </div>

          <div
            className={
              volumeChange < 0
                ? "w-[300px] h-[130px] bg-red-200 mt-2 rounded-md xl:w-[400px] md:w-[250px] lg:w-[300px]"
                : "w-[300px] h-[130px] bg-green-200 mt-2 rounded-md xl:w-[400px] md:w-[250px] lg:w-[300px]"
            }
          >
            <p className="text-xl text-gray-500 ml-2 pt-2"> Vlume 24h</p>
            <h1 className="text-2xl font-bold mt-4 ml-2">${volume}</h1>
            <div className="w-auto h-auto mt-2 ml-2">
              <p
                className={
                  volumeChange < 0
                    ? " w-16 h-8 bg-red-400 text-red-800 text-center text-md font-bold pt-1 rounded-md"
                    : " w-16 h-8 bg-green-400 text-green-800 text-center text-md font-bold pt-1 rounded-md"
                }
              >
                {volumeChange}%
              </p>
            </div>
          </div>

          <div
            className={
              btcDominanceChange < 0
                ? "w-[300px]  h-[130px] bg-red-200 mt-2 rounded-md  xl:w-[400px] md:w-[250px] lg:w-[300px]"
                : "w-[300px]  h-[130px] bg-green-200 mt-2 rounded-md  xl:w-[400px] md:w-[250px] lg:w-[300px]"
            }
          >
            <p className="text-xl text-gray-500 ml-2 pt-2"> BTC Dominance</p>
            <h1 className="text-2xl font-bold mt-4 ml-2">{btcDominance}%</h1>
            <div className="w-auto h-auto mt-2 ml-2">
              <p
                className={
                  btcDominanceChange < 0
                    ? " w-16 h-8 bg-red-400 text-red-800 text-center text-md font-bold pt-1 rounded-md"
                    : " w-16 h-8 bg-green-400 text-green-800 text-center text-md font-bold pt-1 rounded-md"
                }
              >
                {btcDominanceChange}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptohero;
