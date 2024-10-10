"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Sidebar from "./Sidebar";
import BgNav from "@/public/Navbar.png";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center w-full max-container padding-container relative h-[90px]"
      style={{
        backgroundImage: `url(${BgNav.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link href="/" className="pl-4 md:pl-8">
        <Image src="/logo-olim-km.ico" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden md:flex h-full gap-6 lg:gap-12 mx-3 pr-4 md:pr-[72px] items-center">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[#f2eff4] text-lg lg:text-2xl cursor-pointer pb-1.5 transition-all hover:font-bold splither-font"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="md:hidden pr-4">
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;