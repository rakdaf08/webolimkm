import { Medals } from "@/constants";
import React from "react";
import Image from "next/image";
import leaderboardData from "./leaderboardData"; // Adjust the path according to your file structure


const page = () => {
  return (
    <div className="bg-[#F9F3BA]">
      <div className="h-[60vh] w-screen z-20">
        <Image 
        src="/Leaderboard/Background.svg"
        alt="Background Image" 
        width={20}
        height={20} 
        className="relative z-0 h-full w-full object-cover"/>
        
        <Image 
        src="/Leaderboard/Top Left.svg"
        alt="Ornament"
        width={20}
        height={20}
        className="absolute w-[350px] md:w-[350px] lg:w-[400px] top-[90px] z-[1]"
        />
        <Image 
        src="/Leaderboard/Top Right.svg"
        alt="Ornament"
        width={20}
        height={20}
        className="absolute xs:w-[600px] sm:w-[700px] md:w-[800px] lg:w-[700px] top-[90px] sm:top-[90px] md:top-[90px] lg:top-[90px] -right-[0px] z-[2]"
        />
        <Image  
        src="/Leaderboard/Bottom Left.svg"
        alt="Ornament"
        width={20}
        height={20}
        className="absolute  xs:w-[300px] sm:w-[400px] md:w-[550px] lg:w-[650px] bottom-[162px] xl:bottom-[201px] z-[1]"
        />
        <Image 
        src="/Leaderboard/Bottom Right.svg"
        alt="Ornament"
        width={20}
        height={20}
        className="absolute w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px] bottom-[163px] sm:bottom-[163px] lg:bottom-[162px] xl:bottom-[201px] right-[0px] z-[1]"
        />

        <div className="absolute h-3/5 inset-0 flex justify-center items-center z-20">
          <div className="flex flex-col lg:flex-row items-center">
            <Image
              src="/Leaderboard/LEADER BOARD.svg"
              alt="Title"
              width={20}
              height={20}
              className="w-[200px] sm:w-[230px] md:w-[250px] lg:w-[450px] order-2 lg:order-1 relative top-16 sm:top-20 md:top-12 lg:top-24 lg:left-0"
            />
            <Image
              src="/Leaderboard/Trophy.svg"
              alt="Title"
              width={20}
              height={20}
              className="w-[200px] sm:w-[200px] md:w-[220px] lg:w-[350px] order-1 lg:order-2  relative top-20 sm:top-24 md:top-[80px] lg:top-24 lg:right-2 "
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4 font-bonjour text-xl">
          <div className="bg-[#EB5327] text-[#F9F3BA] rounded-lg p-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="">Urutan</div>
              <div className="">Himpunan</div>
              <div className="">Gold</div>
              <div className="">Silver</div>
              <div className="">Bronze</div>
              <div className="">Score</div>
            </div>
          </div>
          {leaderboardData.map((row, index) => (
            <div
              key={index}
              className="bg-[#F6E091] rounded-lg p-4 shadow-md border border-gray-300"
            >
              <div className="grid grid-cols-6 gap-4">
                <div>{row.urutan}</div>
                <div>{row.himpunan}</div>
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
