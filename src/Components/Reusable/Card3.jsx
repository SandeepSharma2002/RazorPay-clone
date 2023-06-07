import React from "react";
import quote from "../../assets/quotes-icon.40f48901.svg";

export default function Section8() {
  return (
        <div className="flex gap-20 h-[400px] pl-10">
          <div class="flex items-center">
            <img
              alt="Subham Kumar"
              src="https://razorpay.com/build/browser/static/subham.042b5094.png"
              loading="lazy"
              class="w-[320px] h-[320px]"
            />
          </div>
          <div class="flex justify-center flex-col relative py-8">
            <div class="relative">
              <img
                src={quote}
                alt=""
                className="absolute top-0 left-0  h-10 w-9"
              />
              <p class="hidden">
                Creating No Cost EMI offers through the Razorpay dashboard was
                surprisingly easy and it has proved to be an important driver in
                making our subscriptions affordable to a wider audience. We saw
                ~3x increase of the EMI contribution in the overall sales,
                thereby unlocking a specific affordability sensitive segment for
                us.
              </p>
            </div>
            <div class="css-4jqceq">
              <p class="text-[30px] font-mullish pt-8 font-extralight">
                Acquire Customers From New Customer Segments
              </p>
              <button class="text-[14px] italic underline">Learn More</button>
            </div>
            <div class="css-ugpvl3">
              <h3 class="text-[24px] font-extrabold">Subham Kumar</h3>
              <p class="py-1 text-[16px]">Product Manager</p>
              <img
                height="40px"
                alt="Unacademy"
                src="https://razorpay.com/build/browser/static/unacademy.1c618f03.svg"
                loading="lazy"
                class=""
              />
            </div>
          </div>
        </div>
  );
}
