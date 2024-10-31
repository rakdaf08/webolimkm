
"use client"
import React, { useState } from 'react';
import { schedule } from './schedule';
import Image from 'next/image';
import Bg from "@/public/schedule.png";

// Define the types for the match and schedule
interface Match {
    day: number;
    tanggal: string;
    lokasi: string;
    sportName: string;
    waktu: string;
    tim1: string;
    image1: string;
    skor1: string;
    tim2: string;
    image2: string;
    skor2: string;
}

interface Schedule {
    week: number;
    match: Match[];
}

const SchedulePage: React.FC = () => {
    const [selectedWeek, setSelectedWeek] = useState(1); // Default to Week 1

    const handleWeekChange = (week: number) => {
        setSelectedWeek(week);
    };

    // Extract matches for the selected week
    const matchesByDate = schedule
        .filter((s: Schedule) => s.week === selectedWeek)
        .flatMap((s: Schedule) => s.match)
        .reduce((acc: Record<string, Match[]>, match: Match) => {
            if (!acc[match.tanggal]) {
                acc[match.tanggal] = [];
            }
            acc[match.tanggal].push(match);
            return acc;
        }, {});

    // Convert the object back to an array for rendering
    const dates = Object.keys(matchesByDate);

    return (
      <section>
        <div className='w-full min-h-screen h-full bg-[#F9F3BA]'>
          <Image 
            src={Bg}
            alt='Bg'
            className='w-full'
          />
          <div className="p-4 md:p-10">
            <div className="flex space-x-4 mb-6">
                {[1, 2, 3, 4].map((week) => (
                    <button
                        key={week}
                        onClick={() => handleWeekChange(week)}
                        className={`px-4 py-1 text-xs sm:text-base md:text-lg rounded-xl bonjour-font ${
                            selectedWeek === week ? 'bg-[#1D48B9] text-white' : 'bg-white text-[#1D48B9] border-[3px] border-[#1D48B9]'
                        }`}
                    >
                        Week {week}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {dates.map((date) => (
                    <div key={date}>
                        <h2 className="text-3xl bonjour-font mb-2">{date}</h2>
                        <div className='grid md:grid-cols-2 gap-3'>
                          {matchesByDate[date].map((match, index) => (
                              <div key={index} className="p-4 px-7 rounded-xl bg-[#F6E091] bonjour-font">
                                  <h3 className="text-2xl sm:text-3xl text-[#102F8E]">{match.sportName}</h3>
                                  <p className="text-sm sm:text-lg text-[#102F8E]">Lokasi: {match.lokasi}</p>
                                  <hr className='border-[#102F8E] border-[1.5px] my-1'></hr>
                                  <div className='flex mt-4 w-full'>
                                    <div className='w-[15%] flex flex-col items-center xs:border-r-2 xs:border-[#102F8E] px-2'>
                                      <p className="text-[#102F8E] text-sm xs:text-xl sm:text-2xl md:text-xl lg:text-3xl">{match.waktu}</p>
                                      <p className="text-[#102F8E] text-xs xs:text-base md:text-sm lg:text-lg">WIB</p>
                                    </div>
                                    <div className='w-[85%] flex flex-col space-y-2 pl-4 justify-center text-[#102F8E] text-xs xs:text-base sm:text-lg md:text-base lg:text-lg'>
                                      <div className='flex justify-between'>
                                        <div className='flex gap-1'>
                                          <Image src={match.image1} width={20} height={20} alt="Logo"/>
                                          <p> {match.tim1} </p>
                                        </div>
                                        <div>
                                          <p> {match.skor1} </p>
                                        </div>
                                      </div>
                                      <div className='flex justify-between'>
                                        <div className='flex gap-1'>
                                          <Image src={match.image2} width={20} height={20} alt="Logo"/>
                                          <p> {match.tim2} </p>
                                        </div>
                                        <div>
                                          <p> {match.skor2} </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
      </section>
    );
  }
const page = () => {
  return (
    <div className="min-h-[60vh] w-screen relative overflow-hidden m-0 z-20">
    <Image 
    src="/Schedule/Background.svg"
    alt="Background Image" 
    layout="fill"
    objectFit="cover"
    className="absolute scale-105 z-0 h-full w-full object-cover "/>
    
    <Image 
    src="/Schedule/Top Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[500px] md:w-[600px] top-0"
    />
    <Image 
    src="/Schedule/Top Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[700px] md:w-[800px] top-0 right-0"
    />
    <Image  
    src="/Schedule/Bottom Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[400px] md:w-[550px] bottom-0 left-0"
    />
    <Image 
    src="/Schedule/Bottom Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[400px] md:w-[500px] bottom-0 right-[0px] z-[1]"
    />

    <div className="absolute h-3/5 inset-0 flex justify-center items-center z-20">
      <div className="flex flex-col lg:flex-row items-center">
        <Image
          src="/Schedule/Title.svg"
          alt="Title"
          width={20}
          height={20}
          className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[650px] order-2 lg:order-1 relative top-8 md:-top-2 lg:top-24 lg:left-0"
        />
        <Image
          src="/Schedule/Ballracket.svg"
          alt="Title"
          width={20}
          height={20}
          className="w-[250px] sm:w-[350px] md:w-[450px] order-1 lg:order-2 top-28 relative md:top-[120px] lg:top-40 lg:right-2 "
        />
      </div>
    </div>
    tests

    </div>
  );
};

export default SchedulePage;
