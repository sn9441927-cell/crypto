"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";
import { FadeIn, StaggerContainer, Floating } from "../Animations";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
    }
  }, [isBuying, isSelling]);

  return (
    <section
      className="relative min-h-screen flex items-center md:pt-52 pt-24 pb-16 md:pb-28 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">
        <StaggerContainer>
          <div className="grid grid-cols-12 items-center gap-6 md:gap-8">
            <div className="lg:col-span-6 col-span-12">
              <FadeIn direction="right" delay={0.2}>
                <div className="flex mt-5 justify-center lg:justify-start items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8 backdrop-blur-sm w-full lg:w-fit">
                  <Image
                    src={`${getImagePrefix()}images/icons/icon-bag.svg`}
                    alt="icon"
                    width={20}
                    height={20}
                    className="sm:w-6 sm:h-6"
                  />
                  <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
                    Next-Gen Crypto Trading
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <h1 className="font-bold text-40 sm:text-44 md:text-56 lg:text-70 xl:text-86 lg:text-start text-center text-white mb-4 sm:mb-6 leading-tight">
                  Buy & Sell <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient-x">Crypto</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <p className="text-muted text-base sm:text-lg md:text-xl lg:text-start text-center mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                  Join millions of users worldwide who trust Crypgo for their digital asset management. Experience speed, security, and elegance.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="flex flex-wrap items-center lg:justify-start justify-center gap-3 sm:gap-4 md:gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary border border-primary rounded-xl text-base sm:text-lg md:text-xl font-bold hover:shadow-[0_0_20px_rgba(249,172,32,0.4)] transition-all text-darkmode py-3 sm:py-4 px-6 sm:px-8 md:px-10 w-full sm:w-auto"
                    onClick={() => setIsBuyingOpen(true)}
                  >
                    Buy Crypto
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border border-white/20 rounded-xl text-base sm:text-lg md:text-xl font-bold hover:border-primary hover:text-primary transition-all text-white py-3 sm:py-4 px-6 sm:px-8 md:px-10 backdrop-blur-sm w-full sm:w-auto"
                    onClick={() => setIsSellingOpen(true)}
                  >
                    Sell Crypto
                  </motion.button>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 col-span-12 lg:block relative mt-8 lg:mt-0">
              <FadeIn direction="left" delay={0.5}>
                <Floating>
                  <div className="relative z-20 flex justify-center lg:justify-end">
                    <Image
                      src={`${getImagePrefix()}images/cr6.jpg-Photoroom.png`}
                      alt="Banner"
                      width={1200}
                      height={1200}
                      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-none h-auto drop-shadow-[0_0_40px_rgba(249,172,32,0.2)]"
                    />
                  </div>
                </Floating>

                {/* Orbital Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-primary/10 rounded-full scale-110 sm:scale-125 hidden lg:block"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-secondary/5 rounded-full scale-125 sm:scale-150 hidden lg:block"
                />
              </FadeIn>
            </div>
          </div>
        </StaggerContainer>

        <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40">
          <FadeIn direction="up" delay={0.8}>
            <CardSlider />
          </FadeIn>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/20 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-secondary/10 blur-[50px] sm:blur-[70px] md:blur-[80px] lg:blur-[100px] rounded-full" />
      </div>

      <AnimatePresence>
        {isBuying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              ref={BuyRef}
              className="relative w-full max-w-md overflow-hidden rounded-3xl p-6 sm:p-8 bg-[#111] border border-white/10 mx-4 sm:mx-0"
            >
              <button
                onClick={() => setIsBuyingOpen(false)}
                className="absolute top-6 right-6 transition-colors"
              >
                <Icon icon="tabler:x" className="text-24" style={{ color: '#f9ac20' }} />
              </button>
              <BuyCrypto />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSelling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              ref={SellRef}
              className="relative w-full max-w-md overflow-hidden rounded-3xl p-6 sm:p-8 bg-[#111] border border-white/10 mx-4 sm:mx-0"
            >
              <button
                onClick={() => setIsSellingOpen(false)}
                className="absolute top-6 right-6 transition-colors"
              >
                <Icon icon="tabler:x" className="text-24" style={{ color: '#f9ac20' }} />
              </button>
              <SellCrypto />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
