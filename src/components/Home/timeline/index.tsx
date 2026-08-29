"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";
import { FadeIn, StaggerContainer } from "../Animations";

const TimeLine = () => {
  // We'll map the 4 items from timelineData to specific positions
  // 0: Planning, 1: Refinement, 2: Prototype, 3: Support
  const steps = timelineData;

  return (
    <section className="relative overflow-hidden" id="development">
      {/* Background Sphere Glow (inspired by the image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full scale-150" />
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <FadeIn direction="up">
            <h2 className="text-white text-28 sm:text-36 md:text-44 lg:text-54 font-bold leading-tight">
              Live <span className="text-primary">Process</span> Statistics
            </h2>
            <p className="text-muted text-base sm:text-lg mt-3 sm:mt-4 px-2 sm:px-0">
              Our development workflow is clear, simple, and ready for all integrations.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Left Column - Planning */}
            <div className="lg:col-span-4 col-span-12 lg:h-full">
              <FadeIn direction="right" delay={0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full bg-darklight/40 border border-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative"
                >
                  <div className="relative z-10">
                    <span className="text-primary font-bold text-24 sm:text-28 md:text-30 mb-2 block">01</span>
                    <h3 className="text-white text-22 sm:text-24 md:text-28 font-bold mb-3 sm:mb-4">{steps[0]?.title}</h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">{steps[0]?.text}</p>
                  </div>
                  <div className="mt-8 sm:mt-10 md:mt-12 relative z-10 flex justify-center lg:justify-start">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-primary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 rotate-12 group-hover:rotate-0">
                      <Image
                        src={`${getImagePrefix()}${steps[0]?.icon}`}
                        alt="Planning Icon"
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(249,172,32,0.5)]"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/5 blur-3xl rounded-full" />
                </motion.div>
              </FadeIn>
            </div>

            {/* Middle Column - Refinement & Prototype */}
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-4 sm:gap-6">
              {/* Top Middle - Refinement */}
              <FadeIn direction="up" delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-darklight/40 border border-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 flex items-center gap-4 sm:gap-6 group overflow-hidden relative"
                >
                  <div className="flex-1 relative z-10">
                    <span className="text-secondary font-bold text-lg sm:text-xl mb-1 block">02</span>
                    <h3 className="text-white text-18 sm:text-20 md:text-21 font-bold mb-2">{steps[1]?.title}</h3>
                    <p className="text-muted text-xs sm:text-sm">{steps[1]?.text}</p>
                  </div>
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                    <Image
                      src={`${getImagePrefix()}${steps[1]?.icon}`}
                      alt="Refinement Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
                </motion.div>
              </FadeIn>

              {/* Bottom Middle - Prototype */}
              <FadeIn direction="up" delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-darklight/40 border border-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 flex items-center gap-4 sm:gap-6 group overflow-hidden relative"
                >
                  <div className="flex-1 relative z-10">
                    <span className="text-primary font-bold text-lg sm:text-xl mb-1 block">03</span>
                    <h3 className="text-white text-18 sm:text-20 md:text-21 font-bold mb-2">{steps[2]?.title}</h3>
                    <p className="text-muted text-xs sm:text-sm">{steps[2]?.text}</p>
                  </div>
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                    <Image
                      src={`${getImagePrefix()}${steps[2]?.icon}`}
                      alt="Prototype Icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </motion.div>
              </FadeIn>
            </div>

            {/* Right Column - Support */}
            <div className="lg:col-span-4 col-span-12 lg:h-full">
              <FadeIn direction="left" delay={0.4}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full bg-darklight/40 border border-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative"
                >
                  <div className="relative z-10 text-center lg:text-right">
                    <span className="text-secondary font-bold text-24 sm:text-28 md:text-30 mb-2 block">04</span>
                    <h3 className="text-white text-22 sm:text-24 md:text-28 font-bold mb-3 sm:mb-4">{steps[3]?.title}</h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">{steps[3]?.text}</p>
                  </div>
                  <div className="mt-8 sm:mt-10 md:mt-12 relative z-10 flex justify-center lg:justify-end">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-secondary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-500 -rotate-12 group-hover:rotate-0">
                      <Image
                        src={`${getImagePrefix()}${steps[3]?.icon}`}
                        alt="Support Icon"
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(197,160,33,0.5)]"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-secondary/5 blur-3xl rounded-full" />
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </StaggerContainer>

        {/* Mining Plan Style Card (Inspired by the Clear & Simple section) */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <FadeIn direction="up" delay={0.5}>
            <div className="bg-gradient-to-b from-darklight/60 to-black/80 border border-white/10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 overflow-hidden relative text-center lg:text-start">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div>
                  <h3 className="text-white text-24 sm:text-30 md:text-36 font-bold mb-3 sm:mb-4">
                    Our Development <span className="text-primary">Plan</span>
                  </h3>
                  <p className="text-muted text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                    We follow a transparent and counter-monitored approach to ensure your project exceeds expectations.
                  </p>
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {["Transparent Reporting", "Agile Execution", "Full Integration Support"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-white text-sm sm:text-base font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-darkmode font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-xl hover:shadow-[0_0_20px_rgba(249,172,32,0.4)] transition-all text-sm sm:text-base md:text-lg"
                  >
                    Start Your Project
                  </motion.button>
                </div>
                <div className="relative group">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-primary/5 rounded-full scale-125 sm:scale-150 group-hover:border-primary/20 transition-colors hidden lg:block"
                  />
                   <Image
                    src={`${getImagePrefix()}images/work/img-work-with-us.png`}
                    alt="Work showcase"
                    width={450}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-primary/10 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-secondary/5 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
