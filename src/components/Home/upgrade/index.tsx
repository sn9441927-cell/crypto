"use client";
import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "../Animations";

const Upgrade = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden" id="upgrade">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <StaggerContainer>
            <FadeIn direction="right">
              <p className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Scalability
              </p>
              <h2 className="text-white text-28 sm:text-36 md:text-44 lg:text-54 font-bold leading-tight mb-4 sm:mb-6">
                Upgrade Your <br className="hidden sm:block" />
                <span className="text-secondary">Storage</span> Layer
              </h2>
              <p className="text-muted text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-lg">
                Get faster, safer, more affordable cloud object storage with no
                central point of failure. Modernize your infrastructure today.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {upgradeData.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex items-center gap-3 sm:gap-4 group">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-darkmode transition-colors shrink-0">
                        <Icon
                          icon="la:check-circle-solid"
                          width="20"
                          height="20"
                          className="sm:w-6 sm:h-6 group-hover:text-white"
                          style={{ color: '#f9ac20' }}
                        />
                      </div>
                      <h4 className="text-base sm:text-lg text-white font-medium">
                        {item.title}
                      </h4>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </StaggerContainer>

          <FadeIn direction="left">
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-secondary/10 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full -z-1" />
              <motion.div
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center lg:justify-end"
              >
                <Image
                  src={`${getImagePrefix()}images/upgrade/img-upgrade.png`}
                  alt="image"
                  width={625}
                  height={580}
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-none h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
