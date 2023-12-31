"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
const Hometable = () => {
  const [coindata, setCoindata] = useState([""]);
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

    fetch("https://openapiv1.coinstats.app/coins?limit=10", options)
      .then((response) => response.json())
      .then((deta) => {
        // console.log(deta.result);
        setCoindata(deta.result);
        setLodding(false);
      });
  }, []);

  return (
    <>
      <div className="w-auto h-auto flex  justify-center sm:mt-28 md:mt-0  ">
        <div className="w-[80%] md:w-[90%] lg:w-[90%] xl:w-[60%] h-auto bg-white mt-7  overflow-hidden overflow-x-scroll border-solid border-2 border-gray-100 rounded-sm no-scrollbar ">
          <table className="w-full text-sm xl:w-full lg:w-full md:w-full sm:w-full">
            <thead className=" h-[100px]text-xs text-gray-700 bg-white ">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">1 hour change</th>
                <th scope="col">1 D</th>
              </tr>
            </thead>
            <tbody className=" h-[50px] border-b dark:bg-gray-800 dark:border-gray-700 ">
              {lodding ? (
                <>
                  <h1 className="text-center">Lodding....</h1>
                </>
              ) : (
                coindata.map((res) => {
                  return (
                    <>
                      
                      <tr className="hover:bg-gray-200 cursor-pointer duration-500">
                        <th className="w-[100px] xl:ml-6">{res.rank}</th>
                        <td className="w-[300px]">
                        <Link href={`/Alldataset/${res.id}`}>
                          <div className="w-[200px] md:w-[300px] lg:w-[400px] xl:w-[200px] xl:ml-12 h-auto flex ml-3 gap-2 items-center pt-2 pb-2">
                            <Image
                              className="w-10 h-10"
                              width={100}
                              height={100}
                              src={res.icon}
                              alt="coin.png"
                            />
                            <h1 className="text-xl ">{res.name}</h1>
                            <p className="text-gray-500 text-md">
                              {res.symbol}
                            </p>
                          </div>
                          </Link>
                        </td>
                        <td className="text-center text-md w-[100px] xl:w-[300px]">
                          ${Math.trunc(res.price)}
                        </td>
                        <td className=" text-center text-md font-bold ">
                          <div className="w-[200px]  h-auto flex justify-center items-center">
                            <p
                              className={
                                res.priceChange1h < 0
                                  ? "w-[50px]  bg-red-200 text-red-800"
                                  : "w-[50px] bg-green-200 text-green-800"
                              }
                            >
                              {res.priceChange1h}
                            </p>
                          </div>
                        </td>
                        <td className=" text-center text-md font-bold  ">
                          <div className="w-[200px] lg:w-[100px] md:w-[100px] xl:w-[200px] h-auto flex justify-center items-center">
                            <p
                              className={
                                res.priceChange1d < 0
                                  ? " w-[50px] bg-red-200 text-red-800"
                                  : "w-[50px] bg-green-200 text-green-800"
                              }
                            >
                              {res.priceChange1d}
                            </p>
                          </div>
                        </td>
                      </tr>
                     
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Hometable;
