import React from "react";
import merchants from "../../assets/merchants.png";

export default function Section7() {
  return (
    <section className="w-full bg-[#f5f8fe] mx-auto px-8 items-center justify-center font-mullish pt-48 -mt-[200px] -z-10">
      <div className="flex max-w-[1080px] mx-auto justify-between items-center ">
        <div className="flex flex-col max-w-[450px]">
          <div className="text-black text-[24px] mb-2 font-mullish font-bold">
            Join the 50,00,000 businesses using Razorpay
          </div>
          <div className="mb-3 w-6 h-1 bg-greenLight"></div>
          <div className="py-3 font-mullish text-grayText text-[16px]">
            We make it easier for you to focus on building great products while
            we work on simplifying your payments. Become one of us by joining
            thousands of our happy users and simplify the online payment
            experience for your customers.
          </div>
          <div className="py-3 font-mullish text-grayText text-[16px]">
            Focus on your business while we handle the complexities of payments
            for you.{" "}
          </div>
          <button className="flex px-5 py-3 w-fit text-white bg-lightBlue300 rounded-md text-sm font-bold hover:bg-lightBlue500 transition-all duration-200 z-50 cursor-pointer">
            <span>Get Started</span> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-4 h-4 align-middle pl-1 pt-[3px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="w-[450px] h-[500px] relative overflow-y-hidden" >
            <div className="absolute w-full h-40 top-0 z-20" style={{ background:"linear-gradient(180deg, #f4f8ff, #fff0)"}}></div>
          <img src={merchants} alt="" className=" absolute h-auto object-cover moveImage delay-0  animate-moveimg"/>
          <div className="absolute w-full h-40 bottom-0 z-20" style={{ background:"linear-gradient(360deg, #f4f8ff, #fff0)"}}></div>
        </div>
      </div>
    </section>
  );
}
