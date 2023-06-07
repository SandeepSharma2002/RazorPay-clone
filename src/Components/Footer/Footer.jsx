import React from "react";
import section1 from "../../assets/section1.jpg";
import section1bottom from "../../assets/section1bottom.png";

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="w-full mx-auto px-8 items-center justify-center font-mullish pt-[150px] -mt-60 -z-10"
      style={{ background: "linear-gradient(to right, #eef9fe, #edf7ff)" }}
    >
      <div className="flex max-w-[1080px] mx-auto  pt-20 gap-8">
        <div class="">
          <div class="max-w-[340px]">
            <img
              alt="Razorpay logo"
              src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg"
              loading="lazy"
              class=" h-6"
            />
            <p class=" text-[0.875rem] text-[#525a76] mt-3">
              Razorpay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </p>
            <p class=" text-[0.875rem] text-[#525a76] mt-3">
              RazorpayX supercharges your business banking experience, bringing
              effectiveness, efficiency, and excellence to all financial
              processes. With RazorpayX, businesses can get access to
              fully-functional current accounts, supercharge their payouts and
              automate payroll compliance.
            </p>
            <p class=" text-[0.875rem] text-[#525a76] mt-3">
              Manage your marketplace, automate bank transfers, collect
              recurring payments, share invoices with customers and avail
              working capital loans - all from a single platform. Fast forward
              your business with Razorpay.
            </p>
            <p class="  text-[0.875rem] text-[#525a76] mt-3">
              Disclaimer: The RazorpayX powered Current Account and VISA
              corporate credit card are provided by RBI licensed banks. Your
              RazorpayX powered account is provided by our partner bank, in
              accordance with RBI regulations. RazorpayX itself is not a bank
              and doesn't hold or claim to hold a banking license.
            </p>
            <div class="flex gap-4 mt-3">
              <a
                aria-label="PCI Compliant"
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="PCI Compliant"
                  src="https://razorpay.com/build/browser/static/pci-compliant.f0aea468.png"
                  loading="lazy"
                  class="block max-w-[92px]"
                  aria-hidden="true"
                />
              </a>
              <a
                aria-label="ISO Certified"
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="ISO Certified"
                  src="https://razorpay.com/build/browser/static/iso-certified.4fd701ec.jpg"
                  loading="lazy"
                  class=" "
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="font-mullish">
          <div class=" flex  flex-wrap gap-4">
            <div class="">
              <p class="   text-[1rem] text-[#525a76] mt-6 font-bold">
                BANKING PLUS
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                RazorpayX{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/current-accounts/"
              >
                Current Accounts{" "}
              </a>

              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/payouts/"
              >
                Payouts{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/payout-links/"
              >
                Payout Links{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/corporate-cards/"
              >
                Corporate Credit Card{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="https://x.razorpay.com/demo/"
              >
                View Live Demo{" "}
                <span class=" bg-[#08c972] text-white text-[0.75rem]  h-[1.25rem] rounded-sm font-bold p-1">
                  NEW
                </span>
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">LENDING</p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Razorpay Capital{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/capital/instant-settlements/"
              >
                Instant Settlements{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Line of Credit{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Working Capital Loans{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Marketplace Instant Settlements{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                BECOME A PARTNER
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Refer and Earn{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Onboarding APIs{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">MORE</p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Route{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Invoices{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Freelancer Payments{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                International{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Flash Checkout{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                UPI{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                ePOS{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Checkout Demo{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                RazorpayX Payroll{" "}
              </a>
            </div>
            <div class="">
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                ACCEPT PAYMENTS
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Payment Gateway{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Payment Pages{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Payment Links{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                QR Codes{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Subscriptions{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Smart Collect{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Optimizer{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                Developers
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Docs{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Integrations{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                API Reference{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                Resources
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Blog{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Customer Stories{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Events{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Chargeback Guide{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Settlement Guide{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                Solutions
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Education{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                E-commerce{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                SaaS{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                BFSI{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                FREE TOOLS
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                GST Calculator{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Online TDS Payment{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                GST Number Search{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                GST Search by PAN{" "}
                <span class=" bg-[#08c972] text-white text-[0.75rem]  h-[1.25rem] rounded-sm font-bold p-1">
                  NEW
                </span>
              </a>
            </div>
            <div class="">
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">COMPANY</p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                About Us{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Careers{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Terms of Use{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Privacy Policy{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Grievance Redressal{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Responsible Disclosure{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Partners{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                White papers{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Corporate Information{" "}
              </a>
              <p class=" text-[1rem] text-[#525a76] mt-6 font-bold">
                HELP &amp; SUPPORT
              </p>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Support{" "}
              </a>
              <a
                class="  hover:text-black text-lightBlue500 block cursor-pointer outline-2 outline-transparent ring-offset-lightBlue500 whitespace-nowrap transition-all duration-200"
                href="/"
              >
                Knowledge base{" "}
              </a>
              <p class="text-[16px] font-bold mt-6 text-[#525a76]">
                Find us online
              </p>
              <div class=" css-o7h288 flex items-center  mt-3 gap-1 ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="  hover:text-black text-lightBlue500 block css-1mpp6td"
                  href="/"
                >
                  <img
                    alt="Facebook logo"
                    src="https://razorpay.com/build/browser/static/facebook.c8412162.svg"
                    loading="lazy"
                    class=" "
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="  hover:text-black text-lightBlue500 block css-1mpp6td"
                  href="/"
                >
                  <img
                    alt="Twitter logo"
                    src="https://razorpay.com/build/browser/static/twitter.1da3bf4c.svg"
                    loading="lazy"
                    class=""
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="  hover:text-black text-lightBlue500 block css-1mpp6td"
                  href="/"
                >
                  <img
                    alt="Instagram logo"
                    src="https://razorpay.com/build/browser/static/instagram.136e6800.svg"
                    loading="lazy"
                    class=""
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="  hover:text-black text-lightBlue500 block css-1mpp6td"
                  href="/"
                >
                  <img
                    alt="Github logo"
                    src="https://razorpay.com/build/browser/static/github.cede60eb.svg"
                    loading="lazy"
                    class=""
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="  hover:text-black text-lightBlue500 block css-1mpp6td"
                  href="/"
                >
                  <img
                    alt="linkedin logo"
                    src="https://razorpay.com/build/browser/static/linkedin.f28970d6.svg"
                    loading="lazy"
                    class=""
                  />
                </a>
              </div>
              <div class="">
                <p class=" text-[16px] font-bold text-[#525a76] mt-6">
                  REGD. OFFICE ADDRESS
                </p>
                <p class=" text-[0.875rem] text-[#525a76] mt-3">
                  Razorpay Software Private Limited, <br />
                  1st Floor, SJR Cyber, <br />
                  22 Laskar Hosur Road, Adugodi, <br />
                  Bengaluru, 560030, <br />
                  Karnataka, India <br />
                  CIN: U72200KA2013PTC097389 <br />
                </p>
              </div>
              <div class="text-[0.875rem] text-[#525a76] mt-3">
                <p class=" ">© Razorpay 2023</p>
                <p class="">All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
