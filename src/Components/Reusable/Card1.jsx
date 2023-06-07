import React from "react";
import bluewave from "../../assets/wave-blue.3362585e.svg"

export default function Card1({data}) {
    console.log(data); 
  return (
    <div className="grid grid-cols-3 gap-4">
        {
            data.map((data1) =>{
                return(
                <a className="" href="#" class = "relative group hover:scale-[1.05] transition-all duration-200">
                <img
                  alt="NO img"
                  src={data1.img}
                  className="bg-lightBlue hover:bg-lightBlue300 h-12 w-12 absolute top-[0.625rem] right-[0.625rem] -z-20 rounded-full"
                />
                <div>
                  <svg
                    viewBox="0 0 370.66668701171875 225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="stroke-1 h-full w-full absolute -z-10 transition-all duration-200 "
                    style={{ strokeOpacity: `${data1.opacity}`, stroke: `${data1.color}` }}
                  >
                    <path
                      d="m 0 6 
                  a 6 6 0 0 1 6 -6 
                  h 271.66668701171875 
                  a 16 16 0 0 1 11 5 
                  l 77 77 
                  a 16 16 0 0 1 5 11 
                  v 126 
                  a 6 6 0 0 1 -6 6 
                  h -358.66668701171875 
                  a 6 6 0 0 1 -6 -6 
                  z"
                      fill={data1.bg}
                    ></path>
                  </svg>
                </div>
                <div className="py-6  pr-12 pl-5">
                  <h3 className="text-[22px] font-bold font-mullish text-[#162F56]" style={{color: `${data1.textcolor}`}}>{data1.title}</h3>
                  <p className="mt-6 text-[#818597] font-mullish text-[1rem]">
                    <span className="">
                     {data1.desc}
                    </span>
                  </p>
                </div>
                <div className="flex items-center px-6 my-2">
                  <span className="text-lightBlue500 text-base group-hover:text-lightBlue300  font-[550]">Know More</span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="h-[18px] w-[18px]  text-lightBlue "
                  >
                    <path
                      fill="currentColor"
                      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                    ></path>
                  </svg>
                </div>
                <img src={bluewave} alt="" className="w-20 h-[3.5rem] absolute bottom-4 right-0 opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </a>
             ) })
        }
      
    </div>
  );
}
