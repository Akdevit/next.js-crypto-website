"use client";
import React, { useEffect, useState } from "react";
import Alldatasethero from "@/app/Commponent/Alldatasethero";
import Alldatagraf from "@/app/Commponent/Alldatagraf";
import Alldatamarketdata from "@/app/Commponent/Alldatamarketdata";
import Footer from "@/app/Commponent/Footer";

const Page = ({ params }) => {
  const id = params.id;

  const [detahero, setDetahero] = useState([""]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "ttjSdxfaNuvIJkjnRv/JDv436WUcXfC/t+uRulBE6O8=",
      },
    };

    fetch(`https://openapiv1.coinstats.app/coins/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)
        setDetahero(response);
      });
  }, [id]);

  return (
    <>
      <Alldatasethero detahero={detahero} />
      <Alldatagraf detahero={detahero} />
      <Alldatamarketdata detahero={detahero} />
      <Footer />
    </>
  );
};

export default Page;
