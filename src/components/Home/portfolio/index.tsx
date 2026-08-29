"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 40, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="lg:-ml-16 xl:-ml-32 order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <Image
              src= {`${getImagePrefix()}images/portfolio/img-portfolio.png`}
              alt="Crypto Portfolio"
              width={780}
              height={700}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-none h-auto"
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 40, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="order-1 lg:order-2"
          >
            <motion.p
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted text-base sm:text-lg md:text-xl lg:text-28 mb-3 sm:mb-4 text-center lg:text-start"
            >
              Cryptocurrency <span className="text-primary">Portfolio</span>
            </motion.p>
            <motion.h2
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white text-24 sm:text-30 md:text-36 lg:text-40 mb-3 sm:mb-4 font-medium text-center lg:text-start"
            >
              Create your crypto portfolio today with Cryp
              <span className="text-primary">Go</span>!
            </motion.h2>
            <motion.p
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted text-opacity-60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center lg:text-start"
            >
              Coinbase has a variety of features that make it the best
              <br className="md:block hidden" /> place to start trading.
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full sm:w-[90%] lg:w-[80%] mx-auto lg:mx-0">
                <tbody>
                  {portfolioData.map((item, index) => (
                    <motion.tr
                      key={index}
                      whileInView={{ x: 0, opacity: 1 }}
                      initial={{ x: -20, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="border-b border-dark_border border-opacity-10"
                    >
                      <td className="py-3 sm:py-4 md:py-5">
                        <div className="bg-primary p-3 sm:p-4 rounded-full bg-opacity-20 w-fit">
                          <Image
                            src= {`${getImagePrefix()}${item.image}`}
                            alt={item.title}
                            width={35}
                            height={35}
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                          />
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 md:py-5">
                        <h4 className="text-muted text-base sm:text-lg md:text-xl lg:text-22 xl:text-28 ml-3 sm:ml-4 md:ml-5">
                          {item.title}
                        </h4>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
