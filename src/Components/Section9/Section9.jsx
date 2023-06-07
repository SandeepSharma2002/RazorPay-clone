import React from "react";
import Sec from "../../assets/footer-signup.6bf7413f.svg";
import bg from "../../assets/footer-head-bg.svg";

export default function Section9() {
  return (
    <section
      style={{
        background: `url( ${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className=" relative bg-cover flex w-full h-full px-8 items-center justify-center font-mullish py-20"
    >
      <div className="flex flex-row w-[1080px]">
        <div className="flex flex-col flex-1">
          <div className="text-black text-[24px] mt-4 font-mullish font-bold">
            Supercharge your business with Razorpay
          </div>
          <div className="mt-2 mb-3  w-6 h-1 bg-greenLight"></div>
          <div className="mt-2 font-mullish text-white text-[16px]">
            Sign up now to experience the future of payments and offer your
            customers the best checkout experience.
          </div>
          <ul className="flex flex-row flex-wrap gap-2 mt-4 font-mullish text-white">
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
              <span>Quick onboarding</span>
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
              <span>Access to entire product suite</span>
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
              <span>API access</span>
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
              <span>24x7 support</span>
            </li>
          </ul>
          <div className="flex gap-3">
            <button className="flex px-5 py-3 mt-4 bg-white text-lightBlue300 font-mullish rounded-sm text-4 font-bold hover:text-lightBlue500 transition-all duration-200 items-center gap-3">
              {/* <img alt="x" src={x} loading="lazy" class="" /> */}
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
          </div>
        </div>
        <img src={Sec} alt="hello" className="w-[240px] h-[282px] mt-4" />
      </div>
    </section>
  );
}
