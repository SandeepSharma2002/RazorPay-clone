import React from "react";

export default function Card2({ data }) {
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4 z-10">
        <div className="text-#02042A text-[40px] font-semibold max-h-[300px] my-auto">
          New in the{<br/>}
          <span className="text-lightBlue font-semibold"> Razorpay {<br/>}</span>
          Product Suite
        </div>
      {data.map((data1) => {
        return (
          <a href="#" 
          style={{
            backgroundImage:`url('${data1.shape}')`,
            outline: "2px solid transparent",
            outlineOffset: "2px",
            backgroundPosition: "-2px -2px",
            backgroundRepeat: "no-repeat",
            transformOrigin: "center",
            boxShadow: "2px 4px 9px 1px hsla(0, 0%, 0%, 0.05)",
            maxWidth: "100%",
            display: "inline-block",
          }}
          className = "relative group p-8 max-h-[300px] bg-white cursor-pointer  hover:scale-[1.05] transition-all duration-200"
          >
            <img
              alt="NO img"
              src={data1.img}
              className="bg-lightBlue h-12 w-12 rounded-full mb-3"
            />
            <div className="">
              <h
                className="text-[22px] pt-4 font-bold font-mullish text-[#162F56]"
              >
                {data1.title}
              </h>
              <p className="py-3 text-[#818597] font-mullish text-[1rem]">
                <span className="">{data1.desc}</span>
              </p>
            </div>
            <div className="flex items-center my-2">
              <span className="text-lightBlue500 text-base group-hover:text-lightBlue300  font-[550]">
                Know More
              </span>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="h-[18px] w-[18px]  text-lightBlue"
              >
                <path
                  fill="currentColor"
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                ></path>
              </svg>
            </div>
          </a>
        );
      })}
    </div>
  );
}
