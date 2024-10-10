import React from "react";
import Image from "next/image";
import Bg from "@/public/ABOUT_US.png";

const Page = () => {
  return (
    <main className="flex flex-col">
      <div className="flex">
        <Image 
          src={Bg}
          alt="Background Image"
          className="w-full h-auto"
        />
      </div>
      
      <div className="flex flex-row md:flex-row justify-between bg-[#F9F3BA] pt-4 pb-4">
        <div className="flex items-center ">
          <Image 
            src="/Aboutus/IMG_8187.png" 
            alt="Image 1"
            className="max-w-32 md:max-w-lg justify-start" 
            width={200} 
            height={100}
          />
        </div>

        <div className="flex flex-col gap-10 splither-font text-[#007559] px-4">
          <div>
            <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl">
              Lorem Ipsum
            </h1>
            <p className="font-medium text-lg md:text-2xl lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Nullam ac arcu in erat fermentum tristique. Maecenas condimentum quam a urna malesuada, eget feugiat nulla laoreet. Praesent dictum vehicula lacus. Aenean vitae urna sit amet nunc efficitur egestas. Integer at orci nec elit ullamcorper pulvinar id non augue. Sed tincidunt dolor sit amet lectus vulputate, ac sodales nisl tempor. Vestibulum non dolor eget nisi consectetur fermentum.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl flex justify-end">
              Lorem Ipsum
            </h1>
            <p className="font-medium text-lg md:text-2xl lg:text-3xl flex justify-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Nullam ac arcu in erat fermentum tristique. Maecenas condimentum quam a urna malesuada, eget feugiat nulla laoreet. Praesent dictum vehicula lacus. Aenean vitae urna sit amet nunc efficitur egestas. Integer at orci nec elit ullamcorper pulvinar id non augue. Sed tincidunt dolor sit amet lectus vulputate, ac sodales nisl tempor. Vestibulum non dolor eget nisi consectetur fermentum.
            </p>
          </div>
        </div>


        <div className="flex items-center justify-end">
          <Image 
            src="/Aboutus/No_border.png" 
            alt="Image 2"
            className="max-w-32 md:max-w-lg" // Adjust width for responsiveness
            width={200} 
            height={100}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;


