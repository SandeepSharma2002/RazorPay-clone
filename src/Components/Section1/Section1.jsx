import React from "react";
import section1 from "../../assets/section1.jpg"
import section1bottom from "../../assets/section1bottom.png"

export default function Section1() {
  return (
    <section className="relative w-full bg-deepBlue mx-auto px-8 items-center justify-center font-mullish mb-[230px]">
      <div className="flex max-w-[1080px] mx-auto flex-col lg:flex-row pt-20">
        <div className="flex flex-col lg:max-w-[400px]">
          <div className="text-white text-[40px] mb-4 font-mullish font-bold">Power your finance, grow your business</div>
          <div className="my-4 w-6 h-1 bg-greenLight"></div>
          <div className="my-5 font-mullish text-grayText text-[16px]">Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</div>
          <button className="flex w-fit mt-4 px-[18px] py-[14px] text-white bg-lightBlue300 text-lg font-bold hover:bg-lightBlue500 transition-all duration-200 rounded-sm">Sign Up Now</button>
        </div>
        <div>
          <img src={section1} alt="" width={"880px"} height={"520px"}/>
        </div>
      </div>
        <img src={section1bottom} alt="" className="absolute bg-white left-0 w-full pb-[110px]" />
    </section>
  );
}
