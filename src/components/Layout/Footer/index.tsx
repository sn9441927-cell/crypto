import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-10 sm:pt-12 md:pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-16 xl:gap-20 md:gap-8 sm:gap-10 gap-8 pb-10 sm:pb-12 md:pb-16">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
            <Logo />
            <div className="flex gap-4 sm:gap-6 items-center mt-6 sm:mt-8">
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6 transition-colors"
                  style={{ color: '#f9ac20' }}
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6 transition-colors"
                  style={{ color: '#f9ac20' }}
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6 transition-colors"
                  style={{ color: '#f9ac20' }}
                />
              </Link>
            </div>
            <h3 className="text-white text-base sm:text-lg md:text-20 lg:text-24 font-medium mt-8 sm:mt-12 md:mt-16 lg:mt-20">
              2025 Copyright | Crypgo
            </h3>
          </div>
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-6 col-span-12">
            <h4 className="text-white mb-3 sm:mb-4 font-medium text-lg sm:text-20 md:text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-2 sm:pb-3 md:pb-4">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-sm sm:text-base md:text-17 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-6 col-span-12">
            <h4 className="text-white mb-3 sm:mb-4 font-medium text-lg sm:text-20 md:text-24">Information</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className="pb-2 sm:pb-3 md:pb-4">
                  <Link
                    href={item.herf}
                    className="text-white hover:text-primary text-sm sm:text-base md:text-17 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
            <h3 className="text-white text-lg sm:text-20 md:text-24 font-medium">Subscribe</h3>
            <p className="text-muted text-opacity-60 text-sm sm:text-base md:text-18 mt-3 sm:mt-4 md:mt-5">
              Subscribe to get the latest
              <br className="hidden sm:block" /> news from us
            </p>
            <div className="relative max-w-full lg:max-w-[80%] mt-4 sm:mt-6">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter Email"
                className="bg-transparent border border-dark_border border-opacity-60 py-3 sm:py-4 text-white rounded-lg w-full px-4 sm:px-6 text-sm sm:text-base pr-10 sm:pr-12"
              />
              <Icon
                icon="tabler:send"
                width="20"
                height="20"
                className="sm:w-6 sm:h-6 absolute right-3 sm:right-4 md:right-7 top-1/2 -translate-y-1/2 cursor-pointer"
                style={{ color: '#f9ac20' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
