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
    src="/Top Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[50%] lg:w-[1200px] lg:-top-[200px] -left-[550px] z-[1]"
    />

    <Image 
    src="/Top Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[50%] lg:w-[600px] -right-5 -top-28 z-[1]"
    />
    
    <Image 
    src="/Bottom Left.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[50%] lg:w-[700px] -bottom-[335px] -left-44 z-[1]"
    />

    <Image 
    src="/Bottom Right.svg"
    alt="Ornament"
    width={20}
    height={20}
    className="absolute w-[50%] lg:w-[600px] -bottom-[152px] -right-[110px] z-[1]"
    />

    <div className="absolute inset-0 flex justify-center items-center z-20">
      <div className="flex flex-col lg:flex-row items-center">
        <Image
          src="/Title.svg"
          alt="Title"
          width={20}
          height={20}
          className="w-[50%] md:w-[500px] lg:w-[700px] order-2 lg:order-1 relative top-24 left-20"
        />
        <Image
          src="/Mascot.svg"
          alt="Title"
          width={20}
          height={20}
          className="w-[200px] md:[500px] lg:w-[750px] order-1 lg:order-2 top-20 relative right-24 -rotate-6"
        />
    </div>
  </div>
    
  </div>
  )
}

export default MainPage;
