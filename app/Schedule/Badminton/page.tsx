"use client";
import React, { useState } from "react";
import { schedule } from "./schedule";
import Image from "next/image";
import Bg from "@/public/schedule.png";
import Link from "next/link";
import bagan from "@/public/Bagan/Bagan Badminton.png";

// Define the types for the match and schedule
interface Match {
  sportName: string;
  tim1: string;
  image1: string;
  skor1: string;
  tim2: string;
  image2: string;
  skor2: string;
}

interface Schedule {
  round: number;
  match: Match[];
}

const SchedulePage: React.FC = () => {
  const [selectedRound, setSelectedRound] = useState(1); // Default to Week 1

  const handleRoundChange = (round: number) => {
    setSelectedRound(round);
  };

  // Extract matches for the selected week
  // Extract matches for the selected round directly
  // TypeScript should recognize `schedule` as an array of `Schedule`
  const selectedSchedule = schedule.find(
    (s): s is Schedule => s.round === selectedRound && s.match !== undefined
  );
  const selectedMatches = selectedSchedule?.match ?? [];

  // .flatMap((s: Schedule) => s.match)
  // .reduce((acc: Record<string, Match[]>, match: Match) => {
  //     if (!acc[match.tanggal]) {
  //         acc[match.tanggal] = [];
  //     }
  //     acc[match.tanggal].push(match);
  //     return acc;
  // }, {});

  // Convert the object back to an array for rendering

  return (
    <section>
      <div className="w-full min-h-screen h-full bg-[#F9F3BA]">
        <div className="p-4 md:p-10">
          <Link href="/Schedule">
            <h3 className="bonjour-font text-[#102F8E] text-xl">
              {" "}
              {"<"} Kembali{" "}
            </h3>
          </Link>
          <h3 className="bonjour-font text-[#102F8E] text-5xl"> Badminton </h3>
          <Image
            className="w-full mt-5"
            layout="responsive"
            src={bagan}
            alt="Bagan"
          />
        </div>
        <div className="p-4 md:p-10">
          <div className="flex space-x-4 mb-6 overflow-x-auto scrollbar-hide">
            {[1, 2, 3, 4, 5, 6].map((round) => (
              <button
                key={round}
                onClick={() => handleRoundChange(round)}
                className={`px-4 py-1 text-xs sm:text-base md:text-lg rounded-xl bonjour-font ${
                  selectedRound === round
                    ? "bg-[#1D48B9] text-white"
                    : "bg-white text-[#1D48B9] border-[3px] border-[#1D48B9]"
                }`}
              >
                {round == 1 && "32 Besar"}
                {round == 2 && "16 Besar"}
                {round == 3 && "8 Besar"}
                {round == 4 && "Semi-Final"}
                {round == 5 && "Bronze Match"}
                {round == 6 && "Final"}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              {selectedMatches.map((match, index) => (
                <div
                  key={index}
                  className="p-4 px-7 rounded-xl bg-[#F6E091] bonjour-font"
                >
                  <h3 className="text-2xl sm:text-3xl text-[#102F8E]">
                    {match.sportName}
                  </h3>
                  <hr className="border-[#102F8E] border-[1.5px] my-1"></hr>
                  <div className="flex flex-col mt-4 w-full space-y-2 text-[#102F8E] text-xs xs:text-base sm:text-lg md:text-base lg:text-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Image
                          src={match.image1}
                          width={35}
                          height={35}
                          alt="Logo"
                        />
                        <p> {match.tim1} </p>
                      </div>
                      <div>
                        <p> {match.skor1} </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Image
                          src={match.image2}
                          width={35}
                          height={35}
                          alt="Logo"
                        />
                        <p> {match.tim2} </p>
                      </div>
                      <div>
                        <p> {match.skor2} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulePage;
