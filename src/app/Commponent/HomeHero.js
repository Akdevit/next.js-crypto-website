"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
const HomeHero = () => {
  const [datacoin, setDatacoin] = useState([""]);
  const [lodding, setLodding] = useState(false);

  useEffect(() => {
    setLodding(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "ttjSdxfaNuvIJkjnRv/JDv436WUcXfC/t+uRulBE6O8=",
      },
    };

    fetch("https://openapiv1.coinstats.app/coins?limit=4", options)
      .then((response) => response.json())
      .then((data) => {
        setDatacoin(data.result);
        // console.log(data.result);
        setLodding(false);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-auto xl:h-[600px] sm:h-[600px] md:h-[600px] md:items-baseline lg:h-[600px] ">
        <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[50%] xl:h-[500px] mt-7 ">
          <h1 className="text-3xl sm:text-4xl sm:mt-6 md:text-6xl xl:text-6xl font-bold text-center">
            Manage Your Crypto, DeFi & NFTs From One Place
          </h1>
          <p className="text-center text-gray-400 mt-3 ">
            Connect your entire portfolio to track, buy, swap, and stake your
            assets.
          </p>
          {/* show live data  */}
          <div className="grid justify-center mt-9 xl:mt-9 lg:mt-9 md:mt-9 sm:mt-9 gap-2">
            {lodding ? (
              <>
                <h1 className="text-center">Lodding....</h1>
              </>
            ) : (
              datacoin.map((res) => {
                return (
                  <>
                    <Link href={`/Alldataset/${res.id}`}>
                      <div className="w-[150px] h-[200px] bg-white shadow-lg rounded-md justify-center flex-col cursor-pointer xl:duration-500 xl:hover:mt-[-10px] lg:duration-500 lg:hover:mt-[-10px] md:duration-500 md:hover:mt-[-10px]">
                        <div className="flex justify-center">
                          <div className="w-16 h-16 rounded-full mt-2">
                            <Image
                              className="object-cover"
                              width={100}
                              height={100}
                              src={res.icon}
                              alt="coin.png"
                            />
                          </div>
                        </div>
                        <h1 className="text-center mt-3  text-xl">
                          {res.name}
                        </h1>
                        <p className="text-center text-gray-400 mt-2">
                          price : ${Math.trunc(res.price)}
                        </p>
                        <p
                          className={
                            res.priceChange1h < 0
                              ? "text-red-700 font-bold text-center mt-4"
                              : "text-green-700 font-bold text-center mt-4"
                          }
                        >
                          {" "}
                          {res.priceChange1h + "%"}
                        </p>
                      </div>
                    </Link>
                  </>
                );
              })
            )}
          </div>

          <div className="w-auto h-auto flex items-center justify-center mt-10">
            <Link href="/Crypto">
              <button className="w-[200px] h-12 bg-[#FF9332] rounded-md text-lg hover:bg-orange-200 duration-500">
                Exploere more{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
