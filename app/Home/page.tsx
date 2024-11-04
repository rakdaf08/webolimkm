"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Piala from "@/public/Piala Euforia 1.svg";
import leaderboardData from "../Leaderboard/leaderboardData";
import Gold from "@/public/gold.svg";
import Silver from "@/public/silver.svg";
import Bronze from "@/public/bronze.svg";
import Total from "@/public/total.svg";
import Link from "next/link";
import TimelineTitle from "@/public/titletimeline.svg";
import Timeline from "@/public/timeline1.svg";
import ComingSoon from "@/public/COMING SOON.svg";

const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-[#F9F3BA]">
    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#7500A4]"></div>
  </div>
);

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const sortedLeaderboard = [...leaderboardData].sort(
    (a, b) => b.score - a.score
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <section>
      <div className="flex flex-col min-h-screen h-full overflow-hidden w-full bg-[#F9F3BA] relative">
        <Image
          src="/IMG_8115 1.svg"
          alt=""
          width={20}
          height={20}
          className="z-0 object-cover h-screen w-full"
        />
        <Image
          src="/Home/Top Left.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute left-0 w-[550px]"
        />
        <Image
          src="/Home/Top Right.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[500px] right-0"
        />
        <Image
          src="/Home/Bottom Left.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[400px] md:w-[500px] -bottom-14 left-0"
        />
        <Image
          src="/Home/Bottom Right.svg"
          alt="Ornament"
          width={20}
          height={20}
          className="absolute w-[400px] md:w-[500px] right-0 -bottom-14"
        />
        <div className="absolute flex justify-center items-center z-20 xs:left-16 sm:left-32 md:left-20 top-20 md:top-32 lg:top-20 xl:top-10">
          <div className="grid md:grid-cols-2 items-center">
            <Image
              src="/Home/Title.svg"
              alt="Title"
              width={20}
              height={20}
              className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[700px] order-2 md:order-1 relative left-10"
            />
            <Image
              src="/Mascot.svg"
              alt="Title"
              width={20}
              height={20}
              className="w-[400px] md:w-[450px] lg:w-[750px] order-1 relative -rotate-6 md:-left-16 lg:-left-24"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1D48B9] px-5 py-10 md:py-20 relative overflow-y-hidden md:pl-14">
        <Image
          src="/Home/LEADERBOARD.svg"
          alt="Leaderboard Title"
          width={20}
          height={20}
          className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] relative z-10"
        />
        <Image
          src={Piala}
          alt="Piala"
          width={600}
          height={600}
          className="right-0 lg:top-20 xl:top-10 absolute w-[400px] lg:w-[500px] xl:w-[600px] z-0"
        />

        <div className="container py-8 w-[90%] md:w-[75%] lg:w-[65%] min-w-[350px]">
          <div className="space-y-2 md:space-y-4 bonjour-font text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl relative z-10">
            <div className="bg-[#EB5327] text-[#F9F3BA] rounded-xl">
              <div className="grid grid-cols-7 items-center pl-5 md:pl-10 py-1 md:py-2 min-w-[350px]">
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
                <div className="">
                  <Image
                    alt="Total"
                    src={Total}
                    width={70}
                    height={70}
                    className="-my-3 -ml-4 sm:-ml-7 md:-ml-8"
                  />
                </div>
              </div>
            </div>
            {sortedLeaderboard.slice(0, 3).map((row, index) => (
              <div
                key={index}
                className="bg-[#F6E091] rounded-xl py-3 md:py-4 shadow-md border border-gray-300"
              >
                <div className="grid grid-cols-7 items-center pl-5 md:pl-10">
                  <div className="pl-2.5 md:pl-5">{index + 1}</div>{" "}
                  <div className="flex items-center gap-1 sm:gap-2 col-span-2">
                    <Image
                      src={row.image}
                      alt="Logo"
                      width={40}
                      height={40}
                      className="w-auto h-[20px] md:h-[30px] max-h-[40px]"
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
            <div className="bg-[#F6E091] bonjour-font text-center py-2 md:py-4 rounded-xl cursor-pointer hover:bg-[#cdbb79]">
              <Link href="/Leaderboard" key="leaderboard">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full overflow-hidden w-full bg-[#F9F3BA] relative p-10">
        <Image
          src={TimelineTitle}
          alt="Title"
          width={20}
          height={20}
          className="w-[400px]"
        />
        <div className="grid md:grid-cols-2 gap-7">
          <Image
            src={Timeline}
            alt="Title"
            width={20}
            height={20}
            className="w-full"
          />
        </div>
        <Image
          src={ComingSoon}
          alt="Title"
          width={20}
          height={20}
          className="w-full mx-auto"
        />
      </div>
    </section>
  );
};

export default MainPage;
