"use client";

import { useState } from "react";
import Bg from "@/public/schedule.png";
import Image from "next/image";
import Atletik from "@/public/catletik.svg";
import Badminton from "@/public/cbadminton.svg";
import Basket from "@/public/cbasket.svg";
import Catur from "@/public/ccatur.svg";
import Futsal from "@/public/cfutsal.svg";
import Ml from "@/public/cml.svg";
import Renang from "@/public/crenang.svg";
import TenisMeja from "@/public/ctenis.svg";
import Valo from "@/public/cvalo.svg";
import Voli from "@/public/cvoli.svg";
import Men from "@/public/Schedule/MEN card.svg";
import Women from "@/public/Schedule/WOMEN card.svg";
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
          <h2 className="bonjour-font text-[#102F8E] text-3xl md:text-5xl">
            Pilih cabang olahraga
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/Schedule/Atletik">
              <div className="rounded-xl">
                <Image
                  src={Atletik}
                  alt="Logo Atletik"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="/Schedule/Badminton">
              <div className="rounded-xl">
                <Image
                  src={Badminton}
                  alt="Logo Badminton"
                  className="w-full"
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
                className="w-full"
                loading="lazy"
              />
            </div>
            <Link href="/Schedule/Catur">
              <div className="rounded-xl">
                <Image
                  src={Catur}
                  alt="Logo Catur"
                  className="w-full"
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
                className="w-full"
                loading="lazy"
              />
            </div>
            <Link href="/Schedule/MobileLegends">
              <div className="rounded-xl">
                <Image
                  src={Ml}
                  alt="Logo Mobile Legends"
                  className="w-full"
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
                className="w-full"
                loading="lazy"
              />
            </div>
            <Link href="/Schedule/TenisMeja">
              <div className="rounded-xl">
                <Image
                  src={TenisMeja}
                  alt="Logo Tenis Meja"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="/Schedule/Valorant">
              <div className="rounded-xl">
                <Image
                  src={Valo}
                  alt="Logo Valorant"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="/Schedule/Voli">
              <div className="rounded-xl">
                <Image
                  src={Voli}
                  alt="Logo Voli"
                  className="w-full"
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
          <div className="flex gap-0" onClick={(e) => e.stopPropagation()}>
            {modalImages.map((img, index) => (
              <Link href={img.href} key={index} onClick={closeModal}>
                <Image
                  src={img.src}
                  alt={`Image ${index + 1}`}
                  width={600}
                  height={600}
                  className="w-96 h-96 cursor-pointer"
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
