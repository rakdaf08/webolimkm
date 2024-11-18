"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import caturData from "./caturData";

const page = () => {
  const sortedLeaderboard = [...caturData].sort((a, b) => b.points - a.points);

  return (
    <section>
      <div className="w-full min-h-screen h-full bg-[#F9F3BA]">
        <div className="p-4 md:p-10">
          <Link href="/Schedule">
            <h3 className="bonjour-font text-[#102F8E] text-xl cursor-pointer">
              {"<"} Kembali
            </h3>
          </Link>
          <h3 className="bonjour-font text-[#102F8E] text-5xl">Catur</h3>
        </div>

        <div className="container py-8 min-w-[300px] w-full mx-auto flex flex-col items-center justify-center z-30 overflow-x-auto">
          <div className="space-y-4 w-full max-w-5xl bonjour-font text-sm sm:text-lg md:text-xl lg:text-2xl">
            <div className="bg-[#EB5327] text-[#F9F3BA] rounded-lg shadow-md">
              <div className="grid grid-cols-4 items-center pl-5 md:pl-10 py-2 font-semibold">
                <div className="text-center">Position</div>
                <div className="text-center">Himpunan</div>
                <div className="text-center">
                  <span className="bg-[#F6C765] text-white px-4 py-1 rounded-full">
                    Points
                  </span>
                </div>
                <div className="text-center">
                  <span className="bg-[#BDBDBD] text-white px-4 py-1 rounded-full">
                    BucT
                  </span>
                </div>
              </div>
            </div>

            {sortedLeaderboard.map((row, index) => (
              <div
                key={index}
                className="bg-[#F6E091] rounded-lg py-3 shadow-md border border-gray-300 w-full"
              >
                <div className="grid grid-cols-4 items-center pl-5 md:pl-10">
                  <div className="text-center font-medium">
                    {(() => {
                      const pos = index + 1;
                      if (pos >= 16 && pos <= 17) return "16-17";
                      if (pos >= 18 && pos <= 19) return "18-19";
                      if (pos >= 21 && pos <= 22) return "21-22";
                      return pos;
                    })()}
                  </div>

                  {/* Logo dan Nama Himpunan */}
                  <div className="flex items-center gap-2 justify-center">
                    <Image
                      src={row.image}
                      alt={`${row.himpunan} Logo`}
                      width={40}
                      height={40}
                      className="w-auto h-[25px] sm:h-[35px] md:h-[50px] max-h-[50px]"
                    />
                    <span className="font-medium text-[0.75rem] sm:text-sm sm:leading-5 md:text-base md:leading-6">
                      {row.himpunan}
                    </span>
                  </div>

                  <div className="text-center font-medium">{row.points}</div>
                  <div className="text-center font-medium">{row.BucT}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
