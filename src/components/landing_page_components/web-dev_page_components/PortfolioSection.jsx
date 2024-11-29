"use client";
import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React, { useEffect } from "react";
import "./slider.css";
import Slider from "./Slider";
export default function PortfolioSection() {
  return (
    <main className="relative w-full pb-15 md:pb-0">
      <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
          transform: "translateY(-50%)",
        }}
        className="mt-35 h-[40vh]  md:h-[60vh]"
      />
      <div className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-5 ">
        <div className="z-10 mt-8 text-center">
          <Reveal>
            <h1 className="text-2xl font-bold tracking-wide md:text-4xl ">
              Our Portfolio
            </h1>
          </Reveal>
        </div>

        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mt-3 min-h-[200px] w-full md:mx-auto md:min-h-[180px] md:w-full md:translate-y-10 md:py-6"
        >
          {/* aksdnsdalksmdklsamd */}
          <Slider />
        </div>
      </div>
    </main>
  );
}
