import React from "react";
import ganesh from "@/app/components/ganesh.png";
import Image from "next/image";

const CoupleSection = () => {
  return (
    <div className="md:px-10 xl:px-[200px] px-5  font-poppins text-[#B70B9D] flex flex-col items-center justify-center h-full">
      <div className="flex flex-col xl:px-[157px] xl:py-[58px] w-[90%] -mt-4 px-[30px] py-[50px] gap-4 items-center shadow-md rounded-md bg-[#ffe5e5]">
        <div className="text-center text-2xl">Meet the happy couple</div>
        <div className="text-center text-gray-600">
          Celebrate with us as we unite in love. Your presence will make this
          day truly special.
        </div>
        <div className="flex w-full justify-center gap-4 flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <Image src={ganesh} alt="ganesh" width={400} />
            <div className="md:text-2xl text-xl">Sagar Malla Thakuri</div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={ganesh} alt="ganesh" width={400} />
            <div className="md:text-2xl text-xl">Smarika Shahi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleSection;
