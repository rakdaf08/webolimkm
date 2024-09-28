import { Medals } from "@/constants";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="h-screen z-20">
    <Image 
    src="/Leaderboard/Background.svg"
    alt="Background Image" 
    width={20}
    height={20} 
    className="relative z-0 h-3/5 w-full object-cover"/>
    
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
    className="absolute  xs:w-[300px] sm:w-[400px] md:w-[550px] lg:w-[650px] bottom-[162px] z-[1]"
    />
    <Image 
    src="/Leaderboard/Bottom Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px] bottom-[163px] sm:bottom-[163px] lg:bottom-[162px] right-[0px] z-[1]"
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
    tests

    </div>
      
      {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-fixed w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-white uppercase bg-slate-100">
            <tr>
              <th scope="col" className="px-10 py-3 text-black">
                Rank
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                HMPS
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Gold Medals
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Silver Medals
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Bronze Medals
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {Medals.map((link) => (
                <td key={link.key[0]}>{link.label[0]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default page;
