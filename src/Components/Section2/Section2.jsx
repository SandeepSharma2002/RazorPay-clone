import React from "react";
import paymentsuite from "../../assets/payment-suite.c8ef898b.png";
import Dots from "../../assets/dots-with-cut.bde9e78f.png";

export default function Section2() {
  return (
    <section className="relative w-full px-8 items-center justify-center font-mullish mb-[64px]">
        <img src={Dots} alt="" className="absolute  -top-36 left-40 -z-10 hidden md:block" />
        <img src={Dots} alt="" className="absolute  top-12 right-0 rotate-180 -z-10 hidden md:block" />
      <div className="flex max-w-[1080px] mx-auto flex-col gap-20">
        <div className="w-full items-center flex flex-col">
          <div className="text-2xl font-mullish font-bold text-#02042A hidden md:block">
            Accept Payments with Razorpay Payment Suite
          </div>
          <div className="text-2xl font-mullish font-bold text-#02042A md:hidden">
            Explore Razorpay Payment Suite
          </div>
          <div className="my-4 w-6 h-1 bg-greenLight"></div>
        </div>
        <div className="px-10 py-12 bg-white flex flex-row relative border rounded-md pb-14">
          <div className="flex flex-col gap-8 max-w-[510px]">
            <div className="text-#02042A text-[28px] font-semibold">
              Supercharge your business with the all‑powerful{" "}
              <span className="text-lightBlue font-semibold">Payment Gateway</span>
            </div>
            <ul className="flex flex-col gap-2">
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
                <span>100+ Payment Methods</span>
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
                <span>Industry Leading Success Rate</span>
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
                <span>Superior Checkout Experience</span>
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
                <span>Easy to Integrate</span>
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
                <span>Instant Settlements from day 1</span>
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
                <span>In-depth Reporting and Insights</span>
              </li>
            </ul>
            <div className="flex gap-3 flex-col-reverse md:flex-row lg:flex-row">
              <button className="flex px-5 py-3 text-white bg-lightBlue300 rounded-sm text-lg font-bold hover:bg-lightBlue500 transition-all duration-200 items-center gap-3 justify-center">
                <span>Sign Up Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4 align-middle sm: "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button className="flex py-3 bg-white text-lightBlue300 rounded-sm text-lg font-bold hover:text-lightBlue500 transition-all duration-200 items-center gap-1 w-fit md:px-4 lg:px-4">
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
          <img src={paymentsuite} alt="" className="absolute bottom-0 right-0 hidden md:max-w-[400px] lg:max-w-[600px] lg:block md:block" />
        </div>
      </div>
    </section>
  );
}
