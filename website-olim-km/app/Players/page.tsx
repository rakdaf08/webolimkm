"use client";

import { Himpunan } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="justify-center">
      <h1>PLAYER LIST</h1>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 text-white hover:bg-gray-700 rounded-lg font-medium text-sm px-10 py-1 text-center inline-flex items-center border-gray-90 border-2 focus:ring-2 focus:outline-none focus:ring-gray-600"
      >
        Pilih Himpunan
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            {Himpunan.map((link) => (
              <li>
                <Link
                  href={link.href}
                  key={link.key}
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
