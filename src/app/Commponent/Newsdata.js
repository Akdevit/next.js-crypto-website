"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Newsdata = ({}) => {
  const [deta, setDeta] = useState([""]);
  const [page, setPage] = useState(1);
  const [totalepage, setTotalepage] = useState([""]);
  const [lodding, setLodding] = useState(false);
  // const [inputdata, setInputdata] = useState('');
  const [url, setUrl] = useState(
    "https://openapiv1.coinstats.app/news?&limit=100"
  );

  useEffect(() => {
    setLodding(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "ttjSdxfaNuvIJkjnRv/JDv436WUcXfC/t+uRulBE6O8=",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((ndata) => {
        setTotalepage(ndata.total);
        setDeta(ndata.result);
        setLodding(false);
        console.log(ndata);
      });
  }, [page, url]);

  const decress = () => {
    setUrl(`https://openapiv1.coinstats.app/news?page=${page}&limit=100`);
    setPage(page - 1);
    if (page === 1) {
      setPage(1);
    }
  };

  const incress = () => {
    setUrl(`https://openapiv1.coinstats.app/news?page=${page}&limit=100`);
    setPage(page + 1);
  };

  return (
    <>
      {/* news hero section  */}
      <div className="h-auto w-auto flex justify-center items-center mt-7">
        <div className="w-[90%] h-auto  flex justify-between items-center">
          <h1 className="text-2xl ">News </h1>

          {/* <div className="w-[200px] h-auto bg-gray-100 flex justify-around rounded-sm shadow-sm ">
            <input
              className="w-[150px] h-[30px] outline-none border-none bg-transparent"
              type="search"
              placeholder="Enter your news name"
              onKeyDown={(e) => setInputdata(e.target.value)}
            />
            <button className="font-bold" onClick={() => Searchbtn()}>
              Get
            </button>
          </div> */}
        </div>
      </div>

      {/* News data */}
      <div className="w-auto h-auto flex justify-center mt-7 ">
        <div className="w-[90%] h-auto  flex-col ">
          {lodding ? (
            <>
              <h1 className="text-center">Lodding...</h1>
            </>
          ) : (
            deta.map((res) => {
              return (
                <>
                  <div className="w-full h-[130px] lg:h-[200px]  flex  rounded-sm mt-2">
                    <Image
                      className="w-[150px] lg:w-[400px] h-auto sm:w-[250px] md:w-[350px] shadow-md"
                      src={res.imgUrl}
                      width={100}
                      height={100}
                      alt="news.jpg"
                      quality={100}
                    />

                    <div className="w-[250px]  lg:h-[200px] lg:w-[450px] sm:w-[300px] h-[130px]  md:w-[350px] shadow-md">
                      <p className=" lg:text-[20px] text-center text-sm lg:mt-2 h-[80px] overflow-hidden">
                        {res.title}
                      </p>
                      <div className="w-auto h-auto  mt-2">
                        <button className=" w-16 h-8 bg-[#FF9332] rounded-md  ml-2">
                          <a href={res.link}> Open</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
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
            {page}/{totalepage}
          </p>
          <button
            className="w-[100px] h-[50px] bg-gray-200 text-xl font-bold rounded-md"
            onClick={() => incress()}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsdata;
