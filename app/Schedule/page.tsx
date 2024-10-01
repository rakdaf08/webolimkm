import React from "react";
import Image from "next/image";

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

export default page;
