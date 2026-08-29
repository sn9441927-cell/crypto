"use client";
import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "../Animations";

const Perks = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden" id="perks">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <FadeIn direction="up">
            <p className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Premium Features
            </p>
            <h2 className="text-white text-28 sm:text-36 md:text-44 lg:text-54 font-bold leading-tight">
              Be the first to use <br className="hidden sm:block" /> our Cryp<span className="text-primary">go</span> platform.
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {perksData.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative group p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 backdrop-blur-md h-full flex flex-col items-center text-center overflow-hidden"
                >
                  {/* Hover Background Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-primary/20 blur-[40px] sm:blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative mb-4 sm:mb-6 md:mb-8 p-4 sm:p-5 md:p-6 bg-primary/10 rounded-2xl sm:rounded-3xl group-hover:bg-primary/20 transition-colors">
                    <Image
                      src={`${getImagePrefix()}${item.icon}`}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-white text-20 sm:text-24 md:text-28 font-bold mb-3 sm:mb-4 relative z-10">
                    {item.title}
                  </h4>

                  <div
                    className="text-muted text-sm sm:text-base md:text-lg leading-relaxed relative z-10"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />

                  {/* Decorative Border Bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-secondary/10 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Perks;
