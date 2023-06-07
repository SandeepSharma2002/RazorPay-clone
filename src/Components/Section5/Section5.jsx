import React from "react";
import Card2 from "../Reusable/Card2";
import { data } from "./S5Data";
import Dots from "../../assets/dots-with-cut.bde9e78f.png";

export default function Section5() {
  return (
    <section className="relative w-full px-8 items-center justify-center font-mullish">
      <img src={Dots} alt="" className="absolute  -top-24 left-[400px] -z-10" />
        <img src={Dots} alt="" className="absolute  -top-20 right-16 -z-10" />
      <div className="max-w-[1080px] mx-auto">
        <Card2 data={data} />
      </div>
    </section>
  );
}
