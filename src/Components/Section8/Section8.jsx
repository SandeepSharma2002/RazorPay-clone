import React from "react";
import Dots from "../../assets/dots-with-cut.bde9e78f.png";
import Card3 from "../Reusable/Card3";

export default function Section8() {
  return (
    <section className="relative w-full px-8 flex justify-center items-center font-mullish pt-10">
      <img src={Dots} alt="" className="absolute  top-20 left-40 -z-10" />
      <div className="flex flex-col max-w-[1080px] py-8  px-8 items-center mx-auto">
        <div className="w-full items-center flex flex-col pb-4">
          <div className="text-2xl font-mullish font-bold text-#02042A text-center">
            An Experience <br/> People Love to Talk About
          </div>
          <div className="my-4 w-6 h-1 bg-greenLight"></div>
          </div>
          <Card3/>
          </div>
    </section>
  );
}
