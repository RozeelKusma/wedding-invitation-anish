import Image from "next/image";
import React from "react";
import ganesh from "@/app/components/ganesh.png";
import hearts from "@/app/components/hearts.png";

const Hero = () => {
  return (
    <div className="text-[#B70B9D] bg-[#f1cfe9] max-w-screen flex flex-col items-center font-allura">
      <Image src={ganesh} alt="ganesh" height={200} />
      <div className={`flex flex-col items-center text-5xl md:text-8xl`}>
        <div className="">Our Wedding</div>
        <Image src={hearts} alt="hearts" className="max-h-[500px] w-auto" />
        <div className="pb-4">2081/10/04</div>
      </div>
    </div>
  );
};

export default Hero;
