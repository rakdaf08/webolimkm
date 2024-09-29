import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-[60vh] w-screen z-20">
    <Image 
    src="/Schedule/Background.svg"
    alt="Background Image" 
    width={20}
    height={20} 
    className="relative z-0 h-full w-full object-cover"/>
    
    <Image 
    src="/Schedule/Top Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute xs:w-[700px] sm:w-[800px] md:w-[1000px] lg:w-[1400px]  top-[30px] sm:-top-[0px] md:-top-[50px] lg:-top-[85px] -left-[130px] sm:-left-[200px] md:-left-[250px] lg:-left-[360px]  z-[1]"
    />
    <Image 
    src="/Schedule/Top Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute xs:w-[600px] sm:w-[700px] md:w-[800px] lg:w-[1000px] -top-[140px] sm:-top-[240px] md:-top-[300px] lg:-top-[380px] -right-[90px] sm:-right-[130px] md:-right-[160px] lg:-right-[180px] z-[1]"
    />
    <Image  
    src="/Schedule/Bottom Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute  xs:w-[300px] sm:w-[400px] md:w-[550px] lg:w-[650px] bottom-[124px] sm:bottom-[111px] md:bottom-[92px] lg:bottom-[77px] xl:bottom-[116px] -left-[80px] sm:-left-[100px] md:-left-[160px] lg:-left-[170px] -rotate-2 z-[1]"
    />
    <Image 
    src="/Schedule/Bottom Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute xs:w-[250px] sm:w-[300px] md:w-[450px] lg:w-[500px] bottom-[163px] sm:bottom-[163px] lg:bottom-[162px] xl:bottom-[201px] right-[0px] z-[1]"
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
          className="w-[250px] sm:w-[250px] md:w-[350px] lg:w-[450px] order-1 lg:order-2 top-28 relative md:top-[120px] lg:top-40 lg:right-2 "
        />
      </div>
    </div>
    tests

    </div>
  );
};

export default page;
