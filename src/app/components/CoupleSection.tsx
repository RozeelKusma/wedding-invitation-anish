import React from "react";
import Image from "next/image";
import img2 from "@/app/img2.jpg";
import img5 from "@/app/img5.jpeg";

const CoupleSection = () => {
  return (
    <div className="md:px-10 xl:px-[200px] px-5 font-poppins text-[#B70B9D] flex flex-col items-center justify-center h-full">
      <div className="flex flex-col xl:px-[157px] xl:py-[58px] w-[90%] -mt-4 px-[30px] py-[50px] gap-4 items-center shadow-md rounded-md bg-[#ffe5e5]">
        <div className="text-center text-2xl">Meet the happy couple</div>
        <div className="text-center text-gray-600">
          Celebrate with us as we unite in love. Your presence will make this
          day truly special.
        </div>
        <div className="flex w-full justify-center gap-4 flex-wrap">
          <Image
            src={img2}
            alt="ganesh"
            className="max-h-[500px] w-auto rounded-md"
          />
          <Image
            src={img5}
            alt="ganesh"
            className="max-h-[500px] w-auto rounded-md"
          />
        </div>
        <div className="text-[30px] sm:text-[40px] text-center xl:leading-[44px] font-allura mt-4 xl:text-[40px]">
          Anish Dahal <br /> Weds <br /> Junu Twayana
        </div>
      </div>
    </div>
  );
};

export default CoupleSection;
