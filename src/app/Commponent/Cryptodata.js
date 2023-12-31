"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Cryptodata = () => {
  const [datacoin, setDatacoin] = useState([""]);
  const [count, setCount] = useState(1);
  const [lodding, setLodding] = useState(false);
  const [totalepage, setTotalepage] = useState([""]);

  useEffect(() => {
    setLodding(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "ttjSdxfaNuvIJkjnRv/JDv436WUcXfC/t+uRulBE6O8=",
      },
    };

    fetch(
      `https://openapiv1.coinstats.app/coins?page=${count}&limit=100`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setDatacoin(data.result);
        setTotalepage(data.meta.itemCount);
        setLodding(false);
        console.log(data)
      });
  }, [count]);

  /* count  */

  const increase = () => {
    setCount(count + 1);
  };

  const decress = () => {
    setCount(count - 1);
    if(count === 1){
      setCount(1)
    }
  };
  return (
    <>
      <div className="grid justify-center mt-11 xl:mt-9 lg:mt-9 md:mt-9 sm:mt-9 gap-2">
        {lodding ? (
          <>
            <h1 className="text-center">Lodding...</h1>
          </>
        ) : (
          datacoin.map((res) => {
            return (
              <>
              <Link href={`/Alldataset/${res.id}`}>
              <div className="w-[150px] h-[220px] bg-white shadow-lg rounded-md justify-center flex-col cursor-pointer xl:duration-500 xl:hover:mt-[-10px] lg:duration-500 lg:hover:mt-[-10px] md:duration-500 md:hover:mt-[-10px]">
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
                  <h1 className="text-center mt-3  text-xl">{res.name}</h1>
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

      <div className="w-auto h-[100px]  flex justify-center items-center mt-[30px] xl:justify-end lg:justify-end md:justify-end">
        <div className="flex w-[300px] h-[50px] gap-12  xl:mr-20 lg:mr-20 md:mr-20 justify-center items-center">
          <button
            className="w-[100px] h-[50px] bg-gray-200 text-xl font-bold rounded-md"
            onClick={() => decress()}
          >
            -
          </button>
          <p className="text-md">
            {count}/{totalepage}
          </p>
          <button
            className="w-[100px] h-[50px] bg-gray-200 text-xl font-bold rounded-md"
            onClick={() => increase()}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Cryptodata;
