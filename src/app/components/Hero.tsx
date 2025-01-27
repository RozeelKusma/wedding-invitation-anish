import Image from "next/image";
import React from "react";
import ganesh from "@/app/components/ganesh.png";
import img4 from "@/app/img4.jpeg";

const Hero = () => {
  return (
    <div className="text-[#9b2289]  h-screen max-w-screen flex flex-col items-center font-allura bg-[url(./img1.jpg)] bg-center bg-cover bg-no-repeat relative font-bold">
      <div className="bg-[#f1cfe971] absolute  h-screen w-full max-w-screen flex flex-col items-center font-allura ">
        <Image src={ganesh} alt="ganesh" height={200} />
        <div className={`flex flex-col items-center text-5xl md:text-8xl`}>
          <div className=" ">Our Wedding</div>
          <div className="flex gap-4 flex-wrap">
            <Image
              src={img4}
              alt="hearts"
              className="max-h-[300px] md:max-h-[500px] w-auto rounded-md"
            />
          </div>

          <div className=" py-4 ">2081/10/25</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
