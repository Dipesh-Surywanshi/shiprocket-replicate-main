"use client";
import React, { useState } from "react";
import Card1 from "@/app/DeliveryBoost/Card1";
import Card2 from "@/app/DeliveryBoost/Card2";
import Card3 from "@/app/DeliveryBoost/Card3";
import Image from "next/image";
import Benefits from "./Benefits";

export default function DeliveryOverview() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => setShowComponent((prevState) => !prevState);

  return (
    <>
      <div className="bg-zinc-200 rounded p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-semibold text-xl">Overview</h1>
          </div>
          <div className="flex px-1 py-0.5 ml-2 items-center">
            <Image src="/graph.svg" alt="graph" height={30} width={30} />
            <h1 className="text-violet-500 text-sm">View Dashboard</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-2 w-full gap-2.5">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
      <div className="text-center mt-0">
        {showComponent && <Benefits />}
        <button
          className="bg-zinc-200 rounded-b-lg p-2.5 text-gray-600 text-xs mx-auto font-medium"
          onClick={handleClick}
        >
          {showComponent
            ? "Benefits you will miss until you subscribe ^"
            : "Benefits you will miss until you subscribe ˅"}
        </button>
      </div>
    </>
  );
}
