import React from "react";
import RazorPayLogo from "../../assets/razorpay-icon.svg";

export default function NavBar() {
  return (
    <nav className="bg-deepBlue w-full px-8">
      <div className="mx-auto  flex items-center justify-between gap-7 font-mullish max-w-[1080px]">
        <a href="/" className="py-7 cursor-pointer">
          <img src={RazorPayLogo} width={"125px"} height={"30px"} alt="" />
        </a>
        <ul className="hidden lg:flex items-center justify-between text-white  font-mullish space-x-6">
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Payments
            </a>
            <div className=" absolute w-full h-1  bottom-3  hidden group-hover:block transition-all duration-20 bg-lightBlue"></div>
          </li>
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Banking+
            </a>
            <div className=" absolute w-full h-1  bottom-3  hidden group-hover:block transition-all duration-20 bg-lightBlue"></div>
          </li>
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Line of Credit
            </a>
            {/* <div className=' absolute w-full h-1  bottom-0  hidden group-hover:block transition-all duration-20 bg-lightBlue'></div> */}
          </li>
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Payroll
            </a>
            {/* <div className=' absolute w-full h-1  bottom-0  hidden group-hover:block transition-all duration-20 bg-lightBlue'></div> */}
          </li>
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Resources
            </a>
            <div className=" absolute w-full h-1  bottom-3  hidden group-hover:block transition-all duration-20 bg-lightBlue"></div>
          </li>
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Support
            </a>
            <div className=" absolute w-full h-1  bottom-3  hidden group-hover:block transition-all duration-200 bg-lightBlue"></div>
          </li>
          <li className="group transition-all duration-200 py-7 relative ">
            <a
              href="#"
              className="py-7 group-hover:text-lightBlue"
              target="_blank"
            >
              Pricing
            </a>
            <div className=" absolute w-full h-1  bottom-3  hidden group-hover:block transition-all duration-200 bg-lightBlue"></div>
          </li>
        </ul>
        <div className="flex py-6 space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            className="hidden lg:block"
          >
            <defs>
              <filter
                id="a"
                width="129.2%"
                height="143.8%"
                x="-14.6%"
                y="-15.6%"
                filterUnits="objectBoundingBox"
              >
                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="1"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  result="shadowMatrixOuter1"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                />
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g fill="none" filter="url(#a)" transform="translate(2 1)">
              <path
                fill="#FAB446"
                d="M23.95 5.34H0V.44C0 .2.18 0 .41 0h23.13c.23 0 .41.2.41.42v4.9z"
              />
              <path
                fill="#73AF00"
                d="M23.54 15.99H.41a.42.42 0 0 1-.41-.42v-4.9h23.95v4.9c0 .23-.18.42-.41.42z"
              />
              <path fill="#F5F5F5" d="M0 5.34h23.95v5.32H0z" />
              <g fill="#41479B" transform="translate(9.73 5.71)">
                <path d="M2.25 4.55A2.24 2.24 0 0 1 .03 2.29c0-1.25 1-2.26 2.22-2.26a2.24 2.24 0 0 1 2.22 2.26c0 1.24-1 2.26-2.22 2.26zm0-4.1c-1 0-1.81.82-1.81 1.84a1.81 1.81 0 1 0 3.62.01c0-1.02-.8-1.84-1.8-1.84z" />
                <ellipse cx="2.25" cy="2.29" rx="1" ry="1" />
                <path d="M2.22 2.31l-.5-.41L.8.86.85.81l1.02.94.4.5zm0 0l.4.51 1.02.94.06-.05-.93-1.04-.5-.41z" />
                <path d="M2.22 2.26l.4-.5L3.65.8l.06.05-.93 1.04-.5.41zm0 0l-.5.41L.8 3.71l.05.05 1.02-.94.4-.5z" />
                <path d="M2.26 2.32l-.57.31-1.29.48-.03-.08 1.25-.6.61-.18z" />
                <path d="M2.26 2.32l.62-.19 1.24-.6-.03-.06-1.3.47-.56.31z" />
                <path d="M2.21 2.3l-.3-.58L1.44.41l.07-.03.59 1.26.18.63z" />
                <path d="M2.21 2.3l.19.63.58 1.26.07-.03-.47-1.31-.3-.58z" />
                <path d="M2.23 2.32l-.61-.19-1.25-.6.03-.06 1.3.47.56.31z" />
                <path d="M2.23 2.32l.57.31 1.3.48.02-.08-1.24-.6-.62-.18z" />
                <path d="M2.21 2.27l.19-.63.58-1.26.07.03-.47 1.31-.3.58zm0 0l-.3.58-.47 1.31.07.03.59-1.26.18-.63z" />
              </g>
              <ellipse cx="11.98" cy="8" fill="#F5F5F5" rx="1" ry="1" />
            </g>
          </svg>
          <button className="px-5 py-3 bg-tranparent text-white border border-lightBlue rounded-sm text-sm font-bold">
            Log In
          </button>
          <button className="px-5 py-3 bg-white text-lightBlue300 rounded-sm text-sm font-bold hover:text-lightBlue500 transition-all duration-200 hidden lg:flex">
            <span>Sign Up</span>
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
          <button
            id="__hydration_util__nav-ham-button"
            aria-expanded="false"
            aria-label="Open Nav Menu"
            class="css-d4fer1 inline-block lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              class="chakra-icon css-cf6w2p inline-block w-[2em] h-[2em]"
              style={{transform: "rotate(-180deg) translateZ(0px)"}}
            >
              <path
                fill="#ffffff"
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
     </nav>
  );
}
