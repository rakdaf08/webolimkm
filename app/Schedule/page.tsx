"use client";

import { useState } from "react";
import Bg from "@/public/schedule.png";
import Image from "next/image";
import Atletik from "@/public/Schedule/catletik.png";
import Badminton from "@/public/Schedule/cbadminton.png";
import Basket from "@/public/Schedule/cbasket.png";
import Catur from "@/public/Schedule/ccatur.png";
import Futsal from "@/public/Schedule/cfutsal.png";
import Ml from "@/public/Schedule/cml.png";
import Renang from "@/public/Schedule/crenang.png";
import TenisMeja from "@/public/Schedule/ctenismeja.png";
import Valo from "@/public/Schedule/cvalorant.png";
import Voli from "@/public/Schedule/cvoli.png";
import Men from "@/public/Schedule/MEN card.png";
import Women from "@/public/Schedule/WOMEN card.png";
import Link from "next/link";

// Mendefinisikan tipe untuk gambar modal
interface ModalImage {
  src: string;
  href: string;
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<ModalImage[]>([]); // Menggunakan tipe ModalImage

  const openModal = (images: ModalImage[]) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="w-full bg-[#F9F3BA] min-h-screen h-full">
        <Image src={Bg} alt="Bg" className="w-full" />
        <div className="p-10 md:px-16">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <h2 className="bonjour-font text-[#102F8E] text-3xl lg:text-5xl md:text-3xl text-left mb-2 md:mb-0">
              Pilih cabang olahraga
            </h2>
            <a
              className="bonjour-font text-[#102F8E] text-right text-base lg:text-5xl md:text-xl ml-0 md:ml-auto sm:text-base hover:scale-105 duration-200 transition-all"
              href="https://bit.ly/JadwalOlimXIIKMITB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here For the Time Schedule!
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/Schedule/Estafet">
              <div className="rounded-xl">
                <Image
                  src={Atletik}
                  alt="Logo Atletik"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="/Schedule/Badminton">
              <div className="rounded-xl">
                <Image
                  src={Badminton}
                  alt="Logo Badminton"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
            <div
              className="rounded-xl cursor-pointer"
              onClick={() =>
                openModal([
                  { src: Men.src, href: "/Schedule/BasketPutra" },
                  { src: Women.src, href: "/Schedule/BasketPutri" },
                ])
              }
            >
              <Image
                src={Basket}
                alt="Logo Basket"
                className="w-full hover:scale-105 duration-200 transition-all"
                loading="lazy"
              />
            </div>
            <Link href="/Schedule/Catur">
              <div className="rounded-xl">
                <Image
                  src={Catur}
                  alt="Logo Catur"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
            <div
              className="rounded-xl cursor-pointer"
              onClick={() =>
                openModal([
                  { src: Men.src, href: "/Schedule/FutsalPutra" },
                  { src: Women.src, href: "/Schedule/FutsalPutri" },
                ])
              }
            >
              <Image
                src={Futsal}
                alt="Logo Futsal"
                className="w-full hover:scale-105 duration-200 transition-all"
                loading="lazy"
              />
            </div>
            <Link href="/Schedule/MobileLegends">
              <div className="rounded-xl">
                <Image
                  src={Ml}
                  alt="Logo Mobile Legends"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
            <div
              className="rounded-xl cursor-pointer"
              onClick={() =>
                openModal([
                  { src: Men.src, href: "/Schedule/RenangPutra" },
                  { src: Women.src, href: "/Schedule/RenangPutri" },
                ])
              }
            >
              <Image
                src={Renang}
                alt="Logo Renang"
                className="w-full hover:scale-105 duration-200 transition-all"
                loading="lazy"
              />
            </div>
            <Link href="/Schedule/TenisMeja">
              <div className="rounded-xl">
                <Image
                  src={TenisMeja}
                  alt="Logo Tenis Meja"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="/Schedule/Valorant">
              <div className="rounded-xl">
                <Image
                  src={Valo}
                  alt="Logo Valorant"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="/Schedule/Voli">
              <div className="rounded-xl">
                <Image
                  src={Voli}
                  alt="Logo Voli"
                  className="w-full hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="flex xss:flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-0"
            onClick={(e) => e.stopPropagation()}
          >
            {modalImages.map((img, index) => (
              <Link href={img.href} key={index} onClick={closeModal}>
                <Image
                  src={img.src}
                  alt={`Image ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="w-80 h-96 cursor-pointer hover:scale-105 duration-200 transition-all"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
