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
      className="flex fixed top-0 z-[100] justify-between items-center w-full padding-container h-[70px] md:h-[90px]"
      style={{
        backgroundImage: `url(${BgNav.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link href="/" className="pl-4 md:pl-8">
        <Image
          src="/logo-olim-km.ico"
          alt="logo"
          width={50}
          height={25}
          className="md:w-[60px] md:h-[60px]"
        />
      </Link>
      <ul className="hidden md:flex h-full gap-4 lg:gap-8 mx-3 pr-4 md:pr-[72px] items-center">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[#f2eff4] text-base lg:text-xl cursor-pointer pb-1.5 transition-all hover:font-bold splither-font"
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
