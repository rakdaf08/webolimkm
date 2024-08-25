"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="transition-all xs:flex lg:hidden">
      <div className="flex justify-center">
        <div className="">
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {isOpen && (
        <div>
          <div className="fixed top-0 right-0 z-10 h-screen p-4 overflow-y-auto transition ease-in-out duration-100 bg-white border border-black">
            <div className="flex justify-between items-center">
              <span className="text-base font-semibold text-gray-600">
                MENU
              </span>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer font-bold text-xl"
              >
                x
              </span>
            </div>

            <div className="py-4">
              <ul className="grid gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="text-base text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
