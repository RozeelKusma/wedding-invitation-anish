import React from "react";
import divider from "@/app/components/divider.png";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const DateSection = () => {
  return (
    <div className="md:px-10 xl:px-[200px] px-5 w-full font-poppins text-[#B70B9D] flex flex-col items-center justify-center h-full">
      <div className="flex flex-col xl:px-[80px] xl:py-[58px] w-[90%] px-[30px] py-[50px] gap-5 items-center bg-[#f1cfe9]">
        <Image src={divider} alt="divider" className="w-full md:my-10" />
        <div className="xl:text-6xl text-2xl font-allura">
          We&apos;re Getting Married
        </div>
        <div className="text-gray-600 text-center">
          With great joy and happiness, we are excited to announce our wedding
          celebration, which will take place on:
        </div>
        <div className="font-allura text-2xl md:text-6xl">Magh 4, 2081</div>
        <CountdownTimer />
        <div className="flex justify-center gap-5 flex-wrap">
          <div className="bg-slate-50 rounded-md shadow-md p-5 flex flex-col gap-5 justify-center text-center items-center min-w-[286px]">
            <div className="text-2xl md:text-4xl font-allura">
              Wedding Ceremony
            </div>
            <div className="">Magh 4, 2081 @ 8:00 AM</div>
            <div className="">At</div>
            <div className="">Sunrise Banquet, Basundhara</div>
            <a
              href="https://maps.app.goo.gl/UoezSZD1v6wo2NtJA"
              className="px-5 py-2 bg-[#ffe5e5] rounded-md"
              target="_blank"
            >
              Open Map
            </a>
          </div>
          <div className="bg-slate-50 rounded-md shadow-md p-5 flex flex-col gap-5 justify-center text-center items-center min-w-[286px]">
            <div className="text-2xl md:text-4xl font-allura">Party</div>
            <div className="">Magh 6, 2081 @ 2:00 PM</div>
            <div className="">At</div>
            <div className="">Bhaktapur Banquet, Bhaktapur</div>
            <a
              href="https://maps.app.goo.gl/5yozpSkBrMUYCqnJ8"
              className="px-5 py-2 bg-[#ffe5e5] rounded-md"
              target="_blank"
            >
              Open Map
            </a>
          </div>
        </div>
        <Image src={divider} alt="divider" className="w-full md:my-10" />
        <div className="flex xl:text-6xl text-xl">Have Something to say??</div>
        <div className="bg-slate-50 rounded-md shadow-md p-5 flex flex-col gap-5 justify-center text-center items-center">
          Call Us
          <a href="tel:+977-9851126723" className="text-[#B70B9D]">
            +977-9851126723
          </a>
          <a href="tel:+977-9841849958" className="text-[#B70B9D]">
            +977-9841849958
          </a>
          <a href="tel:+977-9860907481" className="text-[#B70B9D]">
            +977-9860907481
          </a>
        </div>
      </div>
    </div>
  );
};

export default DateSection;
