import React from "react";
import Card1 from "../Reusable/Card1";
import { data } from "./Data1";

export default function Section3() {
  return (
    <section className="relative w-full px-8 items-center justify-center font-mullish mb-[64px]">
      <div className="max-w-[1080px] mx-auto">
        <Card1 data={data} />
        <div className="w-full p-4 mt-5 mb-[42px] rounded-md  font-mullish" style={{background: "linear-gradient(180deg, rgba(74, 144, 245, 0.21) -34.7%, rgba(125, 186, 244, 0.063) 100%, rgba(125, 186, 244, 0.1295) 100%)",     border: "1px solid rgba(42, 134, 243, 0.32)"}}>
          <h5 className="inline-block font-semibold font-mullish text-[14px]">
            Not sure which product to choose?
          </h5>
          <p className="inline-block text-[#5A6682] text-[14px] pl-[4px]">
            Answer a few questions and we’ll help you out
          </p>
          <a
            className=""
            href="/"
          >
            <span className="font-mullish text-lightBlue300 text-[14px] font-medium inline-block pl-[4px]"> Find me a product
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-5 h-5 pl-[1px] inline"
            >
              <path
                fill="rgb(75 148 237)"
                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
              ></path>
            </svg></span>
          </a>
        </div>
      </div>
    </section>
  );
}
