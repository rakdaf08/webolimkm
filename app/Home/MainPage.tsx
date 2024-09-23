import React from "react";
import Image from "next/image";

const MainPage = () => {
  return(
  <div className="flex flex-col ">
    <Image 
    src="/IMG_8115 1.svg"
    alt="Background Image" 
    width={20}
    height={20} 
    className="relative z-0 object-cover h-screen w-full"/>

    <Image 
    src="/Home/Top Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[500px] md:w-[800px] lg:w-[1200px] -top-[10px] md:-top-[100px] lg:-top-[200px] -left-[230px] md:-left-[360px] lg:-left-[550px] z-[1]"
    />

    <Image 
    src="/Home/Top Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[350px] md:w-[500px] lg:w-[600px] -right-5 -top-[37px] md:-top-28 lg:-top-28 z-[1]"
    />
    
    <Image 
    src="/Home/Bottom Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[350px] md:w-[500px] lg:w-[700px] -bottom-[214px] md:-bottom-[266px] lg:-bottom-[335px] -left-[80px] md:-left-28 lg:-left-44 z-[1]"
    />

    <Image 
    src="/Home/Bottom Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[350px] md:w-[400px] lg:w-[600px] -bottom-[126px] md:-bottom-[132px] lg:-bottom-[152px] -right-[70px] md:-right-[20px] lg:-right-[110px] z-[1]"
    />

    <div className="absolute inset-0 flex justify-center items-center z-20">
      <div className="flex flex-col lg:flex-row items-center">
        <Image
          src="/Home/Title.svg"
          alt="Title"
          width={20}
          height={20}
          className="w-[350px] md:w-[400px] lg:w-[700px] order-2 lg:order-1 relative top-16 lg:top-24 lg:left-20"
        />
        <Image
          src="/Mascot.svg"
          alt="Title"
          width={20}
          height={20}
          className="w-[350px] md:w-[450px] lg:w-[750px] order-1 lg:order-2 top-20 relative lg:right-24 -rotate-6"
        />
    </div>
  </div>
    
  </div>
  )
}

export default MainPage;
