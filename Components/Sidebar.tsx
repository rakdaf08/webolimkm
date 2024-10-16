"use client";

import React, { useState, useCallback, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted on the client before rendering the sidebar
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="mr-1 xs:flex lg:hidden">
      {/* Hamburger Menu Icon */}
      <div className="flex justify-center">
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar Content */}
      {isMounted && (
        <div
          className={`fixed top-0 right-0 h-screen w-[250px] z-40 bg-[#7500A4] overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <div className="p-4">
            {/* Close Menu Icon */}
            <div className="flex justify-end items-center pt-4 pr-1">
              <div
                className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                onClick={toggleSidebar}
              >
                <Image
                  src="/backmenu.svg"
                  alt="close-menu"
                  width={18}
                  height={18}
                />
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="pt-7 grid gap-5 mt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-2xl text-white hover:font-bold splither-font"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
