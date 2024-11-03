import React from "react";
import Image from "next/image";
import Bg from "@/public/ABOUT_US.png";

const Page = () => {
  return (
    <main className="flex flex-col">
      <div className="w-full h-auto">
        <Image src={Bg} alt="Background Image" className="w-full h-auto" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-[#F9F3BA] p-6 md:p-12">
        <div className="splither-font text-[#3E8C72] text-center md:text-left">
          <div className="">
            <Image
              src="/Aboutus/OLIMPIADE_XII_KM_ITB.svg"
              alt="Mascot Image"
              width={200}
              height={200}
              className="w-full h-auto mx-auto hover:scale-105 duration-200 transition-all"
            />
          </div>
          <div className="flex flex-col gap-4 text-[16px] md:text-[20px] lg:text-[32px] hover:scale-105 duration-200 transition-all">
            <p>
              Dengan semangat membara, para atlet dari penjuru kampus akan
              segera bertarung dalam ajang paling begengsi di bumi Ganesha.
            </p>
            <p>
              Edisi kali ini menghadirkan 12 mata lomba yang meliputi olahraga,
              e-sports, dan pentas kesenian. Dilengkapi juga dengan event Fun
              Run, Olimpidio, dan ITBerjersey yang bisa kamu ikuti untuk
              meramaikan euforia karnival tahun ini!
            </p>
            <p>
              Ayo ramaikan karnival penuh kelap kelip, dengan daftarkan tim kamu
              dan raih juara demi kebanggan HMPS!
            </p>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center mt-8 md:mt-0">
          <div className="xs:w-[200px] md:w-[300px] lg:w-[400px]">
            <Image
              src="/Aboutus/Group_33.png"
              alt="Mascot Image"
              width={500}
              height={500}
              className="w-full h-auto mx-auto hover:scale-105 duration-200 transition-all"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
