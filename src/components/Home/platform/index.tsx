"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "../Animations";

const Platform = () => {
  return (
    <section className="relative z-1 overflow-hidden pt-12 sm:pt-16 md:pt-20" id="platform">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <FadeIn direction="up">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl blur opacity-25"></div>

            <div className="relative bg-darklight/50 backdrop-blur-xl px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-14 rounded-t-2xl sm:rounded-t-3xl border border-white/10 grid grid-cols-12 items-center gap-6 sm:gap-8 overflow-hidden">
              <div className="lg:col-span-8 col-span-12 text-center lg:text-start">
                <h2 className="text-white text-24 sm:text-30 md:text-40 lg:text-54 font-bold mb-4 sm:mb-6 leading-tight">
                  Powered by the <br className="hidden sm:block" />
                  Cryp<span className="text-primary">go</span> Platform
                </h2>
                <p className="text-muted text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                  Our products empower people to have safer and more
                  trustworthy experiences in the decentralized world.
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="flex lg:justify-end mt-6 sm:mt-8 lg:mt-0 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#"
                      className="text-darkmode bg-primary border border-primary py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-xl text-base sm:text-lg md:text-xl font-bold hover:shadow-[0_0_20px_rgba(249,172,32,0.4)] transition-all block w-full sm:w-auto text-center"
                    >
                      Get Started Now
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/5 blur-[40px] sm:blur-[60px] md:blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 translate-x-1/2 translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-secondary/5 blur-[40px] sm:blur-[60px] md:blur-[80px] rounded-full" />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-1/2 -left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] rounded-full" />
      </div>
    </section>
  );
};

export default Platform;
