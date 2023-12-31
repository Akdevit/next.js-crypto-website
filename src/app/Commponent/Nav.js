"use client";
import Image from "next/image";
import Icon from "../Images/icon.png";
import Menubaar from "../Images/burger-bar.png";
import Link from "next/link";
const Nav = () => {
  const hideMenushow = () => {
    const navitems = document.querySelector(".nav-item");
    navitems.classList.toggle("top-[10%]");
  };

  return (
    <>
      <div className="flex bg-white h-16 items-center justify-center shadow-sm ">
        <div className="w-[95%] h-auto flex items-center justify-between">
          <Link href="/">
            <div className="w-auto h-auto flex items-center">
              <Image
                className="h-16 w-16 cursor-pointer"
                src={Icon}
                alt="icon.png"
              />
              <h1 className="font-bold text-black text-xl">CryptoPulse</h1>
            </div>
          </Link>

          <div className=" nav-item duration-500 sm:static absolute bg-white sm:min-h-fit min-h-[60vh] left-0 top-[-100%] sm:w-auto w-full items-center px-5 ">
            <ul className=" flex sm:flex-row flex-col sm:items-center sm:gap-[2vw] gap-8 ">
              <li className="text-black cursor-pointer text-md hover:text-[#FF9332]">
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li className="text-black cursor-pointer text-md  hover:text-[#FF9332]">
                <Link href="/Crypto">Crypto</Link>
              </li>
              <li className="text-black cursor-pointer text-md  hover:text-[#FF9332]">
                {" "}
                <Link href="/News">News</Link>
              </li>
              <li className="text-black cursor-pointer text-md  hover:text-[#FF9332]">
                <Link href="/Contact">Contact</Link>
              </li>
              <li className="text-black cursor-pointer text-md w-[120px] h-[40px] rounded-md bg-[#FF9332] flex justify-center items-center">
              <Link href="/LogIn">   Log In/Sign Up</Link>
              </li>
          
            </ul>
          </div>

          <div className="w-auto h-auto items-center px-6 sm:hidden">
            <Image
              className=" text-black text-3xl cursor-pointer font-bold"
              onClick={() => hideMenushow()}
              src={Menubaar}
              width={40}
              height={40}
              alt="menubaar.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
