import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center w-full bg-[#6CE8B8] h-[175px]">
      <div className="padding-container max-container flex w-full ">
        <div className="flex items-start justify-center md:flex-row pl-20">
          <Link href="/">
            <Image src="/logo-olim-km.ico" alt="logo" width={74} height={29}/>
          </Link>
          <div className="flex flex-col pl-10 mt-2">
            <div className="flex items-start gap-7 md:flex-1">
                <Link href="/">
                  <Image src="/youtube.svg" alt="youtube logo" width={35} height={40}/>
                </Link>
                <Link href="/">
                  <Image src="/instagram.svg" alt="instagram logo" width={25} height={40}/>
                </Link>
                <Link href="/">
                  <Image src="/x.svg" alt="x logo" width={25} height={40}/>
                </Link>
            </div>
            <div className="text-white magical-stylish-font pt-5">
              Olimpiade KM ITB @ 2024, Bandung
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
