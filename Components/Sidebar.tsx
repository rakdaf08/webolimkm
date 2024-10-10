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
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar Content */}
      {isMounted && (
        <div
          className={`fixed top-0 left-0 w-full z-40 bg-[#7500A4] overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
          }`}
          style={{ maxHeight: isOpen ? "100vh" : "0", opacity: isOpen ? "1" : "0" }}
        >
          <div className="p-4">
            {/* Close Menu Icon */}
            <div className="flex justify-end items-center pt-4 pr-1">
              <Image
                src="/backmenu.svg"
                alt="close-menu"
                width={25}
                height={20}
                className="cursor-pointer"
                onClick={toggleSidebar}
              />
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



  

