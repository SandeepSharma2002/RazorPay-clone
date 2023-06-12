import React from "react";
import Rlogo from "../../assets/razorpay-x-logo.5cf8015e.svg";
import Sec from "../../assets/x-graphic.png";
import x from "../../assets/x.b892a7d0.svg";
import bg from "../../assets/x-dark-bg.svg";
import { data } from "./s4Data1";
import { data1 } from "./s4Data2";
import Card1 from "../Reusable/Card1";

export default function Section4() {
  return (
    <section
      style={{
        background: `url( ${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "-900px",
        backgroundSize: "cover",
        overflow: "hidden",
        zIndex: 0,
      }}
      className=" relative bg-cover w-full px-8 items-center justify-center font-mullish pt-40"
    >
      <div className="flex max-w-[1080px] mx-auto flex-col gap-20 pb-[500px]">
        <div className="w-full items-center flex flex-col">
          <div className="text-2xl text-white font-mullish font-bold text-#02042A">
            Explore RazorpayX powered Business Banking
          </div>
          <div className="my-4 w-6 h-1 bg-greenLight"></div>
        </div>
        <div className="px-10 py-12 flex flex-row relative border rounded-md pb-14">
          <div className="flex flex-col gap-8 max-w-[510px]">
            <div className="text-#02042A text-[28px] text-white font-semibold font-mullish">
              Manage your company’s finances and supercharge your business
              banking with <img src={Rlogo} alt="" className="inline-block" />
            </div>
            <ul className="flex flex-col gap-2 font-mullish text-white">
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-greenLight"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Business Banking for disruptors</span>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-greenLight"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>All standard banking features</span>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-greenLight"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Tech capabilities like API Banking</span>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-greenLight"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Insightful Reports</span>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-greenLight"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Multiple Payout flow options</span>
              </li>
            </ul>
            <div className="flex gap-3 flex-col-reverse md:flex-row">
              <button className="flex px-5 py-3 w-fit text-white bg-lightBlue300 font-mullish rounded-sm text-4 font-bold hover:bg-lightBlue500 transition-all duration-200 items-center gap-3 ">
                <img alt="x" src={x} loading="lazy" class="" />
                <span>Sign Up Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 align-middle "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button className="flex md:px-5 py-3 text-lightBlue300 rounded-sm text-lg font-bold hover:text-lightBlue500 transition-all duration-200 items-center gap-1">
                <span> Know More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 font-bold align-middle"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <img
            src={Sec}
            alt="hello"
            className="absolute bottom-0 right-0 hidden md:max-w-[400px] lg:max-w-[600px] lg:block md:block"
          />
        </div>
        <div className="pb-10">
          <Card1 data={data} />
        </div>
        <div className="flex flex-col">
          <div className=" relative flex items-center pb-12">
            <div
              style={{
                background: "linear-gradient(180deg, #FDD835 0%, #F8970D 100%)",
                clipPath: "polygon(50% 0%, 100% 0%, 53% 100%, 0% 100%)",
              }}
              className=" absolute hidden lg:block lg:left-0 lg:top-2 w-7 h-8 mr-2"
            ></div>
            <div className="flex justify-between w-full flex-col lg:flex-row gap-4 lg:gap-0">
              <p className="text-[36px] text-white font-mullish font-bold lg:pl-8 ">
                Get working capital for your business needs
              </p>
              <div className="mb-3 w-6 h-1 lg:hidden" style={{ background: "linear-gradient(180deg, #FDD835 0%, #F8970D 100%)"}}></div>
              <button className="flex pl-[6px] pr-[16px] w-fit py-0 text-white bg-lightBlue300 font-mullish rounded-sm text-4 font-bold hover:bg-lightBlue500 transition-all duration-200 items-center gap-2">
                <img alt="x" src={x} loading="lazy" class="" />
                <span>Sign Up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 align-middle "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Card1 data={data1} />
        </div>
      </div>
    </section>
  );
}
