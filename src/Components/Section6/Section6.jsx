import React from "react";
import bg from "../../assets/features-bg.61935438.svg";
import {data} from "./Data"

export default function Section6() {
  return (
    <section
      style={{
        background: `url( ${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 0,
      }}
      className="relative w-full pt-48 mx-auto px-8 items-center justify-center font-mullish"
    >
      <div className="flex flex-col max-w-[1080px] mx-auto pb-40">
        <div className="w-full items-center flex flex-col">
          <div className="text-[1.5rem] font-mullish font-bold text-white">
            Features
          </div>
          <div className="my-3 w-6 h-1 bg-greenLight"></div>
          <div className="mx-auto max-w-[450px] text-center my-3 text-white">
            Empower your business with all the right tools to accept online
            payments and provide the best customer experience
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 pt-4">
            {
        data.map((data) =>{
                return(
          <div className="flex flex-col gap-3 px-4">
              <img
                width="44"
                height="44"
                alt=""
                src={data.img}
                loading="lazy"
                class="chakra-image css-0"
              />
              <h3 class="text-white text-[18px] font-semibold font-mullish">{data.title}</h3>
              <p class="text-white font-mullish">
               {data.desc}
              </p>
          </div>)
          })
        }
        </div>

      </div>
    </section>
  );
}
