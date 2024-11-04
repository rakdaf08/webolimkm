import { Medals } from "@/constants";
import React from "react";
import Image from "next/image";
import leaderboardData from "./leaderboardData"; // Adjust the path according to your file structure
import Gold from "@/public/gold.svg";
import Silver from "@/public/silver.svg";
import Bronze from "@/public/bronze.svg";
import Total from "@/public/total.svg";

const page = () => {
  const sortedLeaderboard = [...leaderboardData].sort(
    (a, b) => b.score - a.score
  );

  return (
    <div className="bg-[#F9F3BA]">
      <div className="h-[60vh] w-screen relative overflow-hidden z-0">
        <Image
          src="/Leaderboard/Background.svg"
          alt="Background Image"
          width={20}
          height={20}
          className="absolute z-0 h-full w-full object-cover"
        />

        <Image
          src="/Leaderboard/Top Left.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[400px] md:w-[550px] top-0 z-[1]"
        />
        <Image
          src="/Leaderboard/Top Right.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[600px] md:w-[800px] top-0 right-[0px] z-[2]"
        />
        <Image
          src="/Leaderboard/Bottom Left.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[400px] md:w-[650px] bottom-0 z-[1]"
        />
        <Image
          src="/Leaderboard/Bottom Right.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[400px] md:w-[600px] bottom-0 right-0 z-[1]"
        />

        <div className="absolute h-full w-screen flex justify-center items-center z-20">
          <div className="flex flex-col lg:flex-row items-center justify-evenly">
            <Image
              src="/Leaderboard/LEADER BOARD.svg"
              alt="Title"
              width={20}
              height={20}
              className="w-[200px] md:w-[250px] lg:w-[450px] order-2 lg:order-1 "
            />
            <Image
              src="/Leaderboard/Trophy.svg"
              alt="Title"
              width={20}
              height={20}
              className="w-[200px] md:w-[220px] lg:w-[350px] order-1 lg:order-2"
            />
          </div>
        </div>
      </div>
      <div className="container py-8 min-w-[300px] w-full mx-auto flex flex-col items-center justify-center z-30 overflow-x-auto">
        <div className="space-y-2 md:space-y-4 w-[85%] bonjour-font text-xxs sm:text-lg md:text-xl lg:text-2xl relative z-10">
          <div className="bg-[#EB5327] text-[#F9F3BA] rounded-xl">
            <div className="grid grid-cols-7 items-center pl-5 md:pl-10 py-1 md:py-2">
              <div className="">Urutan</div>
              <div className="col-span-2 ml-1 sm:ml-0">Himpunan</div>
              <div className="flex">
                <div className="bg-[#F6C765] rounded-full px-3 -mx-3 text-white">
                  G
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#BDBDBD] rounded-full px-3 -mx-3 text-white">
                  S
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#C97632] rounded-full px-3 -mx-3 text-white">
                  B
                </div>
              </div>
              <div>
                <Image
                  alt="Total"
                  src={Total}
                  width={70}
                  height={70}
                  className="-my-3 -ml-4 sm:-ml-7 md:-ml-8 h-auto"
                />
              </div>
            </div>
          </div>

          {sortedLeaderboard.map((row, index) => (
            <div
              key={index}
              className="bg-[#F6E091] rounded-xl py-3 md:py-4 shadow-md border border-gray-300 w-full"
            >
              <div className="grid grid-cols-7 items-center pl-5 md:pl-10">
                <div className="pl-2 xs:pl-3 md:pl-5">{index + 1}</div>
                <div className="flex items-center gap-1 sm:gap-2 col-span-2 ">
                  <Image
                    src={row.image}
                    alt="Logo"
                    width={40}
                    height={40}
                    className=" w-auto  xss:h-[10px]  xs:h-[15px] sm:h-[25px] md:h-[40px]  max-h-[50px] "
                  />
                  {row.himpunan}
                </div>
                <div>{row.gold}</div>
                <div>{row.silver}</div>
                <div>{row.bronze}</div>
                <div>{row.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
